/// <reference types="assemblyscript/std/types/assembly" />

declare interface Uint8Array {
  dataStart: usize;
}

declare interface Array<T> {
  dataStart: usize;
}

declare class Number {
  toString(): string;
}

declare function decode<T, K = Uint8Array>(buffer: K, name?: string): T;
declare function encode<T, K = Uint8Array>(item: T, name?: string): K;

declare interface Object {
  encode(): Uint8Array;
  decode<T, K = Uint8Array>(bytes : K): T;
}