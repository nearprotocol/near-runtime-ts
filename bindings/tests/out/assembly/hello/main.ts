import { base64 } from "near-runtime-ts";
import { JSONEncoder } from "assemblyscript-json";
import { JSONDecoder, ThrowingJSONHandler, DecoderState } from "assemblyscript-json";


//@ts-ignore
function __wrapper_hello(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = hello(decode<string, Obj>(obj, "name"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_hello as hello }


//@ts-ignore
function __wrapper_setKeyValue(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  setKeyValue(decode<string, Obj>(obj, "key"), decode<string, Obj>(obj, "value"));
}

export { __wrapper_setKeyValue as setKeyValue }


//@ts-ignore
function __wrapper_getValueByKey(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = getValueByKey(decode<string, Obj>(obj, "key"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getValueByKey as getValueByKey }


//@ts-ignore
function __wrapper_setValue(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = setValue(decode<string, Obj>(obj, "value"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_setValue as setValue }


//@ts-ignore
function __wrapper_getValue(): void {
  let result: string = getValue();

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getValue as getValue }


//@ts-ignore
function __wrapper_getAllKeys(): void {
  let result: Array<string> = getAllKeys();

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<Array<string>>() || isNullable<Array<string>>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<Array<string>>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getAllKeys as getAllKeys }


//@ts-ignore
function __wrapper_benchmark(): void {
  let result: Array<string> = benchmark();

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<Array<string>>() || isNullable<Array<string>>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<Array<string>>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark as benchmark }


//@ts-ignore
function __wrapper_benchmark_storage(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = benchmark_storage(decode<i32, Obj>(obj, "n"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark_storage as benchmark_storage }


//@ts-ignore
function __wrapper_limited_storage(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = limited_storage(decode<u64, Obj>(obj, "max_storage"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_limited_storage as limited_storage }


//@ts-ignore
function __wrapper_benchmark_sum_n(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: string = benchmark_sum_n(decode<i32, Obj>(obj, "n"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_benchmark_sum_n as benchmark_sum_n }


//@ts-ignore
function __wrapper_returnHiWithLogs(): void {
  let result: string = returnHiWithLogs();

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<string>() || isNullable<string>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<string>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_returnHiWithLogs as returnHiWithLogs }


//@ts-ignore
function __wrapper_testSetRemove(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  testSetRemove(decode<string, Obj>(obj, "value"));
}

export { __wrapper_testSetRemove as testSetRemove }


//@ts-ignore
function __wrapper_insertStrings(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  insertStrings(decode<i32, Obj>(obj, "from"), decode<i32, Obj>(obj, "to"));
}

export { __wrapper_insertStrings as insertStrings }


//@ts-ignore
function __wrapper_deleteStrings(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  deleteStrings(decode<i32, Obj>(obj, "from"), decode<i32, Obj>(obj, "to"));
}

export { __wrapper_deleteStrings as deleteStrings }


//@ts-ignore
function __wrapper_recurse(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: i32 = recurse(decode<i32, Obj>(obj, "n"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<i32>() || isNullable<i32>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<i32>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_recurse as recurse }


//@ts-ignore
function __wrapper_callPromise(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  callPromise(decode<PromiseArgs, Obj>(obj, "args"));
}

export { __wrapper_callPromise as callPromise }


//@ts-ignore
function __wrapper_callbackWithName(): void {
  // Reading input bytes.
  input(0);
  let json_len = register_len(0);
  if (json_len == U32.MAX_VALUE) {
    panic();
  }
  let json = new Uint8Array(json_len as u32);
  read_register(0, <usize>json.buffer);
  const obj: Obj = JSON.parse(json);
  let result: MyCallbackResult = callbackWithName(decode<PromiseArgs, Obj>(obj, "args"));

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<MyCallbackResult>() || isNullable<MyCallbackResult>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<MyCallbackResult>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_callbackWithName as callbackWithName }


//@ts-ignore
function __wrapper_getLastResult(): void {
  let result: MyCallbackResult = getLastResult();

  let encoder = new JSONEncoder();
  let val: Uint8Array;
  if ((isString<MyCallbackResult>() || isNullable<MyCallbackResult>()) && result == null) {
    encoder.setNull(null);
    val = encoder.serialize();
  } else {
    val = encode<MyCallbackResult>(result, null, encoder);
  }
  value_return(val.byteLength, <usize>val.buffer);
}

export { __wrapper_getLastResult as getLastResult }

import {
  context,
  storage,
  ContractPromise,
  near,
  logging
} from "near-runtime-ts"
import {
  PromiseArgs,
  InputPromiseArgs,
  MyCallbackResult,
  MyContractPromiseResult
} from "./model"
import {
  u128
} from "bignum"
function hello(name: string): string {
  return "hello " + name;
}
function setKeyValue(key: string, value: string): void {
  storage.setString(key, value);
}
function getValueByKey(key: string): string {
  return storage.getString(key)!;
}
function setValue(value: string): string {
  storage.setString("name", value);
  return value;
}
function getValue(): string {
  return storage.getString("name")!;
}
function getAllKeys(): Array<string> {
  let keys = storage.keys("n");
  assert(keys.length == 1);
  assert(keys[0] == "name");
  return keys;
}
function benchmark(): Array<string> {
  let i = 0;
  while (i < 10) {
    storage.setString(i.toString(), "123123");
    i += 1;
  }
  return storage.keys("");
}
function benchmark_storage(n: i32): string {
  let i = 0;
  while (i < n) {
    storage.setString(i.toString(), i.toString());
    i += 1;
  }
  i = 0;
  let sum: u64 = 0;
  while (i < n) {
    let item = I32.parseInt(storage.getString(i.toString()));
    sum += item;
    i += 1;
  }
  return sum.toString();
}
function limited_storage(max_storage: u64): string {
  let i = 0;
  while (context.storageUsage <= max_storage) {
    i += 1;
    storage.setString(i.toString(), i.toString());
  }
  if (context.storageUsage > max_storage) {
    storage.delete(i.toString());
  }
  return i.toString();
}
function benchmark_sum_n(n: i32): string {
  let i = 0;
  let sum: u64 = 0;
  while (i < n) {
    sum += i;
    i += 1;
  }
  return sum.toString();
}
export function generateLogs(): void {
  storage.setString("item", "value");
  logging.log("log1");
  logging.log("log2");
}
function returnHiWithLogs(): string {
  logging.log("loooog1");
  logging.log("loooog2");
  return "Hi";
}
export function triggerAssert(): void {
  logging.log("log before assert");
  assert(false, "expected to fail");
}
function testSetRemove(value: string): void {
  storage.setString("test", value);
  storage.delete("test");
  assert(storage.getString("test") == null, "Item must be empty");
}
function buildString(n: i32): string {
  assert(n >= 0);
  let result = "";
  for (let i = 20; i >= 0; --i) {
    result = result + result;
    if ((n >> i) & 1) {
      result += "a";
    }
  }
  return result;
}
function insertStrings(from: i32, to: i32): void {
  let str = buildString(to);
  for (let i = from; i < to; i++) {
    storage.setString(str.substr(to - i) + "b", "x");
  }
}
function deleteStrings(from: i32, to: i32): void {
  let str = buildString(to);
  for (let i = to - 1; i >= from; i--) {
    storage.delete(str.substr(to - i) + "b");
  }
}
function recurse(n: i32): i32 {
  if (n <= 0) {
    return n;
  }
  return recurse(n - 1) + 1;
}
function callPromise(args: PromiseArgs): void {
  let inputArgs: InputPromiseArgs = {
    args: args.args
  };
  let balance = args.balance as u64;
  let promise = ContractPromise.create(args.receiver, args.methodName, inputArgs.encode().serialize(), new u128(args.balance), args.gas);
  if (args.callback) {
    inputArgs.args = args.callbackArgs;
    let callbackBalance = args.callbackBalance as u64;
    promise = promise.then(context.contractName, args.callback, inputArgs.encode().serialize(), new u128(callbackBalance), args.callbackGas);
  }
  promise.returnAsResult();
}
function callbackWithName(args: PromiseArgs): MyCallbackResult {
  let contractResults = ContractPromise.getResults();
  let allRes = Array.create<MyContractPromiseResult>(contractResults.length);
  for (let i = 0; i < contractResults.length; ++i) {
    allRes[i] = new MyContractPromiseResult();
    allRes[i].ok = (contractResults[i].success);
    if (allRes[i].ok && contractResults[i].buffer != null && contractResults[i].buffer.length > 0) {
      allRes[i].r = decode<MyCallbackResult>(contractResults[i].buffer);
    }
  }
  let result: MyCallbackResult = {
    rs: allRes,
    n: context.contractName
  };
  let bytes = result.encode().serialize();
  storage.setBytes("lastResult", bytes);
  return result;
}
function getLastResult(): MyCallbackResult {
  return decode<MyCallbackResult>(storage.getBytes("lastResult"));
}