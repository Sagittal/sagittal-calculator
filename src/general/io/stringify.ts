const stringify = (object: unknown, { multiline = false }: { multiline?: boolean } = {}) => {
    return multiline ? JSON.stringify(object, undefined, 4) : JSON.stringify(object)
}

export {
    stringify,
}
