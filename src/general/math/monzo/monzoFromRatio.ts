import { Exponent, Integer, Prime, Ratio } from "../types"
import { invertMonzo } from "./invertMonzo"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { sumMonzos } from "./sumMonzos"
import { Monzo } from "./types"

const computeMonzoFromRatio = (ratio: Ratio): Monzo => {
    const positiveFactors: Monzo = computeMonzoFromInteger(ratio[ 0 ])
    const negativeFactors: Monzo = invertMonzo(computeMonzoFromInteger(ratio[ 1 ]))

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0 as Integer & Exponent<Prime>)
    }

    return sumMonzos(positiveFactors, negativeFactors)
}

export {
    computeMonzoFromRatio,
}
