import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

import {
  u128
} from "bignum"
import {
  logging
} from "near-runtime-ts"
export class FooBar {
  foo: i32 = 0;
  bar: u32 = 1;
  u64Val: u64 = 4294967297;
  u64_zero: u64;
  i64Val: i64 = -64;
  flag: bool;
  baz: string = "123";
  uint8array: Uint8Array;
  arr: Array<Array<string>>;
  u32Arr: Array<u32>;
  i32Arr: Array<i32>;
  u128Val: u128;
  uint8arrays: Array<Uint8Array>;
  u64Arr: Array<u64>;

  static decode(json: Uint8Array): FooBar {
    let value = instantiate<FooBar>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): FooBar {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): FooBar {
    this.foo = obj.has("foo") ? decode<i32, Obj>(obj, "foo"): this.foo;
    this.bar = obj.has("bar") ? decode<u32, Obj>(obj, "bar"): this.bar;
    this.u64Val = obj.has("u64Val") ? decode<u64, Obj>(obj, "u64Val"): this.u64Val;
    this.u64_zero = obj.has("u64_zero") ? decode<u64, Obj>(obj, "u64_zero"): this.u64_zero;
    this.i64Val = obj.has("i64Val") ? decode<i64, Obj>(obj, "i64Val"): this.i64Val;
    this.flag = obj.has("flag") ? decode<bool, Obj>(obj, "flag"): this.flag;
    this.baz = obj.has("baz") ? decode<string, Obj>(obj, "baz"): this.baz;
    this.uint8array = obj.has("uint8array") ? decode<Uint8Array, Obj>(obj, "uint8array"): this.uint8array;
    this.arr = obj.has("arr") ? decode<Array<Array<string>>, Obj>(obj, "arr"): this.arr;
    this.u32Arr = obj.has("u32Arr") ? decode<Array<u32>, Obj>(obj, "u32Arr"): this.u32Arr;
    this.i32Arr = obj.has("i32Arr") ? decode<Array<i32>, Obj>(obj, "i32Arr"): this.i32Arr;
    this.u128Val = obj.has("u128Val") ? decode<u128, Obj>(obj, "u128Val"): this.u128Val;
    this.uint8arrays = obj.has("uint8arrays") ? decode<Array<Uint8Array>, Obj>(obj, "uint8arrays"): this.uint8arrays;
    this.u64Arr = obj.has("u64Arr") ? decode<Array<u64>, Obj>(obj, "u64Arr"): this.u64Arr;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<i32, JSONEncoder>(this.foo, "foo", encoder);
    encode<u32, JSONEncoder>(this.bar, "bar", encoder);
    encode<u64, JSONEncoder>(this.u64Val, "u64Val", encoder);
    encode<u64, JSONEncoder>(this.u64_zero, "u64_zero", encoder);
    encode<i64, JSONEncoder>(this.i64Val, "i64Val", encoder);
    encode<bool, JSONEncoder>(this.flag, "flag", encoder);
    encode<string, JSONEncoder>(this.baz, "baz", encoder);
    encode<Uint8Array, JSONEncoder>(this.uint8array, "uint8array", encoder);
    encode<Array<Array<string>>, JSONEncoder>(this.arr, "arr", encoder);
    encode<Array<u32>, JSONEncoder>(this.u32Arr, "u32Arr", encoder);
    encode<Array<i32>, JSONEncoder>(this.i32Arr, "i32Arr", encoder);
    encode<u128, JSONEncoder>(this.u128Val, "u128Val", encoder);
    encode<Array<Uint8Array>, JSONEncoder>(this.uint8arrays, "uint8arrays", encoder);
    encode<Array<u64>, JSONEncoder>(this.u64Arr, "u64Arr", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class Nullables {
  str: string;
  u128: u128;
  uint8Array: Uint8Array;

  static decode(json: Uint8Array): Nullables {
    let value = instantiate<Nullables>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): Nullables {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): Nullables {
    this.str = obj.has("str") ? decode<string, Obj>(obj, "str"): this.str;
    this.u128 = obj.has("u128") ? decode<u128, Obj>(obj, "u128"): this.u128;
    this.uint8Array = obj.has("uint8Array") ? decode<Uint8Array, Obj>(obj, "uint8Array"): this.uint8Array;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string, JSONEncoder>(this.str, "str", encoder);
    encode<u128, JSONEncoder>(this.u128, "u128", encoder);
    encode<Uint8Array, JSONEncoder>(this.uint8Array, "uint8Array", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class ContainerClass {
  foobar: FooBar;

  static decode(json: Uint8Array): ContainerClass {
    let value = instantiate<ContainerClass>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): ContainerClass {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): ContainerClass {
    this.foobar = obj.has("foobar") ? decode<FooBar, Obj>(obj, "foobar"): this.foobar;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<FooBar, JSONEncoder>(this.foobar, "foobar", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class AnotherContainerClass {
  foobars: Array<Array<FooBar>>;

  static decode(json: Uint8Array): AnotherContainerClass {
    let value = instantiate<AnotherContainerClass>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): AnotherContainerClass {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): AnotherContainerClass {
    this.foobars = obj.has("foobars") ? decode<Array<Array<FooBar>>, Obj>(obj, "foobars"): this.foobars;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<Array<Array<FooBar>>, JSONEncoder>(this.foobars, "foobars", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class PromiseArgs {
  receiver: string;
  methodName: string;
  args: PromiseArgs;
  balance: i32;
  callback: string;
  callbackArgs: PromiseArgs;
  callbackBalance: i32;

  static decode(json: Uint8Array): PromiseArgs {
    let value = instantiate<PromiseArgs>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): PromiseArgs {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): PromiseArgs {
    this.receiver = obj.has("receiver") ? decode<string, Obj>(obj, "receiver"): this.receiver;
    this.methodName = obj.has("methodName") ? decode<string, Obj>(obj, "methodName"): this.methodName;
    this.args = obj.has("args") ? decode<PromiseArgs, Obj>(obj, "args"): this.args;
    this.balance = obj.has("balance") ? decode<i32, Obj>(obj, "balance"): this.balance;
    this.callback = obj.has("callback") ? decode<string, Obj>(obj, "callback"): this.callback;
    this.callbackArgs = obj.has("callbackArgs") ? decode<PromiseArgs, Obj>(obj, "callbackArgs"): this.callbackArgs;
    this.callbackBalance = obj.has("callbackBalance") ? decode<i32, Obj>(obj, "callbackBalance"): this.callbackBalance;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string, JSONEncoder>(this.receiver, "receiver", encoder);
    encode<string, JSONEncoder>(this.methodName, "methodName", encoder);
    encode<PromiseArgs, JSONEncoder>(this.args, "args", encoder);
    encode<i32, JSONEncoder>(this.balance, "balance", encoder);
    encode<string, JSONEncoder>(this.callback, "callback", encoder);
    encode<PromiseArgs, JSONEncoder>(this.callbackArgs, "callbackArgs", encoder);
    encode<i32, JSONEncoder>(this.callbackBalance, "callbackBalance", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class MyContractPromiseResult {
  ok: bool;
  r: MyCallbackResult;

  static decode(json: Uint8Array): MyContractPromiseResult {
    let value = instantiate<MyContractPromiseResult>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): MyContractPromiseResult {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): MyContractPromiseResult {
    this.ok = obj.has("ok") ? decode<bool, Obj>(obj, "ok"): this.ok;
    this.r = obj.has("r") ? decode<MyCallbackResult, Obj>(obj, "r"): this.r;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<bool, JSONEncoder>(this.ok, "ok", encoder);
    encode<MyCallbackResult, JSONEncoder>(this.r, "r", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class MyCallbackResult {
  rs: Array<MyContractPromiseResult>;
  n: string;

  static decode(json: Uint8Array): MyCallbackResult {
    let value = instantiate<MyCallbackResult>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): MyCallbackResult {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): MyCallbackResult {
    this.rs = obj.has("rs") ? decode<Array<MyContractPromiseResult>, Obj>(obj, "rs"): this.rs;
    this.n = obj.has("n") ? decode<string, Obj>(obj, "n"): this.n;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<Array<MyContractPromiseResult>, JSONEncoder>(this.rs, "rs", encoder);
    encode<string, JSONEncoder>(this.n, "n", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}
export class Generic<T> {
  value: T;

  static decode(json: Uint8Array): Generic<T> {
    let value = instantiate<Generic<T>>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): Generic<T> {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): Generic<T> {
    this.value = obj.has("value") ? decode<T, Obj>(obj, "value"): this.value;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<T, JSONEncoder>(this.value, "value", encoder);
    encoder.popObject();
    return encoder;
  }

  encode(): Uint8Array {
    return this._encode().serialize();
  }

  serialize(): Uint8Array {
    return this.encode();
  }

  toJSON(): string {
    return this._encode().toString();
  }
}