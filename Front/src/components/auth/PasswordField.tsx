import { Eye, EyeOff, LockKeyhole } from 'lucide-react';
import type { RefObject } from 'react';

import { classNames } from '@/lib/classNames';

type PasswordFieldProps = {
  autoComplete?: string;
  error?: string | undefined;
  hidePasswordLabel: string;
  id: string;
  inputRef: RefObject<HTMLInputElement>;
  label: string;
  name: string;
  onBlur: () => void;
  onChange: (value: string) => void;
  onToggleVisibility: () => void;
  placeholder: string;
  showPassword: boolean;
  showPasswordLabel: string;
  value: string;
};

export function PasswordField({
  autoComplete = 'current-password',
  error,
  hidePasswordLabel,
  id,
  inputRef,
  label,
  name,
  onBlur,
  onChange,
  onToggleVisibility,
  placeholder,
  showPassword,
  showPasswordLabel,
  value,
}: PasswordFieldProps) {
  const errorId = `${id}-error`;
  const toggleLabel = showPassword ? hidePasswordLabel : showPasswordLabel;
  const hasError = Boolean(error);

  return (
    <div className="space-y-1.5">
      <label
        className="block px-1 text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted"
        htmlFor={id}
      >
        {label}
      </label>
      <div className="relative">
        <LockKeyhole
          aria-hidden="true"
          className="pointer-events-none absolute left-3.5 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-ghost"
        />
        <input
          ref={inputRef}
          aria-describedby={hasError ? errorId : undefined}
          aria-invalid={hasError}
          autoComplete={autoComplete}
          className={classNames(
            'w-full rounded-xl border-none bg-surface-high py-3 pl-11 pr-11 text-sm text-ink placeholder:text-ghost/70 transition-all duration-300',
            'focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/12',
            error
              ? 'ring-2 ring-rose-500/25 focus-visible:ring-rose-500/25'
              : 'focus-visible:bg-surface-card',
          )}
          id={id}
          name={name}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onBlur={onBlur}
          onChange={(event) => onChange(event.target.value)}
        />
        <button
          aria-label={toggleLabel}
          aria-pressed={showPassword}
          className="absolute inset-y-0 right-3 flex items-center text-ghost transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:text-primary"
          type="button"
          onClick={onToggleVisibility}
        >
          {showPassword ? (
            <EyeOff aria-hidden="true" className="h-4.5 w-4.5" />
          ) : (
            <Eye aria-hidden="true" className="h-4.5 w-4.5" />
          )}
        </button>
      </div>
      {error ? (
        <p
          className="px-1 text-[11px] font-medium text-rose-700 sm:text-xs"
          id={errorId}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
