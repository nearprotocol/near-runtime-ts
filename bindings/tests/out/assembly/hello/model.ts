import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";

export class PromiseArgs {
  receiver: string;
  methodName: string;
  args: PromiseArgs;
  gas: i32;
  balance: i32;
  callback: string;
  callbackArgs: PromiseArgs;
  callbackBalance: i32;
  callbackGas: i32;

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
    this.gas = obj.has("gas") ? decode<i32, Obj>(obj, "gas"): this.gas;
    this.balance = obj.has("balance") ? decode<i32, Obj>(obj, "balance"): this.balance;
    this.callback = obj.has("callback") ? decode<string, Obj>(obj, "callback"): this.callback;
    this.callbackArgs = obj.has("callbackArgs") ? decode<PromiseArgs, Obj>(obj, "callbackArgs"): this.callbackArgs;
    this.callbackBalance = obj.has("callbackBalance") ? decode<i32, Obj>(obj, "callbackBalance"): this.callbackBalance;
    this.callbackGas = obj.has("callbackGas") ? decode<i32, Obj>(obj, "callbackGas"): this.callbackGas;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<string, JSONEncoder>(this.receiver, "receiver", encoder);
    encode<string, JSONEncoder>(this.methodName, "methodName", encoder);
    encode<PromiseArgs, JSONEncoder>(this.args, "args", encoder);
    encode<i32, JSONEncoder>(this.gas, "gas", encoder);
    encode<i32, JSONEncoder>(this.balance, "balance", encoder);
    encode<string, JSONEncoder>(this.callback, "callback", encoder);
    encode<PromiseArgs, JSONEncoder>(this.callbackArgs, "callbackArgs", encoder);
    encode<i32, JSONEncoder>(this.callbackBalance, "callbackBalance", encoder);
    encode<i32, JSONEncoder>(this.callbackGas, "callbackGas", encoder);
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
export class InputPromiseArgs {
  args: PromiseArgs;

  static decode(json: Uint8Array): InputPromiseArgs {
    let value = instantiate<InputPromiseArgs>(); // Allocate without constructor
    return value.decode<Uint8Array>(json);
  }

  decode<V = Uint8Array>(buf: V): InputPromiseArgs {
    let json: Obj;
    if (buf instanceof Uint8Array) {
      json = JSON.parse(buf);
    }else {
      assert(buf instanceof Obj, "argument must be Uint8Array or Json Object");
      json = <Obj> buf;
    }
    return this._decode(json);
  }

  private _decode(obj: Obj): InputPromiseArgs {
    this.args = obj.has("args") ? decode<PromiseArgs, Obj>(obj, "args"): this.args;
    return this;
  }

  _encode(name: string | null = "", _encoder: JSONEncoder | null = null): JSONEncoder {
    let encoder = (_encoder != null ? _encoder : new JSONEncoder())!;
    encoder.pushObject(name);
    encode<PromiseArgs, JSONEncoder>(this.args, "args", encoder);
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