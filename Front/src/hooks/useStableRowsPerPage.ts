import { useCallback, useLayoutEffect, useRef, useState } from 'react';
import type { RefObject } from 'react';

type UseStableRowsPerPageOptions<TElement extends HTMLElement> = {
  defaultRowsPerPage: number;
  headerMeasurementRef?: RefObject<HTMLElement | null>;
  headerHeightPx: number;
  heightPaddingPx?: number;
  maxRowsPerPage?: number;
  minRowsPerPage: number;
  rowMeasurementRef?: RefObject<HTMLElement | null>;
  rowSafetyBufferPx?: number;
  rowHeightPx: number;
  viewportRef: RefObject<TElement | null>;
};

export function useStableRowsPerPage<TElement extends HTMLElement>({
  defaultRowsPerPage,
  headerMeasurementRef,
  headerHeightPx,
  heightPaddingPx = 0,
  maxRowsPerPage,
  minRowsPerPage,
  rowMeasurementRef,
  rowSafetyBufferPx,
  rowHeightPx,
  viewportRef,
}: UseStableRowsPerPageOptions<TElement>) {
  const [rowsPerPage, setRowsPerPage] = useState(defaultRowsPerPage);
  const nonFittingRowsLimitRef = useRef<number | null>(null);
  const lastAvailableHeightRef = useRef<number | null>(null);
  const lastMaxRowsPerPageRef = useRef<number | undefined>(maxRowsPerPage);

  const updateRowsPerPage = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport) {
      return;
    }

    const measuredHeaderHeight =
      headerMeasurementRef?.current?.getBoundingClientRect().height ?? 0;
    const effectiveHeaderHeight =
      measuredHeaderHeight > 0 ? measuredHeaderHeight : headerHeightPx;
    const availableHeight = Math.floor(
      viewport.getBoundingClientRect().height -
        effectiveHeaderHeight -
        heightPaddingPx -
        (rowSafetyBufferPx ?? 8),
    );
    const previousAvailableHeight = lastAvailableHeightRef.current;

    if (
      previousAvailableHeight === null ||
      Math.abs(previousAvailableHeight - availableHeight) > 2 ||
      lastMaxRowsPerPageRef.current !== maxRowsPerPage
    ) {
      nonFittingRowsLimitRef.current = null;
      lastAvailableHeightRef.current = availableHeight;
      lastMaxRowsPerPageRef.current = maxRowsPerPage;
    }

    const measuredRows = Array.from(
      rowMeasurementRef?.current?.querySelectorAll('tr') ?? [],
    );
    const measuredRowHeights = measuredRows
      .map((row) => row.getBoundingClientRect().height)
      .filter((height) => height > 0);
    const measuredRowsHeight = measuredRowHeights.reduce(
      (totalHeight, rowHeight) => totalHeight + rowHeight,
      0,
    );
    const maxAllowedRows =
      typeof maxRowsPerPage === 'number' && maxRowsPerPage > 0
        ? Math.max(minRowsPerPage, maxRowsPerPage)
        : undefined;
    const clampRowsPerPage = (value: number) => {
      const minimumClampedValue = Math.max(minRowsPerPage, value);

      return maxAllowedRows
        ? Math.min(maxAllowedRows, minimumClampedValue)
        : minimumClampedValue;
    };

    let nextRowsPerPage = defaultRowsPerPage;

    if (availableHeight > 0 && measuredRowHeights.length > 0) {
      if (measuredRowsHeight > availableHeight) {
        let fittingRows = 0;
        let fittingRowsHeight = 0;

        for (const measuredRowHeight of measuredRowHeights) {
          if (fittingRowsHeight + measuredRowHeight > availableHeight) {
            break;
          }

          fittingRows += 1;
          fittingRowsHeight += measuredRowHeight;
        }

        nonFittingRowsLimitRef.current = measuredRowHeights.length;
        nextRowsPerPage = clampRowsPerPage(fittingRows);
      } else {
        const averageRowHeight = measuredRowsHeight / measuredRowHeights.length;
        const remainingHeight = availableHeight - measuredRowsHeight;
        const extraRows = Math.floor(remainingHeight / averageRowHeight);
        const nonFittingRowsLimit = nonFittingRowsLimitRef.current;

        nextRowsPerPage = measuredRowHeights.length + extraRows;

        if (nonFittingRowsLimit !== null) {
          nextRowsPerPage = Math.min(nextRowsPerPage, nonFittingRowsLimit - 1);
        }

        nextRowsPerPage = clampRowsPerPage(nextRowsPerPage);
      }
    } else if (availableHeight > 0) {
      nextRowsPerPage = clampRowsPerPage(
        Math.floor(availableHeight / rowHeightPx),
      );
    } else {
      nextRowsPerPage = clampRowsPerPage(defaultRowsPerPage);
    }

    setRowsPerPage((currentRowsPerPage) =>
      currentRowsPerPage === nextRowsPerPage
        ? currentRowsPerPage
        : nextRowsPerPage,
    );
  }, [
    defaultRowsPerPage,
    headerMeasurementRef,
    headerHeightPx,
    heightPaddingPx,
    maxRowsPerPage,
    minRowsPerPage,
    rowMeasurementRef,
    rowSafetyBufferPx,
    rowHeightPx,
    viewportRef,
  ]);

  useLayoutEffect(() => {
    updateRowsPerPage();

    const viewport = viewportRef.current;

    if (!viewport) {
      return undefined;
    }

    if (typeof ResizeObserver !== 'undefined') {
      const resizeObserver = new ResizeObserver(updateRowsPerPage);
      resizeObserver.observe(viewport);

      if (rowMeasurementRef?.current) {
        resizeObserver.observe(rowMeasurementRef.current);
      }

      if (headerMeasurementRef?.current) {
        resizeObserver.observe(headerMeasurementRef.current);
      }

      return () => {
        resizeObserver.disconnect();
      };
    }

    window.addEventListener('resize', updateRowsPerPage);

    return () => {
      window.removeEventListener('resize', updateRowsPerPage);
    };
  }, [headerMeasurementRef, rowMeasurementRef, updateRowsPerPage, viewportRef]);

  return rowsPerPage;
}
