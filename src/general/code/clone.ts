const deepClone = <T extends Object | unknown[]>(object: T): T =>
    JSON.parse(JSON.stringify(object))

const shallowClone = <T extends Object | unknown[] | string>(object: T): T =>
    (object as unknown[]).length === undefined ?
        { ...(object as Object) } as T :
        (object as unknown[]).slice(0) as T

export {
    shallowClone,
    deepClone,
}
