import { computeJiPitchMonzo, computeRoughMonzo, FIVE_ROUGHNESS, invertMonzo, JiPitch, Monzo } from "../../general"
import { Comma } from "../types"
import { computeCommasFrom23FreeMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = (jiPitch: JiPitch, options?: CommasFrom23FreeMonzoOptions): Array<Comma> => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughMonzo(monzo, FIVE_ROUGHNESS) as Monzo<{ rough: 5 }>

    return [
        ...computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, options),
        ...computeCommasFrom23FreeMonzo(invertMonzo(twoThreeFreeMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
