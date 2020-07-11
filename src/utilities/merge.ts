const merge = <T>(...objects: T[]) => {
    return objects.reduce(
        (mergedObjects, object) => {
            return { ...mergedObjects, ...object }
        },
        {},
    )
}

export {
    merge,
}
