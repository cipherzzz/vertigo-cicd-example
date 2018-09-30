import express from 'express'
import createLogger from './logger'
import { getTestPayload } from './logic'

const logger = createLogger('app')

export function start() {
    const app = express()

    app.listen(3000, () => {
        logger.info('Server running on port 3000')
    })

    app.get('/', (req, res, next) => {
        res.json(getTestPayload())
    })
}

start()
