import chai from 'chai'
import chaiAsPromised from 'chai-as-promised'
import sinonChai from 'sinon-chai'
import supertest from 'supertest'

chai.use(chaiAsPromised)
chai.use(sinonChai)

export const expect = chai.expect
export const request = supertest
export { stub, mock, spy, match } from 'sinon'
