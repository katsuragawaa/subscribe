const calculate = require('../lib.js')

describe('test calculate function', () => {
    describe('not imported item', () => {
        const mockItems = [{ name: 'item_1', quantity: 1, value: 10, imported: false }]
        test('of type book should return tax as zero', () => {
            mockItems[0].type = 'Book'
            const expected = {
                items: [{ ...mockItems[0], total: 10 }],
                salesTax: 0,
                totalWithoutTax: 10,
            }
            console.log(mockItems)
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of type food should return tax as zero', () => {
            mockItems[0].type = 'Food'
            const expected = {
                items: [{ ...mockItems[0], total: 10 }],
                salesTax: 0,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of type medicine should return tax as zero', () => {
            mockItems[0].type = 'Medicine'
            const expected = {
                items: [{ ...mockItems[0], total: 10 }],
                salesTax: 0,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of any other type should return correct tax value', () => {
            mockItems[0].type = 'Other'
            const expected = {
                items: [{ ...mockItems[0], total: 11 }],
                salesTax: 1,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })
    })

    describe('imported item', () => {
        const mockItems = [{ name: 'item_1', quantity: 1, value: 10, imported: true }]
        test('of type book should return correct tax', () => {
            mockItems[0].type = 'Book'
            const expected = {
                items: [{ ...mockItems[0], total: 10.5 }],
                salesTax: 0.5,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of type food should return correct tax', () => {
            mockItems[0].type = 'Food'
            const expected = {
                items: [{ ...mockItems[0], total: 10.5 }],
                salesTax: 0.5,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of type medicine should return correct tax', () => {
            mockItems[0].type = 'Medicine'
            const expected = {
                items: [{ ...mockItems[0], total: 10.5 }],
                salesTax: 0.5,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })

        test('of any other type should return correct tax value', () => {
            mockItems[0].type = 'Other'
            const expected = {
                items: [{ ...mockItems[0], total: 11.5 }],
                salesTax: 1.5,
                totalWithoutTax: 10,
            }
            expect(calculate(mockItems)).toStrictEqual(expected)
        })
    })
})
