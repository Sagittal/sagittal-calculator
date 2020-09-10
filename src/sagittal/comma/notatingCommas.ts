import { computeRoughNumberMonzo, FIVE_ROUGHNESS, invertMonzo, Monzo } from "../../general"
import { Comma } from "../types"
import { computeCommasFrom23FreeMonzo } from "./commasFrom23FreeMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = (
    monzo: Monzo,
    options?: CommasFrom23FreeMonzoOptions,
): Array<Comma> => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughNumberMonzo(monzo, FIVE_ROUGHNESS) as Monzo<{ rough: 5 }>

    return [
        ...computeCommasFrom23FreeMonzo(twoThreeFreeMonzo, options),
        ...computeCommasFrom23FreeMonzo(invertMonzo(twoThreeFreeMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
