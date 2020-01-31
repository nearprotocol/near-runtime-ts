[near-runtime-ts](../README.md) > ["collections/persistentTopn"](../modules/_collections_persistenttopn_.md) > [PersistentTopN](../classes/_collections_persistenttopn_.persistenttopn.md)

# Class: PersistentTopN

A TopN class that can return first N keys of a type K sorted by rating. Rating is stored as i32. Default sort order is descending (highest rated keys), but can be changed to ascending (lowest rated keys).

## Type parameters
#### K 
## Hierarchy

**PersistentTopN**

## Index

### Constructors

* [constructor](_collections_persistenttopn_.persistenttopn.md#constructor)

### Accessors

* [isEmpty](_collections_persistenttopn_.persistenttopn.md#isempty)
* [length](_collections_persistenttopn_.persistenttopn.md#length)

### Methods

* [contains](_collections_persistenttopn_.persistenttopn.md#contains)
* [delete](_collections_persistenttopn_.persistenttopn.md#delete)
* [getRating](_collections_persistenttopn_.persistenttopn.md#getrating)
* [getTop](_collections_persistenttopn_.persistenttopn.md#gettop)
* [getTopFromKey](_collections_persistenttopn_.persistenttopn.md#gettopfromkey)
* [getTopWithRating](_collections_persistenttopn_.persistenttopn.md#gettopwithrating)
* [getTopWithRatingFromKey](_collections_persistenttopn_.persistenttopn.md#gettopwithratingfromkey)
* [incrementRating](_collections_persistenttopn_.persistenttopn.md#incrementrating)
* [keysToRatings](_collections_persistenttopn_.persistenttopn.md#keystoratings)
* [setRating](_collections_persistenttopn_.persistenttopn.md#setrating)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new PersistentTopN**(prefix: *`string`*, descending?: *`bool`*): [PersistentTopN](_collections_persistenttopn_.persistenttopn.md)

*Defined in [collections/persistentTopn.ts:30](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L30)*

Creates or restores a persistent top N collection with a given storage prefix. Always use a unique storage prefix for different collections.

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| prefix | `string` | - |  A prefix to use for every key of this collection. |
| `Default value` descending | `bool` | true |  Sorting order of keys for rating. Default is descending (the highest rated keys). |

**Returns:** [PersistentTopN](_collections_persistenttopn_.persistenttopn.md)

___

## Accessors

<a id="isempty"></a>

###  isEmpty

**get isEmpty**(): `bool`

*Defined in [collections/persistentTopn.ts:75](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L75)*

**Returns:** `bool`
True if the TopN collection is empty.

___
<a id="length"></a>

###  length

**get length**(): `i32`

*Defined in [collections/persistentTopn.ts:83](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L83)*

**Returns:** `i32`
The number of unique elements in the TopN collection.

___

## Methods

<a id="contains"></a>

###  contains

▸ **contains**(key: *`K`*): `bool`

*Defined in [collections/persistentTopn.ts:104](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L104)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key to check. |

**Returns:** `bool`
True if the given key is present.

___
<a id="delete"></a>

###  delete

▸ **delete**(key: *`K`*): `void`

*Defined in [collections/persistentTopn.ts:112](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L112)*

Removes rating and the key from the collection.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  Key to remove. |

**Returns:** `void`

___
<a id="getrating"></a>

###  getRating

▸ **getRating**(key: *`K`*, defaultRating?: *`i32`*): `i32`

*Defined in [collections/persistentTopn.ts:184](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L184)*

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `K` | - |  Key of the element. |
| `Default value` defaultRating | `i32` | 0 |  The default rating to return if the key is not present. |

**Returns:** `i32`
Value for the given key or the defaultRating.

___
<a id="gettop"></a>

###  getTop

▸ **getTop**(limit: *`i32`*): `K`[]

*Defined in [collections/persistentTopn.ts:138](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L138)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| limit | `i32` |  The maximum limit of keys to return. |

**Returns:** `K`[]
The array of top rated keys.

___
<a id="gettopfromkey"></a>

###  getTopFromKey

▸ **getTopFromKey**(limit: *`i32`*, fromKey: *`K`*): `K`[]

*Defined in [collections/persistentTopn.ts:149](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L149)*

Returns a top list starting from the given key (exclusive). It's useful for pagination.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| limit | `i32` |  The maximum limit of keys to return. |
| fromKey | `K` |  The key from which return top list (exclisive). |

**Returns:** `K`[]
The array of top rated keys starting from the given key.

___
<a id="gettopwithrating"></a>

###  getTopWithRating

▸ **getTopWithRating**(limit: *`i32`*): [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]

*Defined in [collections/persistentTopn.ts:164](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L164)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| limit | `i32` |  The maximum limit of keys to return. |

**Returns:** [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]
The array of top rated keys with their corresponding rating.

___
<a id="gettopwithratingfromkey"></a>

###  getTopWithRatingFromKey

▸ **getTopWithRatingFromKey**(limit: *`i32`*, fromKey: *`K`*): [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]

*Defined in [collections/persistentTopn.ts:175](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L175)*

Returns a top list with rating starting from the given key (exclusive). It's useful for pagination.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| limit | `i32` |  The maximum limit of keys to return. |
| fromKey | `K` |  The key from which return top list (exclisive). |

**Returns:** [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]
The array of top rated keys with their rating starting from the given key.

___
<a id="incrementrating"></a>

###  incrementRating

▸ **incrementRating**(key: *`K`*, increment?: *`i32`*): `void`

*Defined in [collections/persistentTopn.ts:209](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L209)*

Increments rating of the given key by the given increment (1 by default).

**Parameters:**

| Name | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| key | `K` | - |  The key to update. |
| `Default value` increment | `i32` | 1 |  The increment value for the rating (1 by default). |

**Returns:** `void`

___
<a id="keystoratings"></a>

###  keysToRatings

▸ **keysToRatings**(keys: *`K`[]*): [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]

*Defined in [collections/persistentTopn.ts:125](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L125)*

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| keys | `K`[] |  The array of keys to lookup rating. |

**Returns:** [MapEntry](_collections_index_.collections.mapentry.md)<`K`, `i32`>[]
an array of key to rating pairs for the given keys.

___
<a id="setrating"></a>

###  setRating

▸ **setRating**(key: *`K`*, rating: *`i32`*): `void`

*Defined in [collections/persistentTopn.ts:193](https://github.com/nearprotocol/near-runtime-ts/blob/6995971/assembly/collections/persistentTopn.ts#L193)*

Sets the new rating for the given key.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | `K` |  The key to update. |
| rating | `i32` |  The new rating of the key. |

**Returns:** `void`

___

