const merge = (...objects) => {
    return objects.reduce(
        (mergedObjects, object) => {
            return {...mergedObjects, ...object}
        } ,
        {},
    )
}

export {
    merge,
}
