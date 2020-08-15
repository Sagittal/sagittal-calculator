import { Exponent, Ratio } from "../math"
import { Prime } from "../types"
import { combineMonzos } from "./combineMonzos"
import { invertMonzo } from "./invertMonzo"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

const computeMonzoFromRatio = (ratio: Ratio): Monzo => {
    const positiveFactors: Monzo = computeMonzoFromInteger(ratio[ 0 ])
    const negativeFactors: Monzo = invertMonzo(computeMonzoFromInteger(ratio[ 1 ]))

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0 as Exponent<Prime>)
    }

    return combineMonzos(positiveFactors, negativeFactors)
}

export {
    computeMonzoFromRatio,
}
