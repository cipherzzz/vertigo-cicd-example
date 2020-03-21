export type Payload = {
    message: string
}

export function getTestPayload(): Payload {
    return { message: 'everybody in the club gettin tipsy' }
}
