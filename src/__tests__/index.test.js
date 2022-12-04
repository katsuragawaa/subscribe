const main = require('../index.js')

describe('test console log', () => {
    it('should print test', () => {
        console.log = jest.fn()
        main()
        expect(console.log.mock.calls[0][0]).toBe('test')
    })
})
