[near-runtime-ts](../README.md) > ["near"](../modules/_near_.md) > [ContractPromise](../classes/_near_.contractpromise.md)

# Class: ContractPromise

## Hierarchy

**ContractPromise**

## Index

### Properties

* [id](_near_.contractpromise.md#id)

### Methods

* [returnAsResult](_near_.contractpromise.md#returnasresult)
* [then](_near_.contractpromise.md#then)
* [all](_near_.contractpromise.md#all)
* [create](_near_.contractpromise.md#create)
* [getResults](_near_.contractpromise.md#getresults)

---

## Properties

<a id="id"></a>

###  id

**● id**: *`i32`*

*Defined in [near.ts:451](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L451)*

___

## Methods

<a id="returnasresult"></a>

###  returnAsResult

▸ **returnAsResult**(): `void`

*Defined in [near.ts:461](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L461)*

**Returns:** `void`

___
<a id="then"></a>

###  then

▸ **then**(methodName: *`string`*, args: *`Uint8Array`*, mana: *`u32`*): [ContractPromise](_near_.contractpromise.md)

*Defined in [near.ts:457](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L457)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| methodName | `string` |
| args | `Uint8Array` |
| mana | `u32` |

**Returns:** [ContractPromise](_near_.contractpromise.md)

___
<a id="all"></a>

### `<Static>` all

▸ **all**(promises: *[ContractPromise](_near_.contractpromise.md)[]*): [ContractPromise](_near_.contractpromise.md)

*Defined in [near.ts:465](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L465)*

**Parameters:**

| Name | Type |
| ------ | ------ |
| promises | [ContractPromise](_near_.contractpromise.md)[] |

**Returns:** [ContractPromise](_near_.contractpromise.md)

___
<a id="create"></a>

### `<Static>` create

▸ **create**(contractName: *`string`*, methodName: *`string`*, args: *`Uint8Array`*, mana: *`u32`*, amount?: *`u64`*): [ContractPromise](_near_.contractpromise.md)

*Defined in [near.ts:453](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L453)*

**Parameters:**

| Name | Type | Default value |
| ------ | ------ | ------ |
| contractName | `string` | - |
| methodName | `string` | - |
| args | `Uint8Array` | - |
| mana | `u32` | - |
| `Default value` amount | `u64` | 0 |

**Returns:** [ContractPromise](_near_.contractpromise.md)

___
<a id="getresults"></a>

### `<Static>` getResults

▸ **getResults**(): [ContractPromiseResult](_near_.contractpromiseresult.md)[]

*Defined in [near.ts:473](https://github.com/nearprotocol/near-runtime-ts/blob/3c38d38/near.ts#L473)*

**Returns:** [ContractPromiseResult](_near_.contractpromiseresult.md)[]

___

