#!/usr/bin/env node

const { welcome, prepare } = require('./printers.js')
const sleep = require('./utils.js')

async function main() {
    welcome()
    await sleep()
    prepare()
}

main()

module.exports = main
