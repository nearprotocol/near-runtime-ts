import { toUTF8, ptrTo, UTF8Length, toString } from "./util";
import { _near_hash, _near_hash32, _near_random_buf, _near_log } from "./imports";

export namespace near {

    /**
     * Parses the given string to return a value of the given generic type.
     * Supported types: bool, integer, string and data objects defined in model.ts.
     *
     * @param s String to parse.
     * @param defaultValue The default value if the string is null
     * @returns A parsed value of type T.
     */
    export function parseFromString<T>(s: string, defaultValue: T | null = null): T {
      if (s == null) {
        return defaultValue!; //TODO
      }
      if (isString<T>()) {
        return changetype<T>(s);
      } else if (isInteger<T>()) {
        if (defaultValue instanceof bool) {
          return changetype<T>(s == "true");
        } else if (isSigned<T>()) {
          return changetype<T>(I64.parseInt(s));
        } else {
          return changetype<T>(U64.parseInt(s));
        }
      } else {
        let v = instantiate<T>();
        //@ts-ignore
        return v.decode(stringToBytes(s));
      }
    }
  
    /**
     * Parses the given bytes array to return a value of the given generic type.
     * Supported types: bool, integer, string and data objects defined in model.ts.
     *
     * @param bytes Bytes to parse.
     * @param defaultValue The default value if the bytes are null
     * @returns A parsed value of type T.
     */
    export function parseFromBytes<T>(bytes: Uint8Array, defaultValue: T | null = null): T | null {
      if (bytes == null) {
        return defaultValue;
      }
      if (isString<T>() || isInteger<T>()) {
        return parseFromString<T>(bytesToString(bytes), defaultValue);
      } else {
        let v = instantiate<T>();
        //@ts-ignore
        return v.decode(bytes);
      }
    }
  
    export function bytesToString(bytes: Uint8Array, nullTerminated: boolean = false): string {
      return String.UTF8.decodeUnsafe(ptrTo(bytes), bytes.byteLength);
    }
  
    export function stringToBytes(s: string): Uint8Array {
      let len = UTF8Length(s);
      let bytes = new Uint8Array(len);
      memory.copy(ptrTo(bytes), toUTF8(s), len);
      return bytes;
    }
  
    /**
     * Helper class to store key->value pairs.
     */
    export class MapEntry<K, V> {
      key: K;
      value: V;
  
      constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
      }
    }
  
    /**
     * Hash given data. Returns hash as 32-byte array.
     * @param data data can be passed as either Uint8Array or anything with .toString (hashed as UTF-8 string).
     */
    export function hash<T>(data: T): Uint8Array {
      let result = new Uint8Array(32);
      if (data instanceof Uint8Array) {
        _near_hash(data.byteLength, ptrTo(data), ptrTo(result));
      } else {
        let str = toString(data);
        _near_hash(UTF8Length(str) - 1, toUTF8(str), ptrTo(result));
      }
      return result;
    }
  
    /**
     * Hash given data. Returns hash as 32-bit integer.
     * @param data data can be passed as either Uint8Array or anything with .toString (hashed as UTF-8 string).
     */
    export function hash32<T>(data: T): u32 {
      let dataToHash : Uint8Array;
      if (data instanceof Uint8Array) {
        return _near_hash32(data.byteLength, ptrTo(data));
      } else {
        let str = toString(data);
        return _near_hash32(UTF8Length(str) - 1, toUTF8(str));
      }
    }
  
    /**
     * Returns random byte buffer of given length.
     */
    export function randomBuffer(len: u32): Uint8Array {
      let result = new Uint8Array(len);
      _near_random_buf(len, ptrTo(result));
      return result;
    }
  
    /**
     * Returns random 32-bit integer.
     */
    export function random32(): u32 {
      return random32();
    }
  
    export function log(msg: string): void {
      _near_log(msg);
    }
  
    export function str<T>(value: T): string {
      let arr: Array<T> = [value];
      return toString(arr);
    }
  
    export function base58(source: Uint8Array): string {
      // Code converted from:
      // https://github.com/cryptocoinjs/base-x/blob/master/index.js
      const iFACTOR = 2; // TODO: Calculate precise value to avoid overallocating
      const ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
      let BASE = ALPHABET.length;
      let LEADER = ALPHABET.charAt(0);
  
      // Skip & count leading zeroes.
      let zeroes = 0
      let length = 0
      let pbegin = 0
      let pend = source.length
  
      while (pbegin !== pend && source[pbegin] === 0) {
        pbegin++
        zeroes++
      }
  
      // Allocate enough space in big-endian base58 representation.
      let size = ((pend - pbegin) * iFACTOR + 1) >>> 0
      let b58 = new Uint8Array(size)
  
      // Process the bytes.
      while (pbegin !== pend) {
        let carry = i32(source[pbegin])
  
        // Apply "b58 = b58 * 256 + ch".
        let i = 0
        for (let it = size - 1; (carry !== 0 || i < length) && (it !== -1); it--, i++) {
          carry += (256 * b58[it]) >>> 0
          b58[it] = (carry % BASE) >>> 0
          carry = (carry / BASE) >>> 0
        }
  
        assert(carry == 0, 'Non-zero carry');
        length = i
        pbegin++
      }
  
      // Skip leading zeroes in base58 result.
      let it = size - length
      while (it !== size && b58[it] === 0) {
        it++
      }
  
      // Translate the result into a string.
      let str = LEADER.repeat(zeroes)
      for (; it < size; ++it) str += ALPHABET.charAt(b58[it])
  
      return str
    }
  }
  