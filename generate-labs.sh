#!/bin/sh

function setup() {
    rm -Rf ./.tmp
    mkdir ./.tmp
    go get github.com/googlecodelabs/tools/claat
}

function build() {
    cat ./labs/LAB0.md ./labs/LAB1.md ./labs/LAB2.md ./labs/LAB3.md ./labs/LAB4.md ./labs/LAB5.md ./labs/LAB6.md > ./.tmp/index.md
    claat export -prefix /codelab-nestjs/lab/ ./.tmp/index.md
    pushd ./docs/lab
    claat build
    popd
}

function clean() {
    rm -Rf ./.tmp
}

function main() {
  setup && build && clean
}

main