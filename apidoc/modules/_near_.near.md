[near-runtime-ts](../README.md) > ["near"](../modules/_near_.md) > [near](../modules/_near_.near.md)

# Module: near

## Index

### Functions

* [base58](_near_.near.md#base58)
* [bufferWithSize](_near_.near.md#bufferwithsize)
* [bufferWithSizeFromPtr](_near_.near.md#bufferwithsizefromptr)
* [decode](_near_.near.md#decode)
* [decodeArray](_near_.near.md#decodearray)
* [encode](_near_.near.md#encode)
* [encodeArray](_near_.near.md#encodearray)
* [hash](_near_.near.md#hash)
* [hash32](_near_.near.md#hash32)
* [log](_near_.near.md#log)
* [random32](_near_.near.md#random32)
* [randomBuffer](_near_.near.md#randombuffer)
* [str](_near_.near.md#str)
* [stringFromBytes](_near_.near.md#stringfrombytes)
* [utf8](_near_.near.md#utf8)

---

## Functions

<a id="base58"></a>

###  base58

▸ **base58**(source: *`Uint8Array`*): `string`

*Defined in [near.ts:396](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L396)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| source | `Uint8Array` |

**Returns:** `string`

___
<a id="bufferwithsize"></a>

###  bufferWithSize

▸ **bufferWithSize**(buf: *`Uint8Array`*): `Uint8Array`

*Defined in [near.ts:379](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L379)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| buf | `Uint8Array` |

**Returns:** `Uint8Array`

___
<a id="bufferwithsizefromptr"></a>

###  bufferWithSizeFromPtr

▸ **bufferWithSizeFromPtr**(ptr: *`usize`*, length: *`usize`*): `Uint8Array`

*Defined in [near.ts:369](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L369)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ptr | `usize` |
| length | `usize` |

**Returns:** `Uint8Array`

___
<a id="decode"></a>

###  decode

▸ **decode**<`T`>(buf: *`Uint8Array`*): `T`

*Defined in [near.ts:297](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L297)*

Decodes given value from the array of bytes. Supported types: bool, integers, floats and typed arrays. For common/dynamic arrays use {@link #decodeArray}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Uint8Array` |  Uin8Array of bytes to decode. |

**Returns:** `T`
A decoded value.

___
<a id="decodearray"></a>

###  decodeArray

▸ **decodeArray**<`T`>(buf: *`Uint8Array`*): `T`[]

*Defined in [near.ts:248](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L248)*

Decodes an array of type T from the given Uint8Array of bytes. Supported types: arrays of bools, integers and floats. For typed arrays use {@link #decode}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Uint8Array` |  Uin8Array of bytes to decode. |

**Returns:** `T`[]
A decoded array of type T.

___
<a id="encode"></a>

###  encode

▸ **encode**<`T`>(value: *`T`*): `Uint8Array`

*Defined in [near.ts:268](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L268)*

Encodes given value to an array of bytes. Supported types: bool, integers, floats and typed arrays. For common/dynamic arrays use {@link #encodeArray}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T` |  A value to encode. |

**Returns:** `Uint8Array`
An encoded value.

___
<a id="encodearray"></a>

###  encodeArray

▸ **encodeArray**<`T`>(value: *`T`[]*): `Uint8Array`

*Defined in [near.ts:229](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L229)*

Encodes a given array of type T into Uint8Array of bytes. Supported types: arrays of bools, integers and floats. For typed arrays use {@link #encode}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `T`[] |  An array to encode |

**Returns:** `Uint8Array`
An encoded array.

___
<a id="hash"></a>

###  hash

▸ **hash**<`T`>(data: *`T`*): `Uint8Array`

*Defined in [near.ts:325](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L325)*

Hash given data. Returns hash as 32-byte array.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `T` |  data can be passed as either Uint8Array or anything with .toString (hashed as UTF-8 string). |

**Returns:** `Uint8Array`

___
<a id="hash32"></a>

###  hash32

▸ **hash32**<`T`>(data: *`T`*): `u32`

*Defined in [near.ts:342](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L342)*

Hash given data. Returns hash as 32-bit integer.

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| data | `T` |  data can be passed as either Uint8Array or anything with .toString (hashed as UTF-8 string). |

**Returns:** `u32`

___
<a id="log"></a>

###  log

▸ **log**(msg: *`string`*): `void`

*Defined in [near.ts:383](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L383)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| msg | `string` |

**Returns:** `void`

___
<a id="random32"></a>

###  random32

▸ **random32**(): `u32`

*Defined in [near.ts:365](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L365)*

Returns random 32-bit integer.

**Returns:** `u32`

___
<a id="randombuffer"></a>

###  randomBuffer

▸ **randomBuffer**(len: *`u32`*): `Uint8Array`

*Defined in [near.ts:356](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L356)*

Returns random byte buffer of given length.

**Parameters:**

| Name | Type |
| ------ | ------ |
| len | `u32` |

**Returns:** `Uint8Array`

___
<a id="str"></a>

###  str

▸ **str**<`T`>(value: *`T`*): `string`

*Defined in [near.ts:387](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L387)*

**Type parameters:**

#### T 
**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `T` |

**Returns:** `string`

___
<a id="stringfrombytes"></a>

###  stringFromBytes

▸ **stringFromBytes**(buf: *`Uint8Array`*): `string`

*Defined in [near.ts:217](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L217)*

Converts A UTF-8 encoded Uint8Array of bytes to a string. It's helpful to debug encoded messages. E.g.

```
near.log(near.stringFromBytes(fooBarModel.encode()));
```

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| buf | `Uint8Array` |  A UTF-8 encoded Uint8 array of bytes to convert. |

**Returns:** `string`
Decoded string.

___
<a id="utf8"></a>

###  utf8

▸ **utf8**(value: *`string`*): `usize`

*Defined in [near.ts:392](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L392)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value | `string` |

**Returns:** `usize`

___

