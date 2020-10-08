import {
    areMonzosEqual,
    Comma,
    computeRoughRationalMonzo,
    FIVE_ROUGHNESS,
    invertMonzo,
    Monzo,
    NumericProperties,
    Pitch,
} from "../../../../general"
import { computeCommasFrom23FreeRationalMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumericProperties>(
    { monzo }: Pitch<T & { rational: true }>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const two3FreeRationalMonzo: Monzo<{ rational: true, rough: 5 }> =
        computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS) as Monzo<{ rational: true, rough: 5 }>

    if (areMonzosEqual(two3FreeRationalMonzo, [])) {
        return computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options),
        ...computeCommasFrom23FreeRationalMonzo(invertMonzo(two3FreeRationalMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
