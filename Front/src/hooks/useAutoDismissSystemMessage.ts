import { useEffect, useRef } from 'react';

import { SYSTEM_MESSAGE_DURATION_MS } from '@/lib/systemMessages';

export function useAutoDismissSystemMessage(
  message: string | null | undefined,
  dismissMessage: () => void,
) {
  const dismissMessageRef = useRef(dismissMessage);

  useEffect(() => {
    dismissMessageRef.current = dismissMessage;
  }, [dismissMessage]);

  useEffect(() => {
    if (!message) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      dismissMessageRef.current();
    }, SYSTEM_MESSAGE_DURATION_MS);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [message]);
}
