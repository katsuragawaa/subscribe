const main = require('../index.js')

describe('test console log', () => {
    it('should print welcome message', async () => {
        console.log = jest.fn()
        await main()
        expect(console.log.mock.calls[0][0]).toBe('Welcome to your receipt calculator')
    })
})
