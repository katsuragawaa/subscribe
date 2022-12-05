const calculate = require('../lib.js')

const mockItems = [
    { name: 'item_1', quantity: 1, value: 10, type: 'Book', imported: true },
    { name: 'item_2', quantity: 2, value: 5, type: 'Other', imported: false },
]

describe('test calculate function', () => {
    test('should return correct values', () => {
        const expected = {
            items: [
                { ...mockItems[0], total: 10.5 },
                { ...mockItems[1], total: 11 },
            ],
            salesTax: 1.5,
            totalWithoutTax: 20,
        }
        expect(calculate(mockItems)).toStrictEqual(expected)
    })
})
