import { Direction, invertMonzo, Monzo, NumTypeParameters, Ratio, sumMonzos } from "../../../num"
import { Exponent } from "../../../types"
import { Integer, Prime } from "../../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"

const computeMonzoFromRatio = <T extends NumTypeParameters>(ratio: Ratio<T>): Monzo<T> => {
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
