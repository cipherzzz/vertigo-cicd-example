import express from 'express'
import createLogger from './logger'
import { getTestPayload } from './logic'

const logger = createLogger('app')

export function start() {
    const app = express()
    const port = process.env.PORT || 8080
    app.listen(port, () => {
        logger.info('Server running on port ', port)
    })

    app.get('/', (req, res, next) => {
        res.json(getTestPayload())
    })
}

start()
