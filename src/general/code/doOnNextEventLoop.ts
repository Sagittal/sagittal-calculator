import { Ms } from "../types"

const doOnNextEventLoop = async (fn: Function, timeout: Ms = 0 as Ms): Promise<void> => {
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
