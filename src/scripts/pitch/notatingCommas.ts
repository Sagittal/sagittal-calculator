import { computeMonzoSlicedToPrimeIndex, Integer, invertMonzo, Monzo } from "../../general"
import { AnalyzedRationalPitch } from "../../sagittal"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { ComputeCommasFromFiveSlicedMonzoOptions } from "./types"

const computeNotatingCommas = (
    monzo: Monzo,
    options?: ComputeCommasFromFiveSlicedMonzoOptions,
): Array<AnalyzedRationalPitch> => {
    const fiveSlicedMonzo: Monzo<Integer, 5> = computeMonzoSlicedToPrimeIndex(monzo, 5)

    return [
        ...computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, options),
        ...computeCommasFromFiveSlicedMonzo(invertMonzo(fiveSlicedMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
