import { useRef } from 'react';

import { classNames } from '@/lib/classNames';

type VerificationCodeInputProps = {
  code: string[];
  disabled?: boolean;
  error?: string | undefined;
  idPrefix?: string;
  label: string;
  length?: number;
  onBlur?: (() => void) | undefined;
  onChange: (nextCode: string[]) => void;
  placeholder?: string;
};

function normalizeDigits(code: string[], length: number) {
  return Array.from({ length }, (_, index) => code[index] ?? '');
}

export function VerificationCodeInput({
  code,
  disabled = false,
  error,
  idPrefix = 'verification-code',
  label,
  length = 6,
  onBlur,
  onChange,
  placeholder = '•',
}: VerificationCodeInputProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const digits = normalizeDigits(code, length);
  const labelId = `${idPrefix}-label`;
  const errorId = error ? `${idPrefix}-error` : undefined;

  const focusInput = (index: number) => {
    inputRefs.current[index]?.focus();
    inputRefs.current[index]?.select();
  };

  const updateAtIndex = (index: number, value: string) => {
    const nextDigits = [...digits];
    nextDigits[index] = value;
    onChange(nextDigits);
  };

  const fillFromIndex = (index: number, value: string) => {
    const sanitizedDigits = value.replace(/\D/g, '').slice(0, length - index).split('');

    if (sanitizedDigits.length === 0) {
      updateAtIndex(index, '');
      return;
    }

    const nextDigits = [...digits];

    sanitizedDigits.forEach((digit, offset) => {
      nextDigits[index + offset] = digit;
    });

    onChange(nextDigits);

    const nextFocusIndex = Math.min(index + sanitizedDigits.length, length - 1);
    requestAnimationFrame(() => {
      focusInput(nextFocusIndex);
    });
  };

  return (
    <div className="space-y-3">
      <p
        className="sr-only"
        id={labelId}
      >
        {label}
      </p>
      <div
        aria-describedby={errorId}
        aria-labelledby={labelId}
        className="flex justify-center gap-2 sm:gap-2.5"
        role="group"
      >
        {digits.map((digit, index) => (
          <input
            key={`${idPrefix}-${index + 1}`}
            ref={(node) => {
              inputRefs.current[index] = node;
            }}
            aria-invalid={Boolean(error)}
            aria-label={`${label}: dígito ${index + 1} de ${length}`}
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            className={classNames(
              'h-12 w-10 rounded-xl border border-slate-200/80 bg-white/90 text-center text-lg font-extrabold text-primary transition-all duration-200 placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/12 sm:h-14 sm:w-11 sm:text-xl',
              disabled
                ? 'cursor-not-allowed bg-slate-100 text-ghost'
                : 'focus-visible:border-primary/35 focus-visible:bg-surface-card',
              error ? 'border-rose-300 ring-2 ring-rose-500/15 focus-visible:ring-rose-500/25' : '',
            )}
            disabled={disabled}
            id={`${idPrefix}-${index + 1}`}
            inputMode="numeric"
            maxLength={1}
            placeholder={placeholder}
            type="text"
            value={digit}
            onBlur={onBlur}
            onChange={(event) => {
              const sanitizedValue = event.target.value.replace(/\D/g, '');

              if (sanitizedValue.length <= 1) {
                updateAtIndex(index, sanitizedValue);

                if (sanitizedValue && index < length - 1) {
                  requestAnimationFrame(() => {
                    focusInput(index + 1);
                  });
                }

                return;
              }

              fillFromIndex(index, sanitizedValue);
            }}
            onKeyDown={(event) => {
              if (event.key === 'Backspace' && !digits[index] && index > 0) {
                event.preventDefault();
                updateAtIndex(index - 1, '');
                requestAnimationFrame(() => {
                  focusInput(index - 1);
                });
              }

              if (event.key === 'ArrowLeft' && index > 0) {
                event.preventDefault();
                focusInput(index - 1);
              }

              if (event.key === 'ArrowRight' && index < length - 1) {
                event.preventDefault();
                focusInput(index + 1);
              }
            }}
            onPaste={(event) => {
              event.preventDefault();
              fillFromIndex(index, event.clipboardData.getData('text'));
            }}
          />
        ))}
      </div>
      {error ? (
        <p
          className="text-center text-[11px] font-medium text-rose-700 sm:text-xs"
          id={errorId}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
