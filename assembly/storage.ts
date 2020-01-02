import { runtime_api } from './runtime_api';
import { util } from "./util";
import { logging } from "./logging";



/**
 * Represents contract storage.
 */
export class Storage {
  /**
  * Store string value under given key. Both key and value are encoded as UTF-8 strings.
  */
  setString(key: string, value: string): void {
    let key_encoded = util.stringToBytes(key);
    let value_encoded = util.stringToBytes(value);
    const storage_write_result =
      runtime_api.storage_write(key_encoded.byteLength, key_encoded.dataStart, value_encoded.byteLength, value_encoded.dataStart, 0);
    // TODO: handle return value?
  }

  /**
  * Get string value stored under given key. Both key and value are encoded as UTF-8 strings.
  */
  getString(key: string): string | null {
    //@ts-ignore: Compiler says this is never null TODO
    return util.bytesToString(this._internalReadBytes(key));
  }

  /**
  * Store byte array under given key. Key is encoded as UTF-8 strings.
  * Byte array stored as is.
  *
  * It's convenient to use this together with `domainObject.encode()`.
  */
  setBytes(key: string, value: Uint8Array): void {
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
  getBytes(key: string): Uint8Array | null {
    return this._internalReadBytes(key);
  }

  /**
  * Returns true if the given key is present in the storage.
  */
  contains(key: string): bool {
    let key_encoded = util.stringToBytes(key);
    return (bool)(runtime_api.storage_has_key(key_encoded.byteLength, key_encoded.dataStart));
  }

  @inline
  hasKey(key: string): bool {
    return this.contains(key);
  }

  /**
  * Deletes a given key from the storage.
  */
  delete(key: string): void {
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
  set<T>(key: string, value: T): void {
    if (isString<T>()) {
      //@ts-ignore
      this.setString(key, value);
    } else if (isInteger<T>()) {
      //@ts-ignore
      this.setString(key, value.toString());
    } else {
       //@ts-ignore
      this.setBytes(key, value.serialize());
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
  get<T>(key: string, defaultValue: T | null = null): T | null {
    if (isString<T>()) {
      const strValue = this.getString(key);
      return strValue == null ? defaultValue : util.parseFromString<T>(this.getString(key));
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
  getPrimitive<T>(key: string, defaultValue: T): T {
    if (isInteger<T>()) {
      const strValue = this.getString(key);
      return strValue == null ? defaultValue : util.parseFromString<T>(this.getString(key));
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
  * @returns A value of type T stored under the given key.
  */
  getSome<T>(key: string): T {
    if (!this.hasKey(key)) {
      assert(false, "Key '" + key + "' is not present in the storage");
    }
    if (isString<T>() || isInteger<T>()) {
      return util.parseFromString<T>(this.getString(key));
    } else {
      return util.parseFromBytes<T>(this.getBytes(key));
    }
  }

  private _internalReadBytes(key: string): Uint8Array | null {
    let key_encoded = util.stringToBytes(key);
    let res = runtime_api.storage_read(key_encoded.byteLength, key_encoded.dataStart, 0);
    if (res == 1) {
      let value_len = runtime_api.register_len(0);
      let value = new Uint8Array(value_len as i32);
      runtime_api.read_register(0, value.dataStart);
      return value;
    } else {
      return null;
    }
  }
}

/**
* An instance of a Storage class that is used for working with contract storage on the blockchain.
*/
export const storage: Storage = new Storage();
