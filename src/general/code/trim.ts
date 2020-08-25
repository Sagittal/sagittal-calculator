const computeTrimmedArray = <T extends Array<unknown>>(monzo: T): T => {
    const trimmedArray = monzo.slice()

    while (trimmedArray.length && !trimmedArray[ trimmedArray.length - 1 ]) {
        trimmedArray.pop()
    }

    return trimmedArray as T
}

export {
    computeTrimmedArray,
}
