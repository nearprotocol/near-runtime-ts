//@ts-ignore decorators are valid
@external("env", "storage_write")
export declare function storage_write(key_len: usize, key_ptr: usize, value_len: usize, value_ptr: usize): void;
//@ts-ignore decorators are valid
@external("env", "storage_remove")
export declare function storage_remove(key_len: usize, key_ptr: usize): void;
//@ts-ignore decorators are valid
@external("env", "storage_has_key")
export declare function storage_has_key(key_len: usize, key_ptr: usize): bool;
//@ts-ignore decorators are valid
@external("env", "storage_iter")
export declare function storage_iter(prefix_len: usize, prefix_ptr: usize): u32;
//@ts-ignore decorators are valid
@external("env", "storage_range")
export declare function storage_range(start_len: usize, start_ptr: usize, end_len: usize, end_ptr: usize): u32;
//@ts-ignore decorators are valid
@external("env", "storage_iter_next")
export declare function storage_iter_next(id: u32): u32;

//@ts-ignore decorators are valid
@external("env", "result_count")
export declare function result_count(): u32;
//@ts-ignore decorators are valid
@external("env", "result_is_ok")
export declare function result_is_ok(index: u32): bool;

//@ts-ignore decorators are valid
@external("env", "return_value")
export declare function return_value(value_len: usize, value_ptr: usize): void;
//@ts-ignore decorators are valid
@external("env", "return_promise")
export declare function return_promise(promise_index: u32): void;

//@ts-ignore decorators are valid
@external("env", "data_read")
export declare function data_read(type_index: u32, key_len: usize, key: usize, max_buf_len: usize, buf_ptr: usize): usize;

//@ts-ignore decorators are valid
@external("env", "promise_create")
export declare function promise_create(
    account_id_len: usize, account_id_ptr: usize,
    method_name_len: usize, method_name_ptr: usize,
    args_len: usize, args_ptr: usize,
    amount_ptr: usize): u32;

//@ts-ignore decorators are valid
@external("env", "promise_then")
export declare function promise_then(
    promise_index: u32,
    method_name_len: usize, method_name_ptr: usize,
    args_len: usize, args_ptr: usize,
    amount_ptr: usize): u32;

//@ts-ignore decorators are valid
@external("env", "promise_and")
export declare function promise_and(promise_index1: u32, promise_index2: u32): u32;

//@ts-ignore decorators are valid
@external("env", "check_ethash")
export declare function check_ethash(
    block_number: u64,
    header_hash_ptr: usize, header_hash_len: u32,
    nonce: u64,
    mix_hash_ptr: usize, mix_hash_len: u32,
    difficulty: u64
): bool;

/**
 * @hidden
 * Hash buffer is 32 bytes
 */
//@ts-ignore decorators are valid
@external("env", "hash")
export declare function _near_hash(value_len: usize, value_ptr: usize, buf_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "hash32")
export declare function _near_hash32(value_len: usize, value_ptr: usize): u32;

/**
 * @hidden
 * Fills given buffer with random u8.
 */
//@ts-ignore decorators are valid
@external("env", "random_buf")
export declare function _near_random_buf(buf_len: u32, buf_ptr: usize): void

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "random32")
export declare function random32(): u32;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "log")
export declare function _near_log(str: string): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "frozen_balance")
export declare function frozen_balance(balance_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "liquid_balance")
export declare function liquid_balance(balance_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "storage_usage")
export declare function storage_usage(): u64;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "deposit")
export declare function deposit(min_amount_ptr: usize, max_amount_ptr: usize, balance_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "withdraw")
export declare function withdraw(min_amount_ptr: usize, max_amount_ptr: usize, balance_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "received_amount")
export declare function received_amount(balance_ptr: usize): void;

/**
 * @hidden
 */
//@ts-ignore decorators are valid
@external("env", "block_index")
export declare function block_index(): u64;