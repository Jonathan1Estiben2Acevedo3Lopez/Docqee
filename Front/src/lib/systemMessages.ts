export const SYSTEM_MESSAGE_DURATION_MS = 2000;

export function scheduleSystemMessageDismiss(
  currentTimerId: number | null,
  message: string | null | undefined,
  onDismiss: (message: string) => void,
) {
  if (typeof window === 'undefined') {
    return null;
  }

  if (currentTimerId !== null) {
    window.clearTimeout(currentTimerId);
  }

  if (!message) {
    return null;
  }

  return window.setTimeout(() => {
    onDismiss(message);
  }, SYSTEM_MESSAGE_DURATION_MS);
}
