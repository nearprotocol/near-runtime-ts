/**
 * Mock Version
 */
//@ts-ignore
@global
namespace _runtime_api {
  // #############
  // # Registers #
  // #############
  export function read_register(register_id: u64, ptr: u64): void {
    RegisterFile.read_register(register_id, ptr);
  }

  export function register_len(register_id: u64) : u64 {
    return RegisterFile.register_len(register_id);
  }

  
  // ###############
  // # Context API #
  // ###############
  export function current_account_id(register_id: u64) : void {
  
  }
  export function signer_account_id(register_id: u64) : void {
  
  }

  export function signer_account_pk(register_id: u64) : void {
  
  }

  export function predecessor_account_id(register_id: u64) : void {
  
  }

  export function input(register_id: u64) : void {
    
  }

  export function block_index() : u64 {
    return 0;
  }

  export function storage_usage() : u64 {
    return 0;
  }


  // #################
  // # Economics API #
  // #################
  export function account_balance(balance_ptr: u64) : void {
  
  }

  export function attached_deposit(balance_ptr: u64) : void {
  
  }

  export function prepaid_gas() : u64 {
    return 0;
  }

  export function used_gas() : u64 {
    return 0;
  }


  // ############
  // # Math API #
  // ############
  export function random_seed(register_id: u64): void {
  
  }

  export function sha256(value_len: u64, value_ptr: u64, register_id: u64) : void {
  
  }


  // #####################
  // # Miscellaneous API #
  // #####################
  export function value_return(value_len: u64, value_ptr: u64) : void {
  
  }

  export function panic() : void {
    unreachable();
  }

  export function log_utf8(len: u64, ptr: u64) : void {
  
  }

  export function log_utf16(len: u64, ptr: u64) : void {

  }

  export function abort(msg_ptr: u32, filename_ptr: u32, line: u32, col: u32) : void {

  }

  // ################
  // # Promises API #
  // ################
  export function promise_create(account_id_len: u64,account_id_ptr: u64,method_name_len: u64,method_name_ptr: u64,arguments_len: u64, arguments_ptr: u64, amount_ptr: u64, gas: u64) : u64 {
    return 0;
  }

  export function promise_then( promise_index: u64, account_id_len: u64, account_id_ptr: u64, method_name_len: u64, method_name_ptr: u64, arguments_len: u64, arguments_ptr: u64, amount_ptr: u64, gas: u64 ) : u64 {
    return 0;
  }

  export function promise_and(promise_idx_ptr: u64, promise_idx_count: u64) : u64 {
    return 0;
  }

  export function promise_results_count() : u64 {
    return 0;
  }

  export function promise_result(result_idx: u64, register_id: u64) : u64 {
    return 0;
  }

  export function promise_return(promise_id: u64) : void {
  
  }


  // ###############
  // # Storage API #
  // ###############
  export function storage_write(key_len: u64, key_ptr: u64, value_len: u64, value_ptr: u64, register_id: u64) : u64 {
    return 0;
  }

  export function storage_read(key_len: u64, key_ptr: u64, register_id: u64) : u64 {
    return 0;
  }

  export function storage_remove(key_len: u64, key_ptr: u64, register_id: u64) : u64 {
    return 0;
  }

  export function storage_has_key(key_len: u64, key_ptr: u64) : u64 {
    return 0;
  }

  export function storage_iter_prefix(prefix_len: u64, prefix_ptr: u64) : u64 {
    return 0;
  }

  export function storage_iter_range(start_len: u64, start_ptr: u64, end_len: u64, end_ptr: u64) : u64 {
    return 0;
  }

  export function storage_iter_next(iterator_id: u64, key_register_id: u64, value_register_id: u64) : u64 {
    return 0;
  }

  // Function for the injected gas counter. Automatically called by the gas meter.
  export function gas(gas_amount: u32) : void {
  
  }

}

class RegisterFile {
  static registers: Map<u64, ArrayBuffer> = new Map();
  static current: u64;

  static register_len(id: u64): u64 {
    const reg = this.registers.get(id);
    if (reg == null) {
      return U32.MAX_VALUE;
    }
    return reg.byteLength;
  }

  static read_register(id: u64, ptr: u64) {
    const reg = this.registers.get(id);
    if (reg == null) {
      _runtime_api.panic()
    }
  }
}