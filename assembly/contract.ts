import { storage } from "./storage";
import {
  DATA_TYPE_ORIGINATOR_ACCOUNT_ID,
  DATA_TYPE_CURRENT_ACCOUNT_ID,
  DATA_TYPE_RESULT
} from "./types";
import {
  block_index,
  received_amount,
  frozen_balance,
  liquid_balance,
  storage_usage,
  deposit,
  withdraw,
  promise_create,
  promise_then,
  return_promise,
  promise_and,
  result_count,
  result_is_ok
} from "./imports";
import { ptrTo, UTF8Length, toUTF8 } from "./util";
import { u128 } from "bignum";


/**
 * Provides context for contract execution, including information about transaction sender, etc.
 */
class Context {
    /**
     * Account ID of transaction sender.
     */
    get sender(): string {
      // TODO: What if null?
      return storage._internalReadString(DATA_TYPE_ORIGINATOR_ACCOUNT_ID, 0, 0)!;
    }
  
    /**
     * Account ID of contract.
     */
    get contractName(): string {
      // TODO: What if null?
      return storage._internalReadString(DATA_TYPE_CURRENT_ACCOUNT_ID, 0, 0)!;
    }
  
    /**
     * Current block index.
     */
    get blockIndex(): u64 {
      return block_index();
    }
  
    /**
     * The amount of tokens received with this execution call.
     */
    get receivedAmount(): u128 {
      let buffer = new Uint8Array(16);
      received_amount(ptrTo(buffer));
      return u128.fromBytes(<Uint8Array>buffer);
    }
  
    /**
     * The amount of tokens that are locked in the account. Storage usage fee is deducted from this balance.
     */
    get frozenBalance(): u128 {
      let buffer = new Uint8Array(16);
      frozen_balance(ptrTo(buffer));
      return u128.fromBytes(<Uint8Array>buffer);
    }
  
    /**
     * The amount of tokens that can be used for running wasm, creating transactions, and sending to other contracts
     * through cross-contract calls.
     */
    get liquidBalance(): u128 {
      let buffer = new Uint8Array(16);
      liquid_balance(ptrTo(buffer));
      return u128.fromBytes(<Uint8Array>buffer);
    }
  
    /**
     * The current storage usage in bytes.
     */
    get storageUsage(): u64 {
      return storage_usage();
    }
  
    /**
     * Moves assets from liquid balance to frozen balance.
     * If there is enough liquid balance will deposit the maximum amount. Otherwise will deposit as much as possible.
     * Will fail if there is less than minimum amount on the liquid balance. Returns the deposited amount.
     */
    deposit(minAmount: u128, maxAmount: u128): u128 {
      let minAmountBuffer = minAmount.toUint8Array();
      let maxAmountBuffer = maxAmount.toUint8Array();
      let balanceBuffer = new Uint8Array(16);
      deposit(ptrTo(minAmountBuffer), ptrTo(maxAmountBuffer), ptrTo(balanceBuffer));
      return u128.fromBytes(<Uint8Array>balanceBuffer);
    }
  
     /**
     * Moves assets from frozen balance to liquid balance.
     * If there is enough frozen balance will withdraw the maximum amount. Otherwise will withdraw as much as possible.
     * Will fail if there is less than minimum amount on the frozen balance. Returns the withdrawn amount.
     */
    withdraw(minAmount: u128, maxAmount: u128): u128 {
       let minAmountBuffer = minAmount.toUint8Array();
       let maxAmountBuffer = maxAmount.toUint8Array();
       let balanceBuffer = new Uint8Array(16);
       withdraw(ptrTo(minAmountBuffer), ptrTo(maxAmountBuffer), ptrTo(balanceBuffer));
       return u128.fromBytes(<Uint8Array>balanceBuffer);
    }
  }
  
  export let context: Context = new Context();
  
  /**
   * Class to make asynchronous calls to other contracts and receive callbacks.
   * Here is an example on how to create a new async call with the callback.
   * ```
   * export function callMetaNear(): void {
   *   let itemArgs: AddItemArgs = {
   *     accountId: "alice.near",
   *     itemId: "Sword +9000",s
   *   };
   *   let promise = ContractPromise.create(
   *     "metanear",
   *     "addItem",
   *     itemArgs.encode(),
   *     0,
   *   );
   *   // Setting up args for the callback
   *   let requestArgs: OnItemAddedArgs = {
   *     "itemAddedRequestId": "UNIQUE_REQUEST_ID",
   *   };
   *   let callbackPromise = promise.then(
   *      "_onItemAdded",
   *      requestArgs.encode(),
   *      2,  // Attaching 2 additional requests, in case we need to do another call
   *   );
   *   callbackPromise.returnAsResult();
   * }
   * ```
   * See docs on used methods for more details.
   */
  export class ContractPromise {
    // Session-based unique promise ID. Don't preserve it longer than this execution.
    id: i32;
  
    constructor(id: i32){ this.id = id; }
  
    /**
     * Creates a new async call promise. Returns an instance of `ContractPromise`.
     * The call would be scheduled if the this current execution of the contract succeeds
     * without errors or failed asserts.
     * @param contractName Account ID of the remote contract to call. E.g. `metanear`.
     * @param methodName Method name on the remote contract to call. E.g. `addItem`.
     * @param args Serialized arguments to pass into the method. To get them create a new model
     *     specific for the method you calling, e.g. `AddItemArgs`. Then create an instance of it
     *     and populate arguments. After this, serialize it into bytes. E.g.
     *     ```
     *     let itemArgs: AddItemArgs = {
     *       accountId: "alice.near",
     *       itemId: "Sword +9000",
     *     };
     *     // Serialize args
     *     let args = itemArgs.encode();
     *     ```
     * @param amount The amount of tokens from your contract to be sent to the remote contract with this call.
     */
    static create(
        contractName: string,
        methodName: string,
        args: Uint8Array,
        amount: u128 = u128.Zero
    ): ContractPromise {
      return new ContractPromise(promise_create(
          UTF8Length(contractName) - 1, toUTF8(contractName),
          UTF8Length(methodName) - 1, toUTF8(methodName),
          args.byteLength, ptrTo(args), ptrTo(amount.toUint8Array())));
    }
  
    /**
     * Creating a callback for the AsyncCall Promise created with `create` method.
     * @param methodName Method name on your contract to be called to receive the callback.
     *     NOTE: Your callback method name can start with `_`, which would prevent other
     *     contracts from calling it directly. Only callbacks can call methods with `_` prefix.
     * @param args Serialized arguments on your callback method, see `create` for details.
     * @param amount The amount of tokens from the called contract to be sent to the current contract with this call.
     */
    then(
        methodName: string,
        args: Uint8Array,
        amount: u128
    ): ContractPromise {
      return new ContractPromise(
        promise_then(
          this.id,
          UTF8Length(methodName) - 1, toUTF8(methodName),
          args.byteLength, ptrTo(args),
          ptrTo(amount.toUint8Array())
      ));
    }
  
    /**
     * Returns the promise as a result of your function. Don't return any other results from the function.
     * Your current function should be `void` and shouldn't return anything else. E.g.
     * ```
     * export function callMetaNear(): void {
     *   let itemArgs: AddItemArgs = {
     *     accountId: "alice.near",
     *     itemId: "Sword +9000",
     *   };
     *   let promise = ContractPromise.create(
     *     "metanear",
     *     "addItem",
     *     itemArgs.encode(),
     *     0,
     *     0,
     *   );
     *   promise.returnAsResult();
     * }
     * ```
     *
     * Now when you call `callMetaNear` method, it creates new promise to `metanear` contract.
     * And saying that the result of the current execution depends on the result `addItem`.
     * Even though this contract is not going to be called with a callback, the contract which
     * calling `callMetaNear` would receive the result from `addItem`. This call essentially acts
     * as a proxy.
     *
     * You can also attach a callback on top of the promise before returning it, e.g.
     *
     * ```
     *   ...
     *   let promise = ContractPromise.create(
     *      ...
     *   );
     *   // Setting up args for the callback
     *   let requestArgs: OnItemAddedArgs = {
     *     "itemAddedRequestId": "UNIQUE_REQUEST_ID",
     *   };
     *   let callbackPromise = promise.then(
     *      "_onItemAdded",
     *      requestArgs.encode(),
     *      2,  // Attaching 2 additional requests, in case we need to do another call
     *   );
     *   callbackPromise.returnAsResult();
     * }
     * ```
     */
    returnAsResult(): void {
      return_promise(this.id);
    }
  
    /**
     * Joins multiple async call promises into one, to aggregate results before the callback.
     * NOTE: Given promises can only be new async calls and can't be callbacks.
     * Joined promise can't be returned as a result
     * @param promises List of async call promises to join.
     */
    static all(promises: ContractPromise[]): ContractPromise {
      assert(promises.length > 0);
      let id = promises[0].id;
      for (let i = 1; i < promises.length; i++) {
        id = promise_and(id, promises[i].id);
      }
      return new ContractPromise(id);
    }
  
    /**
     * Method to receive async (one or multiple) results from the remote contract in the callback.
     * Example of using it.
     * ```
     * // This function is prefixed with `_`, so other contracts or people can't call it directly.
     * export function _onItemAdded(itemAddedRequestId: string): bool {
     *   // Get all results
     *   let results = ContractPromise.getResults();
     *   let addItemResult = results[0];
     *   // Verifying the remote contract call succeeded.
     *   if (addItemResult.success) {
     *     // Decoding data from the bytes buffer into the local object.
     *     let data = AddItemResult.decode(addItemResult.buffer);
     *     if (data.itemPower > 9000) {
     *       return true;
     *     }
     *   }
     *   return false;
     * }
     * ```
     * @returns An array of results based on the number of promises the callback was created on.
     *     If the callback using `then` was scheduled only on one result, then one result will be returned.
     */
    static getResults() : ContractPromiseResult[] {
      let count = <i32>result_count();
      let results = Array.create<ContractPromiseResult>(count);
      for (let i = 0; i < count; i++) {
        let isOk = result_is_ok(i);
        if (!isOk) {
          results[i] = { success: false, buffer: null }
          continue;
        }
        let buffer = storage._internalReadBytes(DATA_TYPE_RESULT, 0, i);
        results[i] = { success: isOk, buffer: buffer };
      }
      return results;
    }
  }
  
  /**
   * Class to store results of the async calls on the remote contracts.
   */
  export class ContractPromiseResult {
    // Whether the execution of the remote call succeeded.
    success: bool;
    // Bytes data returned by the remote contract. Can be empty or null, if the remote
    // method returns `void`.
    buffer: Uint8Array | null;
  }
  