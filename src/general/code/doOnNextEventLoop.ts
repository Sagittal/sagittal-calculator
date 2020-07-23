const doOnNextEventLoop = async (fn: Function, timeout: number = 0): Promise<void> => {
    return new Promise(resolve => {
        setTimeout(async () => {
            await fn()
            resolve()
        }, timeout)
    })
}

export {
    doOnNextEventLoop,
}
