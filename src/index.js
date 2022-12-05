#!/usr/bin/env node

const inquirer = require('inquirer')
const { questions, demo } = require('./constants.js')
const { welcome, prepare, output, demoInput, demoWelcome } = require('./printers.js')
const sleep = require('./utils.js')
const calculate = require('./lib.js')

async function runDemo() {
    await demoWelcome()

    demo.forEach((input, idx) => {
        const n = idx + 1
        demoInput(input, n)

        const result = calculate(input)

        console.log(`Output ${n}:`)
        output(result.items, result.salesTax, result.totalWithoutTax)
        console.log('\n-----------\n')
    })
}

async function main() {
    const arg = process.argv[2]
    if (arg === 'demo') {
        runDemo()
        return
    }

    welcome()
    await sleep()

    const items = []
    let hasNext = true
    while (hasNext) {
        prepare()

        const item = await inquirer.prompt(questions)
        items.push(item)

        hasNext = item.continue
    }

    console.log(items)

    const result = calculate(items)

    output(result.items, result.salesTax, result.totalWithoutTax)
}

main()

module.exports = main
