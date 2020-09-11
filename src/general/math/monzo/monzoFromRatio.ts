import { Exponent, Integer, Prime, Ratio } from "../types"
import { invertMonzo } from "./invertMonzo"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { sumMonzos } from "./sumMonzos"
import { Direction, Monzo } from "./types"

const computeMonzoFromRatio = (ratio: Ratio): Monzo => {
    const positiveFactors: Monzo<{ direction: Direction.SUPER }> = computeMonzoFromInteger(ratio[ 0 ])
    const negativeFactors: Monzo<{ direction: Direction.SUB }> = invertMonzo(computeMonzoFromInteger(ratio[ 1 ]))

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0 as Integer & Exponent<Prime>)
    }

    return sumMonzos(positiveFactors, negativeFactors)
}

export {
    computeMonzoFromRatio,
}
