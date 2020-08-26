import { Ms } from "../types"

// TODO: probably I should review the commit where I temporarily ripped out all of the async stuff
//  and make a commit where I make it possible to switch between them

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
