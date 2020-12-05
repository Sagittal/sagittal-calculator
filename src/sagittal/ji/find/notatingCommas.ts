import {
    areMonzosEqual,
    Comma,
    computeRoughRationalMonzo,
    invertMonzo,
    Monzo,
    NumericProperties,
    Scamon,
    TWO_3_FREE,
} from "@sagittal/general"
import {computeCommasFrom23FreeRationalMonzo} from "./commasFrom23FreeMonzo"
import {CommasFrom23FreeMonzoOptions} from "./types"

const findNotatingCommas = <T extends NumericProperties>(
    {monzo}: Scamon<T & {rational: true}>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const two3FreeRationalMonzo: Monzo<{rational: true, rough: 5}> =
        computeRoughRationalMonzo(monzo, TWO_3_FREE) as Monzo<{rational: true, rough: 5}>

    if (areMonzosEqual(two3FreeRationalMonzo, [])) {
        return computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeRationalMonzo(two3FreeRationalMonzo, options),
        ...computeCommasFrom23FreeRationalMonzo(invertMonzo(two3FreeRationalMonzo), options),
    ]
}

export {
    findNotatingCommas,
}
