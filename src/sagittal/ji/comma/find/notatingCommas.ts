import {
    Comma,
    computeRationalMonzoFromRationalNum,
    computeRoughRationalMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    invertMonzo,
    NumTypeParameters,
    RationalMonzo,
    RationalNum,
} from "../../../../general"
import { computeCommasFrom23FreeMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumTypeParameters>(
    jiPitch: RationalNum<T>,
    options?: CommasFrom23FreeMonzoOptions,
): Comma[] => {
    const monzo = computeRationalMonzoFromRationalNum(jiPitch)
    const twoThreeFreeMonzo: RationalMonzo<{ rough: 5 }> =
        computeRoughRationalMonzo(monzo, FIVE_ROUGHNESS) as RationalMonzo<{ rough: 5 }>

    if (equalMonzos(twoThreeFreeMonzo, [])) {
        return computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, options)
    }

    return [
        ...computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, options),
        ...computeCommasFrom23FreeMonzo(invertMonzo(twoThreeFreeMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
