[near-runtime-ts](../README.md) > ["near"](../modules/_near_.md)

# External module: "near"

## Index

### Modules

* [near](_near_.near.md)

### Classes

* [ContractContext](../classes/_near_.contractcontext.md)
* [ContractPromise](../classes/_near_.contractpromise.md)
* [ContractPromiseResult](../classes/_near_.contractpromiseresult.md)
* [GlobalStorage](../classes/_near_.globalstorage.md)

### Type aliases

* [BufferTypeIndex](_near_.md#buffertypeindex)

### Variables

* [BUFFER_TYPE_CURRENT_ACCOUNT_ID](_near_.md#buffer_type_current_account_id)
* [BUFFER_TYPE_ORIGINATOR_ACCOUNT_ID](_near_.md#buffer_type_originator_account_id)
* [contractContext](_near_.md#contractcontext-1)
* [globalStorage](_near_.md#globalstorage-1)

### Functions

* [input_read_into](_near_.md#input_read_into)
* [input_read_len](_near_.md#input_read_len)
* [promise_and](_near_.md#promise_and)
* [promise_create](_near_.md#promise_create)
* [promise_then](_near_.md#promise_then)
* [read_into](_near_.md#read_into)
* [read_len](_near_.md#read_len)
* [result_count](_near_.md#result_count)
* [result_is_ok](_near_.md#result_is_ok)
* [result_read_into](_near_.md#result_read_into)
* [result_read_len](_near_.md#result_read_len)
* [return_promise](_near_.md#return_promise)
* [return_value](_near_.md#return_value)
* [storage_iter](_near_.md#storage_iter)
* [storage_iter_next](_near_.md#storage_iter_next)
* [storage_iter_peek_into](_near_.md#storage_iter_peek_into)
* [storage_iter_peek_len](_near_.md#storage_iter_peek_len)
* [storage_read_into](_near_.md#storage_read_into)
* [storage_read_len](_near_.md#storage_read_len)
* [storage_remove](_near_.md#storage_remove)
* [storage_write](_near_.md#storage_write)

---

## Type aliases

<a id="buffertypeindex"></a>

###  BufferTypeIndex

**Ƭ BufferTypeIndex**: *`u32`*

*Defined in [near.ts:1](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L1)*

___

## Variables

<a id="buffer_type_current_account_id"></a>

### `<Const>` BUFFER_TYPE_CURRENT_ACCOUNT_ID

**● BUFFER_TYPE_CURRENT_ACCOUNT_ID**: *[BufferTypeIndex](_near_.md#buffertypeindex)* = 2

*Defined in [near.ts:4](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L4)*

___
<a id="buffer_type_originator_account_id"></a>

### `<Const>` BUFFER_TYPE_ORIGINATOR_ACCOUNT_ID

**● BUFFER_TYPE_ORIGINATOR_ACCOUNT_ID**: *[BufferTypeIndex](_near_.md#buffertypeindex)* = 1

*Defined in [near.ts:3](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L3)*

___
<a id="contractcontext-1"></a>

### `<Let>` contractContext

**● contractContext**: *[ContractContext](../classes/_near_.contractcontext.md)* =  new ContractContext()

*Defined in [near.ts:205](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L205)*

___
<a id="globalstorage-1"></a>

### `<Let>` globalStorage

**● globalStorage**: *[GlobalStorage](../classes/_near_.globalstorage.md)* =  new GlobalStorage()

*Defined in [near.ts:204](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L204)*

___

## Functions

<a id="input_read_into"></a>

###  input_read_into

▸ **input_read_into**(ptr: *`usize`*): `void`

*Defined in [near.ts:518](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L518)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| ptr | `usize` |

**Returns:** `void`

___
<a id="input_read_len"></a>

###  input_read_len

▸ **input_read_len**(): `usize`

*Defined in [near.ts:516](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L516)*

**Returns:** `usize`

___
<a id="promise_and"></a>

###  promise_and

▸ **promise_and**(promise_index1: *`u32`*, promise_index2: *`u32`*): `u32`

*Defined in [near.ts:546](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L546)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promise_index1 | `u32` |
| promise_index2 | `u32` |

**Returns:** `u32`

___
<a id="promise_create"></a>

###  promise_create

▸ **promise_create**(account_id: *`usize`*, method_name: *`usize`*, args: *`usize`*, mana: *`u32`*, amount: *`u64`*): `u32`

*Defined in [near.ts:540](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L540)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| account_id | `usize` |
| method_name | `usize` |
| args | `usize` |
| mana | `u32` |
| amount | `u64` |

**Returns:** `u32`

___
<a id="promise_then"></a>

###  promise_then

▸ **promise_then**(promise_index: *`u32`*, method_name: *`usize`*, args: *`usize`*, mana: *`u32`*): `u32`

*Defined in [near.ts:543](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L543)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promise_index | `u32` |
| method_name | `usize` |
| args | `usize` |
| mana | `u32` |

**Returns:** `u32`

___
<a id="read_into"></a>

###  read_into

▸ **read_into**(type_index: *`u32`*, key: *`usize`*, value: *`usize`*): `void`

*Defined in [near.ts:537](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L537)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type_index | `u32` |
| key | `usize` |
| value | `usize` |

**Returns:** `void`

___
<a id="read_len"></a>

###  read_len

▸ **read_len**(type_index: *`u32`*, key: *`usize`*): `u32`

*Defined in [near.ts:535](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L535)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| type_index | `u32` |
| key | `usize` |

**Returns:** `u32`

___
<a id="result_count"></a>

###  result_count

▸ **result_count**(): `u32`

*Defined in [near.ts:521](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L521)*

**Returns:** `u32`

___
<a id="result_is_ok"></a>

###  result_is_ok

▸ **result_is_ok**(index: *`u32`*): `bool`

*Defined in [near.ts:523](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L523)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `u32` |

**Returns:** `bool`

___
<a id="result_read_into"></a>

###  result_read_into

▸ **result_read_into**(index: *`u32`*, value: *`usize`*): `void`

*Defined in [near.ts:527](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L527)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `u32` |
| value | `usize` |

**Returns:** `void`

___
<a id="result_read_len"></a>

###  result_read_len

▸ **result_read_len**(index: *`u32`*): `u32`

*Defined in [near.ts:525](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L525)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| index | `u32` |

**Returns:** `u32`

___
<a id="return_promise"></a>

###  return_promise

▸ **return_promise**(promise_index: *`u32`*): `void`

*Defined in [near.ts:532](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L532)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promise_index | `u32` |

**Returns:** `void`

___
<a id="return_value"></a>

###  return_value

▸ **return_value**(value_ptr: *`usize`*): `void`

*Defined in [near.ts:530](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L530)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| value_ptr | `usize` |

**Returns:** `void`

___
<a id="storage_iter"></a>

###  storage_iter

▸ **storage_iter**(prefix: *`usize`*): `u32`

*Defined in [near.ts:507](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L507)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| prefix | `usize` |

**Returns:** `u32`

___
<a id="storage_iter_next"></a>

###  storage_iter_next

▸ **storage_iter_next**(id: *`u32`*): `u32`

*Defined in [near.ts:509](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L509)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `u32` |

**Returns:** `u32`

___
<a id="storage_iter_peek_into"></a>

###  storage_iter_peek_into

▸ **storage_iter_peek_into**(id: *`u32`*, value: *`usize`*): `void`

*Defined in [near.ts:513](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L513)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `u32` |
| value | `usize` |

**Returns:** `void`

___
<a id="storage_iter_peek_len"></a>

###  storage_iter_peek_len

▸ **storage_iter_peek_len**(id: *`u32`*): `usize`

*Defined in [near.ts:511](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L511)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| id | `u32` |

**Returns:** `usize`

___
<a id="storage_read_into"></a>

###  storage_read_into

▸ **storage_read_into**(key: *`usize`*, value: *`usize`*): `void`

*Defined in [near.ts:503](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L503)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `usize` |
| value | `usize` |

**Returns:** `void`

___
<a id="storage_read_len"></a>

###  storage_read_len

▸ **storage_read_len**(key: *`usize`*): `usize`

*Defined in [near.ts:501](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L501)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `usize` |

**Returns:** `usize`

___
<a id="storage_remove"></a>

###  storage_remove

▸ **storage_remove**(key: *`usize`*): `void`

*Defined in [near.ts:505](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L505)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `usize` |

**Returns:** `void`

___
<a id="storage_write"></a>

###  storage_write

▸ **storage_write**(key: *`usize`*, value: *`usize`*): `void`

*Defined in [near.ts:499](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L499)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| key | `usize` |
| value | `usize` |

**Returns:** `void`

___

