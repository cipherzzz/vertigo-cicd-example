import { expect } from './test-utils'
import { describe } from 'mocha'
import { getTestPayload } from './logic'

describe('The logic ', () => {
    it('can retrieve a JSON payload', async () => {
        const result = { message: 'errbody in the club gettin tipsy' }
        const payload = getTestPayload()
        expect(payload).to.deep.equal(result)
    })
})
