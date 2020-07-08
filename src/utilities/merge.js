const merge = (...objects) => {
    return objects.reduce(
        (mergedObjects, object) => {
            return {...mergedObjects, ...object}
        } ,
        {},
    )
}

module.exports = {
    merge,
}
