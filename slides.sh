#!/bin/sh

function setup() {
    rm -Rf ./.tmp
    mkdir ./.tmp
    go get github.com/googlecodelabs/tools/claat
}

function build() {
    cat ./labs/LAB0.md > ./.tmp/index.md
    claat export ./.tmp/index.md
    pushd ./docs/lab
    claat install
    popd
}

function clean() {
    rm -Rf ./.tmp
}

function main() {
  setup && build && clean
}

main