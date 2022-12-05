#!/usr/bin/env node

const inquirer = require('inquirer')
const questions = require('./constants.js')
const { welcome, prepare } = require('./printers.js')
const sleep = require('./utils.js')

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
}

main()

module.exports = main
