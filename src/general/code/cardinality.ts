import { count } from "../math"
import { Count } from "../types"

const computeCardinality = (array: unknown[]): Array<Count> => {
    const cardinality = []

    let cursor = array
    while (typeof cursor === "object") {
        cardinality.push(count(cursor))
        cursor = cursor[ 0 ] as unknown[]
    }

    return cardinality
}

export {
    computeCardinality,
}
