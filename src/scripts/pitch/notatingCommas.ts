import { computeMonzoSlicedToPrimeIndex, Integer, invertMonzo, Monzo } from "../../general"
import { AnalyzedRationalPitch } from "../../sagittal"
import { computeCommasFromFiveSlicedMonzo } from "./commasFromFiveSlicedMonzo"
import { CommasFromFiveSlicedMonzoOptions } from "./types"

const computeNotatingCommas = (
    monzo: Monzo,
    options?: CommasFromFiveSlicedMonzoOptions,
): Array<AnalyzedRationalPitch> => {
    const fiveSlicedMonzo: Monzo<Integer, 5> = computeMonzoSlicedToPrimeIndex(monzo, 5) as Monzo<Integer, 5>

    return [
        ...computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, options),
        ...computeCommasFromFiveSlicedMonzo(invertMonzo(fiveSlicedMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
