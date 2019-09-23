#!/bin/sh
set -e
set -x
(cd ..; npm run build:bindings:dev)
npm run build
npm run test
(cd ..; npm run build:bindings:prod)