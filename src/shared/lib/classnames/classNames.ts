type Mods = Record<string, string | boolean> | object

export function classNames (cls: string, mods: Mods = {}, additionals: string[] = []): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
    ...additionals
  ].join(' ')
}
