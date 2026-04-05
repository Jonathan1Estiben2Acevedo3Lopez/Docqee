import { classNames } from '@/lib/classNames';

type LogoMarkProps = {
  className?: string;
  compact?: boolean;
  size?: 'default' | 'sm';
};

export function LogoMark({ className, compact = false, size = 'default' }: LogoMarkProps) {
  const isSmall = size === 'sm';

  return (
    <div className={classNames('flex items-center', isSmall ? 'gap-2.5' : 'gap-3', className)}>
      <span
        aria-hidden="true"
        className={classNames(
          'flex items-center justify-center overflow-hidden bg-white shadow-ambient ring-1 ring-slate-200/70',
          isSmall ? 'h-9 w-9 rounded-[1rem]' : 'h-11 w-11 rounded-2xl',
        )}
      >
        <img
          src="/Logo_plataforma.ico"
          alt=""
          className="h-full w-full object-cover"
          decoding="async"
          loading="eager"
        />
      </span>
      {!compact ? (
        <span
          className={classNames(
            'font-headline font-extrabold tracking-tight text-ink',
            isSmall ? 'text-base' : 'text-lg',
          )}
        >
          Docqee
        </span>
      ) : null}
    </div>
  );
}
