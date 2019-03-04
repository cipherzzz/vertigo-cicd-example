import { expect } from './test-utils'
import { describe } from 'mocha'
import { getTestPayload } from './logic'

describe('The logic ', () => {
    it('can retrieve a JSON payload', async () => {
        const result = { message: 'changed the message for learning purposes' }
        const payload = getTestPayload()
        expect(payload).to.deep.equal(result)
    })
})
