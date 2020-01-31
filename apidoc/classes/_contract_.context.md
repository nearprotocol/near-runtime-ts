[near-runtime-ts](../README.md) > ["contract"](../modules/_contract_.md) > [Context](../classes/_contract_.context.md)

# Class: Context

Provides context for contract execution, including information about transaction sender, etc.

## Hierarchy

**Context**

## Index

### Accessors

* [accountBalance](_contract_.context.md#accountbalance)
* [attachedDeposit](_contract_.context.md#attacheddeposit)
* [blockIndex](_contract_.context.md#blockindex)
* [contractName](_contract_.context.md#contractname)
* [prepaidGas](_contract_.context.md#prepaidgas)
* [receivedAmount](_contract_.context.md#receivedamount)
* [sender](_contract_.context.md#sender)
* [storageUsage](_contract_.context.md#storageusage)
* [usedGas](_contract_.context.md#usedgas)

---

## Accessors

<a id="accountbalance"></a>

###  accountBalance

**get accountBalance**(): `u128`

*Defined in [contract.ts:54](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L54)*

The amount of tokens received with this execution call.

*__deprecated__*: use attachedDeposit.

**Returns:** `u128`

___
<a id="attacheddeposit"></a>

###  attachedDeposit

**get attachedDeposit**(): `u128`

*Defined in [contract.ts:44](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L44)*

The amount of tokens received with this execution call.

*__deprecated__*: use attachedDeposit.

**Returns:** `u128`

___
<a id="blockindex"></a>

###  blockIndex

**get blockIndex**(): `u64`

*Defined in [contract.ts:28](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L28)*

Current block index.

**Returns:** `u64`

___
<a id="contractname"></a>

###  contractName

**get contractName**(): `string`

*Defined in [contract.ts:20](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L20)*

Account ID of contract.

**Returns:** `string`

___
<a id="prepaidgas"></a>

###  prepaidGas

**get prepaidGas**(): `u64`

*Defined in [contract.ts:63](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L63)*

Get the amount of prepaid gas attached to the call (in units of gas).

**Returns:** `u64`

___
<a id="receivedamount"></a>

###  receivedAmount

**get receivedAmount**(): `u128`

*Defined in [contract.ts:36](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L36)*

The amount of tokens received with this execution call.

*__deprecated__*: use attachedDeposit.

**Returns:** `u128`

___
<a id="sender"></a>

###  sender

**get sender**(): `string`

*Defined in [contract.ts:12](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L12)*

Account ID of transaction sender.

**Returns:** `string`

___
<a id="storageusage"></a>

###  storageUsage

**get storageUsage**(): `u64`

*Defined in [contract.ts:77](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L77)*

The current storage usage in bytes.

**Returns:** `u64`

___
<a id="usedgas"></a>

###  usedGas

**get usedGas**(): `u64`

*Defined in [contract.ts:70](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/contract.ts#L70)*

Get the amount of gas (in units of gas) that was already burnt during the contract execution and attached to promises (cannot exceed prepaid gas).

**Returns:** `u64`

___

