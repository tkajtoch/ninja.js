import { KeyAsValue } from './types';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function keysToValues<T extends Record<string, any>>(source: T): KeyAsValue<typeof source> {
  return (Object.keys(source) as Array<keyof T>).reduce((acc, current) => {
    acc[current] = current;
    return acc;
  }, {} as KeyAsValue<typeof source>);
}
