const computeCardinality = array => {
    const cardinality = []

    let cursor = array
    while (typeof cursor === 'object') {
        cardinality.push(cursor.length)
        cursor = cursor[0]
    }

    return cardinality
}

export {
    computeCardinality,
}
