(module
 (type $FUNCSIG$iii (func (param i32 i32) (result i32)))
 (type $FUNCSIG$vi (func (param i32)))
 (type $FUNCSIG$ii (func (param i32) (result i32)))
 (type $FUNCSIG$v (func))
 (type $FUNCSIG$vj (func (param i64)))
 (type $FUNCSIG$jj (func (param i64) (result i64)))
 (type $FUNCSIG$iiii (func (param i32 i32 i32) (result i32)))
 (type $FUNCSIG$viiii (func (param i32 i32 i32 i32)))
 (type $FUNCSIG$viii (func (param i32 i32 i32)))
 (type $FUNCSIG$vjj (func (param i64 i64)))
 (type $FUNCSIG$i (func (result i32)))
 (type $FUNCSIG$iiiiii (func (param i32 i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$vii (func (param i32 i32)))
 (type $FUNCSIG$iiiii (func (param i32 i32 i32 i32) (result i32)))
 (type $FUNCSIG$viij (func (param i32 i32 i64)))
 (type $FUNCSIG$ij (func (param i64) (result i32)))
 (type $FUNCSIG$iij (func (param i32 i64) (result i32)))
 (type $FUNCSIG$jjjjjj (func (param i64 i64 i64 i64 i64) (result i64)))
 (type $FUNCSIG$jjjj (func (param i64 i64 i64) (result i64)))
 (type $FUNCSIG$jjj (func (param i64 i64) (result i64)))
 (type $FUNCSIG$iiji (func (param i32 i64 i32) (result i32)))
 (type $FUNCSIG$viji (func (param i32 i64 i32)))
 (type $FUNCSIG$jii (func (param i32 i32) (result i64)))
 (type $FUNCSIG$ji (func (param i32) (result i64)))
 (type $FUNCSIG$j (func (result i64)))
 (type $FUNCSIG$vij (func (param i32 i64)))
 (type $FUNCSIG$iijj (func (param i32 i64 i64) (result i32)))
 (type $FUNCSIG$iiiiji (func (param i32 i32 i32 i64 i32) (result i32)))
 (type $FUNCSIG$jjjjjjjjj (func (param i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (type $FUNCSIG$iiiiiji (func (param i32 i32 i32 i32 i64 i32) (result i32)))
 (type $FUNCSIG$jjjjjjjjjj (func (param i64 i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "input" (func $~lib/nearEntry/input (param i64)))
 (import "env" "register_len" (func $~lib/nearEntry/register_len (param i64) (result i64)))
 (import "env" "panic" (func $~lib/nearEntry/panic))
 (import "env" "abort" (func $~lib/builtins/abort (param i32 i32 i32 i32)))
 (import "env" "read_register" (func $~lib/nearEntry/read_register (param i64 i64)))
 (import "env" "value_return" (func $~lib/nearEntry/value_return (param i64 i64)))
 (import "env" "storage_write" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write (param i64 i64 i64 i64 i64) (result i64)))
 (import "env" "storage_read" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_read (param i64 i64 i64) (result i64)))
 (import "env" "register_len" (func $~lib/near-runtime-ts/runtime_api/runtime_api.register_len (param i64) (result i64)))
 (import "env" "read_register" (func $~lib/near-runtime-ts/runtime_api/runtime_api.read_register (param i64 i64)))
 (import "env" "storage_iter_prefix" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_prefix (param i64 i64) (result i64)))
 (import "env" "storage_iter_next" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_next (param i64 i64 i64) (result i64)))
 (import "env" "storage_usage" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_usage (result i64)))
 (import "env" "storage_remove" (func $~lib/near-runtime-ts/runtime_api/runtime_api.storage_remove (param i64 i64 i64) (result i64)))
 (import "env" "log_utf8" (func $~lib/near-runtime-ts/runtime_api/runtime_api.log_utf8 (param i64 i64)))
 (import "env" "promise_create" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_create (param i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "current_account_id" (func $~lib/near-runtime-ts/runtime_api/runtime_api.current_account_id (param i64)))
 (import "env" "promise_then" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_then (param i64 i64 i64 i64 i64 i64 i64 i64 i64) (result i64)))
 (import "env" "promise_return" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_return (param i64)))
 (import "env" "promise_results_count" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_results_count (result i64)))
 (import "env" "promise_result" (func $~lib/near-runtime-ts/runtime_api/runtime_api.promise_result (param i64 i64) (result i64)))
 (memory $0 1)
 (data (i32.const 8) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00:\00l\00e\00n\00")
 (data (i32.const 32) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\00:\00f\00r\00o\00n\00t\00")
 (data (i32.const 64) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00:\00b\00a\00c\00k\00")
 (data (i32.const 96) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00:\00:\00")
 (data (i32.const 120) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00:\00r\00")
 (data (i32.const 144) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00t\00r\00u\00e\00")
 (data (i32.const 168) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00f\00a\00l\00s\00e\00")
 (data (i32.const 200) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00u\00l\00l\00")
 (data (i32.const 224) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\000\00")
 (data (i32.const 248) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\009\00")
 (data (i32.const 272) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00A\00")
 (data (i32.const 296) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00a\00")
 (data (i32.const 320) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\000\001\002\003\004\005\006\007\008\009\00a\00b\00c\00d\00e\00f\00")
 (data (i32.const 368) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00=\00")
 (data (i32.const 392) "\80\00\00\00\01\00\00\00\01\00\00\00\80\00\00\00A\00B\00C\00D\00E\00F\00G\00H\00I\00J\00K\00L\00M\00N\00O\00P\00Q\00R\00S\00T\00U\00V\00W\00X\00Y\00Z\00a\00b\00c\00d\00e\00f\00g\00h\00i\00j\00k\00l\00m\00n\00o\00p\00q\00r\00s\00t\00u\00v\00w\00x\00y\00z\000\001\002\003\004\005\006\007\008\009\00+\00/\00")
 (data (i32.const 536) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00I\00n\00v\00a\00l\00i\00d\00 \00l\00e\00n\00g\00t\00h\00")
 (data (i32.const 584) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00b\00u\00f\00f\00e\00r\00.\00t\00s\00")
 (data (i32.const 640) "^\00\00\00\01\00\00\00\01\00\00\00^\00\00\00E\00l\00e\00m\00e\00n\00t\00 \00t\00y\00p\00e\00 \00m\00u\00s\00t\00 \00b\00e\00 \00n\00u\00l\00l\00a\00b\00l\00e\00 \00i\00f\00 \00a\00r\00r\00a\00y\00 \00i\00s\00 \00h\00o\00l\00e\00y\00")
 (data (i32.const 752) "\1a\00\00\00\01\00\00\00\01\00\00\00\1a\00\00\00~\00l\00i\00b\00/\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 800) "\00\00\00\00\01\00\00\00\01\00\00\00\00\00\00\00")
 (data (i32.const 816) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00n\00d\00e\00x\00 \00o\00u\00t\00 \00o\00f\00 \00r\00a\00n\00g\00e\00")
 (data (i32.const 872) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00~\00l\00i\00b\00/\00t\00y\00p\00e\00d\00a\00r\00r\00a\00y\00.\00t\00s\00")
 (data (i32.const 928) "(\00\00\00\01\00\00\00\01\00\00\00(\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00i\00n\00p\00u\00t\00 \00e\00n\00d\00")
 (data (i32.const 984) "F\00\00\00\01\00\00\00\01\00\00\00F\00\00\00~\00l\00i\00b\00/\00a\00s\00s\00e\00m\00b\00l\00y\00s\00c\00r\00i\00p\00t\00-\00j\00s\00o\00n\00/\00d\00e\00c\00o\00d\00e\00r\00.\00t\00s\00")
 (data (i32.const 1072) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00{\00")
 (data (i32.const 1096) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00~\00l\00i\00b\00/\00r\00t\00/\00s\00t\00u\00b\00.\00t\00s\00")
 (data (i32.const 1144) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00}\00")
 (data (i32.const 1168) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00,\00")
 (data (i32.const 1192) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00,\00\'\00")
 (data (i32.const 1232) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\"\00")
 (data (i32.const 1256) ":\00\00\00\01\00\00\00\01\00\00\00:\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00d\00o\00u\00b\00l\00e\00-\00q\00u\00o\00t\00e\00d\00 \00s\00t\00r\00i\00n\00g\00")
 (data (i32.const 1336) "8\00\00\00\01\00\00\00\01\00\00\008\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00c\00o\00n\00t\00r\00o\00l\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00")
 (data (i32.const 1408) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00~\00l\00i\00b\00/\00s\00t\00r\00i\00n\00g\00.\00t\00s\00")
 (data (i32.const 1456) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\\\00")
 (data (i32.const 1480) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00/\00")
 (data (i32.const 1504) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00b\00")
 (data (i32.const 1528) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\08\00")
 (data (i32.const 1552) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00n\00")
 (data (i32.const 1576) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\n\00")
 (data (i32.const 1600) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00r\00")
 (data (i32.const 1624) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\0d\00")
 (data (i32.const 1648) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00t\00")
 (data (i32.const 1672) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\t\00")
 (data (i32.const 1696) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00u\00")
 (data (i32.const 1720) "&\00\00\00\01\00\00\00\01\00\00\00&\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00\\\00u\00 \00d\00i\00g\00i\00t\00")
 (data (i32.const 1776) "<\00\00\00\01\00\00\00\01\00\00\00<\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00s\00c\00a\00p\00e\00d\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00:\00 \00")
 (data (i32.const 1856) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00:\00")
 (data (i32.const 1880) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00:\00\'\00")
 (data (i32.const 1920) "0\00\00\00\01\00\00\00\01\00\00\000\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00n\00d\00 \00o\00f\00 \00o\00b\00j\00e\00c\00t\00")
 (data (i32.const 1984) "\1c\00\00\00\01\00\00\00\01\00\00\00\1c\00\00\00A\00r\00r\00a\00y\00 \00i\00s\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 2032) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00[\00")
 (data (i32.const 2056) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00]\00")
 (data (i32.const 2080) ".\00\00\00\01\00\00\00\01\00\00\00.\00\00\00U\00n\00e\00x\00p\00e\00c\00t\00e\00d\00 \00e\00n\00d\00 \00o\00f\00 \00a\00r\00r\00a\00y\00")
 (data (i32.const 2144) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00E\00x\00p\00e\00c\00t\00e\00d\00 \00\'\00")
 (data (i32.const 2184) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00\'\00")
 (data (i32.const 2208) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00-\00")
 (data (i32.const 2232) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00C\00a\00n\00n\00o\00t\00 \00p\00a\00r\00s\00e\00 \00J\00S\00O\00N\00")
 (data (i32.const 2288) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00n\00a\00m\00e\00")
 (data (i32.const 2312) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00K\00e\00y\00 \00d\00o\00e\00s\00 \00n\00o\00t\00 \00e\00x\00i\00s\00t\00")
 (data (i32.const 2368) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00~\00l\00i\00b\00/\00m\00a\00p\00.\00t\00s\00")
 (data (i32.const 2408) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00V\00a\00l\00u\00e\00 \00w\00i\00t\00h\00 \00K\00e\00y\00:\00 \00")
 (data (i32.const 2456) "0\00\00\00\01\00\00\00\01\00\00\000\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00 \00s\00t\00r\00i\00n\00g\00 \00o\00r\00 \00n\00u\00l\00l\00")
 (data (i32.const 2520) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00~\00l\00i\00b\00/\00n\00e\00a\00r\00E\00n\00t\00r\00y\00.\00t\00s\00")
 (data (i32.const 2576) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\00h\00e\00l\00l\00o\00 \00")
 (data (i32.const 2608) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00\"\00")
 (data (i32.const 2632) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00\\\00")
 (data (i32.const 2656) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00b\00")
 (data (i32.const 2680) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00n\00")
 (data (i32.const 2704) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00r\00")
 (data (i32.const 2728) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00\\\00t\00")
 (data (i32.const 2752) "H\00\00\00\01\00\00\00\01\00\00\00H\00\00\00U\00n\00s\00u\00p\00p\00o\00r\00t\00e\00d\00 \00c\00o\00n\00t\00r\00o\00l\00 \00c\00h\00a\00r\00a\00c\00t\00e\00r\00 \00c\00o\00d\00e\00:\00 \00")
 (data (i32.const 2840) "\90\01\00\00\01\00\00\00\00\00\00\00\90\01\00\000\000\000\001\000\002\000\003\000\004\000\005\000\006\000\007\000\008\000\009\001\000\001\001\001\002\001\003\001\004\001\005\001\006\001\007\001\008\001\009\002\000\002\001\002\002\002\003\002\004\002\005\002\006\002\007\002\008\002\009\003\000\003\001\003\002\003\003\003\004\003\005\003\006\003\007\003\008\003\009\004\000\004\001\004\002\004\003\004\004\004\005\004\006\004\007\004\008\004\009\005\000\005\001\005\002\005\003\005\004\005\005\005\006\005\007\005\008\005\009\006\000\006\001\006\002\006\003\006\004\006\005\006\006\006\007\006\008\006\009\007\000\007\001\007\002\007\003\007\004\007\005\007\006\007\007\007\008\007\009\008\000\008\001\008\002\008\003\008\004\008\005\008\006\008\007\008\008\008\009\009\000\009\001\009\002\009\003\009\004\009\005\009\006\009\007\009\008\009\009\00")
 (data (i32.const 3256) "\10\00\00\00\01\00\00\00\18\00\00\00\10\00\00\00(\0b\00\00(\0b\00\00\90\01\00\00d\00\00\00")
 (data (i32.const 3288) "F\00\00\00\01\00\00\00\01\00\00\00F\00\00\00~\00l\00i\00b\00/\00a\00s\00s\00e\00m\00b\00l\00y\00s\00c\00r\00i\00p\00t\00-\00j\00s\00o\00n\00/\00e\00n\00c\00o\00d\00e\00r\00.\00t\00s\00")
 (data (i32.const 3376) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00k\00e\00y\00")
 (data (i32.const 3400) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00v\00a\00l\00u\00e\00")
 (data (i32.const 3432) ",\00\00\00\01\00\00\00\01\00\00\00,\00\00\00a\00s\00s\00e\00m\00b\00l\00y\00/\00h\00e\00l\00l\00o\00/\00m\00a\00i\00n\00.\00t\00s\00")
 (data (i32.const 3496) "\0c\00\00\00\01\00\00\00\01\00\00\00\0c\00\00\001\002\003\001\002\003\00")
 (data (i32.const 3528) "\n\00\00\00\01\00\00\00\01\00\00\00\n\00\00\00K\00e\00y\00:\00 \00")
 (data (i32.const 3560) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00 \00w\00i\00t\00h\00 \00t\00y\00p\00e\00 \00")
 (data (i32.const 3600) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00i\003\002\00")
 (data (i32.const 3624) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00i\00s\00 \00n\00o\00t\00 \00n\00u\00l\00l\00a\00b\00l\00e\00.\00")
 (data (i32.const 3672) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00n\00 \00I\00n\00t\00e\00g\00e\00r\00")
 (data (i32.const 3728) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00m\00a\00x\00_\00s\00t\00o\00r\00a\00g\00e\00")
 (data (i32.const 3768) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00u\006\004\00")
 (data (i32.const 3792) "~\00\00\00\01\00\00\00\01\00\00\00~\00\00\00 \00i\00s\00 \00a\00n\00 \006\004\00-\00b\00i\00t\00 \00i\00n\00t\00e\00g\00e\00r\00 \00a\00n\00d\00 \00i\00s\00 \00e\00x\00p\00e\00c\00t\00e\00d\00 \00t\00o\00 \00b\00e\00 \00e\00n\00c\00o\00d\00e\00d\00 \00a\00s\00 \00a\00 \00s\00t\00r\00i\00n\00g\00")
 (data (i32.const 3936) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00l\00o\00o\00o\00o\00g\001\00")
 (data (i32.const 3968) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00l\00o\00o\00o\00o\00g\002\00")
 (data (i32.const 4000) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00H\00i\00")
 (data (i32.const 4024) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00t\00e\00s\00t\00")
 (data (i32.const 4048) "$\00\00\00\01\00\00\00\01\00\00\00$\00\00\00I\00t\00e\00m\00 \00m\00u\00s\00t\00 \00b\00e\00 \00e\00m\00p\00t\00y\00")
 (data (i32.const 4104) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00f\00r\00o\00m\00")
 (data (i32.const 4128) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00t\00o\00")
 (data (i32.const 4152) "\02\00\00\00\01\00\00\00\01\00\00\00\02\00\00\00x\00")
 (data (i32.const 4176) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00a\00r\00g\00s\00")
 (data (i32.const 4200) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00P\00r\00o\00m\00i\00s\00e\00A\00r\00g\00s\00")
 (data (i32.const 4240) "2\00\00\00\01\00\00\00\01\00\00\002\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00n\00 \00o\00b\00j\00e\00c\00t\00 \00o\00r\00 \00n\00u\00l\00l\00")
 (data (i32.const 4312) "\10\00\00\00\01\00\00\00\01\00\00\00\10\00\00\00r\00e\00c\00e\00i\00v\00e\00r\00")
 (data (i32.const 4344) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00m\00e\00t\00h\00o\00d\00N\00a\00m\00e\00")
 (data (i32.const 4384) "\06\00\00\00\01\00\00\00\01\00\00\00\06\00\00\00g\00a\00s\00")
 (data (i32.const 4408) "\0e\00\00\00\01\00\00\00\01\00\00\00\0e\00\00\00b\00a\00l\00a\00n\00c\00e\00")
 (data (i32.const 4440) "\10\00\00\00\01\00\00\00\01\00\00\00\10\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00")
 (data (i32.const 4472) "\18\00\00\00\01\00\00\00\01\00\00\00\18\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00A\00r\00g\00s\00")
 (data (i32.const 4512) "\1e\00\00\00\01\00\00\00\01\00\00\00\1e\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00B\00a\00l\00a\00n\00c\00e\00")
 (data (i32.const 4560) "\16\00\00\00\01\00\00\00\01\00\00\00\16\00\00\00c\00a\00l\00l\00b\00a\00c\00k\00G\00a\00s\00")
 (data (i32.const 4600) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00r\00s\00")
 (data (i32.const 4624) "2\00\00\00\01\00\00\00\01\00\00\002\00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00n\00 \00a\00r\00r\00a\00y\00 \00o\00r\00 \00n\00u\00l\00l\00.\00")
 (data (i32.const 4696) ".\00\00\00\01\00\00\00\01\00\00\00.\00\00\00M\00y\00C\00o\00n\00t\00r\00a\00c\00t\00P\00r\00o\00m\00i\00s\00e\00R\00e\00s\00u\00l\00t\00")
 (data (i32.const 4760) "\04\00\00\00\01\00\00\00\01\00\00\00\04\00\00\00o\00k\00")
 (data (i32.const 4784) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00b\00o\00o\00l\00")
 (data (i32.const 4808) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00 \00i\00s\00 \00n\00o\00t\00 \00a\00 \00s\00t\00r\00i\00n\00g\00")
 (data (i32.const 4856) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00M\00y\00C\00a\00l\00l\00b\00a\00c\00k\00R\00e\00s\00u\00l\00t\00")
 (data (i32.const 4904) "\14\00\00\00\01\00\00\00\01\00\00\00\14\00\00\00l\00a\00s\00t\00R\00e\00s\00u\00l\00t\00")
 (data (i32.const 4944) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00i\00t\00e\00m\00")
 (data (i32.const 4968) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00l\00o\00g\001\00")
 (data (i32.const 4992) "\08\00\00\00\01\00\00\00\01\00\00\00\08\00\00\00l\00o\00g\002\00")
 (data (i32.const 5016) "\"\00\00\00\01\00\00\00\01\00\00\00\"\00\00\00l\00o\00g\00 \00b\00e\00f\00o\00r\00e\00 \00a\00s\00s\00e\00r\00t\00")
 (data (i32.const 5072) " \00\00\00\01\00\00\00\01\00\00\00 \00\00\00e\00x\00p\00e\00c\00t\00e\00d\00 \00t\00o\00 \00f\00a\00i\00l\00")
 (data (i32.const 5120) "!\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\001\00\00\00\02\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\07\00\00\00\98 A\00\00\00\00\00\93 \00\00\02\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\0b\00\00\00\10\00\00\00\0c\00\00\00\93 \00\00\02\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\07\00\00\00\93\04\00\00\02\00\00\00\10\00\00\00\07\00\00\00\10\00\00\00\07\00\00\00\10\00\00\00\07\00\00\00\10\00\00\00\07\00\00\00\10\00\00\00\00\00\00\00\93\00\00\00\02\00\00\00\00\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\10\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\00\83 \00\00\02\00\00\00\10\00\00\00\00\00\00\00\93 \00\00\02\00\00\00")
 (table $0 1 funcref)
 (elem (i32.const 0) $null)
 (global $~lib/rt/stub/startOffset (mut i32) (i32.const 0))
 (global $~lib/rt/stub/offset (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/storage/storage (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_LENGTH_SUFFIX i32 (i32.const 24))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_FRONT_INDEX_SUFFIX i32 (i32.const 48))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_BACK_INDEX_SUFFIX i32 (i32.const 80))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_ELEMENT_SUFFIX i32 (i32.const 112))
 (global $~lib/near-runtime-ts/collections/index/collections._KEY_RATING_SUFFIX i32 (i32.const 136))
 (global $~lib/near-runtime-ts/collections/index/collections._RATING_OFFSET i64 (i64.const 2147483648))
 (global $~lib/assemblyscript-json/decoder/TRUE_STR i32 (i32.const 160))
 (global $~lib/assemblyscript-json/decoder/FALSE_STR i32 (i32.const 184))
 (global $~lib/assemblyscript-json/decoder/NULL_STR i32 (i32.const 216))
 (global $~lib/assemblyscript-json/decoder/CHAR_0 (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_9 (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_A (mut i32) (i32.const 0))
 (global $~lib/assemblyscript-json/decoder/CHAR_A_LOWER (mut i32) (i32.const 0))
 (global $~lib/bignum/utils/HEX_CHARS i32 (i32.const 336))
 (global $~lib/bignum/globals/__divmod_quot_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__divmod_quot_hi (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__divmod_rem (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__res128_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__res128_hi (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__float_u128_lo (mut i64) (i64.const 0))
 (global $~lib/bignum/globals/__float_u128_hi (mut i64) (i64.const 0))
 (global $~lib/near-runtime-ts/contract/context (mut i32) (i32.const 0))
 (global $~lib/near-runtime-ts/base64/base64.PADCHAR i32 (i32.const 384))
 (global $~lib/near-runtime-ts/base64/base64.ALPHA i32 (i32.const 408))
 (global $~lib/builtins/u32.MAX_VALUE i32 (i32.const -1))
 (global $~lib/number/U32.MAX_VALUE i32 (i32.const -1))
 (global $~lib/ASC_SHRINK_LEVEL i32 (i32.const 0))
 (global $~lib/nearEntry/JSON.handler (mut i32) (i32.const 0))
 (global $~lib/nearEntry/JSON.decoder (mut i32) (i32.const 0))
 (global $~lib/argc (mut i32) (i32.const 0))
 (global $~lib/builtins/i32.MAX_VALUE i32 (i32.const 2147483647))
 (global $~lib/rt/__rtti_base i32 (i32.const 5120))
 (global $~lib/heap/__heap_base i32 (i32.const 5388))
 (export "memory" (memory $0))
 (export "__alloc" (func $~lib/rt/stub/__alloc))
 (export "__retain" (func $~lib/rt/stub/__retain))
 (export "__release" (func $~lib/rt/stub/__release))
 (export "__collect" (func $~lib/rt/stub/__collect))
 (export "__rtti_base" (global $~lib/rt/__rtti_base))
 (export "hello" (func $assembly/hello/main/__wrapper_hello))
 (export "setKeyValue" (func $assembly/hello/main/__wrapper_setKeyValue))
 (export "getValueByKey" (func $assembly/hello/main/__wrapper_getValueByKey))
 (export "setValue" (func $assembly/hello/main/__wrapper_setValue))
 (export "getValue" (func $assembly/hello/main/__wrapper_getValue))
 (export "getAllKeys" (func $assembly/hello/main/__wrapper_getAllKeys))
 (export "benchmark" (func $assembly/hello/main/__wrapper_benchmark))
 (export "benchmark_storage" (func $assembly/hello/main/__wrapper_benchmark_storage))
 (export "limited_storage" (func $assembly/hello/main/__wrapper_limited_storage))
 (export "benchmark_sum_n" (func $assembly/hello/main/__wrapper_benchmark_sum_n))
 (export "returnHiWithLogs" (func $assembly/hello/main/__wrapper_returnHiWithLogs))
 (export "testSetRemove" (func $assembly/hello/main/__wrapper_testSetRemove))
 (export "insertStrings" (func $assembly/hello/main/__wrapper_insertStrings))
 (export "deleteStrings" (func $assembly/hello/main/__wrapper_deleteStrings))
 (export "recurse" (func $assembly/hello/main/__wrapper_recurse))
 (export "callPromise" (func $assembly/hello/main/__wrapper_callPromise))
 (export "callbackWithName" (func $assembly/hello/main/__wrapper_callbackWithName))
 (export "getLastResult" (func $assembly/hello/main/__wrapper_getLastResult))
 (export "generateLogs" (func $assembly/hello/main/generateLogs))
 (export "triggerAssert" (func $assembly/hello/main/triggerAssert))
 (start $start)
 (func $~lib/rt/stub/maybeGrowMemory (; 21 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  memory.size
  local.set $1
  local.get $1
  i32.const 16
  i32.shl
  local.set $2
  local.get $0
  local.get $2
  i32.gt_u
  if
   local.get $0
   local.get $2
   i32.sub
   i32.const 65535
   i32.add
   i32.const 65535
   i32.const -1
   i32.xor
   i32.and
   i32.const 16
   i32.shr_u
   local.set $3
   local.get $1
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
   local.set $4
   local.get $4
   memory.grow
   i32.const 0
   i32.lt_s
   if
    local.get $3
    memory.grow
    i32.const 0
    i32.lt_s
    if
     unreachable
    end
   end
  end
  local.get $0
  global.set $~lib/rt/stub/offset
 )
 (func $~lib/rt/stub/__alloc (; 22 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 1073741808
  i32.gt_u
  if
   unreachable
  end
  global.get $~lib/rt/stub/offset
  i32.const 16
  i32.add
  local.set $2
  local.get $0
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  local.tee $3
  i32.const 16
  local.tee $4
  local.get $3
  local.get $4
  i32.gt_u
  select
  local.set $5
  local.get $2
  local.get $5
  i32.add
  call $~lib/rt/stub/maybeGrowMemory
  local.get $2
  i32.const 16
  i32.sub
  local.set $6
  local.get $6
  local.get $5
  i32.store
  local.get $6
  i32.const -1
  i32.store offset=4
  local.get $6
  local.get $1
  i32.store offset=8
  local.get $6
  local.get $0
  i32.store offset=12
  local.get $2
 )
 (func $~lib/rt/stub/__retain (; 23 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
 )
 (func $~lib/near-runtime-ts/storage/Storage#constructor (; 24 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 3
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $start:~lib/near-runtime-ts/storage (; 25 ;) (type $FUNCSIG$v)
  global.get $~lib/heap/__heap_base
  i32.const 15
  i32.add
  i32.const 15
  i32.const -1
  i32.xor
  i32.and
  global.set $~lib/rt/stub/startOffset
  global.get $~lib/rt/stub/startOffset
  global.set $~lib/rt/stub/offset
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#constructor
  global.set $~lib/near-runtime-ts/storage/storage
 )
 (func $~lib/string/String#get:length (; 26 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.const 1
  i32.shr_u
 )
 (func $~lib/string/String#charCodeAt (; 27 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  call $~lib/string/String#get:length
  i32.ge_u
  if
   i32.const -1
   return
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  i32.load16_u
 )
 (func $start:~lib/assemblyscript-json/decoder (; 28 ;) (type $FUNCSIG$v)
  i32.const 240
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_0
  i32.const 264
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_9
  i32.const 288
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_A
  i32.const 312
  i32.const 0
  call $~lib/string/String#charCodeAt
  global.set $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
 )
 (func $start:~lib/assemblyscript-json/index (; 29 ;) (type $FUNCSIG$v)
  call $start:~lib/assemblyscript-json/decoder
 )
 (func $start:~lib/bignum/integer/u128 (; 30 ;) (type $FUNCSIG$v)
  call $start:~lib/assemblyscript-json/index
 )
 (func $start:~lib/bignum/integer/index (; 31 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/integer/u128
 )
 (func $start:~lib/bignum/index (; 32 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/integer/index
 )
 (func $~lib/near-runtime-ts/contract/Context#constructor (; 33 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 4
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $start:~lib/near-runtime-ts/contract (; 34 ;) (type $FUNCSIG$v)
  call $start:~lib/bignum/index
  i32.const 0
  call $~lib/near-runtime-ts/contract/Context#constructor
  global.set $~lib/near-runtime-ts/contract/context
 )
 (func $start:~lib/near-runtime-ts/index (; 35 ;) (type $FUNCSIG$v)
  call $start:~lib/near-runtime-ts/storage
  call $start:~lib/near-runtime-ts/contract
 )
 (func $start:~lib/rt/index-stub (; 36 ;) (type $FUNCSIG$v)
  call $start:~lib/near-runtime-ts/index
 )
 (func $~lib/rt/stub/__release (; 37 ;) (type $FUNCSIG$vi) (param $0 i32)
  nop
 )
 (func $~lib/rt/stub/__collect (; 38 ;) (type $FUNCSIG$v)
  nop
 )
 (func $~lib/memory/memory.fill (; 39 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  block $~lib/util/memory/memset|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $3
   i32.eqz
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 1
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 2
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 1
   i32.add
   local.get $4
   i32.store8
   local.get $5
   i32.const 2
   i32.add
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 2
   i32.sub
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 3
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 6
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 3
   i32.add
   local.get $4
   i32.store8
   local.get $5
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.get $4
   i32.store8
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   i32.const 0
   local.get $5
   i32.sub
   i32.const 3
   i32.and
   local.set $6
   local.get $5
   local.get $6
   i32.add
   local.set $5
   local.get $3
   local.get $6
   i32.sub
   local.set $3
   local.get $3
   i32.const -4
   i32.and
   local.set $3
   i32.const -1
   i32.const 255
   i32.div_u
   local.get $4
   i32.const 255
   i32.and
   i32.mul
   local.set $7
   local.get $5
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 4
   i32.sub
   local.get $7
   i32.store
   local.get $3
   i32.const 8
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 4
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 8
   i32.add
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 12
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 8
   i32.sub
   local.get $7
   i32.store
   local.get $3
   i32.const 24
   i32.le_u
   if
    br $~lib/util/memory/memset|inlined.0
   end
   local.get $5
   i32.const 12
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 16
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 20
   i32.add
   local.get $7
   i32.store
   local.get $5
   i32.const 24
   i32.add
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 28
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 24
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 20
   i32.sub
   local.get $7
   i32.store
   local.get $5
   local.get $3
   i32.add
   i32.const 16
   i32.sub
   local.get $7
   i32.store
   i32.const 24
   local.get $5
   i32.const 4
   i32.and
   i32.add
   local.set $6
   local.get $5
   local.get $6
   i32.add
   local.set $5
   local.get $3
   local.get $6
   i32.sub
   local.set $3
   local.get $7
   i64.extend_i32_u
   local.get $7
   i64.extend_i32_u
   i64.const 32
   i64.shl
   i64.or
   local.set $8
   block $break|0
    loop $continue|0
     local.get $3
     i32.const 32
     i32.ge_u
     i32.eqz
     br_if $break|0
     local.get $5
     local.get $8
     i64.store
     local.get $5
     i32.const 8
     i32.add
     local.get $8
     i64.store
     local.get $5
     i32.const 16
     i32.add
     local.get $8
     i64.store
     local.get $5
     i32.const 24
     i32.add
     local.get $8
     i64.store
     local.get $3
     i32.const 32
     i32.sub
     local.set $3
     local.get $5
     i32.const 32
     i32.add
     local.set $5
     br $continue|0
    end
    unreachable
   end
  end
 )
 (func $~lib/arraybuffer/ArrayBufferView#constructor (; 40 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  i32.const 1073741808
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   i32.const 552
   i32.const 600
   i32.const 14
   i32.const 56
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $2
  i32.shl
  local.tee $1
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  i32.const 0
  local.get $1
  call $~lib/memory/memory.fill
  local.get $0
  i32.eqz
  if
   i32.const 12
   i32.const 2
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  i32.load
  local.tee $4
  i32.ne
  if
   local.get $5
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $5
  i32.store
  local.get $0
  local.get $3
  i32.store offset=4
  local.get $0
  local.get $1
  i32.store offset=8
  local.get $0
 )
 (func $~lib/typedarray/Uint8Array#constructor (; 41 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 12
   i32.const 6
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 0
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
 )
 (func $~lib/typedarray/Uint8Array#get:buffer (; 42 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/assemblyscript-json/decoder/JSONHandler#constructor (; 43 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 11
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor (; 44 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 12
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONHandler#constructor
  local.set $0
  local.get $0
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#constructor (; 45 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 14
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $1
  if
   i32.const 656
   i32.const 768
   i32.const 56
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/nearEntry/Handler#constructor (; 46 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 4
   i32.const 13
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/assemblyscript-json/decoder/ThrowingJSONHandler#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  local.tee $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/nearEntry/Value>#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#constructor (; 47 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 15
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $start:~lib/nearEntry (; 48 ;) (type $FUNCSIG$v)
  i32.const 0
  call $~lib/nearEntry/Handler#constructor
  global.set $~lib/nearEntry/JSON.handler
  i32.const 0
  global.get $~lib/nearEntry/JSON.handler
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#constructor
  global.set $~lib/nearEntry/JSON.decoder
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#constructor (; 49 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.eqz
  if
   i32.const 12
   i32.const 16
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 816
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store offset=8
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:byteLength (; 50 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=8
 )
 (func $~lib/typedarray/Uint8Array#get:length (; 51 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
 )
 (func $~lib/typedarray/Uint8Array#__get (; 52 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.ge_u
  if
   i32.const 832
   i32.const 888
   i32.const 135
   i32.const 44
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.add
  i32.load8_u
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar (; 53 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.ge_s
  if
   i32.const -1
   return
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  i32.load offset=4
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#isWhitespace (; 54 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  i32.const 9
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 10
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 13
   i32.eq
  end
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 32
   i32.eq
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar (; 55 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=8
  call $~lib/typedarray/Uint8Array#get:length
  i32.lt_s
  i32.eqz
  if
   i32.const 944
   i32.const 1000
   i32.const 112
   i32.const 8
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=8
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.tee $1
  i32.const 1
  i32.add
  i32.store offset=4
  local.get $1
  call $~lib/typedarray/Uint8Array#__get
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace (; 56 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#isWhitespace
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
    drop
    br $continue|0
   end
   unreachable
  end
 )
 (func $~lib/nearEntry/Value#constructor (; 57 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 0
   i32.const 7
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
 )
 (func $~lib/arraybuffer/ArrayBuffer#constructor (; 58 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  i32.const 1073741808
  i32.gt_u
  if
   i32.const 552
   i32.const 600
   i32.const 57
   i32.const 42
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $2
  local.get $2
  i32.const 0
  local.get $1
  call $~lib/memory/memory.fill
  local.get $2
  call $~lib/rt/stub/__retain
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#clear (; 59 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  local.tee $1
  i32.const 0
  i32.const 16
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  i32.const 4
  i32.const 1
  i32.sub
  i32.store offset=4
  local.get $0
  local.tee $2
  i32.const 0
  i32.const 48
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $1
  local.get $2
  i32.load offset=8
  call $~lib/rt/stub/__release
  local.get $1
  i32.store offset=8
  local.get $0
  i32.const 4
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#constructor (; 60 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 24
   i32.const 9
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $0
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#clear
  local.get $0
 )
 (func $~lib/array/Array<~lib/string/String>#constructor (; 61 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 10
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $1
  if
   i32.const 656
   i32.const 768
   i32.const 56
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/nearEntry/Obj#constructor (; 62 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 8
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  local.tee $2
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $1
  local.get $2
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $1
  i32.store offset=4
  local.get $0
 )
 (func $~lib/nearEntry/Value.Object (; 63 ;) (type $FUNCSIG$i) (result i32)
  i32.const 0
  call $~lib/nearEntry/Obj#constructor
 )
 (func $~lib/rt/__instanceof (; 64 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=8
  local.set $2
  global.get $~lib/rt/__rtti_base
  local.set $3
  local.get $2
  local.get $3
  i32.load
  i32.le_u
  if
   loop $continue|0
    local.get $2
    local.get $1
    i32.eq
    if
     i32.const 1
     return
    end
    local.get $3
    i32.const 4
    i32.add
    local.get $2
    i32.const 8
    i32.mul
    i32.add
    i32.load offset=4
    local.tee $2
    br_if $continue|0
   end
  end
  i32.const 0
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#get:length (; 65 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/util/memory/memcpy (; 66 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  block $break|0
   loop $continue|0
    local.get $2
    if (result i32)
     local.get $1
     i32.const 3
     i32.and
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $0
  i32.const 3
  i32.and
  i32.const 0
  i32.eq
  if
   block $break|1
    loop $continue|1
     local.get $2
     i32.const 16
     i32.ge_u
     i32.eqz
     br_if $break|1
     local.get $0
     local.get $1
     i32.load
     i32.store
     local.get $0
     i32.const 4
     i32.add
     local.get $1
     i32.const 4
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 8
     i32.add
     local.get $1
     i32.const 8
     i32.add
     i32.load
     i32.store
     local.get $0
     i32.const 12
     i32.add
     local.get $1
     i32.const 12
     i32.add
     i32.load
     i32.store
     local.get $1
     i32.const 16
     i32.add
     local.set $1
     local.get $0
     i32.const 16
     i32.add
     local.set $0
     local.get $2
     i32.const 16
     i32.sub
     local.set $2
     br $continue|1
    end
    unreachable
   end
   local.get $2
   i32.const 8
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.get $1
    i32.const 4
    i32.add
    i32.load
    i32.store
    local.get $0
    i32.const 8
    i32.add
    local.set $0
    local.get $1
    i32.const 8
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 4
   i32.and
   if
    local.get $0
    local.get $1
    i32.load
    i32.store
    local.get $0
    i32.const 4
    i32.add
    local.set $0
    local.get $1
    i32.const 4
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 2
   i32.and
   if
    local.get $0
    local.get $1
    i32.load16_u
    i32.store16
    local.get $0
    i32.const 2
    i32.add
    local.set $0
    local.get $1
    i32.const 2
    i32.add
    local.set $1
   end
   local.get $2
   i32.const 1
   i32.and
   if
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
   end
   return
  end
  local.get $2
  i32.const 32
  i32.ge_u
  if
   block $break|2
    block $case2|2
     block $case1|2
      block $case0|2
       local.get $0
       i32.const 3
       i32.and
       local.set $5
       local.get $5
       i32.const 1
       i32.eq
       br_if $case0|2
       local.get $5
       i32.const 2
       i32.eq
       br_if $case1|2
       local.get $5
       i32.const 3
       i32.eq
       br_if $case2|2
       br $break|2
      end
      local.get $1
      i32.load
      local.set $3
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $0
      local.tee $5
      i32.const 1
      i32.add
      local.set $0
      local.get $5
      local.get $1
      local.tee $5
      i32.const 1
      i32.add
      local.set $1
      local.get $5
      i32.load8_u
      i32.store8
      local.get $2
      i32.const 3
      i32.sub
      local.set $2
      block $break|3
       loop $continue|3
        local.get $2
        i32.const 17
        i32.ge_u
        i32.eqz
        br_if $break|3
        local.get $1
        i32.const 1
        i32.add
        i32.load
        local.set $4
        local.get $0
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 5
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 4
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 9
        i32.add
        i32.load
        local.set $4
        local.get $0
        i32.const 8
        i32.add
        local.get $3
        i32.const 24
        i32.shr_u
        local.get $4
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 13
        i32.add
        i32.load
        local.set $3
        local.get $0
        i32.const 12
        i32.add
        local.get $4
        i32.const 24
        i32.shr_u
        local.get $3
        i32.const 8
        i32.shl
        i32.or
        i32.store
        local.get $1
        i32.const 16
        i32.add
        local.set $1
        local.get $0
        i32.const 16
        i32.add
        local.set $0
        local.get $2
        i32.const 16
        i32.sub
        local.set $2
        br $continue|3
       end
       unreachable
      end
      br $break|2
     end
     local.get $1
     i32.load
     local.set $3
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $0
     local.tee $5
     i32.const 1
     i32.add
     local.set $0
     local.get $5
     local.get $1
     local.tee $5
     i32.const 1
     i32.add
     local.set $1
     local.get $5
     i32.load8_u
     i32.store8
     local.get $2
     i32.const 2
     i32.sub
     local.set $2
     block $break|4
      loop $continue|4
       local.get $2
       i32.const 18
       i32.ge_u
       i32.eqz
       br_if $break|4
       local.get $1
       i32.const 2
       i32.add
       i32.load
       local.set $4
       local.get $0
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 6
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 4
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 10
       i32.add
       i32.load
       local.set $4
       local.get $0
       i32.const 8
       i32.add
       local.get $3
       i32.const 16
       i32.shr_u
       local.get $4
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 14
       i32.add
       i32.load
       local.set $3
       local.get $0
       i32.const 12
       i32.add
       local.get $4
       i32.const 16
       i32.shr_u
       local.get $3
       i32.const 16
       i32.shl
       i32.or
       i32.store
       local.get $1
       i32.const 16
       i32.add
       local.set $1
       local.get $0
       i32.const 16
       i32.add
       local.set $0
       local.get $2
       i32.const 16
       i32.sub
       local.set $2
       br $continue|4
      end
      unreachable
     end
     br $break|2
    end
    local.get $1
    i32.load
    local.set $3
    local.get $0
    local.tee $5
    i32.const 1
    i32.add
    local.set $0
    local.get $5
    local.get $1
    local.tee $5
    i32.const 1
    i32.add
    local.set $1
    local.get $5
    i32.load8_u
    i32.store8
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    block $break|5
     loop $continue|5
      local.get $2
      i32.const 19
      i32.ge_u
      i32.eqz
      br_if $break|5
      local.get $1
      i32.const 3
      i32.add
      i32.load
      local.set $4
      local.get $0
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 7
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 4
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 11
      i32.add
      i32.load
      local.set $4
      local.get $0
      i32.const 8
      i32.add
      local.get $3
      i32.const 8
      i32.shr_u
      local.get $4
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 15
      i32.add
      i32.load
      local.set $3
      local.get $0
      i32.const 12
      i32.add
      local.get $4
      i32.const 8
      i32.shr_u
      local.get $3
      i32.const 24
      i32.shl
      i32.or
      i32.store
      local.get $1
      i32.const 16
      i32.add
      local.set $1
      local.get $0
      i32.const 16
      i32.add
      local.set $0
      local.get $2
      i32.const 16
      i32.sub
      local.set $2
      br $continue|5
     end
     unreachable
    end
    br $break|2
   end
  end
  local.get $2
  i32.const 16
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 8
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 4
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 2
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
  local.get $2
  i32.const 1
  i32.and
  if
   local.get $0
   local.tee $5
   i32.const 1
   i32.add
   local.set $0
   local.get $5
   local.get $1
   local.tee $5
   i32.const 1
   i32.add
   local.set $1
   local.get $5
   i32.load8_u
   i32.store8
  end
 )
 (func $~lib/memory/memory.copy (; 67 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  block $~lib/util/memory/memmove|inlined.0
   local.get $0
   local.set $5
   local.get $1
   local.set $4
   local.get $2
   local.set $3
   local.get $5
   local.get $4
   i32.eq
   if
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $4
   local.get $3
   i32.add
   local.get $5
   i32.le_u
   if (result i32)
    i32.const 1
   else    
    local.get $5
    local.get $3
    i32.add
    local.get $4
    i32.le_u
   end
   if
    local.get $5
    local.get $4
    local.get $3
    call $~lib/util/memory/memcpy
    br $~lib/util/memory/memmove|inlined.0
   end
   local.get $5
   local.get $4
   i32.lt_u
   if
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     block $break|0
      loop $continue|0
       local.get $5
       i32.const 7
       i32.and
       i32.eqz
       br_if $break|0
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $3
       i32.const 1
       i32.sub
       local.set $3
       local.get $5
       local.tee $6
       i32.const 1
       i32.add
       local.set $5
       local.get $6
       local.get $4
       local.tee $6
       i32.const 1
       i32.add
       local.set $4
       local.get $6
       i32.load8_u
       i32.store8
       br $continue|0
      end
      unreachable
     end
     block $break|1
      loop $continue|1
       local.get $3
       i32.const 8
       i32.ge_u
       i32.eqz
       br_if $break|1
       local.get $5
       local.get $4
       i64.load
       i64.store
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       i32.const 8
       i32.add
       local.set $5
       local.get $4
       i32.const 8
       i32.add
       local.set $4
       br $continue|1
      end
      unreachable
     end
    end
    block $break|2
     loop $continue|2
      local.get $3
      i32.eqz
      br_if $break|2
      local.get $5
      local.tee $6
      i32.const 1
      i32.add
      local.set $5
      local.get $6
      local.get $4
      local.tee $6
      i32.const 1
      i32.add
      local.set $4
      local.get $6
      i32.load8_u
      i32.store8
      local.get $3
      i32.const 1
      i32.sub
      local.set $3
      br $continue|2
     end
     unreachable
    end
   else    
    local.get $4
    i32.const 7
    i32.and
    local.get $5
    i32.const 7
    i32.and
    i32.eq
    if
     block $break|3
      loop $continue|3
       local.get $5
       local.get $3
       i32.add
       i32.const 7
       i32.and
       i32.eqz
       br_if $break|3
       local.get $3
       i32.eqz
       if
        br $~lib/util/memory/memmove|inlined.0
       end
       local.get $5
       local.get $3
       i32.const 1
       i32.sub
       local.tee $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i32.load8_u
       i32.store8
       br $continue|3
      end
      unreachable
     end
     block $break|4
      loop $continue|4
       local.get $3
       i32.const 8
       i32.ge_u
       i32.eqz
       br_if $break|4
       local.get $3
       i32.const 8
       i32.sub
       local.set $3
       local.get $5
       local.get $3
       i32.add
       local.get $4
       local.get $3
       i32.add
       i64.load
       i64.store
       br $continue|4
      end
      unreachable
     end
    end
    block $break|5
     loop $continue|5
      local.get $3
      i32.eqz
      br_if $break|5
      local.get $5
      local.get $3
      i32.const 1
      i32.sub
      local.tee $3
      i32.add
      local.get $4
      local.get $3
      i32.add
      i32.load8_u
      i32.store8
      br $continue|5
     end
     unreachable
    end
   end
  end
 )
 (func $~lib/rt/stub/__realloc (; 68 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  i32.const 0
  i32.ne
  if (result i32)
   local.get $0
   i32.const 15
   i32.and
   i32.eqz
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 0
   i32.const 1112
   i32.const 43
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 16
  i32.sub
  local.set $2
  local.get $2
  i32.load
  local.set $3
  local.get $2
  i32.load offset=4
  i32.const -1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 1112
   i32.const 46
   i32.const 13
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $0
   local.get $3
   i32.add
   global.get $~lib/rt/stub/offset
   i32.eq
   if
    local.get $1
    i32.const 1073741808
    i32.gt_u
    if
     unreachable
    end
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    local.get $0
    local.get $3
    i32.add
    call $~lib/rt/stub/maybeGrowMemory
    local.get $2
    local.get $3
    i32.store
   else    
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.tee $4
    local.get $3
    i32.const 1
    i32.shl
    local.tee $5
    local.get $4
    local.get $5
    i32.gt_u
    select
    local.set $3
    local.get $3
    local.get $2
    i32.load offset=8
    call $~lib/rt/stub/__alloc
    local.set $4
    local.get $4
    local.get $0
    local.get $2
    i32.load offset=12
    call $~lib/memory/memory.copy
    local.get $4
    local.tee $0
    i32.const 16
    i32.sub
    local.set $2
   end
  else   
   local.get $0
   local.get $3
   i32.add
   global.get $~lib/rt/stub/offset
   i32.eq
   if
    local.get $1
    i32.const 15
    i32.add
    i32.const 15
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    local.get $0
    local.get $3
    i32.add
    global.set $~lib/rt/stub/offset
    local.get $2
    local.get $3
    i32.store
   end
  end
  local.get $2
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/array/ensureSize (; 69 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.load offset=8
  local.set $3
  local.get $1
  local.get $3
  local.get $2
  i32.shr_u
  i32.gt_u
  if
   local.get $1
   i32.const 1073741808
   local.get $2
   i32.shr_u
   i32.gt_u
   if
    i32.const 552
    i32.const 768
    i32.const 14
    i32.const 47
    call $~lib/builtins/abort
    unreachable
   end
   local.get $0
   i32.load
   local.set $4
   local.get $1
   local.get $2
   i32.shl
   local.set $5
   local.get $4
   local.get $5
   call $~lib/rt/stub/__realloc
   local.set $6
   local.get $6
   local.get $3
   i32.add
   i32.const 0
   local.get $5
   local.get $3
   i32.sub
   call $~lib/memory/memory.fill
   local.get $6
   local.get $4
   i32.ne
   if
    local.get $0
    local.get $6
    call $~lib/rt/stub/__retain
    i32.store
    local.get $0
    local.get $6
    i32.store offset=4
   end
   local.get $0
   local.get $5
   i32.store offset=8
  end
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#push (; 70 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#__unchecked_get (; 71 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#__get (; 72 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 656
   i32.const 768
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 832
   i32.const 768
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/nearEntry/Value>#__unchecked_get
 )
 (func $~lib/nearEntry/Handler#get:peek (; 73 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  local.get $0
  i32.load
  call $~lib/array/Array<~lib/nearEntry/Value>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<~lib/nearEntry/Value>#__get
 )
 (func $~lib/util/hash/hashStr (; 74 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const -2128831035
  local.set $1
  local.get $0
  i32.const 0
  i32.ne
  if
   block $break|0
    i32.const 0
    local.set $2
    local.get $0
    call $~lib/string/String#get:length
    i32.const 1
    i32.shl
    local.set $3
    loop $loop|0
     local.get $2
     local.get $3
     i32.lt_u
     i32.eqz
     br_if $break|0
     local.get $1
     local.get $0
     local.get $2
     i32.add
     i32.load8_u
     i32.xor
     i32.const 16777619
     i32.mul
     local.set $1
     local.get $2
     i32.const 1
     i32.add
     local.set $2
     br $loop|0
    end
    unreachable
   end
  end
  local.get $1
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/util/string/compareImpl (; 75 ;) (type $FUNCSIG$iiiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $5
  local.get $0
  local.get $1
  i32.const 1
  i32.shl
  i32.add
  local.set $6
  local.get $2
  local.get $3
  i32.const 1
  i32.shl
  i32.add
  local.set $7
  block $break|0
   loop $continue|0
    local.get $4
    if (result i32)
     local.get $6
     i32.load16_u
     local.get $7
     i32.load16_u
     i32.sub
     local.tee $5
     i32.eqz
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 1
    i32.sub
    local.set $4
    local.get $6
    i32.const 2
    i32.add
    local.set $6
    local.get $7
    i32.const 2
    i32.add
    local.set $7
    br $continue|0
   end
   unreachable
  end
  local.get $5
  local.set $8
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $8
 )
 (func $~lib/string/String.__eq (; 76 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  i32.eq
  if
   i32.const 1
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  i32.eq
  if (result i32)
   i32.const 1
  else   
   local.get $1
   i32.const 0
   i32.eq
  end
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $3
  local.get $1
  call $~lib/string/String#get:length
  i32.ne
  if
   i32.const 0
   local.set $2
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  i32.const 0
  local.get $1
  i32.const 0
  local.get $3
  call $~lib/util/string/compareImpl
  i32.eqz
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#find (; 77 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load
  local.get $2
  local.get $0
  i32.load offset=4
  i32.and
  i32.const 4
  i32.mul
  i32.add
  i32.load
  local.set $3
  block $break|0
   loop $continue|0
    local.get $3
    i32.eqz
    br_if $break|0
    local.get $3
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if (result i32)
     local.get $3
     i32.load
     local.get $1
     call $~lib/string/String.__eq
    else     
     i32.const 0
    end
    if
     local.get $3
     local.set $4
     local.get $1
     call $~lib/rt/stub/__release
     local.get $4
     return
    end
    local.get $3
    i32.load offset=8
    i32.const 1
    i32.const -1
    i32.xor
    i32.and
    local.set $3
    br $continue|0
   end
   unreachable
  end
  i32.const 0
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#has (; 78 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  block $~lib/util/hash/HASH<~lib/string/String>|inlined.0 (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
   local.set $2
   local.get $2
   call $~lib/util/hash/hashStr
   local.set $3
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   br $~lib/util/hash/HASH<~lib/string/String>|inlined.0
  end
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#find
  i32.const 0
  i32.ne
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<~lib/string/String>#push (; 79 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#rehash (; 80 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  local.get $1
  i32.const 1
  i32.add
  local.set $2
  i32.const 0
  local.get $2
  i32.const 4
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $3
  local.get $2
  f64.convert_i32_s
  f64.const 2.6666666666666665
  f64.mul
  i32.trunc_f64_s
  local.set $4
  i32.const 0
  local.get $4
  i32.const 12
  i32.mul
  call $~lib/arraybuffer/ArrayBuffer#constructor
  local.set $5
  local.get $0
  i32.load offset=8
  local.set $6
  local.get $6
  local.get $0
  i32.load offset=16
  i32.const 12
  i32.mul
  i32.add
  local.set $7
  local.get $5
  local.set $8
  block $break|0
   loop $continue|0
    local.get $6
    local.get $7
    i32.ne
    i32.eqz
    br_if $break|0
    local.get $6
    local.set $9
    local.get $9
    i32.load offset=8
    i32.const 1
    i32.and
    i32.eqz
    if
     local.get $8
     local.set $10
     local.get $10
     local.get $9
     i32.load
     i32.store
     local.get $10
     local.get $9
     i32.load offset=4
     i32.store offset=4
     block $~lib/util/hash/HASH<~lib/string/String>|inlined.2 (result i32)
      local.get $9
      i32.load
      call $~lib/rt/stub/__retain
      local.set $11
      local.get $11
      call $~lib/util/hash/hashStr
      local.set $12
      local.get $11
      call $~lib/rt/stub/__release
      local.get $12
      br $~lib/util/hash/HASH<~lib/string/String>|inlined.2
     end
     local.get $1
     i32.and
     local.set $11
     local.get $3
     local.get $11
     i32.const 4
     i32.mul
     i32.add
     local.set $12
     local.get $10
     local.get $12
     i32.load
     i32.store offset=8
     local.get $12
     local.get $8
     i32.store
     local.get $8
     i32.const 12
     i32.add
     local.set $8
    end
    local.get $6
    i32.const 12
    i32.add
    local.set $6
    br $continue|0
   end
   unreachable
  end
  local.get $0
  local.tee $9
  local.get $3
  local.tee $10
  local.get $9
  i32.load
  local.tee $9
  i32.ne
  if
   local.get $10
   call $~lib/rt/stub/__retain
   drop
   local.get $9
   call $~lib/rt/stub/__release
  end
  local.get $10
  i32.store
  local.get $0
  local.get $1
  i32.store offset=4
  local.get $0
  local.tee $10
  local.get $5
  local.tee $11
  local.get $10
  i32.load offset=8
  local.tee $10
  i32.ne
  if
   local.get $11
   call $~lib/rt/stub/__retain
   drop
   local.get $10
   call $~lib/rt/stub/__release
  end
  local.get $11
  i32.store offset=8
  local.get $0
  local.get $4
  i32.store offset=12
  local.get $0
  local.get $0
  i32.load offset=20
  i32.store offset=16
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#set (; 81 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  block $~lib/util/hash/HASH<~lib/string/String>|inlined.1 (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $3
   call $~lib/util/hash/hashStr
   local.set $4
   local.get $3
   call $~lib/rt/stub/__release
   local.get $4
   br $~lib/util/hash/HASH<~lib/string/String>|inlined.1
  end
  local.set $5
  local.get $0
  local.get $1
  local.get $5
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#find
  local.set $6
  local.get $6
  if
   local.get $6
   i32.load offset=4
   local.set $3
   local.get $2
   local.get $3
   i32.ne
   if
    local.get $6
    local.get $2
    call $~lib/rt/stub/__retain
    i32.store offset=4
    local.get $3
    call $~lib/rt/stub/__release
   end
  else   
   local.get $0
   i32.load offset=16
   local.get $0
   i32.load offset=12
   i32.eq
   if
    local.get $0
    local.get $0
    i32.load offset=20
    local.get $0
    i32.load offset=12
    f64.convert_i32_s
    f64.const 0.75
    f64.mul
    i32.trunc_f64_s
    i32.lt_s
    if (result i32)
     local.get $0
     i32.load offset=4
    else     
     local.get $0
     i32.load offset=4
     i32.const 1
     i32.shl
     i32.const 1
     i32.or
    end
    call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#rehash
   end
   local.get $0
   i32.load offset=8
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $3
   local.get $0
   local.get $0
   i32.load offset=16
   local.tee $4
   i32.const 1
   i32.add
   i32.store offset=16
   local.get $4
   i32.const 12
   i32.mul
   i32.add
   local.set $6
   local.get $6
   local.get $1
   call $~lib/rt/stub/__retain
   i32.store
   local.get $6
   local.get $2
   call $~lib/rt/stub/__retain
   i32.store offset=4
   local.get $0
   local.get $0
   i32.load offset=20
   i32.const 1
   i32.add
   i32.store offset=20
   local.get $0
   i32.load
   local.get $5
   local.get $0
   i32.load offset=4
   i32.and
   i32.const 4
   i32.mul
   i32.add
   local.set $4
   local.get $6
   local.get $4
   i32.load
   i32.store offset=8
   local.get $4
   local.get $6
   i32.store
   local.get $3
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Obj#set (; 82 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#has
  i32.eqz
  if
   local.get $0
   i32.load offset=4
   local.get $1
   call $~lib/array/Array<~lib/string/String>#push
   drop
  end
  local.get $0
  i32.load
  local.get $1
  local.get $2
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#set
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Arr#push (; 83 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/array/Array<~lib/nearEntry/Value>#push
  drop
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Handler#addValue (; 84 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/string/String#get:length
  i32.const 0
  i32.eq
  if (result i32)
   local.get $2
   local.tee $3
   i32.eqz
   if (result i32)
    i32.const 0
   else    
    local.get $3
    i32.const 8
    call $~lib/rt/__instanceof
   end
  else   
   i32.const 0
  end
  if (result i32)
   local.get $0
   i32.load
   call $~lib/array/Array<~lib/nearEntry/Value>#get:length
   i32.const 0
   i32.eq
  else   
   i32.const 0
  end
  if
   local.get $0
   i32.load
   local.get $2
   call $~lib/array/Array<~lib/nearEntry/Value>#push
   drop
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   return
  end
  local.get $0
  call $~lib/nearEntry/Handler#get:peek
  local.tee $3
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if
   local.get $0
   call $~lib/nearEntry/Handler#get:peek
   local.tee $4
   local.get $1
   local.get $2
   call $~lib/nearEntry/Obj#set
   local.get $4
   call $~lib/rt/stub/__release
  else   
   local.get $0
   call $~lib/nearEntry/Handler#get:peek
   local.tee $4
   local.tee $5
   i32.eqz
   if (result i32)
    i32.const 0
   else    
    local.get $5
    i32.const 17
    call $~lib/rt/__instanceof
   end
   if
    local.get $0
    call $~lib/nearEntry/Handler#get:peek
    local.tee $5
    local.get $2
    call $~lib/nearEntry/Arr#push
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Handler#pushObject (; 85 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  call $~lib/nearEntry/Value.Object
  local.set $2
  local.get $0
  local.get $1
  local.get $2
  call $~lib/nearEntry/Handler#addValue
  local.get $0
  i32.load
  local.get $2
  call $~lib/array/Array<~lib/nearEntry/Value>#push
  drop
  i32.const 1
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.getPtr (; 86 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $~lib/string/String.UTF8.decodeUnsafe (; 87 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  local.set $3
  local.get $0
  local.get $1
  i32.add
  local.set $4
  local.get $4
  local.get $3
  i32.ge_u
  i32.eqz
  if
   i32.const 0
   i32.const 1424
   i32.const 585
   i32.const 6
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $5
  local.get $5
  local.set $6
  block $break|0
   loop $continue|0
    local.get $3
    local.get $4
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $3
    local.tee $7
    i32.const 1
    i32.add
    local.set $3
    local.get $7
    i32.load8_u
    local.set $7
    local.get $7
    i32.const 128
    i32.lt_u
    if
     local.get $2
     if (result i32)
      local.get $7
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $6
     local.get $7
     i32.store16
     local.get $6
     i32.const 2
     i32.add
     local.set $6
    else     
     local.get $7
     i32.const 191
     i32.gt_u
     if (result i32)
      local.get $7
      i32.const 224
      i32.lt_u
     else      
      i32.const 0
     end
     if
      local.get $4
      local.get $3
      i32.sub
      i32.const 1
      i32.lt_u
      if
       br $break|0
      end
      local.get $6
      local.get $7
      i32.const 31
      i32.and
      i32.const 6
      i32.shl
      local.get $3
      local.tee $8
      i32.const 1
      i32.add
      local.set $3
      local.get $8
      i32.load8_u
      i32.const 63
      i32.and
      i32.or
      i32.store16
      local.get $6
      i32.const 2
      i32.add
      local.set $6
     else      
      local.get $7
      i32.const 239
      i32.gt_u
      if (result i32)
       local.get $7
       i32.const 365
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $4
       local.get $3
       i32.sub
       i32.const 3
       i32.lt_u
       if
        br $break|0
       end
       local.get $7
       i32.const 7
       i32.and
       i32.const 18
       i32.shl
       local.get $3
       i32.load8_u
       i32.const 63
       i32.and
       i32.const 12
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=1
       i32.const 63
       i32.and
       i32.const 6
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=2
       i32.const 63
       i32.and
       i32.or
       i32.const 65536
       i32.sub
       local.set $7
       local.get $3
       i32.const 3
       i32.add
       local.set $3
       local.get $6
       i32.const 55296
       local.get $7
       i32.const 10
       i32.shr_u
       i32.add
       i32.store16
       local.get $6
       i32.const 56320
       local.get $7
       i32.const 1023
       i32.and
       i32.add
       i32.store16 offset=2
       local.get $6
       i32.const 4
       i32.add
       local.set $6
      else       
       local.get $4
       local.get $3
       i32.sub
       i32.const 2
       i32.lt_u
       if
        br $break|0
       end
       local.get $6
       local.get $7
       i32.const 15
       i32.and
       i32.const 12
       i32.shl
       local.get $3
       i32.load8_u
       i32.const 63
       i32.and
       i32.const 6
       i32.shl
       i32.or
       local.get $3
       i32.load8_u offset=1
       i32.const 63
       i32.and
       i32.or
       i32.store16
       local.get $3
       i32.const 2
       i32.add
       local.set $3
       local.get $6
       i32.const 2
       i32.add
       local.set $6
      end
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $5
  local.get $6
  local.get $5
  i32.sub
  call $~lib/rt/stub/__realloc
  call $~lib/rt/stub/__retain
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.readString (; 88 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/assemblyscript-json/util/index/Buffer.getPtr
  local.get $1
  i32.add
  local.get $2
  local.get $1
  i32.sub
  i32.const 0
  call $~lib/string/String.UTF8.decodeUnsafe
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#readString (; 89 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  local.get $0
  i32.load offset=8
  local.get $1
  local.get $2
  i32.const 1
  i32.sub
  call $~lib/assemblyscript-json/util/index/Buffer.readString
 )
 (func $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline (; 90 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   local.get $0
   i32.load offset=4
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/assemblyscript-json/decoder/DecoderState#readString
 )
 (func $~lib/array/Array<~lib/string/String>#get:length (; 91 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<~lib/string/String>#join_str (; 92 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  i32.const 1
  i32.sub
  local.set $2
  local.get $2
  i32.const 0
  i32.lt_s
  if
   i32.const 816
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  i32.load offset=4
  local.set $4
  local.get $2
  i32.eqz
  if
   local.get $4
   i32.load
   call $~lib/rt/stub/__retain
   local.set $3
   local.get $1
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $1
  call $~lib/string/String#get:length
  local.set $5
  i32.const 0
  local.set $6
  i32.const 0
  local.set $7
  block $break|0
   i32.const 0
   local.set $3
   local.get $2
   i32.const 1
   i32.add
   local.set $8
   loop $loop|0
    local.get $3
    local.get $8
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $4
    local.get $3
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $9
    local.get $7
    local.tee $10
    i32.ne
    if
     local.get $9
     call $~lib/rt/stub/__retain
     drop
     local.get $10
     call $~lib/rt/stub/__release
    end
    local.get $9
    local.set $7
    local.get $7
    i32.const 0
    i32.ne
    if
     local.get $6
     local.get $7
     call $~lib/string/String#get:length
     i32.add
     local.set $6
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $loop|0
   end
   unreachable
  end
  i32.const 0
  local.set $11
  local.get $6
  local.get $5
  local.get $2
  i32.mul
  i32.add
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $12
  block $break|1
   i32.const 0
   local.set $8
   loop $loop|1
    local.get $8
    local.get $2
    i32.lt_s
    i32.eqz
    br_if $break|1
    local.get $4
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i32.load
    local.tee $10
    local.get $7
    local.tee $3
    i32.ne
    if
     local.get $10
     call $~lib/rt/stub/__retain
     drop
     local.get $3
     call $~lib/rt/stub/__release
    end
    local.get $10
    local.set $7
    local.get $7
    i32.const 0
    i32.ne
    if
     local.get $7
     call $~lib/string/String#get:length
     local.set $10
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     local.get $7
     local.get $10
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $11
     local.get $10
     i32.add
     local.set $11
    end
    local.get $5
    if
     local.get $12
     local.get $11
     i32.const 1
     i32.shl
     i32.add
     local.get $1
     local.get $5
     i32.const 1
     i32.shl
     call $~lib/memory/memory.copy
     local.get $11
     local.get $5
     i32.add
     local.set $11
    end
    local.get $8
    i32.const 1
    i32.add
    local.set $8
    br $loop|1
   end
   unreachable
  end
  local.get $4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.tee $9
  local.get $7
  local.tee $8
  i32.ne
  if
   local.get $9
   call $~lib/rt/stub/__retain
   drop
   local.get $8
   call $~lib/rt/stub/__release
  end
  local.get $9
  local.set $7
  local.get $7
  i32.const 0
  i32.ne
  if
   local.get $12
   local.get $11
   i32.const 1
   i32.shl
   i32.add
   local.get $7
   local.get $7
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   call $~lib/memory/memory.copy
  end
  local.get $12
  local.set $9
  local.get $1
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $~lib/array/Array<~lib/string/String>#join (; 93 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#join_str
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  return
 )
 (func $~lib/rt/__allocArray (; 94 ;) (type $FUNCSIG$iiiii) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (result i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  i32.const 16
  local.get $2
  call $~lib/rt/stub/__alloc
  local.set $4
  local.get $0
  local.get $1
  i32.shl
  local.set $5
  local.get $5
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $6
  local.get $4
  local.get $6
  call $~lib/rt/stub/__retain
  i32.store
  local.get $4
  local.get $6
  i32.store offset=4
  local.get $4
  local.get $5
  i32.store offset=8
  local.get $4
  local.get $0
  i32.store offset=12
  local.get $3
  if
   local.get $6
   local.get $3
   local.get $5
   call $~lib/memory/memory.copy
  end
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readHexDigit (; 95 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
  local.set $1
  local.get $1
  global.get $~lib/assemblyscript-json/decoder/CHAR_0
  i32.sub
  local.set $2
  local.get $2
  i32.const 9
  i32.gt_s
  if
   local.get $1
   global.get $~lib/assemblyscript-json/decoder/CHAR_A
   i32.sub
   i32.const 10
   i32.add
   local.set $2
   local.get $2
   i32.const 10
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $2
    i32.const 15
    i32.gt_s
   end
   if
    local.get $1
    global.get $~lib/assemblyscript-json/decoder/CHAR_A_LOWER
    i32.sub
    i32.const 10
    i32.add
    local.set $2
   end
  end
  i32.const 2
  i32.const 2
  i32.const 18
  i32.const 0
  call $~lib/rt/__allocArray
  local.set $3
  local.get $3
  i32.load offset=4
  local.set $4
  local.get $4
  local.get $1
  i32.store
  local.get $4
  local.get $2
  i32.store offset=4
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $2
  i32.const 0
  i32.ge_s
  if (result i32)
   local.get $2
   i32.const 16
   i32.lt_s
  else   
   i32.const 0
  end
  i32.eqz
  if
   i32.const 1736
   i32.const 1000
   i32.const 269
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $2
  local.set $3
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/string/String.fromCodePoint (; 96 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  i32.const 1114111
  i32.le_u
  i32.eqz
  if
   i32.const 0
   i32.const 1424
   i32.const 22
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 65535
  i32.gt_s
  local.set $1
  i32.const 2
  local.get $1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $2
  local.get $1
  i32.eqz
  if
   local.get $2
   local.get $0
   i32.store16
  else   
   local.get $0
   i32.const 65536
   i32.sub
   local.set $0
   local.get $0
   i32.const 10
   i32.shr_u
   i32.const 55296
   i32.add
   local.set $3
   local.get $0
   i32.const 1023
   i32.and
   i32.const 56320
   i32.add
   local.set $4
   local.get $2
   local.get $3
   i32.const 16
   i32.shl
   local.get $4
   i32.or
   i32.store
  end
  local.get $2
  call $~lib/rt/stub/__retain
 )
 (func $~lib/string/String.fromCharCode (; 97 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  i32.const 0
  i32.gt_s
  local.set $2
  i32.const 2
  local.get $2
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  local.get $0
  i32.store16
  local.get $2
  if
   local.get $3
   local.get $1
   i32.store16 offset=2
  end
  local.get $3
  call $~lib/rt/stub/__retain
 )
 (func $~lib/string/String.fromCharCode|trampoline (; 98 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const -1
   local.set $1
  end
  local.get $0
  local.get $1
  call $~lib/string/String.fromCharCode
 )
 (func $~lib/string/String#concat (; 99 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   i32.const 216
   local.tee $2
   local.get $1
   local.tee $3
   i32.ne
   if
    local.get $2
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $2
   local.set $1
  end
  local.get $0
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $4
  local.get $1
  call $~lib/string/String#get:length
  i32.const 1
  i32.shl
  local.set $5
  local.get $4
  local.get $5
  i32.add
  local.set $6
  local.get $6
  i32.const 0
  i32.eq
  if
   i32.const 816
   call $~lib/rt/stub/__retain
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $6
  i32.const 1
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $7
  local.get $7
  local.get $0
  local.get $4
  call $~lib/memory/memory.copy
  local.get $7
  local.get $4
  i32.add
  local.get $1
  local.get $5
  call $~lib/memory/memory.copy
  local.get $7
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/string/String.__concat (; 100 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 216
  local.get $0
  i32.const 0
  i32.ne
  select
  local.get $1
  call $~lib/string/String#concat
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readEscapedChar (; 101 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
  local.set $1
  local.get $1
  i32.const 1248
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1248
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1472
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1472
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1496
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1496
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1520
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1544
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1568
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1592
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1616
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1640
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1664
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i32.const 1688
   call $~lib/rt/stub/__retain
   return
  end
  local.get $1
  i32.const 1712
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readHexDigit
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readHexDigit
   local.set $3
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readHexDigit
   local.set $4
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readHexDigit
   local.set $5
   local.get $2
   i32.const 4096
   i32.mul
   local.get $3
   i32.const 256
   i32.mul
   i32.add
   local.get $4
   i32.const 16
   i32.mul
   i32.add
   local.get $5
   i32.add
   local.set $6
   local.get $6
   call $~lib/string/String.fromCodePoint
   return
  end
  i32.const 0
  i32.eqz
  if
   i32.const 1792
   i32.const 1
   global.set $~lib/argc
   local.get $1
   i32.const 0
   call $~lib/string/String.fromCharCode|trampoline
   local.tee $6
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 1000
   i32.const 255
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 816
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $6
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readString (; 102 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
  i32.const 1248
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1272
   i32.const 1000
   i32.const 197
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  i32.load offset=4
  local.set $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $2
  loop $loop|0
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   local.set $3
   local.get $3
   i32.const 32
   i32.ge_s
   i32.eqz
   if
    i32.const 1352
    i32.const 1000
    i32.const 203
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
   local.get $3
   i32.const 1248
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   if
    i32.const 1
    global.set $~lib/argc
    local.get $0
    i32.load offset=4
    local.get $1
    i32.const 0
    call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
    local.set $4
    local.get $2
    call $~lib/array/Array<~lib/string/String>#get:length
    i32.const 0
    i32.eq
    if
     local.get $4
     local.set $5
     local.get $2
     call $~lib/rt/stub/__release
     local.get $5
     return
    end
    local.get $2
    local.get $4
    call $~lib/array/Array<~lib/string/String>#push
    drop
    local.get $2
    i32.const 816
    call $~lib/array/Array<~lib/string/String>#join
    local.set $5
    local.get $4
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $5
    return
   else    
    local.get $3
    i32.const 1472
    i32.const 0
    call $~lib/string/String#charCodeAt
    i32.eq
    if
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.get $1
     i32.const 1
     i32.add
     i32.gt_s
     if
      local.get $2
      i32.const 1
      global.set $~lib/argc
      local.get $0
      i32.load offset=4
      local.get $1
      i32.const 0
      call $~lib/assemblyscript-json/decoder/DecoderState#readString|trampoline
      local.tee $4
      call $~lib/array/Array<~lib/string/String>#push
      drop
      local.get $4
      call $~lib/rt/stub/__release
     end
     local.get $2
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readEscapedChar
     local.tee $4
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $0
     i32.load offset=4
     i32.load offset=4
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
   end
   br $loop|0
  end
  unreachable
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseKey (; 103 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
  local.get $0
  i32.load offset=4
  local.tee $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readString
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
  i32.const 1872
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  i32.eqz
  if
   i32.const 1896
   i32.const 1000
   i32.const 159
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $~lib/array/Array<~lib/nearEntry/Value>#pop (; 104 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.lt_s
  if
   i32.const 2000
   i32.const 768
   i32.const 287
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $2
 )
 (func $~lib/nearEntry/Handler#popObject (; 105 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.load
  call $~lib/array/Array<~lib/nearEntry/Value>#get:length
  i32.const 1
  i32.gt_s
  if
   local.get $0
   i32.load
   call $~lib/array/Array<~lib/nearEntry/Value>#pop
   call $~lib/rt/stub/__release
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseObject (; 106 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 1088
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 816
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $~lib/nearEntry/Handler#pushObject
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
     i32.const 1160
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
      i32.const 1184
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1208
       i32.const 1000
       i32.const 142
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseKey
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   i32.const 1160
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 1936
    i32.const 1000
    i32.const 149
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/nearEntry/Handler#popObject
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/Arr#constructor (; 107 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 4
   i32.const 17
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  local.tee $1
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/nearEntry/Value>#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
 )
 (func $~lib/nearEntry/Value.Array (; 108 ;) (type $FUNCSIG$i) (result i32)
  i32.const 0
  call $~lib/nearEntry/Arr#constructor
 )
 (func $~lib/nearEntry/Handler#pushArray (; 109 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  call $~lib/nearEntry/Value.Array
  local.set $2
  local.get $0
  local.get $1
  local.get $2
  call $~lib/nearEntry/Handler#addValue
  local.get $0
  i32.load
  local.get $2
  call $~lib/array/Array<~lib/nearEntry/Value>#push
  drop
  i32.const 1
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/Handler#popArray (; 110 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.load
  call $~lib/array/Array<~lib/nearEntry/Value>#get:length
  i32.const 1
  i32.gt_s
  if
   local.get $0
   i32.load
   call $~lib/array/Array<~lib/nearEntry/Value>#pop
   call $~lib/rt/stub/__release
  end
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseArray (; 111 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 2048
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load offset=4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  i32.load offset=4
  local.tee $2
  i32.const 816
  local.tee $3
  local.get $2
  i32.load
  local.tee $2
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $2
   call $~lib/rt/stub/__release
  end
  local.get $3
  i32.store
  local.get $0
  i32.load
  local.get $1
  call $~lib/nearEntry/Handler#pushArray
  if
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   drop
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
   i32.const 1
   local.set $3
   block $break|0
    loop $continue|0
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
     i32.const 2072
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.ne
     i32.eqz
     br_if $break|0
     local.get $3
     i32.eqz
     if
      local.get $0
      call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
      i32.const 1184
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      i32.eqz
      if
       i32.const 1208
       i32.const 1000
       i32.const 176
       i32.const 10
       call $~lib/builtins/abort
       unreachable
      end
     else      
      i32.const 0
      local.set $3
     end
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseValue
     drop
     br $continue|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   i32.const 2072
   i32.const 0
   call $~lib/string/String#charCodeAt
   i32.eq
   i32.eqz
   if
    i32.const 2096
    i32.const 1000
    i32.const 182
    i32.const 6
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $0
  i32.load
  call $~lib/nearEntry/Handler#popArray
  i32.const 1
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/Str#constructor (; 112 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 4
   i32.const 19
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
 )
 (func $~lib/nearEntry/Value.String (; 113 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  call $~lib/nearEntry/Str#constructor
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $~lib/nearEntry/Handler#setString (; 114 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/nearEntry/Value.String
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/nearEntry/Handler#addValue
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseString (; 115 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 1248
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.ne
  if
   i32.const 0
   return
  end
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  i32.load
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readString
  local.tee $1
  call $~lib/nearEntry/Handler#setString
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readAndAssert (; 116 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $2
    call $~lib/string/String#charCodeAt
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
    i32.eq
    i32.eqz
    if
     i32.const 2160
     local.get $1
     call $~lib/string/String.__concat
     local.tee $3
     i32.const 2200
     call $~lib/string/String.__concat
     local.tee $4
     i32.const 1000
     i32.const 321
     i32.const 6
     call $~lib/builtins/abort
     unreachable
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Bools#constructor (; 117 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 1
   i32.const 20
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
  local.get $1
  i32.store8
  local.get $0
 )
 (func $~lib/nearEntry/Value.Bool (; 118 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  i32.const 0
  local.get $0
  call $~lib/nearEntry/Bools#constructor
 )
 (func $~lib/nearEntry/Handler#setBoolean (; 119 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/nearEntry/Value.Bool
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/nearEntry/Handler#addValue
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseBoolean (; 120 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 184
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/FALSE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 0
   call $~lib/nearEntry/Handler#setBoolean
   i32.const 1
   return
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 160
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/TRUE_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   i32.const 1
   call $~lib/nearEntry/Handler#setBoolean
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/nearEntry/Num#constructor (; 121 ;) (type $FUNCSIG$iij) (param $0 i32) (param $1 i64) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 8
   i32.const 21
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
  local.get $1
  i64.store
  local.get $0
 )
 (func $~lib/nearEntry/Value.Number (; 122 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  i32.const 0
  local.get $0
  call $~lib/nearEntry/Num#constructor
 )
 (func $~lib/nearEntry/Handler#setInteger (; 123 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/nearEntry/Value.Number
  local.set $3
  local.get $0
  local.get $1
  local.get $3
  call $~lib/nearEntry/Handler#addValue
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseNumber (; 124 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i64)
  (local $2 i64)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  local.set $1
  i64.const 1
  local.set $2
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 2224
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   i64.const -1
   local.set $2
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
   drop
  end
  i32.const 0
  local.set $3
  block $break|0
   loop $continue|0
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
    i32.le_s
    if (result i32)
     local.get $0
     call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
     global.get $~lib/assemblyscript-json/decoder/CHAR_9
     i32.le_s
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    local.get $0
    call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readChar
    local.set $4
    local.get $1
    i64.const 10
    i64.mul
    local.set $1
    local.get $1
    local.get $4
    global.get $~lib/assemblyscript-json/decoder/CHAR_0
    i32.sub
    i64.extend_i32_s
    i64.add
    local.set $1
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $continue|0
   end
   unreachable
  end
  local.get $3
  i32.const 0
  i32.gt_s
  if
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   local.get $1
   local.get $2
   i64.mul
   call $~lib/nearEntry/Handler#setInteger
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/nearEntry/Null#constructor (; 125 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 0
   i32.const 22
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  call $~lib/nearEntry/Value#constructor
  local.set $0
  local.get $0
 )
 (func $~lib/nearEntry/Value.Null (; 126 ;) (type $FUNCSIG$i) (result i32)
  i32.const 0
  call $~lib/nearEntry/Null#constructor
 )
 (func $~lib/nearEntry/Handler#setNull (; 127 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  call $~lib/nearEntry/Value.Null
  local.set $2
  local.get $0
  local.get $1
  local.get $2
  call $~lib/nearEntry/Handler#addValue
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseNull (; 128 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#peekChar
  i32.const 216
  i32.const 0
  call $~lib/string/String#charCodeAt
  i32.eq
  if
   local.get $0
   global.get $~lib/assemblyscript-json/decoder/NULL_STR
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#readAndAssert
   local.get $0
   i32.load
   local.get $0
   i32.load offset=4
   i32.load
   call $~lib/nearEntry/Handler#setNull
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseValue (; 129 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseObject
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseArray
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseString
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseBoolean
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseNumber
  end
  local.tee $1
  if (result i32)
   local.get $1
  else   
   local.get $0
   call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseNull
  end
  local.set $1
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#skipWhitespace
  local.get $1
 )
 (func $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#deserialize (; 130 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  i32.const 0
  i32.ne
  if
   local.get $0
   local.tee $3
   local.get $2
   local.tee $4
   local.get $3
   i32.load offset=4
   local.tee $3
   i32.ne
   if
    local.get $4
    call $~lib/rt/stub/__retain
    drop
    local.get $3
    call $~lib/rt/stub/__release
   end
   local.get $4
   i32.store offset=4
  else   
   local.get $0
   local.tee $4
   i32.const 0
   local.get $1
   call $~lib/assemblyscript-json/decoder/DecoderState#constructor
   local.set $3
   local.get $4
   i32.load offset=4
   call $~lib/rt/stub/__release
   local.get $3
   i32.store offset=4
  end
  local.get $0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#parseValue
  i32.const 0
  i32.ne
  i32.eqz
  if
   i32.const 2248
   i32.const 1000
   i32.const 100
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/Handler#reset (; 131 ;) (type $FUNCSIG$vi) (param $0 i32)
  block $break|0
   loop $continue|0
    local.get $0
    i32.load
    call $~lib/array/Array<~lib/nearEntry/Value>#get:length
    i32.const 0
    i32.gt_s
    i32.eqz
    br_if $break|0
    local.get $0
    i32.load
    call $~lib/array/Array<~lib/nearEntry/Value>#pop
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
 )
 (func $~lib/nearEntry/JSON.parse (; 132 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/nearEntry/JSON.decoder
  local.get $0
  i32.const 0
  call $~lib/assemblyscript-json/decoder/JSONDecoder<~lib/nearEntry/Handler>#deserialize
  global.get $~lib/nearEntry/JSON.decoder
  i32.load
  call $~lib/nearEntry/Handler#get:peek
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  global.get $~lib/nearEntry/JSON.decoder
  i32.load
  call $~lib/nearEntry/Handler#reset
  local.get $2
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/string/String.__ne (; 133 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/string/String.__eq
  i32.eqz
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#get (; 134 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  block $~lib/util/hash/HASH<~lib/string/String>|inlined.3 (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
   local.set $2
   local.get $2
   call $~lib/util/hash/hashStr
   local.set $3
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   br $~lib/util/hash/HASH<~lib/string/String>|inlined.3
  end
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#find
  local.set $4
  local.get $4
  i32.eqz
  if
   local.get $1
   call $~lib/rt/stub/__release
   i32.const 2328
   i32.const 2384
   i32.const 103
   i32.const 16
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.load offset=4
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/nearEntry/Obj#get (; 135 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#has
  i32.eqz
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $2
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   return
  end
  local.get $0
  i32.load
  local.get $1
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#get
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj> (; 136 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    call $~lib/rt/stub/__retain
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $7
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $7
   return
  end
  local.get $3
  call $~lib/rt/stub/__retain
  local.set $4
  local.get $1
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $4
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 19
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $6
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 2472
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 2536
   i32.const 322
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $4
  i32.load
  call $~lib/rt/stub/__retain
  local.set $8
  local.get $6
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $8
  local.set $5
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  return
 )
 (func $assembly/hello/main/hello (; 137 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 2592
  local.get $0
  call $~lib/string/String.__concat
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<i32>#constructor (; 138 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 18
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/array/Array<i32>#push (; 139 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#constructor (; 140 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 23
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  local.tee $1
  i32.const 0
  i32.const 10
  call $~lib/array/Array<i32>#constructor
  local.set $2
  local.get $1
  i32.load
  call $~lib/rt/stub/__release
  local.get $2
  i32.store
  local.get $0
  local.tee $2
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $1
  local.get $2
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $1
  i32.store offset=4
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  local.get $0
 )
 (func $~lib/array/Array<i32>#get:length (; 141 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array<i32>#__unchecked_get (; 142 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
 )
 (func $~lib/array/Array<i32>#__get (; 143 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 832
   i32.const 768
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<i32>#__unchecked_get
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#get:isFirstKey (; 144 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#get:length
  i32.const 1
  i32.sub
  call $~lib/array/Array<i32>#__get
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#write (; 145 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  call $~lib/array/Array<~lib/string/String>#push
  drop
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<i32>#__unchecked_set (; 146 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.get $2
  i32.store
 )
 (func $~lib/array/Array<i32>#__set (; 147 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<i32>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
 )
 (func $~lib/string/String#substring (; 148 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  local.get $0
  call $~lib/string/String#get:length
  local.set $3
  local.get $1
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  local.set $6
  local.get $2
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.tee $4
  local.get $3
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  local.set $7
  local.get $6
  local.tee $4
  local.get $7
  local.tee $5
  local.get $4
  local.get $5
  i32.lt_s
  select
  i32.const 1
  i32.shl
  local.set $8
  local.get $6
  local.tee $4
  local.get $7
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  i32.const 1
  i32.shl
  local.set $9
  local.get $9
  local.get $8
  i32.sub
  local.set $3
  local.get $3
  i32.eqz
  if
   i32.const 816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $8
  i32.eqz
  if (result i32)
   local.get $9
   local.get $0
   call $~lib/string/String#get:length
   i32.const 1
   i32.shl
   i32.eq
  else   
   i32.const 0
  end
  if
   local.get $0
   call $~lib/rt/stub/__retain
   return
  end
  local.get $3
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $10
  local.get $10
  local.get $0
  local.get $8
  i32.add
  local.get $3
  call $~lib/memory/memory.copy
  local.get $10
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/decimalCount32 (; 149 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 100000
  i32.lt_u
  if
   local.get $0
   i32.const 100
   i32.lt_u
   if
    i32.const 1
    i32.const 2
    local.get $0
    i32.const 10
    i32.lt_u
    select
    return
   else    
    i32.const 4
    i32.const 5
    local.get $0
    i32.const 10000
    i32.lt_u
    select
    local.set $1
    i32.const 3
    local.get $1
    local.get $0
    i32.const 1000
    i32.lt_u
    select
    return
   end
   unreachable
  else   
   local.get $0
   i32.const 10000000
   i32.lt_u
   if
    i32.const 6
    i32.const 7
    local.get $0
    i32.const 1000000
    i32.lt_u
    select
    return
   else    
    i32.const 9
    i32.const 10
    local.get $0
    i32.const 1000000000
    i32.lt_u
    select
    local.set $1
    i32.const 8
    local.get $1
    local.get $0
    i32.const 100000000
    i32.lt_u
    select
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa32_lut (; 150 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  (local $9 i64)
  i32.const 3272
  i32.load offset=4
  local.set $3
  block $break|0
   loop $continue|0
    local.get $1
    i32.const 10000
    i32.ge_u
    i32.eqz
    br_if $break|0
    local.get $1
    i32.const 10000
    i32.div_u
    local.set $4
    local.get $1
    i32.const 10000
    i32.rem_u
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 100
    i32.div_u
    local.set $6
    local.get $5
    i32.const 100
    i32.rem_u
    local.set $7
    local.get $3
    local.get $6
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $8
    local.get $3
    local.get $7
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $9
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $8
    local.get $9
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $continue|0
   end
   unreachable
  end
  local.get $1
  i32.const 100
  i32.ge_u
  if
   local.get $1
   i32.const 100
   i32.div_u
   local.set $7
   local.get $1
   i32.const 100
   i32.rem_u
   local.set $6
   local.get $7
   local.set $1
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   local.get $3
   local.get $6
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store
  end
  local.get $1
  i32.const 10
  i32.ge_u
  if
   local.get $2
   i32.const 2
   i32.sub
   local.set $2
   local.get $3
   local.get $1
   i32.const 2
   i32.shl
   i32.add
   i32.load
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store
  else   
   local.get $2
   i32.const 1
   i32.sub
   local.set $2
   i32.const 48
   local.get $1
   i32.add
   local.set $5
   local.get $0
   local.get $2
   i32.const 1
   i32.shl
   i32.add
   local.get $5
   i32.store16
  end
 )
 (func $~lib/util/number/itoa32 (; 151 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i32.const 0
  i32.lt_s
  local.set $1
  local.get $1
  if
   i32.const 0
   local.get $0
   i32.sub
   local.set $0
  end
  local.get $0
  call $~lib/util/number/decimalCount32
  local.get $1
  i32.add
  local.set $2
  local.get $2
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $3
  local.get $3
  local.set $6
  local.get $0
  local.set $5
  local.get $2
  local.set $4
  local.get $6
  local.get $5
  local.get $4
  call $~lib/util/number/utoa32_lut
  local.get $1
  if
   local.get $3
   i32.const 45
   i32.store16
  end
  local.get $3
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<i32> (; 152 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/util/number/itoa32
  return
 )
 (func $~lib/number/I32#toString (; 153 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<i32>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeString (; 154 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 1248
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  i32.const 0
  local.set $2
  block $break|0
   i32.const 0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    call $~lib/string/String#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $3
    call $~lib/string/String#charCodeAt
    local.set $4
    local.get $4
    i32.const 32
    i32.lt_s
    local.tee $5
    if (result i32)
     local.get $5
    else     
     local.get $4
     i32.const 1248
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
    end
    local.tee $5
    if (result i32)
     local.get $5
    else     
     local.get $4
     i32.const 1472
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
    end
    local.set $5
    local.get $5
    if
     local.get $0
     local.get $1
     local.get $2
     local.get $3
     call $~lib/string/String#substring
     local.tee $6
     call $~lib/assemblyscript-json/encoder/JSONEncoder#write
     local.get $3
     i32.const 1
     i32.add
     local.set $2
     local.get $4
     i32.const 1248
     i32.const 0
     call $~lib/string/String#charCodeAt
     i32.eq
     if
      local.get $0
      i32.const 2624
      call $~lib/assemblyscript-json/encoder/JSONEncoder#write
     else      
      local.get $4
      i32.const 1472
      i32.const 0
      call $~lib/string/String#charCodeAt
      i32.eq
      if
       local.get $0
       i32.const 2648
       call $~lib/assemblyscript-json/encoder/JSONEncoder#write
      else       
       local.get $4
       i32.const 1544
       i32.const 0
       call $~lib/string/String#charCodeAt
       i32.eq
       if
        local.get $0
        i32.const 2672
        call $~lib/assemblyscript-json/encoder/JSONEncoder#write
       else        
        local.get $4
        i32.const 1592
        i32.const 0
        call $~lib/string/String#charCodeAt
        i32.eq
        if
         local.get $0
         i32.const 2696
         call $~lib/assemblyscript-json/encoder/JSONEncoder#write
        else         
         local.get $4
         i32.const 1640
         i32.const 0
         call $~lib/string/String#charCodeAt
         i32.eq
         if
          local.get $0
          i32.const 2720
          call $~lib/assemblyscript-json/encoder/JSONEncoder#write
         else          
          local.get $4
          i32.const 1688
          i32.const 0
          call $~lib/string/String#charCodeAt
          i32.eq
          if
           local.get $0
           i32.const 2744
           call $~lib/assemblyscript-json/encoder/JSONEncoder#write
          else           
           i32.const 0
           i32.eqz
           if
            i32.const 2768
            local.get $4
            call $~lib/number/I32#toString
            local.tee $7
            call $~lib/string/String.__concat
            local.tee $8
            i32.const 3304
            i32.const 108
            i32.const 20
            call $~lib/builtins/abort
            unreachable
           end
           local.get $7
           call $~lib/rt/stub/__release
           local.get $8
           call $~lib/rt/stub/__release
          end
         end
        end
       end
      end
     end
     local.get $6
     call $~lib/rt/stub/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    br $loop|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  local.get $2
  local.get $1
  call $~lib/string/String#get:length
  call $~lib/string/String#substring
  local.tee $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.const 1248
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $5
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey (; 155 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#get:isFirstKey
  i32.const 0
  i32.ne
  i32.eqz
  if
   local.get $0
   i32.const 1184
   call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  else   
   local.get $0
   i32.load
   local.get $0
   i32.load
   call $~lib/array/Array<i32>#get:length
   i32.const 1
   i32.sub
   i32.const 0
   call $~lib/array/Array<i32>#__set
  end
  local.get $1
  i32.const 0
  call $~lib/string/String.__ne
  if (result i32)
   local.get $1
   call $~lib/string/String#get:length
   i32.const 0
   i32.gt_s
  else   
   i32.const 0
  end
  if
   local.get $0
   local.get $1
   local.tee $2
   if (result i32)
    local.get $2
   else    
    unreachable
   end
   call $~lib/assemblyscript-json/encoder/JSONEncoder#writeString
   local.get $0
   i32.const 1872
   call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  end
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setNull (; 156 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 216
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setString (; 157 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeString
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<~lib/string/String> (; 158 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   local.get $1
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setString
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#toString (; 159 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  i32.const 816
  call $~lib/array/Array<~lib/string/String>#join
 )
 (func $~lib/string/String.UTF8.byteLength (; 160 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.set $2
  local.get $2
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.add
  local.set $3
  local.get $1
  if (result i32)
   i32.const 1
  else   
   i32.const 0
  end
  local.set $4
  block $break|0
   loop $continue|0
    local.get $2
    local.get $3
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $2
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 128
    i32.lt_u
    if
     local.get $1
     if (result i32)
      local.get $5
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $4
     i32.const 1
     i32.add
     local.set $4
     local.get $2
     i32.const 2
     i32.add
     local.set $2
    else     
     local.get $5
     i32.const 2048
     i32.lt_u
     if
      local.get $4
      i32.const 2
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.add
      local.set $2
     else      
      local.get $5
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      if (result i32)
       local.get $2
       i32.const 2
       i32.add
       local.get $3
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $2
       i32.load16_u offset=2
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        local.get $2
        i32.const 4
        i32.add
        local.set $2
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        br $continue|0
       end
      end
      local.get $2
      i32.const 2
      i32.add
      local.set $2
      local.get $4
      i32.const 3
      i32.add
      local.set $4
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $4
  local.set $5
  local.get $0
  call $~lib/rt/stub/__release
  local.get $5
 )
 (func $~lib/string/String.UTF8.encode (; 161 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.set $2
  local.get $0
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
  i32.add
  local.set $3
  local.get $0
  local.get $1
  call $~lib/string/String.UTF8.byteLength
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $4
  local.get $4
  local.set $5
  block $break|0
   loop $continue|0
    local.get $2
    local.get $3
    i32.lt_u
    i32.eqz
    br_if $break|0
    local.get $2
    i32.load16_u
    local.set $6
    local.get $6
    i32.const 128
    i32.lt_u
    if
     local.get $1
     if (result i32)
      local.get $6
      i32.eqz
     else      
      i32.const 0
     end
     if
      br $break|0
     end
     local.get $5
     local.get $6
     i32.store8
     local.get $5
     i32.const 1
     i32.add
     local.set $5
     local.get $2
     i32.const 2
     i32.add
     local.set $2
    else     
     local.get $6
     i32.const 2048
     i32.lt_u
     if
      local.get $5
      local.get $6
      i32.const 6
      i32.shr_u
      i32.const 192
      i32.or
      i32.store8
      local.get $5
      local.get $6
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=1
      local.get $5
      i32.const 2
      i32.add
      local.set $5
      local.get $2
      i32.const 2
      i32.add
      local.set $2
     else      
      local.get $6
      i32.const 64512
      i32.and
      i32.const 55296
      i32.eq
      if (result i32)
       local.get $2
       i32.const 2
       i32.add
       local.get $3
       i32.lt_u
      else       
       i32.const 0
      end
      if
       local.get $2
       i32.load16_u offset=2
       local.set $7
       local.get $7
       i32.const 64512
       i32.and
       i32.const 56320
       i32.eq
       if
        i32.const 65536
        local.get $6
        i32.const 1023
        i32.and
        i32.const 10
        i32.shl
        i32.add
        local.get $7
        i32.const 1023
        i32.and
        i32.add
        local.set $6
        local.get $5
        local.get $6
        i32.const 18
        i32.shr_u
        i32.const 240
        i32.or
        i32.store8
        local.get $5
        local.get $6
        i32.const 12
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=1
        local.get $5
        local.get $6
        i32.const 6
        i32.shr_u
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=2
        local.get $5
        local.get $6
        i32.const 63
        i32.and
        i32.const 128
        i32.or
        i32.store8 offset=3
        local.get $2
        i32.const 4
        i32.add
        local.set $2
        local.get $5
        i32.const 4
        i32.add
        local.set $5
        br $continue|0
       end
      end
      local.get $5
      local.get $6
      i32.const 12
      i32.shr_u
      i32.const 224
      i32.or
      i32.store8
      local.get $5
      local.get $6
      i32.const 6
      i32.shr_u
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=1
      local.get $5
      local.get $6
      i32.const 63
      i32.and
      i32.const 128
      i32.or
      i32.store8 offset=2
      local.get $2
      i32.const 2
      i32.add
      local.set $2
      local.get $5
      i32.const 3
      i32.add
      local.set $5
     end
    end
    br $continue|0
   end
   unreachable
  end
  local.get $1
  if
   local.get $2
   local.get $3
   i32.le_u
   i32.eqz
   if
    i32.const 0
    i32.const 1424
    i32.const 567
    i32.const 8
    call $~lib/builtins/abort
    unreachable
   end
   local.get $4
   local.get $5
   local.get $4
   i32.sub
   i32.const 1
   i32.add
   call $~lib/rt/stub/__realloc
   local.set $4
   local.get $5
   i32.const 0
   i32.store8
  else   
   local.get $2
   local.get $3
   i32.eq
   i32.eqz
   if
    i32.const 0
    i32.const 1424
    i32.const 571
    i32.const 8
    call $~lib/builtins/abort
    unreachable
   end
  end
  local.get $4
  call $~lib/rt/stub/__retain
  local.set $6
  local.get $0
  call $~lib/rt/stub/__release
  local.get $6
 )
 (func $~lib/assemblyscript-json/util/index/Buffer.fromString (; 162 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.encode
  local.tee $2
  local.set $3
  local.get $1
  call $~lib/assemblyscript-json/util/index/Buffer.getPtr
  local.get $3
  local.get $0
  i32.const 0
  call $~lib/string/String.UTF8.byteLength
  call $~lib/memory/memory.copy
  local.get $1
  local.set $4
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#serialize (; 163 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#toString
  local.tee $1
  call $~lib/assemblyscript-json/util/index/Buffer.fromString
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/__wrapper_hello (; 164 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 2304
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/hello
  local.set $5
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $6
  local.get $5
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $6
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $6
   local.get $5
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $6
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $7
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $8
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/util/util.toUTF8 (; 165 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/string/String.UTF8.encode
  local.tee $2
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/util/util.stringToBytes (; 166 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 1
  call $~lib/string/String.UTF8.byteLength
  i32.const 1
  i32.sub
  local.set $1
  i32.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#constructor
  local.set $2
  local.get $2
  i32.load offset=4
  local.get $0
  i32.const 0
  call $~lib/near-runtime-ts/util/util.toUTF8
  local.get $1
  call $~lib/memory/memory.copy
  local.get $2
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/storage/Storage#setString (; 167 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $2
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $4
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $4
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $4
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/setKeyValue (; 168 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#setString
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_setKeyValue (; 169 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 3392
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $4
  local.get $3
  i32.const 3416
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $5
  call $assembly/hello/main/setKeyValue
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#_internalReadBytes (; 170 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_read
  local.set $3
  local.get $3
  i64.const 1
  i64.eq
  if
   i64.const 0
   call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
   local.set $4
   i32.const 0
   local.get $4
   i32.wrap_i64
   call $~lib/typedarray/Uint8Array#constructor
   local.set $5
   i64.const 0
   local.get $5
   i32.load offset=4
   i64.extend_i32_u
   call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
   local.get $5
   local.set $6
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $6
   return
  else   
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $5
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $5
   return
  end
  unreachable
 )
 (func $~lib/arraybuffer/ArrayBufferView#get:byteOffset (; 171 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $0
  i32.load
  i32.sub
 )
 (func $~lib/arraybuffer/ArrayBuffer#get:byteLength (; 172 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 16
  i32.sub
  i32.load offset=12
 )
 (func $~lib/arraybuffer/ArrayBuffer#slice (; 173 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  local.set $3
  local.get $1
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $3
   local.get $1
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else   
   local.get $1
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.lt_s
   select
  end
  local.set $1
  local.get $2
  i32.const 0
  i32.lt_s
  if (result i32)
   local.get $3
   local.get $2
   i32.add
   local.tee $4
   i32.const 0
   local.tee $5
   local.get $4
   local.get $5
   i32.gt_s
   select
  else   
   local.get $2
   local.tee $4
   local.get $3
   local.tee $5
   local.get $4
   local.get $5
   i32.lt_s
   select
  end
  local.set $2
  local.get $2
  local.get $1
  i32.sub
  local.tee $4
  i32.const 0
  local.tee $5
  local.get $4
  local.get $5
  i32.gt_s
  select
  local.set $6
  local.get $6
  i32.const 0
  call $~lib/rt/stub/__alloc
  local.set $7
  local.get $7
  local.get $0
  local.get $1
  i32.add
  local.get $6
  call $~lib/memory/memory.copy
  local.get $7
  call $~lib/rt/stub/__retain
 )
 (func $~lib/near-runtime-ts/util/util.uint8ArrayToBuffer (; 174 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $1
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteOffset
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  local.get $0
  call $~lib/arraybuffer/ArrayBufferView#get:byteOffset
  i32.add
  call $~lib/arraybuffer/ArrayBuffer#slice
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/string/String.UTF8.decode (; 175 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $0
  call $~lib/arraybuffer/ArrayBuffer#get:byteLength
  local.get $1
  call $~lib/string/String.UTF8.decodeUnsafe
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/near-runtime-ts/util/util.bytesToString (; 176 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.const 0
  i32.eq
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $1
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   return
  end
  local.get $0
  call $~lib/near-runtime-ts/util/util.uint8ArrayToBuffer
  local.tee $1
  i32.const 1
  call $~lib/string/String.UTF8.decode
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/near-runtime-ts/storage/Storage#getString (; 177 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#_internalReadBytes
  local.tee $2
  call $~lib/near-runtime-ts/util/util.bytesToString
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/getValueByKey (; 178 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $1
  if (result i32)
   local.get $1
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $assembly/hello/main/__wrapper_getValueByKey (; 179 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 3392
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/getValueByKey
  local.set $5
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $6
  local.get $5
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $6
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $6
   local.get $5
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $6
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $7
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $8
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/setValue (; 180 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 2304
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#setString
  local.get $0
 )
 (func $assembly/hello/main/__wrapper_setValue (; 181 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 3416
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/setValue
  local.set $5
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $6
  local.get $5
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $6
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $6
   local.get $5
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $6
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $7
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $8
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/getValue (; 182 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 2304
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $0
  if (result i32)
   local.get $0
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/__wrapper_getValue (; 183 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getValue
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $1
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#_fetchIter (; 184 ;) (type $FUNCSIG$iiji) (param $0 i32) (param $1 i64) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i64)
  (local $6 i32)
  i32.const 0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#constructor
  local.set $3
  block $break|0
   loop $continue|0
    local.get $2
    local.tee $4
    i32.const 1
    i32.sub
    local.set $2
    local.get $4
    i32.const 0
    i32.ne
    if (result i32)
     local.get $1
     i64.const 0
     i64.const 1
     call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_next
     i64.const 1
     i64.eq
    else     
     i32.const 0
    end
    i32.eqz
    br_if $break|0
    i64.const 0
    call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
    local.set $5
    i32.const 0
    local.get $5
    i32.wrap_i64
    call $~lib/typedarray/Uint8Array#constructor
    local.set $4
    i64.const 0
    local.get $4
    i32.load offset=4
    i64.extend_i32_u
    call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
    local.get $4
    i32.const 0
    i32.ne
    if
     local.get $3
     local.get $4
     call $~lib/near-runtime-ts/util/util.bytesToString
     local.tee $6
     call $~lib/array/Array<~lib/string/String>#push
     drop
     local.get $6
     call $~lib/rt/stub/__release
    end
    local.get $4
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  local.get $3
 )
 (func $~lib/near-runtime-ts/storage/Storage#keys (; 185 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_iter_prefix
  local.set $4
  local.get $0
  local.get $4
  local.get $2
  call $~lib/near-runtime-ts/storage/Storage#_fetchIter
  local.set $5
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $5
 )
 (func $~lib/near-runtime-ts/storage/Storage#keys|trampoline (; 186 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  block $1of1
   block $0of1
    block $outOfRange
     global.get $~lib/argc
     i32.const 1
     i32.sub
     br_table $0of1 $1of1 $outOfRange
    end
    unreachable
   end
   i32.const -1
   local.set $2
  end
  local.get $0
  local.get $1
  local.get $2
  call $~lib/near-runtime-ts/storage/Storage#keys
 )
 (func $~lib/array/Array<~lib/string/String>#__unchecked_get (; 187 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<~lib/string/String>#__get (; 188 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 656
   i32.const 768
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 832
   i32.const 768
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/string/String>#__unchecked_get
 )
 (func $assembly/hello/main/getAllKeys (; 189 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  i32.const 1
  global.set $~lib/argc
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 1568
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#keys|trampoline
  local.set $0
  local.get $0
  call $~lib/array/Array<~lib/string/String>#get:length
  i32.const 1
  i32.eq
  i32.eqz
  if
   i32.const 0
   i32.const 3448
   i32.const 417
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 0
  call $~lib/array/Array<~lib/string/String>#__get
  local.tee $1
  i32.const 2304
  call $~lib/string/String.__eq
  i32.eqz
  if
   i32.const 0
   i32.const 3448
   i32.const 418
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray (; 190 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 2048
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/array/Array<i32>#pop (; 191 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  i32.load offset=12
  local.set $1
  local.get $1
  i32.const 1
  i32.lt_s
  if
   i32.const 2000
   i32.const 768
   i32.const 287
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 1
  i32.sub
  local.tee $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  local.set $2
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#popArray (; 192 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.const 2072
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#pop
  drop
 )
 (func $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>> (; 193 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray
   drop
   block $break|0
    i32.const 0
    local.set $3
    loop $loop|0
     local.get $3
     local.get $1
     call $~lib/array/Array<~lib/string/String>#get:length
     i32.lt_s
     i32.eqz
     br_if $break|0
     local.get $0
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/string/String>#__get
     local.tee $4
     i32.const 0
     call $~lib/nearEntry/encode<~lib/string/String>
     call $~lib/rt/stub/__release
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     local.get $4
     call $~lib/rt/stub/__release
     br $loop|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#popArray
  end
  local.get $0
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $assembly/hello/main/__wrapper_getAllKeys (; 194 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getAllKeys
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/benchmark (; 195 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  i32.const 0
  local.set $0
  block $break|0
   loop $continue|0
    local.get $0
    i32.const 10
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $0
    call $~lib/number/I32#toString
    local.tee $1
    i32.const 3512
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $0
    i32.const 1
    i32.add
    local.set $0
    local.get $1
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  i32.const 1
  global.set $~lib/argc
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 816
  i32.const 0
  call $~lib/near-runtime-ts/storage/Storage#keys|trampoline
 )
 (func $assembly/hello/main/__wrapper_benchmark (; 196 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/benchmark
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<~lib/array/Array<~lib/string/String>>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj> (; 197 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   i32.eqz
   if
    i32.const 3544
    local.get $1
    call $~lib/string/String.__concat
    local.tee $7
    i32.const 3576
    call $~lib/string/String.__concat
    local.tee $5
    i32.const 3616
    call $~lib/string/String.__concat
    local.tee $4
    i32.const 3640
    call $~lib/string/String.__concat
    local.tee $6
    i32.const 2536
    i32.const 355
    i32.const 4
    call $~lib/builtins/abort
    unreachable
   end
   i32.const 0
   local.set $8
   local.get $7
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
   local.get $4
   call $~lib/rt/stub/__release
   local.get $6
   call $~lib/rt/stub/__release
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $8
   return
  end
  local.get $3
  local.tee $6
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $6
   i32.const 21
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 3616
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 3688
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 2536
   i32.const 377
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i64.load
  i32.wrap_i64
  local.set $8
  local.get $6
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $8
  return
 )
 (func $~lib/util/string/isSpace (; 198 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 255
  i32.le_s
  if
   block $break|0
    block $case6|0
     block $case5|0
      block $case4|0
       block $case3|0
        block $case2|0
         block $case1|0
          block $case0|0
           local.get $0
           local.set $1
           local.get $1
           i32.const 9
           i32.eq
           br_if $case0|0
           local.get $1
           i32.const 10
           i32.eq
           br_if $case1|0
           local.get $1
           i32.const 11
           i32.eq
           br_if $case2|0
           local.get $1
           i32.const 12
           i32.eq
           br_if $case3|0
           local.get $1
           i32.const 13
           i32.eq
           br_if $case4|0
           local.get $1
           i32.const 32
           i32.eq
           br_if $case5|0
           local.get $1
           i32.const 160
           i32.eq
           br_if $case6|0
           br $break|0
          end
         end
        end
       end
      end
     end
    end
    i32.const 1
    return
   end
   i32.const 0
   return
  end
  local.get $0
  i32.const 8192
  i32.ge_s
  if (result i32)
   local.get $0
   i32.const 8202
   i32.le_s
  else   
   i32.const 0
  end
  if
   i32.const 1
   return
  end
  block $break|1
   block $case6|1
    block $case5|1
     block $case4|1
      block $case3|1
       block $case2|1
        block $case1|1
         block $case0|1
          local.get $0
          local.set $1
          local.get $1
          i32.const 5760
          i32.eq
          br_if $case0|1
          local.get $1
          i32.const 8232
          i32.eq
          br_if $case1|1
          local.get $1
          i32.const 8233
          i32.eq
          br_if $case2|1
          local.get $1
          i32.const 8239
          i32.eq
          br_if $case3|1
          local.get $1
          i32.const 8287
          i32.eq
          br_if $case4|1
          local.get $1
          i32.const 12288
          i32.eq
          br_if $case5|1
          local.get $1
          i32.const 65279
          i32.eq
          br_if $case6|1
          br $break|1
         end
        end
       end
      end
     end
    end
   end
   i32.const 1
   return
  end
  i32.const 0
 )
 (func $~lib/util/string/strtol<i32> (; 199 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i32.const 0
   local.set $3
   local.get $0
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.set $4
  local.get $4
  i32.load16_u
  local.set $5
  i32.const 1
  local.set $6
  block $break|0
   loop $continue|0
    local.get $5
    call $~lib/util/string/isSpace
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $5
  i32.const 45
  i32.eq
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i32.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
   local.get $4
   i32.const 2
   i32.add
   local.tee $4
   i32.load16_u
   local.set $5
   i32.const -1
   local.set $6
  else   
   local.get $5
   i32.const 43
   i32.eq
   if
    local.get $2
    i32.const 1
    i32.sub
    local.tee $2
    i32.eqz
    if
     i32.const 0
     local.set $3
     local.get $0
     call $~lib/rt/stub/__release
     local.get $3
     return
    end
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
   end
  end
  local.get $1
  i32.eqz
  if
   local.get $5
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else    
    i32.const 0
   end
   if
    block $break|1
     block $case6|1
      block $case5|1
       block $case4|1
        block $case3|1
         block $case2|1
          block $case1|1
           block $case0|1
            local.get $4
            i32.const 2
            i32.add
            i32.load16_u
            local.set $3
            local.get $3
            i32.const 66
            i32.eq
            br_if $case0|1
            local.get $3
            i32.const 98
            i32.eq
            br_if $case1|1
            local.get $3
            i32.const 79
            i32.eq
            br_if $case2|1
            local.get $3
            i32.const 111
            i32.eq
            br_if $case3|1
            local.get $3
            i32.const 88
            i32.eq
            br_if $case4|1
            local.get $3
            i32.const 120
            i32.eq
            br_if $case5|1
            br $case6|1
           end
          end
          local.get $4
          i32.const 4
          i32.add
          local.set $4
          local.get $2
          i32.const 2
          i32.sub
          local.set $2
          i32.const 2
          local.set $1
          br $break|1
         end
        end
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        local.get $2
        i32.const 2
        i32.sub
        local.set $2
        i32.const 8
        local.set $1
        br $break|1
       end
      end
      local.get $4
      i32.const 4
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 16
      local.set $1
      br $break|1
     end
     i32.const 10
     local.set $1
    end
   else    
    i32.const 10
    local.set $1
   end
  else   
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i32.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
  end
  i32.const 0
  local.set $7
  block $break|2
   loop $continue|2
    local.get $2
    local.tee $3
    i32.const 1
    i32.sub
    local.set $2
    local.get $3
    i32.eqz
    br_if $break|2
    local.get $4
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 48
    i32.ge_s
    if (result i32)
     local.get $5
     i32.const 57
     i32.le_s
    else     
     i32.const 0
    end
    if
     local.get $5
     i32.const 48
     i32.sub
     local.set $5
    else     
     local.get $5
     i32.const 65
     i32.ge_s
     if (result i32)
      local.get $5
      i32.const 90
      i32.le_s
     else      
      i32.const 0
     end
     if
      local.get $5
      i32.const 65
      i32.const 10
      i32.sub
      i32.sub
      local.set $5
     else      
      local.get $5
      i32.const 97
      i32.ge_s
      if (result i32)
       local.get $5
       i32.const 122
       i32.le_s
      else       
       i32.const 0
      end
      if
       local.get $5
       i32.const 97
       i32.const 10
       i32.sub
       i32.sub
       local.set $5
      else       
       br $break|2
      end
     end
    end
    local.get $5
    local.get $1
    i32.ge_s
    if
     br $break|2
    end
    local.get $7
    local.get $1
    i32.mul
    local.get $5
    i32.add
    local.set $7
    local.get $4
    i32.const 2
    i32.add
    local.set $4
    br $continue|2
   end
   unreachable
  end
  local.get $6
  local.get $7
  i32.mul
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/number/I32.parseInt (; 200 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i32>
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/util/number/decimalCount64 (; 201 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  local.get $0
  i64.const 1000000000000000
  i64.lt_u
  if
   local.get $0
   i64.const 1000000000000
   i64.lt_u
   if
    i32.const 11
    i32.const 12
    local.get $0
    i64.const 100000000000
    i64.lt_u
    select
    local.set $1
    i32.const 10
    local.get $1
    local.get $0
    i64.const 10000000000
    i64.lt_u
    select
    return
   else    
    i32.const 14
    i32.const 15
    local.get $0
    i64.const 100000000000000
    i64.lt_u
    select
    local.set $1
    i32.const 13
    local.get $1
    local.get $0
    i64.const 10000000000000
    i64.lt_u
    select
    return
   end
   unreachable
  else   
   local.get $0
   i64.const 100000000000000000
   i64.lt_u
   if
    i32.const 16
    i32.const 17
    local.get $0
    i64.const 10000000000000000
    i64.lt_u
    select
    return
   else    
    i32.const 19
    i32.const 20
    local.get $0
    i64.const -8446744073709551616
    i64.lt_u
    select
    local.set $1
    i32.const 18
    local.get $1
    local.get $0
    i64.const 1000000000000000000
    i64.lt_u
    select
    return
   end
   unreachable
  end
  unreachable
 )
 (func $~lib/util/number/utoa64_lut (; 202 ;) (type $FUNCSIG$viji) (param $0 i32) (param $1 i64) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  (local $13 i64)
  i32.const 3272
  i32.load offset=4
  local.set $3
  block $break|0
   loop $continue|0
    local.get $1
    i64.const 100000000
    i64.ge_u
    i32.eqz
    br_if $break|0
    local.get $1
    i64.const 100000000
    i64.div_u
    local.set $4
    local.get $1
    local.get $4
    i64.const 100000000
    i64.mul
    i64.sub
    i32.wrap_i64
    local.set $5
    local.get $4
    local.set $1
    local.get $5
    i32.const 10000
    i32.div_u
    local.set $6
    local.get $5
    i32.const 10000
    i32.rem_u
    local.set $7
    local.get $6
    i32.const 100
    i32.div_u
    local.set $8
    local.get $6
    i32.const 100
    i32.rem_u
    local.set $9
    local.get $7
    i32.const 100
    i32.div_u
    local.set $10
    local.get $7
    i32.const 100
    i32.rem_u
    local.set $11
    local.get $3
    local.get $10
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    local.get $3
    local.get $11
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    local.get $3
    local.get $8
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $12
    local.get $3
    local.get $9
    i32.const 2
    i32.shl
    i32.add
    i64.load32_u
    local.set $13
    local.get $2
    i32.const 4
    i32.sub
    local.set $2
    local.get $0
    local.get $2
    i32.const 1
    i32.shl
    i32.add
    local.get $12
    local.get $13
    i64.const 32
    i64.shl
    i64.or
    i64.store
    br $continue|0
   end
   unreachable
  end
  local.get $0
  local.get $1
  i32.wrap_i64
  local.get $2
  call $~lib/util/number/utoa32_lut
 )
 (func $~lib/util/number/utoa64 (; 203 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i64)
  local.get $0
  i64.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i64.const 4294967295
  i64.le_u
  if
   local.get $0
   i32.wrap_i64
   local.set $2
   local.get $2
   call $~lib/util/number/decimalCount32
   local.set $3
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $1
   local.get $1
   local.set $6
   local.get $2
   local.set $5
   local.get $3
   local.set $4
   local.get $6
   local.get $5
   local.get $4
   call $~lib/util/number/utoa32_lut
  else   
   local.get $0
   call $~lib/util/number/decimalCount64
   local.set $3
   local.get $3
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $1
   local.get $1
   local.set $5
   local.get $0
   local.set $7
   local.get $3
   local.set $4
   local.get $5
   local.get $7
   local.get $4
   call $~lib/util/number/utoa64_lut
  end
  local.get $1
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<u64> (; 204 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  local.get $0
  call $~lib/util/number/utoa64
  return
 )
 (func $~lib/number/U64#toString (; 205 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<u64>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/benchmark_storage (; 206 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i64)
  (local $5 i32)
  i32.const 0
  local.set $1
  block $break|0
   loop $continue|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $2
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  i32.const 0
  local.set $1
  i64.const 0
  local.set $4
  block $break|1
   loop $continue|1
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|1
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#getString
    local.tee $2
    i32.const 0
    call $~lib/number/I32.parseInt
    local.set $5
    local.get $4
    local.get $5
    i64.extend_i32_s
    i64.add
    local.set $4
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    local.get $3
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    br $continue|1
   end
   unreachable
  end
  local.get $4
  call $~lib/number/U64#toString
 )
 (func $assembly/hello/main/__wrapper_benchmark_storage (; 207 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 1568
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  call $assembly/hello/main/benchmark_storage
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $~lib/util/string/strtol<i64> (; 208 ;) (type $FUNCSIG$jii) (param $0 i32) (param $1 i32) (result i64)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/string/String#get:length
  local.set $2
  local.get $2
  i32.eqz
  if
   i64.const 0
   local.set $3
   local.get $0
   call $~lib/rt/stub/__release
   local.get $3
   return
  end
  local.get $0
  local.set $4
  local.get $4
  i32.load16_u
  local.set $5
  i64.const 1
  local.set $6
  block $break|0
   loop $continue|0
    local.get $5
    call $~lib/util/string/isSpace
    i32.eqz
    br_if $break|0
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    br $continue|0
   end
   unreachable
  end
  local.get $5
  i32.const 45
  i32.eq
  if
   local.get $2
   i32.const 1
   i32.sub
   local.tee $2
   i32.eqz
   if
    i64.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
   local.get $4
   i32.const 2
   i32.add
   local.tee $4
   i32.load16_u
   local.set $5
   i64.const -1
   local.set $6
  else   
   local.get $5
   i32.const 43
   i32.eq
   if
    local.get $2
    i32.const 1
    i32.sub
    local.tee $2
    i32.eqz
    if
     i64.const 0
     local.set $3
     local.get $0
     call $~lib/rt/stub/__release
     local.get $3
     return
    end
    local.get $4
    i32.const 2
    i32.add
    local.tee $4
    i32.load16_u
    local.set $5
   end
  end
  local.get $1
  i32.eqz
  if
   local.get $5
   i32.const 48
   i32.eq
   if (result i32)
    local.get $2
    i32.const 2
    i32.gt_s
   else    
    i32.const 0
   end
   if
    block $break|1
     block $case6|1
      block $case5|1
       block $case4|1
        block $case3|1
         block $case2|1
          block $case1|1
           block $case0|1
            local.get $4
            i32.const 2
            i32.add
            i32.load16_u
            local.set $7
            local.get $7
            i32.const 66
            i32.eq
            br_if $case0|1
            local.get $7
            i32.const 98
            i32.eq
            br_if $case1|1
            local.get $7
            i32.const 79
            i32.eq
            br_if $case2|1
            local.get $7
            i32.const 111
            i32.eq
            br_if $case3|1
            local.get $7
            i32.const 88
            i32.eq
            br_if $case4|1
            local.get $7
            i32.const 120
            i32.eq
            br_if $case5|1
            br $case6|1
           end
          end
          local.get $4
          i32.const 4
          i32.add
          local.set $4
          local.get $2
          i32.const 2
          i32.sub
          local.set $2
          i32.const 2
          local.set $1
          br $break|1
         end
        end
        local.get $4
        i32.const 4
        i32.add
        local.set $4
        local.get $2
        i32.const 2
        i32.sub
        local.set $2
        i32.const 8
        local.set $1
        br $break|1
       end
      end
      local.get $4
      i32.const 4
      i32.add
      local.set $4
      local.get $2
      i32.const 2
      i32.sub
      local.set $2
      i32.const 16
      local.set $1
      br $break|1
     end
     i32.const 10
     local.set $1
    end
   else    
    i32.const 10
    local.set $1
   end
  else   
   local.get $1
   i32.const 2
   i32.lt_s
   if (result i32)
    i32.const 1
   else    
    local.get $1
    i32.const 36
    i32.gt_s
   end
   if
    i64.const 0
    local.set $3
    local.get $0
    call $~lib/rt/stub/__release
    local.get $3
    return
   end
  end
  i64.const 0
  local.set $8
  block $break|2
   loop $continue|2
    local.get $2
    local.tee $7
    i32.const 1
    i32.sub
    local.set $2
    local.get $7
    i32.eqz
    br_if $break|2
    local.get $4
    i32.load16_u
    local.set $5
    local.get $5
    i32.const 48
    i32.ge_s
    if (result i32)
     local.get $5
     i32.const 57
     i32.le_s
    else     
     i32.const 0
    end
    if
     local.get $5
     i32.const 48
     i32.sub
     local.set $5
    else     
     local.get $5
     i32.const 65
     i32.ge_s
     if (result i32)
      local.get $5
      i32.const 90
      i32.le_s
     else      
      i32.const 0
     end
     if
      local.get $5
      i32.const 65
      i32.const 10
      i32.sub
      i32.sub
      local.set $5
     else      
      local.get $5
      i32.const 97
      i32.ge_s
      if (result i32)
       local.get $5
       i32.const 122
       i32.le_s
      else       
       i32.const 0
      end
      if
       local.get $5
       i32.const 97
       i32.const 10
       i32.sub
       i32.sub
       local.set $5
      else       
       br $break|2
      end
     end
    end
    local.get $5
    local.get $1
    i32.ge_s
    if
     br $break|2
    end
    local.get $8
    local.get $1
    i64.extend_i32_s
    i64.mul
    local.get $5
    i64.extend_i32_s
    i64.add
    local.set $8
    local.get $4
    i32.const 2
    i32.add
    local.set $4
    br $continue|2
   end
   unreachable
  end
  local.get $6
  local.get $8
  i64.mul
  local.set $3
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/number/I64.parseInt (; 209 ;) (type $FUNCSIG$jii) (param $0 i32) (param $1 i32) (result i64)
  (local $2 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/util/string/strtol<i64>
  local.set $2
  local.get $0
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/nearEntry/decode<u64,~lib/nearEntry/Obj> (; 210 ;) (type $FUNCSIG$jii) (param $0 i32) (param $1 i32) (result i64)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i64)
  (local $7 i32)
  (local $8 i32)
  (local $9 i64)
  (local $10 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    i64.extend_i32_u
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $7
   local.get $3
   local.tee $8
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $8
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $8
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $8
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $8
   local.set $3
  end
  local.get $3
  local.tee $8
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $8
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   i32.eqz
   if
    i32.const 3544
    local.get $1
    call $~lib/string/String.__concat
    local.tee $8
    i32.const 3576
    call $~lib/string/String.__concat
    local.tee $5
    i32.const 3784
    call $~lib/string/String.__concat
    local.tee $4
    i32.const 3640
    call $~lib/string/String.__concat
    local.tee $7
    i32.const 2536
    i32.const 355
    i32.const 4
    call $~lib/builtins/abort
    unreachable
   end
   i32.const 0
   i64.extend_i32_u
   local.set $6
   local.get $8
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
   local.get $4
   call $~lib/rt/stub/__release
   local.get $7
   call $~lib/rt/stub/__release
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $6
   return
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 19
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 3784
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 3808
   call $~lib/string/String.__concat
   local.tee $8
   i32.const 2536
   i32.const 372
   i32.const 6
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.load
  call $~lib/rt/stub/__retain
  local.set $10
  local.get $10
  i32.const 0
  call $~lib/number/I64.parseInt
  local.set $6
  local.get $7
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
  local.get $10
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $6
  return
 )
 (func $~lib/near-runtime-ts/contract/Context#get:storageUsage (; 211 ;) (type $FUNCSIG$ji) (param $0 i32) (result i64)
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_usage
 )
 (func $~lib/near-runtime-ts/storage/Storage#delete (; 212 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_remove
  drop
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/limited_storage (; 213 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  local.set $1
  block $break|0
   loop $continue|0
    global.get $~lib/near-runtime-ts/contract/context
    call $~lib/near-runtime-ts/contract/Context#get:storageUsage
    local.get $0
    i64.le_u
    i32.eqz
    br_if $break|0
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $1
    call $~lib/number/I32#toString
    local.tee $2
    local.get $1
    call $~lib/number/I32#toString
    local.tee $3
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    br $continue|0
   end
   unreachable
  end
  global.get $~lib/near-runtime-ts/contract/context
  call $~lib/near-runtime-ts/contract/Context#get:storageUsage
  local.get $0
  i64.gt_u
  if
   global.get $~lib/near-runtime-ts/storage/storage
   local.get $1
   call $~lib/number/I32#toString
   local.tee $3
   call $~lib/near-runtime-ts/storage/Storage#delete
   local.get $3
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/number/I32#toString
 )
 (func $assembly/hello/main/__wrapper_limited_storage (; 214 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 3744
  call $~lib/nearEntry/decode<u64,~lib/nearEntry/Obj>
  call $assembly/hello/main/limited_storage
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/benchmark_sum_n (; 215 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i64)
  i32.const 0
  local.set $1
  i64.const 0
  local.set $2
  block $break|0
   loop $continue|0
    local.get $1
    local.get $0
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $2
    local.get $1
    i64.extend_i32_s
    i64.add
    local.set $2
    local.get $1
    i32.const 1
    i32.add
    local.set $1
    br $continue|0
   end
   unreachable
  end
  local.get $2
  call $~lib/number/U64#toString
 )
 (func $assembly/hello/main/__wrapper_benchmark_sum_n (; 216 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 1568
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  call $assembly/hello/main/benchmark_sum_n
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $4
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $5
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $5
   local.get $4
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/logging/logging.log (; 217 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $1
  local.get $1
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $1
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.log_utf8
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/returnHiWithLogs (; 218 ;) (type $FUNCSIG$i) (result i32)
  i32.const 3952
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 3984
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 4016
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/__wrapper_returnHiWithLogs (; 219 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/returnHiWithLogs
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $0
  i32.const 0
  call $~lib/string/String.__eq
  if
   local.get $1
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   i32.const 0
   call $~lib/nearEntry/encode<~lib/string/String>
   call $~lib/rt/stub/__release
  end
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/testSetRemove (; 220 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4040
  local.get $0
  call $~lib/near-runtime-ts/storage/Storage#setString
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4040
  call $~lib/near-runtime-ts/storage/Storage#delete
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4040
  call $~lib/near-runtime-ts/storage/Storage#getString
  local.tee $1
  i32.const 0
  call $~lib/string/String.__eq
  i32.eqz
  if
   i32.const 4064
   i32.const 3448
   i32.const 481
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_testSetRemove (; 221 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 3416
  call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/testSetRemove
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/buildString (; 222 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  local.get $0
  i32.const 0
  i32.ge_s
  i32.eqz
  if
   i32.const 0
   i32.const 3448
   i32.const 484
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 816
  call $~lib/rt/stub/__retain
  local.set $1
  block $break|0
   i32.const 20
   local.set $2
   loop $loop|0
    local.get $2
    i32.const 0
    i32.ge_s
    i32.eqz
    br_if $break|0
    local.get $1
    local.get $1
    call $~lib/string/String.__concat
    local.tee $3
    local.tee $4
    local.get $1
    local.tee $5
    i32.ne
    if
     local.get $4
     call $~lib/rt/stub/__retain
     drop
     local.get $5
     call $~lib/rt/stub/__release
    end
    local.get $4
    local.set $1
    local.get $0
    local.get $2
    i32.shr_s
    i32.const 1
    i32.and
    if
     local.get $1
     i32.const 312
     call $~lib/string/String.__concat
     local.tee $4
     local.tee $5
     local.get $1
     local.tee $6
     i32.ne
     if
      local.get $5
      call $~lib/rt/stub/__retain
      drop
      local.get $6
      call $~lib/rt/stub/__release
     end
     local.get $5
     local.set $1
     local.get $4
     call $~lib/rt/stub/__release
    end
    local.get $2
    i32.const 1
    i32.sub
    local.set $2
    local.get $3
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
 )
 (func $~lib/string/String#substr (; 223 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  local.get $1
  local.set $3
  local.get $2
  local.set $4
  local.get $0
  call $~lib/string/String#get:length
  local.set $5
  local.get $3
  i32.const 0
  i32.lt_s
  if
   local.get $5
   local.get $3
   i32.add
   local.tee $6
   i32.const 0
   local.tee $7
   local.get $6
   local.get $7
   i32.gt_s
   select
   local.set $3
  end
  local.get $4
  local.tee $6
  i32.const 0
  local.tee $7
  local.get $6
  local.get $7
  i32.gt_s
  select
  local.tee $6
  local.get $5
  local.get $3
  i32.sub
  local.tee $7
  local.get $6
  local.get $7
  i32.lt_s
  select
  local.set $8
  local.get $8
  i32.const 0
  i32.le_s
  if
   i32.const 816
   call $~lib/rt/stub/__retain
   return
  end
  local.get $8
  i32.const 1
  i32.shl
  i32.const 1
  call $~lib/rt/stub/__alloc
  local.set $9
  local.get $9
  local.get $0
  local.get $3
  i32.add
  local.get $8
  call $~lib/memory/memory.copy
  local.get $9
  call $~lib/rt/stub/__retain
 )
 (func $assembly/hello/main/insertStrings (; 224 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $assembly/hello/main/buildString
  local.set $2
  block $break|0
   local.get $0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    i32.lt_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $2
    local.get $1
    local.get $3
    i32.sub
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/string/String#substr
    local.tee $4
    i32.const 1520
    call $~lib/string/String.__concat
    local.tee $5
    i32.const 4168
    call $~lib/near-runtime-ts/storage/Storage#setString
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_insertStrings (; 225 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 4120
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  local.get $3
  i32.const 4144
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  call $assembly/hello/main/insertStrings
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/deleteStrings (; 226 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  local.get $1
  call $assembly/hello/main/buildString
  local.set $2
  block $break|0
   local.get $1
   i32.const 1
   i32.sub
   local.set $3
   loop $loop|0
    local.get $3
    local.get $0
    i32.ge_s
    i32.eqz
    br_if $break|0
    global.get $~lib/near-runtime-ts/storage/storage
    local.get $2
    local.get $1
    local.get $3
    i32.sub
    global.get $~lib/builtins/i32.MAX_VALUE
    call $~lib/string/String#substr
    local.tee $4
    i32.const 1520
    call $~lib/string/String.__concat
    local.tee $5
    call $~lib/near-runtime-ts/storage/Storage#delete
    local.get $3
    i32.const 1
    i32.sub
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_deleteStrings (; 227 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 4120
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  local.get $3
  i32.const 4144
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  call $assembly/hello/main/deleteStrings
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/recurse (; 228 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.const 0
  i32.le_s
  if
   local.get $0
   return
  end
  local.get $0
  i32.const 1
  i32.sub
  call $assembly/hello/main/recurse
  i32.const 1
  i32.add
 )
 (func $~lib/util/number/itoa64 (; 229 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i64)
  local.get $0
  i64.eqz
  if
   i32.const 240
   call $~lib/rt/stub/__retain
   return
  end
  local.get $0
  i64.const 0
  i64.lt_s
  local.set $1
  local.get $1
  if
   i64.const 0
   local.get $0
   i64.sub
   local.set $0
  end
  local.get $0
  i64.const 4294967295
  i64.le_u
  if
   local.get $0
   i32.wrap_i64
   local.set $3
   local.get $3
   call $~lib/util/number/decimalCount32
   local.get $1
   i32.add
   local.set $4
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $2
   local.get $2
   local.set $7
   local.get $3
   local.set $6
   local.get $4
   local.set $5
   local.get $7
   local.get $6
   local.get $5
   call $~lib/util/number/utoa32_lut
  else   
   local.get $0
   call $~lib/util/number/decimalCount64
   local.get $1
   i32.add
   local.set $4
   local.get $4
   i32.const 1
   i32.shl
   i32.const 1
   call $~lib/rt/stub/__alloc
   local.set $2
   local.get $2
   local.set $6
   local.get $0
   local.set $8
   local.get $4
   local.set $5
   local.get $6
   local.get $8
   local.get $5
   call $~lib/util/number/utoa64_lut
  end
  local.get $1
  if
   local.get $2
   i32.const 45
   i32.store16
  end
  local.get $2
  call $~lib/rt/stub/__retain
 )
 (func $~lib/util/number/itoa<i64> (; 230 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  local.get $0
  call $~lib/util/number/itoa64
  return
 )
 (func $~lib/number/I64#toString (; 231 ;) (type $FUNCSIG$ij) (param $0 i64) (result i32)
  (local $1 i32)
  (local $2 i32)
  local.get $0
  call $~lib/util/number/itoa<i64>
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeInteger (; 232 ;) (type $FUNCSIG$vij) (param $0 i32) (param $1 i64)
  (local $2 i32)
  local.get $0
  local.get $1
  call $~lib/number/I64#toString
  local.tee $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setInteger (; 233 ;) (type $FUNCSIG$viij) (param $0 i32) (param $1 i32) (param $2 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeInteger
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<i32> (; 234 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $2
  local.get $1
  i64.extend_i32_s
  call $~lib/assemblyscript-json/encoder/JSONEncoder#setInteger
  local.get $0
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/main/__wrapper_recurse (; 235 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 1568
  call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  call $assembly/hello/main/recurse
  local.set $4
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $5
  local.get $5
  local.get $4
  i32.const 0
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $6
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $7
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/model/PromiseArgs#constructor (; 236 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 36
   i32.const 25
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
  i32.const 0
  i32.store offset=8
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $0
  i32.const 0
  i32.store offset=16
  local.get $0
  i32.const 0
  i32.store offset=20
  local.get $0
  i32.const 0
  i32.store offset=24
  local.get $0
  i32.const 0
  i32.store offset=28
  local.get $0
  i32.const 0
  i32.store offset=32
  local.get $0
 )
 (func $~lib/nearEntry/Obj#has (; 237 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load
  local.get $1
  call $~lib/map/Map<~lib/string/String,~lib/nearEntry/Value>#has
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/model/PromiseArgs#_decode (; 238 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.tee $2
  local.get $1
  i32.const 4328
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4328
   call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load
   call $~lib/rt/stub/__retain
  end
  local.set $3
  local.get $2
  i32.load
  call $~lib/rt/stub/__release
  local.get $3
  i32.store
  local.get $0
  local.tee $3
  local.get $1
  i32.const 4360
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4360
   call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=4
   call $~lib/rt/stub/__retain
  end
  local.set $2
  local.get $3
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
  local.tee $2
  local.get $1
  i32.const 4192
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4192
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=8
   call $~lib/rt/stub/__retain
  end
  local.set $3
  local.get $2
  i32.load offset=8
  call $~lib/rt/stub/__release
  local.get $3
  i32.store offset=8
  local.get $0
  local.get $1
  i32.const 4400
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4400
   call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=12
  end
  i32.store offset=12
  local.get $0
  local.get $1
  i32.const 4424
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4424
   call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=16
  end
  i32.store offset=16
  local.get $0
  local.tee $3
  local.get $1
  i32.const 4456
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4456
   call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=20
   call $~lib/rt/stub/__retain
  end
  local.set $2
  local.get $3
  i32.load offset=20
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=20
  local.get $0
  local.tee $2
  local.get $1
  i32.const 4488
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4488
   call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=24
   call $~lib/rt/stub/__retain
  end
  local.set $3
  local.get $2
  i32.load offset=24
  call $~lib/rt/stub/__release
  local.get $3
  i32.store offset=24
  local.get $0
  local.get $1
  i32.const 4528
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4528
   call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=28
  end
  i32.store offset=28
  local.get $0
  local.get $1
  i32.const 4576
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4576
   call $~lib/nearEntry/decode<i32,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=32
  end
  i32.store offset=32
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/PromiseArgs#decode<~lib/nearEntry/Obj> (; 239 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  local.get $1
  local.tee $3
  local.get $2
  local.tee $4
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $3
  local.set $2
  local.get $0
  local.get $2
  call $assembly/hello/model/PromiseArgs#_decode
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs,~lib/nearEntry/Obj> (; 240 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    call $~lib/rt/stub/__retain
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $7
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $7
   return
  end
  i32.const 0
  local.set $8
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 19
   call $~lib/rt/__instanceof
  end
  if
   nop
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 8
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 4216
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 4256
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 2536
   i32.const 400
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 0
  call $assembly/hello/model/PromiseArgs#constructor
  local.tee $9
  local.tee $10
  local.get $8
  local.tee $11
  i32.ne
  if
   local.get $10
   call $~lib/rt/stub/__retain
   drop
   local.get $11
   call $~lib/rt/stub/__release
  end
  local.get $10
  local.set $8
  local.get $8
  local.get $3
  call $assembly/hello/model/PromiseArgs#decode<~lib/nearEntry/Obj>
  local.set $10
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $9
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
  local.get $10
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject (; 241 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  i32.const 1088
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  i32.const 1
  call $~lib/array/Array<i32>#push
  drop
  i32.const 1
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#popObject (; 242 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i32.const 1160
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
  local.get $0
  i32.load
  call $~lib/array/Array<i32>#pop
  drop
 )
 (func $assembly/hello/model/PromiseArgs#encode (; 243 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4328
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 4360
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=8
  i32.const 4192
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=12
  i32.const 4400
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=16
  i32.const 4424
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=20
  i32.const 4456
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=24
  i32.const 4488
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=28
  i32.const 4528
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=32
  i32.const 4576
  call $~lib/nearEntry/encode<i32>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs> (; 244 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/PromiseArgs#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/InputPromiseArgs#encode (; 245 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4192
  call $~lib/nearEntry/encode<assembly/hello/model/PromiseArgs>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/bignum/integer/u128/u128#constructor (; 246 ;) (type $FUNCSIG$iijj) (param $0 i32) (param $1 i64) (param $2 i64) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 16
   i32.const 5
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  local.get $1
  i64.store
  local.get $0
  local.get $2
  i64.store offset=8
  local.get $0
 )
 (func $~lib/polyfills/bswap<u64> (; 247 ;) (type $FUNCSIG$jj) (param $0 i64) (result i64)
  (local $1 i64)
  (local $2 i64)
  (local $3 i64)
  local.get $0
  i64.const 8
  i64.shr_u
  i64.const 71777214294589695
  i64.and
  local.set $1
  local.get $0
  i64.const 71777214294589695
  i64.and
  i64.const 8
  i64.shl
  local.set $2
  local.get $1
  local.get $2
  i64.or
  local.set $3
  local.get $3
  i64.const 16
  i64.shr_u
  i64.const 281470681808895
  i64.and
  local.set $1
  local.get $3
  i64.const 281470681808895
  i64.and
  i64.const 16
  i64.shl
  local.set $2
  local.get $1
  local.get $2
  i64.or
  i64.const 32
  i64.rotr
  return
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBufferBE (; 248 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  local.get $0
  i64.load offset=8
  call $~lib/polyfills/bswap<u64>
  i64.store
  local.get $1
  local.get $0
  i64.load
  call $~lib/polyfills/bswap<u64>
  i64.store offset=8
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBufferLE (; 249 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  local.get $1
  local.get $0
  i64.load
  i64.store
  local.get $1
  local.get $0
  i64.load offset=8
  i64.store offset=8
 )
 (func $~lib/bignum/integer/u128/u128#toArrayBuffer (; 250 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $2
  if
   local.get $0
   local.get $1
   call $~lib/bignum/integer/u128/u128#toArrayBufferBE
  else   
   local.get $0
   local.get $1
   call $~lib/bignum/integer/u128/u128#toArrayBufferLE
  end
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise.create (; 251 ;) (type $FUNCSIG$iiiiji) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i64) (param $4 i32) (result i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i64)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $4
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $5
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $6
  local.get $4
  local.set $7
  i32.const 0
  local.set $8
  i32.const 0
  i32.const 16
  call $~lib/typedarray/Uint8Array#constructor
  local.set $9
  local.get $9
  i32.load offset=4
  local.set $10
  local.get $7
  local.get $10
  local.get $8
  call $~lib/bignum/integer/u128/u128#toArrayBuffer
  local.get $9
  local.set $10
  local.get $5
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $5
  i32.load offset=4
  i64.extend_i32_u
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  i32.load offset=4
  i64.extend_i32_u
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  local.get $10
  i32.load offset=4
  i64.extend_i32_u
  local.get $3
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_create
  local.set $11
  i32.const 8
  i32.const 27
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $9
  local.get $9
  local.get $11
  i64.store
  local.get $9
  call $~lib/rt/stub/__retain
  local.set $8
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $10
  call $~lib/rt/stub/__release
  local.get $9
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $8
 )
 (func $~lib/near-runtime-ts/contract/Context#_readRegisterContentsAsString (; 252 ;) (type $FUNCSIG$iij) (param $0 i32) (param $1 i64) (result i32)
  (local $2 i32)
  (local $3 i32)
  i32.const 0
  local.get $1
  call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $2
  local.get $1
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
  local.get $2
  call $~lib/near-runtime-ts/util/util.bytesToString
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/near-runtime-ts/contract/Context#get:contractName (; 253 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.current_account_id
  local.get $0
  i64.const 0
  call $~lib/near-runtime-ts/contract/Context#_readRegisterContentsAsString
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise#then (; 254 ;) (type $FUNCSIG$iiiiiji) (param $0 i32) (param $1 i32) (param $2 i32) (param $3 i32) (param $4 i64) (param $5 i32) (result i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  (local $12 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $3
  call $~lib/rt/stub/__retain
  drop
  local.get $5
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $6
  local.get $2
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $7
  local.get $5
  local.set $8
  i32.const 0
  local.set $9
  i32.const 0
  i32.const 16
  call $~lib/typedarray/Uint8Array#constructor
  local.set $10
  local.get $10
  i32.load offset=4
  local.set $11
  local.get $8
  local.get $11
  local.get $9
  call $~lib/bignum/integer/u128/u128#toArrayBuffer
  local.get $10
  local.set $11
  local.get $0
  i64.load
  local.get $6
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $6
  i32.load offset=4
  i64.extend_i32_u
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  i32.load offset=4
  i64.extend_i32_u
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $11
  i32.load offset=4
  i64.extend_i32_u
  local.get $4
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_then
  local.set $12
  i32.const 8
  i32.const 27
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $10
  local.get $10
  local.get $12
  i64.store
  local.get $10
  call $~lib/rt/stub/__retain
  local.set $9
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $11
  call $~lib/rt/stub/__release
  local.get $10
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise#returnAsResult (; 255 ;) (type $FUNCSIG$vi) (param $0 i32)
  local.get $0
  i64.load
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_return
 )
 (func $assembly/hello/main/callPromise (; 256 ;) (type $FUNCSIG$vi) (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i64)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i64)
  (local $11 i32)
  (local $12 i32)
  (local $13 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 4
  i32.const 26
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  local.get $0
  i32.load offset=8
  i32.store
  local.get $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $0
  i32.load offset=16
  i64.extend_i32_s
  local.set $3
  local.get $0
  i32.load
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 0
  i32.const 816
  call $assembly/hello/model/InputPromiseArgs#encode
  local.tee $4
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.tee $5
  local.get $0
  i32.load offset=12
  i64.extend_i32_s
  i32.const 0
  local.get $0
  i32.load offset=16
  i64.extend_i32_s
  i64.const 0
  call $~lib/bignum/integer/u128/u128#constructor
  local.tee $6
  call $~lib/near-runtime-ts/contract/ContractPromise.create
  local.set $7
  local.get $0
  i32.load offset=20
  if
   local.get $2
   local.tee $8
   local.get $0
   i32.load offset=24
   local.tee $9
   local.get $8
   i32.load
   local.tee $8
   i32.ne
   if
    local.get $9
    call $~lib/rt/stub/__retain
    drop
    local.get $8
    call $~lib/rt/stub/__release
   end
   local.get $9
   i32.store
   local.get $0
   i32.load offset=28
   i64.extend_i32_s
   local.set $10
   local.get $7
   global.get $~lib/near-runtime-ts/contract/context
   call $~lib/near-runtime-ts/contract/Context#get:contractName
   local.tee $9
   local.get $0
   i32.load offset=20
   local.get $2
   i32.const 0
   i32.const 816
   call $assembly/hello/model/InputPromiseArgs#encode
   local.tee $8
   call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
   local.tee $11
   local.get $0
   i32.load offset=32
   i64.extend_i32_s
   i32.const 0
   local.get $10
   i64.const 0
   call $~lib/bignum/integer/u128/u128#constructor
   local.tee $12
   call $~lib/near-runtime-ts/contract/ContractPromise#then
   local.set $13
   local.get $7
   call $~lib/rt/stub/__release
   local.get $13
   local.set $7
   local.get $9
   call $~lib/rt/stub/__release
   local.get $8
   call $~lib/rt/stub/__release
   local.get $11
   call $~lib/rt/stub/__release
   local.get $12
   call $~lib/rt/stub/__release
  end
  local.get $7
  call $~lib/near-runtime-ts/contract/ContractPromise#returnAsResult
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/__wrapper_callPromise (; 257 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 4192
  call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/callPromise
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array.create<~lib/near-runtime-ts/contract/ContractPromiseResult> (; 258 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 268435452
  i32.gt_u
  if
   i32.const 552
   i32.const 768
   i32.const 45
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.const 32
  i32.const 0
  call $~lib/rt/__allocArray
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
  i32.load offset=4
  i32.const 0
  local.get $1
  i32.load offset=8
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_set (; 259 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  local.get $3
  i32.load
  local.set $4
  local.get $2
  local.get $4
  i32.ne
  if
   local.get $3
   local.get $2
   call $~lib/rt/stub/__retain
   i32.store
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set (; 260 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $2
   call $~lib/rt/stub/__release
   i32.const 656
   i32.const 768
   i32.const 121
   i32.const 38
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/contract/ContractPromise.getResults (; 261 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_results_count
  local.set $0
  local.get $0
  i32.wrap_i64
  call $~lib/array/Array.create<~lib/near-runtime-ts/contract/ContractPromiseResult>
  local.set $1
  block $break|0
   i32.const 0
   local.set $2
   loop $loop|0
    local.get $2
    i64.extend_i32_s
    local.get $0
    i64.lt_s
    i32.eqz
    br_if $break|0
    block $continue|0
     local.get $2
     i64.extend_i32_s
     i64.const 0
     call $~lib/near-runtime-ts/runtime_api/runtime_api.promise_result
     i32.wrap_i64
     local.set $3
     local.get $3
     i32.const 1
     i32.eq
     local.set $4
     local.get $4
     i32.eqz
     if
      local.get $1
      local.get $2
      i32.const 8
      i32.const 31
      call $~lib/rt/stub/__alloc
      call $~lib/rt/stub/__retain
      local.set $5
      local.get $5
      local.get $3
      i32.store
      local.get $5
      call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set
      local.get $5
      call $~lib/rt/stub/__release
      br $continue|0
     end
     i32.const 0
     i64.const 0
     call $~lib/near-runtime-ts/runtime_api/runtime_api.register_len
     i32.wrap_i64
     call $~lib/typedarray/Uint8Array#constructor
     local.set $5
     i64.const 0
     local.get $5
     i32.load offset=4
     i64.extend_i32_u
     call $~lib/near-runtime-ts/runtime_api/runtime_api.read_register
     local.get $1
     local.get $2
     i32.const 8
     i32.const 31
     call $~lib/rt/stub/__alloc
     call $~lib/rt/stub/__retain
     local.set $6
     local.get $6
     local.get $3
     i32.store
     local.get $6
     local.get $5
     i32.store offset=4
     local.get $6
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__set
    end
    local.get $2
    i32.const 1
    i32.add
    local.set $2
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $1
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length (; 262 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/array/Array.create<assembly/hello/model/MyContractPromiseResult> (; 263 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  local.get $0
  i32.const 268435452
  i32.gt_u
  if
   i32.const 552
   i32.const 768
   i32.const 45
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  i32.const 2
  i32.const 30
  i32.const 0
  call $~lib/rt/__allocArray
  call $~lib/rt/stub/__retain
  local.set $1
  local.get $1
  i32.const 0
  i32.store offset=12
  local.get $1
  i32.load offset=4
  i32.const 0
  local.get $1
  i32.load offset=8
  call $~lib/memory/memory.fill
  local.get $1
 )
 (func $assembly/hello/model/MyContractPromiseResult#constructor (; 264 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 29
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store8
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_set (; 265 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  local.set $3
  local.get $3
  i32.load
  local.set $4
  local.get $2
  local.get $4
  i32.ne
  if
   local.get $3
   local.get $2
   call $~lib/rt/stub/__retain
   i32.store
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__set (; 266 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $3
  local.get $1
  local.get $3
  i32.gt_u
  if
   local.get $2
   call $~lib/rt/stub/__release
   i32.const 656
   i32.const 768
   i32.const 121
   i32.const 38
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.const 1
  i32.add
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  local.get $1
  local.get $2
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_set
  local.get $1
  local.get $3
  i32.ge_s
  if
   local.get $0
   local.get $1
   i32.const 1
   i32.add
   i32.store offset=12
  end
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_get (; 267 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get (; 268 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 656
   i32.const 768
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 832
   i32.const 768
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__unchecked_get
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_get (; 269 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  i32.load offset=4
  local.get $1
  i32.const 2
  i32.shl
  i32.add
  i32.load
  call $~lib/rt/stub/__retain
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get (; 270 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $1
  local.get $0
  i32.load offset=12
  i32.ge_u
  if
   i32.const 656
   i32.const 768
   i32.const 106
   i32.const 45
   call $~lib/builtins/abort
   unreachable
  end
  local.get $1
  local.get $0
  i32.load offset=8
  i32.const 2
  i32.shr_u
  i32.ge_u
  if
   i32.const 832
   i32.const 768
   i32.const 109
   i32.const 61
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__unchecked_get
 )
 (func $assembly/hello/model/MyCallbackResult#constructor (; 271 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.eqz
  if
   i32.const 8
   i32.const 28
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
   local.set $0
  end
  local.get $0
  i32.const 0
  i32.store
  local.get $0
  i32.const 0
  i32.store offset=4
  local.get $0
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#constructor (; 272 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  local.get $0
  if (result i32)
   local.get $0
  else   
   i32.const 16
   i32.const 30
   call $~lib/rt/stub/__alloc
   call $~lib/rt/stub/__retain
  end
  local.get $1
  i32.const 2
  call $~lib/arraybuffer/ArrayBufferView#constructor
  local.set $0
  local.get $0
  i32.const 0
  i32.store offset=12
  local.get $1
  if
   i32.const 656
   i32.const 768
   i32.const 56
   i32.const 20
   call $~lib/builtins/abort
   unreachable
  end
  local.get $0
  local.get $1
  i32.store offset=12
  local.get $0
 )
 (func $~lib/nearEntry/decode<bool,~lib/nearEntry/Obj> (; 273 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   i32.eqz
   if
    i32.const 3544
    local.get $1
    call $~lib/string/String.__concat
    local.tee $7
    i32.const 3576
    call $~lib/string/String.__concat
    local.tee $5
    i32.const 4800
    call $~lib/string/String.__concat
    local.tee $4
    i32.const 3640
    call $~lib/string/String.__concat
    local.tee $6
    i32.const 2536
    i32.const 355
    i32.const 4
    call $~lib/builtins/abort
    unreachable
   end
   i32.const 0
   local.set $8
   local.get $7
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
   local.get $4
   call $~lib/rt/stub/__release
   local.get $6
   call $~lib/rt/stub/__release
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $8
   return
  end
  local.get $3
  local.tee $6
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $6
   i32.const 20
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 4800
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 4824
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 2536
   i32.const 364
   i32.const 4
   call $~lib/builtins/abort
   unreachable
  end
  local.get $3
  i32.load8_u
  local.set $8
  local.get $6
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $8
  return
 )
 (func $assembly/hello/model/MyCallbackResult#decode<~lib/nearEntry/Obj> (; 274 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  local.get $1
  local.tee $3
  local.get $2
  local.tee $4
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $3
  local.set $2
  local.get $0
  local.get $2
  call $assembly/hello/model/MyCallbackResult#_decode
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/MyCallbackResult,~lib/nearEntry/Obj> (; 275 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    call $~lib/rt/stub/__retain
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $7
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $7
   return
  end
  i32.const 0
  local.set $8
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 19
   call $~lib/rt/__instanceof
  end
  if
   nop
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 8
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 4872
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 4256
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 2536
   i32.const 400
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 0
  call $assembly/hello/model/MyCallbackResult#constructor
  local.tee $9
  local.tee $10
  local.get $8
  local.tee $11
  i32.ne
  if
   local.get $10
   call $~lib/rt/stub/__retain
   drop
   local.get $11
   call $~lib/rt/stub/__release
  end
  local.get $10
  local.set $8
  local.get $8
  local.get $3
  call $assembly/hello/model/MyCallbackResult#decode<~lib/nearEntry/Obj>
  local.set $10
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $9
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
  local.get $10
 )
 (func $assembly/hello/model/MyContractPromiseResult#_decode (; 276 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  i32.const 4776
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4776
   call $~lib/nearEntry/decode<bool,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load8_u
  end
  i32.store8
  local.get $0
  local.tee $2
  local.get $1
  i32.const 1616
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 1616
   call $~lib/nearEntry/decode<assembly/hello/model/MyCallbackResult,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=4
   call $~lib/rt/stub/__retain
  end
  local.set $3
  local.get $2
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $3
  i32.store offset=4
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/MyContractPromiseResult#decode<~lib/nearEntry/Obj> (; 277 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  local.get $1
  local.tee $3
  local.get $2
  local.tee $4
  i32.ne
  if
   local.get $3
   call $~lib/rt/stub/__retain
   drop
   local.get $4
   call $~lib/rt/stub/__release
  end
  local.get $3
  local.set $2
  local.get $0
  local.get $2
  call $assembly/hello/model/MyContractPromiseResult#_decode
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/decode<assembly/hello/model/MyContractPromiseResult,~lib/nearEntry/Value> (; 278 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    call $~lib/rt/stub/__retain
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $7
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $7
   return
  end
  i32.const 0
  local.set $8
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 19
   call $~lib/rt/__instanceof
  end
  if
   nop
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 8
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $7
   i32.const 3576
   call $~lib/string/String.__concat
   local.tee $5
   i32.const 4712
   call $~lib/string/String.__concat
   local.tee $4
   i32.const 4256
   call $~lib/string/String.__concat
   local.tee $6
   i32.const 2536
   i32.const 400
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 0
  call $assembly/hello/model/MyContractPromiseResult#constructor
  local.tee $9
  local.tee $10
  local.get $8
  local.tee $11
  i32.ne
  if
   local.get $10
   call $~lib/rt/stub/__retain
   drop
   local.get $11
   call $~lib/rt/stub/__release
  end
  local.get $10
  local.set $8
  local.get $8
  local.get $3
  call $assembly/hello/model/MyContractPromiseResult#decode<~lib/nearEntry/Obj>
  local.set $10
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $9
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
  local.get $10
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#push (; 279 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  i32.load offset=12
  local.set $2
  local.get $2
  i32.const 1
  i32.add
  local.set $3
  local.get $0
  local.get $3
  i32.const 2
  call $~lib/array/ensureSize
  local.get $0
  i32.load offset=4
  local.get $2
  i32.const 2
  i32.shl
  i32.add
  local.get $1
  call $~lib/rt/stub/__retain
  i32.store
  local.get $0
  local.get $3
  i32.store offset=12
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/decodeArray<assembly/hello/model/MyContractPromiseResult> (; 280 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.tee $2
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $2
   i32.const 17
   call $~lib/rt/__instanceof
  end
  i32.eqz
  if
   i32.const 2424
   local.get $1
   call $~lib/string/String.__concat
   local.tee $2
   i32.const 4640
   call $~lib/string/String.__concat
   local.tee $3
   i32.const 2536
   i32.const 327
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
  i32.const 0
  i32.const 0
  call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#constructor
  local.set $4
  local.get $0
  i32.load
  call $~lib/rt/stub/__retain
  local.set $5
  block $break|0
   i32.const 0
   local.set $6
   loop $loop|0
    local.get $6
    local.get $5
    call $~lib/array/Array<~lib/nearEntry/Value>#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $5
    local.get $6
    call $~lib/array/Array<~lib/nearEntry/Value>#__get
    local.tee $7
    i32.const 816
    call $~lib/nearEntry/decode<assembly/hello/model/MyContractPromiseResult,~lib/nearEntry/Value>
    local.set $8
    local.get $4
    local.get $8
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#push
    drop
    local.get $6
    i32.const 1
    i32.add
    local.set $6
    local.get $7
    call $~lib/rt/stub/__release
    local.get $8
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  local.get $4
  local.set $8
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $8
 )
 (func $~lib/nearEntry/decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>,~lib/nearEntry/Obj> (; 281 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  i32.const 0
  local.set $3
  local.get $2
  local.tee $4
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $4
   i32.const 8
   call $~lib/rt/__instanceof
  end
  if (result i32)
   local.get $1
   i32.const 816
   call $~lib/string/String.__ne
  else   
   i32.const 0
  end
  if
   local.get $2
   call $~lib/rt/stub/__retain
   local.set $4
   local.get $4
   local.get $1
   call $~lib/nearEntry/Obj#get
   local.set $5
   local.get $5
   i32.const 0
   i32.eq
   if
    i32.const 0
    call $~lib/rt/stub/__retain
    local.set $6
    local.get $0
    call $~lib/rt/stub/__release
    local.get $1
    call $~lib/rt/stub/__release
    local.get $2
    call $~lib/rt/stub/__release
    local.get $3
    call $~lib/rt/stub/__release
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    return
   end
   local.get $5
   local.tee $6
   local.get $3
   local.tee $7
   i32.ne
   if
    local.get $6
    call $~lib/rt/stub/__retain
    drop
    local.get $7
    call $~lib/rt/stub/__release
   end
   local.get $6
   local.set $3
   local.get $4
   call $~lib/rt/stub/__release
   local.get $5
   call $~lib/rt/stub/__release
  else   
   local.get $2
   local.tee $7
   local.get $3
   local.tee $5
   i32.ne
   if
    local.get $7
    call $~lib/rt/stub/__retain
    drop
    local.get $5
    call $~lib/rt/stub/__release
   end
   local.get $7
   local.set $3
  end
  local.get $3
  local.tee $7
  i32.eqz
  if (result i32)
   i32.const 0
  else   
   local.get $7
   i32.const 22
   call $~lib/rt/__instanceof
  end
  if
   i32.const 0
   call $~lib/rt/stub/__retain
   local.set $7
   local.get $0
   call $~lib/rt/stub/__release
   local.get $1
   call $~lib/rt/stub/__release
   local.get $2
   call $~lib/rt/stub/__release
   local.get $3
   call $~lib/rt/stub/__release
   local.get $7
   return
  end
  i32.const 0
  local.set $8
  local.get $3
  local.get $1
  call $~lib/nearEntry/decodeArray<assembly/hello/model/MyContractPromiseResult>
  local.set $7
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
  local.get $7
  return
 )
 (func $assembly/hello/model/MyCallbackResult#_decode (; 282 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.tee $2
  local.get $1
  i32.const 4616
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 4616
   call $~lib/nearEntry/decode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load
   call $~lib/rt/stub/__retain
  end
  local.set $3
  local.get $2
  i32.load
  call $~lib/rt/stub/__release
  local.get $3
  i32.store
  local.get $0
  local.tee $3
  local.get $1
  i32.const 1568
  call $~lib/nearEntry/Obj#has
  if (result i32)
   local.get $1
   i32.const 1568
   call $~lib/nearEntry/decode<~lib/string/String,~lib/nearEntry/Obj>
  else   
   local.get $0
   i32.load offset=4
   call $~lib/rt/stub/__retain
  end
  local.set $2
  local.get $3
  i32.load offset=4
  call $~lib/rt/stub/__release
  local.get $2
  i32.store offset=4
  local.get $0
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/model/MyCallbackResult#decode<~lib/typedarray/Uint8Array> (; 283 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  (local $3 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  local.set $2
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  local.set $2
  local.get $0
  local.get $2
  call $assembly/hello/model/MyCallbackResult#_decode
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/MyCallbackResult.decode (; 284 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  i32.const 0
  call $assembly/hello/model/MyCallbackResult#constructor
  local.tee $1
  call $~lib/rt/stub/__retain
  local.set $2
  local.get $2
  local.get $0
  call $assembly/hello/model/MyCallbackResult#decode<~lib/typedarray/Uint8Array>
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#get:length (; 285 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  local.get $0
  i32.load offset=12
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#writeBoolean (; 286 ;) (type $FUNCSIG$vii) (param $0 i32) (param $1 i32)
  (local $2 i32)
  (local $3 i32)
  local.get $0
  local.get $1
  if (result i32)
   i32.const 160
   call $~lib/rt/stub/__retain
   local.tee $2
  else   
   i32.const 184
   call $~lib/rt/stub/__retain
   local.tee $3
  end
  call $~lib/assemblyscript-json/encoder/JSONEncoder#write
 )
 (func $~lib/assemblyscript-json/encoder/JSONEncoder#setBoolean (; 287 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeKey
  local.get $0
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#writeBoolean
  local.get $1
  call $~lib/rt/stub/__release
 )
 (func $~lib/nearEntry/encode<bool> (; 288 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $2
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#setBoolean
  local.get $0
  local.set $3
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult> (; 289 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/MyCallbackResult#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $assembly/hello/model/MyContractPromiseResult#encode (; 290 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load8_u
  i32.const 4776
  call $~lib/nearEntry/encode<bool>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 1616
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/nearEntry/encode<assembly/hello/model/MyContractPromiseResult> (; 291 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $1
   local.get $0
   local.get $2
   call $assembly/hello/model/MyContractPromiseResult#encode
   call $~lib/rt/stub/__release
  end
  local.get $0
  local.set $3
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
 )
 (func $~lib/nearEntry/encode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>> (; 292 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.eq
  if
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#setNull
  else   
   local.get $0
   local.get $2
   call $~lib/assemblyscript-json/encoder/JSONEncoder#pushArray
   drop
   block $break|0
    i32.const 0
    local.set $3
    loop $loop|0
     local.get $3
     local.get $1
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#get:length
     i32.lt_s
     i32.eqz
     br_if $break|0
     local.get $0
     local.get $1
     local.get $3
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
     local.tee $4
     i32.const 0
     call $~lib/nearEntry/encode<assembly/hello/model/MyContractPromiseResult>
     call $~lib/rt/stub/__release
     local.get $3
     i32.const 1
     i32.add
     local.set $3
     local.get $4
     call $~lib/rt/stub/__release
     br $loop|0
    end
    unreachable
   end
   local.get $0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#popArray
  end
  local.get $0
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $assembly/hello/model/MyCallbackResult#encode (; 293 ;) (type $FUNCSIG$iiii) (param $0 i32) (param $1 i32) (param $2 i32) (result i32)
  (local $3 i32)
  (local $4 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  i32.const 0
  i32.ne
  if (result i32)
   local.get $1
   call $~lib/rt/stub/__retain
  else   
   i32.const 0
   call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  end
  local.tee $3
  if (result i32)
   local.get $3
  else   
   unreachable
  end
  call $~lib/rt/stub/__retain
  local.set $3
  local.get $3
  local.get $2
  call $~lib/assemblyscript-json/encoder/JSONEncoder#pushObject
  drop
  local.get $3
  local.get $0
  i32.load
  i32.const 4616
  call $~lib/nearEntry/encode<~lib/array/Array<assembly/hello/model/MyContractPromiseResult>>
  call $~lib/rt/stub/__release
  local.get $3
  local.get $0
  i32.load offset=4
  i32.const 1568
  call $~lib/nearEntry/encode<~lib/string/String>
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/assemblyscript-json/encoder/JSONEncoder#popObject
  local.get $3
  local.set $4
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $4
 )
 (func $~lib/near-runtime-ts/storage/Storage#setBytes (; 294 ;) (type $FUNCSIG$viii) (param $0 i32) (param $1 i32) (param $2 i32)
  (local $3 i32)
  (local $4 i64)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $2
  call $~lib/rt/stub/__retain
  drop
  local.get $1
  call $~lib/near-runtime-ts/util/util.stringToBytes
  local.set $3
  local.get $3
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $3
  i32.load offset=4
  i64.extend_i32_u
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  i32.load offset=4
  i64.extend_i32_u
  i64.const 0
  call $~lib/near-runtime-ts/runtime_api/runtime_api.storage_write
  local.set $4
  local.get $3
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/callbackWithName (; 295 ;) (type $FUNCSIG$ii) (param $0 i32) (result i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  (local $9 i32)
  (local $10 i32)
  (local $11 i32)
  local.get $0
  call $~lib/rt/stub/__retain
  drop
  call $~lib/near-runtime-ts/contract/ContractPromise.getResults
  local.set $1
  local.get $1
  call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length
  call $~lib/array/Array.create<assembly/hello/model/MyContractPromiseResult>
  local.set $2
  block $break|0
   i32.const 0
   local.set $3
   loop $loop|0
    local.get $3
    local.get $1
    call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#get:length
    i32.lt_s
    i32.eqz
    br_if $break|0
    local.get $2
    local.get $3
    i32.const 0
    call $assembly/hello/model/MyContractPromiseResult#constructor
    local.tee $4
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__set
    local.get $2
    local.get $3
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
    local.tee $6
    local.get $1
    local.get $3
    call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
    local.tee $5
    i32.load
    i32.const 1
    i32.eq
    i32.store8
    local.get $2
    local.get $3
    call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
    local.tee $7
    i32.load8_u
    if (result i32)
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     i32.const 0
     i32.ne
     local.set $9
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
    else     
     i32.const 0
    end
    if (result i32)
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     call $~lib/typedarray/Uint8Array#get:length
     i32.const 0
     i32.gt_s
     local.set $9
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
    else     
     i32.const 0
    end
    if
     local.get $2
     local.get $3
     call $~lib/array/Array<assembly/hello/model/MyContractPromiseResult>#__get
     local.tee $9
     local.tee $10
     local.get $1
     local.get $3
     call $~lib/array/Array<~lib/near-runtime-ts/contract/ContractPromiseResult>#__get
     local.tee $8
     i32.load offset=4
     call $assembly/hello/model/MyCallbackResult.decode
     local.set $11
     local.get $10
     i32.load offset=4
     call $~lib/rt/stub/__release
     local.get $11
     i32.store offset=4
     local.get $8
     call $~lib/rt/stub/__release
     local.get $9
     call $~lib/rt/stub/__release
    end
    local.get $3
    i32.const 1
    i32.add
    local.set $3
    local.get $4
    call $~lib/rt/stub/__release
    local.get $5
    call $~lib/rt/stub/__release
    local.get $6
    call $~lib/rt/stub/__release
    local.get $7
    call $~lib/rt/stub/__release
    br $loop|0
   end
   unreachable
  end
  i32.const 8
  i32.const 28
  call $~lib/rt/stub/__alloc
  call $~lib/rt/stub/__retain
  local.set $7
  local.get $7
  local.get $2
  i32.store
  local.get $7
  global.get $~lib/near-runtime-ts/contract/context
  call $~lib/near-runtime-ts/contract/Context#get:contractName
  local.tee $6
  i32.store offset=4
  local.get $7
  call $~lib/rt/stub/__retain
  local.set $5
  local.get $5
  i32.const 0
  i32.const 816
  call $assembly/hello/model/MyCallbackResult#encode
  local.tee $4
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $3
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4920
  local.get $3
  call $~lib/near-runtime-ts/storage/Storage#setBytes
  local.get $5
  local.set $9
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $0
  call $~lib/rt/stub/__release
  local.get $9
 )
 (func $assembly/hello/main/__wrapper_callbackWithName (; 296 ;) (type $FUNCSIG$v)
  (local $0 i64)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  (local $4 i32)
  (local $5 i32)
  (local $6 i32)
  (local $7 i32)
  (local $8 i32)
  i64.const 0
  call $~lib/nearEntry/input
  i64.const 0
  call $~lib/nearEntry/register_len
  local.set $0
  local.get $0
  i64.const 4294967295
  i64.eq
  if
   call $~lib/nearEntry/panic
  end
  i32.const 0
  local.get $0
  i32.wrap_i64
  call $~lib/typedarray/Uint8Array#constructor
  local.set $1
  i64.const 0
  local.get $1
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $2
  i64.extend_i32_u
  call $~lib/nearEntry/read_register
  local.get $1
  call $~lib/nearEntry/JSON.parse
  local.set $3
  local.get $3
  i32.const 4192
  call $~lib/nearEntry/decode<assembly/hello/model/PromiseArgs,~lib/nearEntry/Obj>
  local.tee $4
  call $assembly/hello/main/callbackWithName
  local.set $5
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $6
  local.get $6
  local.get $5
  i32.const 0
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $7
  local.get $7
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $7
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $8
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
  local.get $4
  call $~lib/rt/stub/__release
  local.get $5
  call $~lib/rt/stub/__release
  local.get $6
  call $~lib/rt/stub/__release
  local.get $7
  call $~lib/rt/stub/__release
  local.get $8
  call $~lib/rt/stub/__release
 )
 (func $~lib/near-runtime-ts/storage/Storage#getBytes (; 297 ;) (type $FUNCSIG$iii) (param $0 i32) (param $1 i32) (result i32)
  (local $2 i32)
  local.get $1
  call $~lib/rt/stub/__retain
  drop
  local.get $0
  local.get $1
  call $~lib/near-runtime-ts/storage/Storage#_internalReadBytes
  local.set $2
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
 )
 (func $assembly/hello/main/getLastResult (; 298 ;) (type $FUNCSIG$i) (result i32)
  (local $0 i32)
  (local $1 i32)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4920
  call $~lib/near-runtime-ts/storage/Storage#getBytes
  local.tee $0
  call $assembly/hello/model/MyCallbackResult.decode
  local.set $1
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
 )
 (func $assembly/hello/main/__wrapper_getLastResult (; 299 ;) (type $FUNCSIG$v)
  (local $0 i32)
  (local $1 i32)
  (local $2 i32)
  (local $3 i32)
  call $assembly/hello/main/getLastResult
  local.set $0
  i32.const 0
  call $~lib/assemblyscript-json/encoder/JSONEncoder#constructor
  local.set $1
  local.get $1
  local.get $0
  i32.const 0
  call $~lib/nearEntry/encode<assembly/hello/model/MyCallbackResult>
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/assemblyscript-json/encoder/JSONEncoder#serialize
  local.set $2
  local.get $2
  call $~lib/arraybuffer/ArrayBufferView#get:byteLength
  i64.extend_i32_s
  local.get $2
  call $~lib/typedarray/Uint8Array#get:buffer
  local.tee $3
  i64.extend_i32_u
  call $~lib/nearEntry/value_return
  local.get $0
  call $~lib/rt/stub/__release
  local.get $1
  call $~lib/rt/stub/__release
  local.get $2
  call $~lib/rt/stub/__release
  local.get $3
  call $~lib/rt/stub/__release
 )
 (func $assembly/hello/main/generateLogs (; 300 ;) (type $FUNCSIG$v)
  global.get $~lib/near-runtime-ts/storage/storage
  i32.const 4960
  i32.const 3416
  call $~lib/near-runtime-ts/storage/Storage#setString
  i32.const 4984
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 5008
  call $~lib/near-runtime-ts/logging/logging.log
 )
 (func $assembly/hello/main/triggerAssert (; 301 ;) (type $FUNCSIG$v)
  i32.const 5032
  call $~lib/near-runtime-ts/logging/logging.log
  i32.const 0
  i32.eqz
  if
   i32.const 5088
   i32.const 3448
   i32.const 476
   i32.const 2
   call $~lib/builtins/abort
   unreachable
  end
 )
 (func $start (; 302 ;) (type $FUNCSIG$v)
  call $start:~lib/rt/index-stub
  call $start:~lib/nearEntry
 )
 (func $null (; 303 ;) (type $FUNCSIG$v)
 )
)
