import { classNames } from '@/lib/classNames';

type SectionHeadingProps = {
  align?: 'center' | 'left';
  description?: string;
  descriptionClassName?: string;
  eyebrow?: string;
  titleClassName?: string;
  title: string;
};

export function SectionHeading({
  align = 'left',
  description,
  descriptionClassName,
  eyebrow,
  titleClassName,
  title,
}: SectionHeadingProps) {
  return (
    <div
      className={classNames(
        'space-y-4',
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl',
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.28em] text-primary">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={classNames(
          'font-headline text-3xl font-extrabold tracking-tight text-ink sm:text-4xl',
          titleClassName,
        )}
      >
        {title}
      </h2>
      {description ? (
        <p className={classNames('text-base leading-7 text-ink-muted sm:text-lg', descriptionClassName)}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
