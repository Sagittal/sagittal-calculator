import {
    Comma,
    computeMonzoFromRationalNum,
    computeRoughMonzo,
    equalMonzos,
    FIVE_ROUGHNESS,
    invertMonzo,
    Monzo, NumTypeParameters,
    RationalNum,
} from "../../../../general"
import { computeCommasFrom23FreeMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = <T extends NumTypeParameters>(
    jiPitch: RationalNum<T>,
    options?: CommasFrom23FreeMonzoOptions
): Comma[] => {
    const monzo = computeMonzoFromRationalNum(jiPitch)
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughMonzo(monzo, FIVE_ROUGHNESS) as Monzo<{ rough: 5 }>

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
