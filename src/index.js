#!/usr/bin/env node

const inquirer = require('inquirer')
const questions = require('./constants.js')
const { welcome, prepare, output } = require('./printers.js')
const sleep = require('./utils.js')
const calculate = require('./lib.js')

async function main() {
    welcome()
    await sleep()

    const input = []
    let hasNext = true
    while (hasNext) {
        prepare()

        const item = await inquirer.prompt(questions)
        input.push(item)

        hasNext = item.continue
    }

    const result = calculate(input)

    output(result.items, result.salesTax, result.totalWithoutTax)
}

main()

module.exports = main
