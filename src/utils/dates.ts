export function today(): string {
  return new Date().toISOString().slice(0, 10);
}

export function toIso(d: Date | string | number): string {
  return new Date(d).toISOString();
}
