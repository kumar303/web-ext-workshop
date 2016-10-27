#!/bin/bash
root=./slides
bigpy -s $root/www/index.md -j $root/big/big.js -c $root/big/big.css -m local
