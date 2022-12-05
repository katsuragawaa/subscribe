const sleep = require('./utils.js')

function welcome() {
    console.log('Welcome to your receipt calculator')
}

function prepare() {
    console.clear()
    console.log('Input your product\n')
}

function output(items, salesTax, totalWithoutTax) {
    items.forEach((item) => {
        console.log(`${item.quantity} ${item.imported ? 'imported ' + item.name : item.name}: ${item.total.toFixed(2)}`)
    })

    console.log(`Sales Taxes: ${salesTax.toFixed(2)}`)

    const total = salesTax + totalWithoutTax
    console.log(`Total: ${total.toFixed(2)}`)
}

async function demoWelcome() {
    console.clear()
    console.log('Demo using supplied inputs')
    await sleep()
    console.clear()
}

function demoInput(input, n) {
    console.log(`Input ${n}:`)
    input.forEach((item) => {
        console.log(
            `${item.quantity} ${item.imported ? 'imported ' + item.name : item.name} at ${item.value.toFixed(2)}`
        )
    })
    console.log()
}

module.exports = { welcome, prepare, output, demoWelcome, demoInput }
