import { Direction, Exponent } from "../../types"
import { Ratio } from "../ratio"
import { Integer, Prime, RationalNumTypeParameters } from "../types"
import { invertMonzo } from "./monzoDirection"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { sumMonzos } from "./sumMonzos"
import { Monzo } from "./types"

const computeMonzoFromRatio = <T extends RationalNumTypeParameters>(ratio: Ratio<T>): Monzo<T> => {
    const positiveFactors: Monzo<{ direction: Direction.SUPER }> = computeMonzoFromInteger(ratio[ 0 ])
    const negativeFactors: Monzo<{ direction: Direction.SUB }> = invertMonzo(computeMonzoFromInteger(ratio[ 1 ]))

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0 as Integer & Exponent<Prime>)
    }

    return sumMonzos(positiveFactors, negativeFactors) as Monzo<T>
}

export {
    computeMonzoFromRatio,
}
