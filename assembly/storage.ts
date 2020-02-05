import { runtime_api } from './runtime_api';
import { util } from "./util";



/**
 * Represents contract storage.
 */
export class storage {
  /**
   * Returns list of keys between the given start key and the end key. Both inclusive.
  * NOTE: Must be very careful to avoid exploding amount of compute with this method.
  * @param start The start key used as a lower bound in lexicographical order. Inclusive.
  * @param end The end key used as a upper bound in lexicographical order. Inclusive.
  * @param limit The maximum number of keys to return. Default is `-1`, means no limit.
  */
  static keyRange(start: string, end: string, limit: i32 = -1): string[] {
    let start_encoded = util.stringToBytes(start);
    let end_encoded = util.stringToBytes(end);

    const iterator_id = runtime_api.storage_iter_range(
      start_encoded.byteLength,
      start_encoded.dataStart,
      end_encoded.byteLength,
      end_encoded.dataStart);

    return this._fetchIter(iterator_id, limit);
  }

  /**
  * Returns list of keys starting with given prefix.
  * NOTE: Must be very careful to avoid exploding amount of compute with this method.
  * @param prefix The key prefix.
  * @param limit The maximum number of keys to return. Default is `-1`, means no limit.
  */
  static keys(prefix: string, limit: i32 = -1): string[] {
    let prefix_encoded = util.stringToBytes(prefix);
    const iterator_id = runtime_api.storage_iter_prefix(
      prefix_encoded.byteLength,
      prefix_encoded.dataStart);
    return this._fetchIter(iterator_id, limit);
  }

  /**
  * Store string value under given key. Both key and value are encoded as UTF-8 strings.
  */
  static setString(key: string, value: string): void {
    let key_encoded = util.stringToBytes(key);
    let value_encoded = util.stringToBytes(value);
    const storage_write_result =
      runtime_api.storage_write(key_encoded.byteLength, key_encoded.dataStart, value_encoded.byteLength, value_encoded.dataStart, 0);
    // TODO: handle return value?
  }

  /**
  * Get string value stored under given key. Both key and value are encoded as UTF-8 strings.
  */
  static getString(key: string): string | null {
    //@ts-ignore: Compiler says this is never null TODO
    return util.bytesToString(this._internalReadBytes(key));
  }

  /**
  * Store byte array under given key. Key is encoded as UTF-8 strings.
  * Byte array stored as is.
  *
  * It's convenient to use this together with `domainObject.encode()`.
  */
  static setBytes(key: string, value: Uint8Array): void {
    let key_encoded = util.stringToBytes(key);
    const storage_write_result =
      runtime_api.storage_write(key_encoded.byteLength, key_encoded.dataStart, value.byteLength, value.dataStart, 0);
    // TODO: handle return value?
  }

  /**
  * Get byte array stored under given key. Key is encoded as UTF-8 strings.
  * Byte array stored as is.
  *
  * It's convenient to use this together with `DomainObject.decode()`.
  */
  static getBytes(key: string): Uint8Array | null {
    return this._internalReadBytes(key);
  }

  /**
  * Returns true if the given key is present in the storage.
  */
  static contains(key: string): bool {
    let key_encoded = util.stringToBytes(key);
    return (bool)(runtime_api.storage_has_key(key_encoded.byteLength, key_encoded.dataStart));
  }

  @inline
  static hasKey(key: string): bool {
    return this.contains(key);
  }

  /**
  * Deletes a given key from the storage.
  */
  static delete(key: string): void {
    let key_encoded = util.stringToBytes(key);
    runtime_api.storage_remove(key_encoded.byteLength, key_encoded.dataStart, 0);
  }

  /**
  * Stores given generic value under the key. Key is encoded as UTF-8 strings.
  * Supported types: bool, integer, string and data objects defined in model.ts.
  *
  * @param key A key to use for storage.
  * @param value A value to store.
  */
  static set<T>(key: string, value: T): void {
    if (isString<T>()) {
      //@ts-ignore
      this.setString(key, value);
    } else if (isInteger<T>()) {
      //@ts-ignore
      this.setString(key, value.toString());
    } else {
       //@ts-ignore
      this.setBytes(key, encode<T>(value));
    }
  }

  /**
  * Gets given generic value stored under the key. Key is encoded as UTF-8 strings.
  * Supported types: string and data objects defined in model.ts.
  * Please use getPrimitive<T> for getting primitives with a default value, and
  * getSome<T> for primitives and non-primitives in case it's known that a particular key exists.
  *
  * @param key A key to read from storage.
  * @param defaultValue The default value if the key is not available
  * @returns A value of type T stored under the given key.
  */
  static get<T>(key: string, defaultValue: T | null = null): T | null {
    if (isString<T>()) {
      const strValue = this.getString(key);
      return strValue == null ? defaultValue : util.parseFromString<T>(<string>strValue);
    } else {
      const byteValue = this.getBytes(key);
      return byteValue == null ? defaultValue : util.parseFromBytes<T>(byteValue!);
    }
  }

  /**
  * Gets given generic value stored under the key. Key is encoded as UTF-8 strings.
  * Supported types: bool, integer.
  *
  * @param key A key to read from storage.
  * @param defaultValue The default value if the key is not available
  * @returns A value of type T stored under the given key.
  */
  static getPrimitive<T>(key: string, defaultValue: T): T {
    if (isInteger<T>()) {
      const strValue = this.getString(key);
      return strValue == null ? defaultValue : util.parseFromString<T>(<string>strValue);
    } else {
      throw "Operation not supported. Please use storage.get<T> for non-primitives";
    }
  }

  /**
  * Gets given generic value stored under the key. Key is encoded as UTF-8 strings.
  * Supported types: bool, integer, string and data objects defined in model.ts.
  * This function will throw if throw if the key does not exist in the storage.
  *
  * @param key A key to read from storage.
  * @param defaultValue The default value if the key is not available
  * @returns A value of type T stored under the given key.
  */
  static getSome<T>(key: string): T {
    if (!this.hasKey(key)) {
      assert(false, "Key '" + key + "' is not present in the storage");
    }
    if (isString<T>() || isInteger<T>()) {
      //@ts-ignore won't be null
      return util.parseFromString<T>(this.getString(key));
    } else {
      //@ts-ignore won't be null
      return util.parseFromBytes<T>(this.getBytes(key));
    }
  }

  private static _internalReadBytes(key: string): Uint8Array | null {
    let key_encoded = util.stringToBytes(key);
    let res = runtime_api.storage_read(key_encoded.byteLength, key_encoded.dataStart, 0);
    if (res == 1) {
      return util.read_register(0);
    } else {
      return null;
    }
  }

  /**
  * @hidden
  * Internal method to fetch list of keys from the given iterator up the limit.
  */
  private static _fetchIter(iterId: u64, limit: i32 = -1): string[] {
    let result: string[] = new Array<string>();

    while(limit-- != 0 && runtime_api.storage_iter_next(iterId, 0, 1) == 1) {
      let key_data = util.read_register(0);
      if (key_data != null) {
        //@ts-ignore: Compiler says this is never null TODO
        result.push(util.bytesToString(key_data));
      }
    }
    return result;
  }
}