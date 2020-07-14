const merge = <T>(...objects: T[]) =>
    objects.reduce(
        (mergedObjects, object) =>
            ({ ...mergedObjects, ...object }),
        {},
    )

export {
    merge,
}
