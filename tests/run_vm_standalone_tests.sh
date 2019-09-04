#!/bin/bash
cargo install near-vm-runner-standalone

TESTS=(base58Test base64Test logTest storageStringRoundtripTest storageBytesRoundtripTest storageGenericGetSetRoundtripTest storageKeysTest mapTests mapTestsWithPrimitices vectorTests dequeTests topnTests promiseTests mathTests)

DISABLED_TESTS=(contextTests)

for i in "${TESTS[@]}"
do
    # access each element  
    # as $i 
    echo $i 
near-vm-runner-standalone --bin near-vm-runner-standalone -- --context-file=/Users/evgueniadegtiareva/near/r2/context.json --config-file=/Users/evgueniadegtiareva/near/r2/config.json --method-name=$i --wasm-file=/Users/evgueniadegtiareva/near/r2/out/main.wasm --input="{}"

done

#cargo run --package near-vm-runner-standalone --bin near-vm-runner-standalone -- --context-file=~/near/r2/context.json --config-file=~/near/r2/config.json --method-name=hello --wasm-file=/Users/evgueniadegtiareva/near/r2/out/main.wasm --input="{}"

