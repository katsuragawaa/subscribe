function calculate(items) {
    let totalWithoutTax = 0
    const totalTax = items.reduce((acc, item) => {
        const price = item.value * item.quantity
        totalWithoutTax += price
        const taxPercentage = getTaxPercentage(item)
        const tax = price * taxPercentage

        item['total'] = price + tax

        return acc + tax
    }, 0)

    const salesTax = roundoff(totalTax)

    return {
        items,
        salesTax,
        totalWithoutTax,
    }
}

function getTaxPercentage(item) {
    let taxPercentage = 0
    if (item.type === 'Other') {
        taxPercentage += 0.1
    }
    if (item.imported) {
        taxPercentage += 0.05
    }

    return taxPercentage
}

function roundoff(value) {
    return Math.round(value / 0.05) * 0.05
}

module.exports = calculate
