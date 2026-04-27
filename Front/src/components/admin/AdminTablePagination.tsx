import { ChevronLeft, ChevronRight } from 'lucide-react';

type AdminTablePaginationProps = {
  currentPage: number;
  onNext: () => void;
  onPrevious: () => void;
  pageEndLabel: number;
  pageStartLabel: number;
  totalItems: number;
  totalPages: number;
};

export function AdminTablePagination({
  currentPage,
  onNext,
  onPrevious,
  pageEndLabel,
  pageStartLabel,
  totalItems,
  totalPages,
}: AdminTablePaginationProps) {
  return (
    <div className="flex shrink-0 flex-col gap-2 border-t border-slate-200/80 bg-white px-3 py-2.5 text-[0.72rem] font-semibold text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-5 sm:text-[0.8rem]">
      <p className="text-center sm:text-left">
        Mostrando {pageStartLabel}-{pageEndLabel} de {totalItems} &middot;
        P&aacute;gina {currentPage} de {totalPages}
      </p>
      <div className="flex items-center justify-center gap-2">
        <button
          aria-label="Pagina anterior"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
          disabled={currentPage === 1}
          type="button"
          onClick={onPrevious}
        >
          <ChevronLeft aria-hidden="true" className="h-4 w-4" />
        </button>
        <span className="min-w-[4.25rem] text-center text-[0.72rem] text-ink">
          {currentPage}/{totalPages}
        </span>
        <button
          aria-label="Pagina siguiente"
          className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-ink transition duration-200 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-45"
          disabled={currentPage === totalPages}
          type="button"
          onClick={onNext}
        >
          <ChevronRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
