import { computeRoughNumberMonzo, invertMonzo, Monzo } from "../../general"
import { Comma } from "../types"
import { computeCommasFromTwoThreeFreeMonzo } from "./commasFromFiveSlicedMonzo"
import { CommasFrom23FreeMonzoOptions } from "./types"

const computeNotatingCommas = (
    monzo: Monzo,
    options?: CommasFrom23FreeMonzoOptions,
): Array<Comma> => {
    const twoThreeFreeMonzo: Monzo<{ rough: 5 }> = computeRoughNumberMonzo(monzo, 5) as Monzo<{ rough: 5 }>

    return [
        ...computeCommasFromTwoThreeFreeMonzo(twoThreeFreeMonzo, options),
        ...computeCommasFromTwoThreeFreeMonzo(invertMonzo(twoThreeFreeMonzo), options),
    ]
}

export {
    computeNotatingCommas,
}
