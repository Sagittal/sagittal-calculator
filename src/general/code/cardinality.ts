const computeCardinality = <T>(array: T[]) => {
    const cardinality = []

    let cursor = array
    while (typeof cursor === "object") {
        cardinality.push(cursor.length)
        cursor = cursor[ 0 ] as unknown as T[]
    }

    return cardinality
}

export {
    computeCardinality,
}
