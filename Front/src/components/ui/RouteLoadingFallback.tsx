export function RouteLoadingFallback() {
  return (
    <div className="min-h-screen bg-surface">
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="rounded-[1.6rem] border border-slate-200/80 bg-white/90 px-6 py-5 text-center shadow-float">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-primary">Docqee</p>
          <p className="mt-2 font-headline text-lg font-extrabold text-ink">Cargando vista...</p>
        </div>
      </div>
    </div>
  );
}
