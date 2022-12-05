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

module.exports = questions 