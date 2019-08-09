export function toUTF8(str: string, nullTerminated: boolean = false): usize {
  return changetype<usize>(String.UTF8.encode(str, nullTerminated));
}

export function UTF8Length(str: string, nullTerminated: boolean = false): usize {
  return String.UTF8.byteLength(str, nullTerminated);
}

export function ptrTo(array: Uint8Array): usize {
  //@ts-ignore
  return array.dataStart;
}

export function toString<T>(i: T): string {
  //@ts-ignore
  return i.toString();
}
