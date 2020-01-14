//@nearfile out
/* Some of the API is already imported by the injection done in the compiler: https://github.com/nearprotocol/assemblyscript/compare/master...nearprotocol:runtime-rework?expand=1#diff-aa4c926de515a12e288da77300083aacR687 Do not re-import or remove it from compiler injection (if latter then compiler would not work without near.ts) */

export namespace runtime_api {
  // #############
  // # Registers #
  // #############
  //@ts-ignore
  export function read_register(register_id: u64, ptr: u64): void {
            //@ts-ignore
            _runtime_api.read_register(register_id, ptr);
         }
  //@ts-ignore
  export function register_len(register_id: u64) : u64 {
            //@ts-ignore
            return _runtime_api.register_len(register_id);
         }
  
  // ###############
  // # Context API #
  // ###############
  //@ts-ignore
  export function current_account_id(register_id: u64) : void {
           //@ts-ignore
           _runtime_api.current_account_id(register_id);
         }
  //@ts-ignore
  export function signer_account_id(register_id: u64) : void {
           //@ts-ignore
           _runtime_api.signer_account_id(register_id);
         }
  //@ts-ignore
  export function signer_account_pk(register_id: u64) : void {
           //@ts-ignore
           _runtime_api.signer_account_pk(register_id);
         }
  //@ts-ignore
  export function predecessor_account_id(register_id: u64) : void {
           //@ts-ignore
           _runtime_api.predecessor_account_id(register_id);
         }
  //@ts-ignore
  export function input(register_id: u64) : void {
           //@ts-ignore
           _runtime_api.input(register_id);
         }
  //@ts-ignore
  export function block_index() : u64 {
           //@ts-ignore
           return _runtime_api.block_index();
         }
  //@ts-ignore
  export function storage_usage() : u64 {
           //@ts-ignore
           return _runtime_api.storage_usage();
         }

  // #################
  // # Economics API #
  // #################
  //@ts-ignore
  export function account_balance(balance_ptr: u64) : void {
           //@ts-ignore
           _runtime_api.account_balance(balance_ptr);
         }
  //@ts-ignore
  export function attached_deposit(balance_ptr: u64) : void {
           //@ts-ignore
           _runtime_api.attached_deposit(balance_ptr);
         }
  //@ts-ignore
  export function prepaid_gas() : u64 {
           //@ts-ignore
           return _runtime_api.prepaid_gas();
         }
  //@ts-ignore
  export function used_gas() : u64 {
           //@ts-ignore
           return _runtime_api.used_gas();
         }

  // ############
  // # Math API #
  // ############
  //@ts-ignore
  export function random_seed(register_id: u64): void {
           //@ts-ignore
           _runtime_api.random_seed(register_id);
         }
  //@ts-ignore
  export function sha256(value_len: u64, value_ptr: u64, register_id: u64) : void {
           //@ts-ignore
           _runtime_api.sha256(value_len, value_ptr, register_id);
         }

  // #####################
  // # Miscellaneous API #
  // #####################
  //@ts-ignore
  export function value_return(value_len: u64, value_ptr: u64) : void {
           //@ts-ignore
           _runtime_api.value_return(value_len, value_ptr);
         }
  //@ts-ignore
  export function panic() : void {
           //@ts-ignore
           _runtime_api.panic();
         }
  //@ts-ignore
  export function log_utf8(len: u64, ptr: u64) : void {
           //@ts-ignore
           _runtime_api.log_utf8(len, ptr);
         }
  //@ts-ignore
  export function log_utf16(len: u64, ptr: u64) : void {
           //@ts-ignore
           _runtime_api.log_utf16(len, ptr);
         }
  //@ts-ignore
  export function abort(msg_ptr: u32, filename_ptr: u32, line: u32, col: u32) : void {
           //@ts-ignore
           _runtime_api.abort(msg_ptr, filename_ptr, line, col);
         }

  // ################
  // # Promises API #
  // ################
  //@ts-ignore
  export function promise_create(account_id_len: u64,account_id_ptr: u64,method_name_len: u64,method_name_ptr: u64,arguments_len: u64, arguments_ptr: u64, amount_ptr: u64, gas: u64) : u64 {
           //@ts-ignore
           return _runtime_api.promise_create(account_id_len,account_id_ptr, method_name_len, method_name_ptr, arguments_len, arguments_ptr, amount_ptr, gas);
         }
  //@ts-ignore
  export function promise_then(promise_index: u64, account_id_len: u64, account_id_ptr: u64, method_name_len: u64, method_name_ptr: u64, arguments_len: u64, arguments_ptr: u64, amount_ptr: u64, gas: u64) : u64 {
           //@ts-ignore
           return _runtime_api.promise_then(promise_index, account_id_len, account_id_ptr, method_name_len, method_name_ptr, arguments_len, arguments_ptr, amount_ptr, gas);
         }
  //@ts-ignore
  export function promise_and(promise_idx_ptr: u64, promise_idx_count: u64) : u64 {
           //@ts-ignore
           return _runtime_api.promise_and(promise_idx_ptr, promise_idx_count);
         }
  //@ts-ignore
  export function promise_results_count() : u64 {
           //@ts-ignore
           return _runtime_api.promise_results_count();
         }
  //@ts-ignore
  export function promise_result(result_idx: u64, register_id: u64) : u64 {
           //@ts-ignore
           return _runtime_api.promise_result(result_idx, register_id);
         }
  //@ts-ignore
  export function promise_return(promise_id: u64) : void {
           //@ts-ignore
           _runtime_api.promise_return(promise_id);
         }

  // ###############
  // # Storage API #
  // ###############
  //@ts-ignore
  export function storage_write(key_len: u64, key_ptr: u64, value_len: u64, value_ptr: u64, register_id: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_write(key_len, key_ptr, value_len, value_ptr, register_id);
         }
  //@ts-ignore
  export function storage_read(key_len: u64, key_ptr: u64, register_id: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_read(key_len, key_ptr, register_id);
         }
  //@ts-ignore
  export function storage_remove(key_len: u64, key_ptr: u64, register_id: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_remove(key_len, key_ptr, register_id);
         }
  //@ts-ignore
  export function storage_has_key(key_len: u64, key_ptr: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_has_key(key_len, key_ptr);
         }
  //@ts-ignore
  export function storage_iter_prefix(prefix_len: u64, prefix_ptr: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_iter_prefix(prefix_len, prefix_ptr);
         }
  //@ts-ignore
  export function storage_iter_range(start_len: u64, start_ptr: u64, end_len: u64, end_ptr: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_iter_range(start_len, start_ptr, end_len, end_ptr);
         }
  //@ts-ignore
  export function storage_iter_next(iterator_id: u64, key_register_id: u64, value_register_id: u64) : u64 {
           //@ts-ignore
           return _runtime_api.storage_iter_next(iterator_id, key_register_id, value_register_id);
         }
  //@ts-ignore
  // Function for the injected gas counter. Automatically called by the gas meter.
  export function gas(gas_amount: u32) : void {
           //@ts-ignore
           _runtime_api.gas(gas_amount);
         }
}
