function welcome() {
    console.log('Welcome to your receipt calculator')
}

function prepare() {
    console.clear()
    console.log('Input your product\n')
}

function output(items, salesTax, totalWithoutTax) {
    console.clear()

    items.forEach((item) => {
        console.log(`${item.quantity} ${item.imported ? 'imported ' + item.name : item.name}: ${item.total.toFixed(2)}`)
    })

    console.log(`Sales Taxes: ${salesTax.toFixed(2)}`)

    const total = salesTax + totalWithoutTax
    console.log(`Total: ${total.toFixed(2)}`)
}

module.exports = { welcome, prepare, output }
