[near-runtime-ts](../README.md) > ["collections/persistentDeque"](../modules/_collections_persistentdeque_.md) > [PersistentDeque](../classes/_collections_persistentdeque_.persistentdeque.md)

# Class: PersistentDeque

A deque class that implements a persistent bidirectional queue.

## Type parameters
#### T 
## Hierarchy

**PersistentDeque**

## Index

### Constructors

* [constructor](_collections_persistentdeque_.persistentdeque.md#constructor)

### Accessors

* [back](_collections_persistentdeque_.persistentdeque.md#back)
* [first](_collections_persistentdeque_.persistentdeque.md#first)
* [front](_collections_persistentdeque_.persistentdeque.md#front)
* [isEmpty](_collections_persistentdeque_.persistentdeque.md#isempty)
* [last](_collections_persistentdeque_.persistentdeque.md#last)
* [length](_collections_persistentdeque_.persistentdeque.md#length)

### Methods

* [containsIndex](_collections_persistentdeque_.persistentdeque.md#containsindex)
* [popBack](_collections_persistentdeque_.persistentdeque.md#popback)
* [popFront](_collections_persistentdeque_.persistentdeque.md#popfront)
* [pushBack](_collections_persistentdeque_.persistentdeque.md#pushback)
* [pushFront](_collections_persistentdeque_.persistentdeque.md#pushfront)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PersistentDeque**(prefix: *`string`*): [PersistentDeque](_collections_persistentdeque_.persistentdeque.md)

*Defined in [collections/persistentDeque.ts:12](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L12)*

Creates or restores a persistent deque with a given storage prefix. Always use a unique storage prefix for different collections.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| prefix | `string` |  A prefix to use for every key of this deque. |

**Returns:** [PersistentDeque](_collections_persistentdeque_.persistentdeque.md)

___

## Accessors

<a id="back"></a>

###  back

**get back**(): `T`

*Defined in [collections/persistentDeque.ts:205](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L205)*

**Returns:** `T`
The last/back element of the deque.

___
<a id="first"></a>

###  first

**get first**(): `T`

*Defined in [collections/persistentDeque.ts:172](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L172)*

**Returns:** `T`
The first/front element of the deque.

___
<a id="front"></a>

###  front

**get front**(): `T`

*Defined in [collections/persistentDeque.ts:164](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L164)*

**Returns:** `T`
The first/front element of the deque.

___
<a id="isempty"></a>

###  isEmpty

**get isEmpty**(): `bool`

*Defined in [collections/persistentDeque.ts:89](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L89)*

**Returns:** `bool`
True if the deque is empty.

___
<a id="last"></a>

###  last

**get last**(): `T`

*Defined in [collections/persistentDeque.ts:213](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L213)*

**Returns:** `T`
The last/back element of the deque.

___
<a id="length"></a>

###  length

**get length**(): `i32`

*Defined in [collections/persistentDeque.ts:82](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L82)*

**Returns:** `i32`
The length of the deque.

___

## Methods

<a id="containsindex"></a>

###  containsIndex

▸ **containsIndex**(index: *`i32`*): `bool`

*Defined in [collections/persistentDeque.ts:75](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L75)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| index | `i32` |  The index to check. |

**Returns:** `bool`
True if the given index is within the range of the deque indices.

___
<a id="popback"></a>

###  popBack

▸ **popBack**(): `T`

*Defined in [collections/persistentDeque.ts:193](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L193)*

Removes the last/back element from the deque and returns it. Asserts that the deque is not empty. Decreases the length of the deque.

**Returns:** `T`
The removed first element of the queue.

___
<a id="popfront"></a>

###  popFront

▸ **popFront**(): `T`

*Defined in [collections/persistentDeque.ts:153](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L153)*

Removes the first/front element from the deque and returns it. Asserts that the deque is not empty. Decreases the length of the deque.

**Returns:** `T`
The removed first element of the queue.

___
<a id="pushback"></a>

###  pushBack

▸ **pushBack**(element: *`T`*): `i32`

*Defined in [collections/persistentDeque.ts:181](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L181)*

Adds a new element to the end of the deque. Increases the length of the deque.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| element | `T` |  A new element to add. |

**Returns:** `i32`
The index of a newly added element

___
<a id="pushfront"></a>

###  pushFront

▸ **pushFront**(element: *`T`*): `i32`

*Defined in [collections/persistentDeque.ts:142](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentDeque.ts#L142)*

Adds a new element in front of the deque. Increases the length of the deque.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| element | `T` |  A new element to add. |

**Returns:** `i32`
The index of a newly added element

___

