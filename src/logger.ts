const projectName = 'gae-demo'

export type Logger = {
    info(...args: any[]): void
    warn(...args: any[]): void
    error(...args: any[]): void
}

export default function createLogger(context: string = ''): Logger {
    const logAtLevel = (method: keyof Console) => (...args: any[]) => {
        return console[method](
            `[${getTimestamp()}]`,
            `[${projectName}]`,
            `[${method.toUpperCase()}]`,
            context && `(${context})`,
            ...args,
        )
    }

    return {
        info: logAtLevel('info'),
        warn: logAtLevel('warn'),
        error: logAtLevel('error'),
    }
}

function getTimestamp(): string {
    return new Date().toLocaleString()
}
