export type Payload = {
    message: string
}

export function getTestPayload(): Payload {
    return { message: 'nobody in the club gettin tipsy' }
}
