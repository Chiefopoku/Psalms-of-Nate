export function Table({ children }: Readonly<{ children: React.ReactNode }>) {
  return <table className="w-full border-collapse text-left text-sm">{children}</table>;
}
