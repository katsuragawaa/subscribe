const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'Name of the product:',
    },
    {
        type: 'number',
        name: 'quantity',
        message: 'How many items:',
    },
    {
        type: 'number',
        name: 'value',
        message: 'What is the price:',
    },
    {
        type: 'list',
        name: 'type',
        message: 'Chose the product type:',
        choices: ['Book', 'Food', 'Medical', 'Other'],
    },
    {
        type: 'confirm',
        name: 'imported',
        message: 'Is imported:',
    },
    {
        type: 'confirm',
        name: 'continue',
        message: 'Add more items:',
    },
]

const demo = [
    [
        { name: 'book', quantity: 2, value: 12.49, type: 'Book', imported: false },
        { name: 'music CD', quantity: 1, value: 14.99, type: 'Other', imported: false },
        { name: 'chocolate bar', quantity: 1, value: 0.85, type: 'Food', imported: false },
    ],
    [
        { name: 'box of chocolates', quantity: 1, value: 10, type: 'Food', imported: true },
        { name: 'bottle of perfume', quantity: 1, value: 47.5, type: 'Other', imported: true },
    ],
    [
        { name: 'bottle of perfume', quantity: 1, value: 27.99, type: 'Other', imported: true },
        { name: 'bottle of perfume', quantity: 1, value: 18.99, type: 'Other', imported: false },
        { name: 'package of headache pills', quantity: 1, value: 9.75, type: 'Medicine', imported: false },
        { name: 'boxes of chocolates', quantity: 3, value: 11.25, type: 'Food', imported: true },
    ],
]

module.exports = { questions, demo }
