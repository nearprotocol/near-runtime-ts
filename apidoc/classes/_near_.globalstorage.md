[near-runtime-ts](../README.md) > ["near"](../modules/_near_.md) > [GlobalStorage](../classes/_near_.globalstorage.md)

# Class: GlobalStorage

Represents contract storage.

For now it's just simple key-value store with prefix queries.

## Hierarchy

**GlobalStorage**

## Index

### Methods

* [get](_near_.globalstorage.md#get)
* [getArray](_near_.globalstorage.md#getarray)
* [getBytes](_near_.globalstorage.md#getbytes)
* [getItem](_near_.globalstorage.md#getitem)
* [getString](_near_.globalstorage.md#getstring)
* [getU64](_near_.globalstorage.md#getu64)
* [keys](_near_.globalstorage.md#keys)
* [removeItem](_near_.globalstorage.md#removeitem)
* [set](_near_.globalstorage.md#set)
* [setArray](_near_.globalstorage.md#setarray)
* [setBytes](_near_.globalstorage.md#setbytes)
* [setItem](_near_.globalstorage.md#setitem)
* [setString](_near_.globalstorage.md#setstring)
* [setU64](_near_.globalstorage.md#setu64)

---

## Methods

<a id="get"></a>

###  get

▸ **get**<`T`>(key: *`string`*): `T`

*Defined in [near.ts:183](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L183)*

Gets given generic value stored under the key. Key is encoded as UTF-8 strings. Supported types: bools, integers, floats, string and typed arrays. For common/dynamic arrays use {@link #getArray}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  A key to read from storage. |

**Returns:** `T`
A value of type T stored under the given key.

___
<a id="getarray"></a>

###  getArray

▸ **getArray**<`T`>(key: *`string`*): `T`[]

*Defined in [near.ts:199](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L199)*

Gets given array of a generic type stored under the key. Key is encoded as UTF-8 strings. Supported types: arrays of bools, integers and floats. For typed arrays use {@link #get}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  A key to read from storage. |

**Returns:** `T`[]
An array of type T stored under the given key.

___
<a id="getbytes"></a>

###  getBytes

▸ **getBytes**(key: *`string`*): `Uint8Array`

*Defined in [near.ts:112](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L112)*

Get byte array stored under given key. Key is encoded as UTF-8 strings. Byte array stored as is.

It's convenient to use this together with `DomainObject.decode()`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `Uint8Array`

___
<a id="getitem"></a>

###  getItem

▸ **getItem**(key: *`string`*): `string`

*Defined in [near.ts:70](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L70)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `string`

___
<a id="getstring"></a>

###  getString

▸ **getString**(key: *`string`*): `string`

*Defined in [near.ts:84](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L84)*

Get string value stored under given key. Both key and value are encoded as UTF-8 strings.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `string`

___
<a id="getu64"></a>

###  getU64

▸ **getU64**(key: *`string`*): `u64`

*Defined in [near.ts:141](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L141)*

Get 64-bit unsigned int stored under given key. Key is encoded as UTF-8 strings. Number is encoded as decimal string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `u64`
int value or 0 if value is not found

___
<a id="keys"></a>

###  keys

▸ **keys**(prefix: *`string`*): `string`[]

*Defined in [near.ts:52](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L52)*

Returns list of keys starting with given prefix.

NOTE: Must be very careful to avoid exploding amount of compute with this method. Make sure there is a hard limit on number of keys returned even if contract state size grows.

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `string` |

**Returns:** `string`[]

___
<a id="removeitem"></a>

###  removeItem

▸ **removeItem**(key: *`string`*): `void`

*Defined in [near.ts:123](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L123)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**<`T`>(key: *`string`*, value: *`T`*): `void`

*Defined in [near.ts:154](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L154)*

Stores given generic value under the key. Key is encoded as UTF-8 strings. Unless the value is a string type, it's encoded as bytes. Supported types: bools, integers, floats, string and typed arrays. For common/dynamic arrays use {@link #setArray}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  A key to use for storage. |
| value | `T` |  A value to store. |

**Returns:** `void`

___
<a id="setarray"></a>

###  setArray

▸ **setArray**<`T`>(key: *`string`*, value: *`T`[]*): `void`

*Defined in [near.ts:171](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L171)*

Stores given generic value under the key. Key is encoded as UTF-8 strings. Unless the value is a string type, it's encoded as bytes. Supported types: arrays of bools, integers and floats. For typed arrays use {@link #set}

**Type parameters:**

#### T 
**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `string` |  A key to use for storage. |
| value | `T`[] |  An array to store. |

**Returns:** `void`

___
<a id="setbytes"></a>

###  setBytes

▸ **setBytes**(key: *`string`*, value: *`Uint8Array`*): `void`

*Defined in [near.ts:102](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L102)*

Store byte array under given key. Key is encoded as UTF-8 strings. Byte array stored as is.

It's convenient to use this together with `domainObject.encode()`.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `Uint8Array` |

**Returns:** `void`

___
<a id="setitem"></a>

###  setItem

▸ **setItem**(key: *`string`*, value: *`string`*): `void`

*Defined in [near.ts:67](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L67)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `string` |

**Returns:** `void`

___
<a id="setstring"></a>

###  setString

▸ **setString**(key: *`string`*, value: *`string`*): `void`

*Defined in [near.ts:77](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L77)*

Store string value under given key. Both key and value are encoded as UTF-8 strings.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `string` |

**Returns:** `void`

___
<a id="setu64"></a>

###  setU64

▸ **setU64**(key: *`string`*, value: *`u64`*): `void`

*Defined in [near.ts:131](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L131)*

Store 64-bit unsigned int under given key. Key is encoded as UTF-8 strings. Number is encoded as decimal string.

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `string` |
| value | `u64` |

**Returns:** `void`

___

