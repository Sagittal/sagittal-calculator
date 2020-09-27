import { Direction, invertMonzo, NumTypeParameters, sumMonzos } from "../../../num"
import { Exponent } from "../../../types"
import { Integer, Prime } from "../../types"
import { RationalRatio } from "../ratio"
import { computeIntegerMonzoFromInteger } from "./monzoFromInteger"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalRatio = <T extends NumTypeParameters>(
    [ numerator, denominator ]: RationalRatio<T>
): RationalMonzo<T> => {
    const positiveFactors: RationalMonzo<{ direction: Direction.SUPER }> =
        computeIntegerMonzoFromInteger(numerator)
    const negativeFactors: RationalMonzo<{ direction: Direction.SUB }> =
        invertMonzo(computeIntegerMonzoFromInteger(denominator))

    while (positiveFactors.length < negativeFactors.length) {
        positiveFactors.push(0 as Integer & Exponent<Prime>)
    }
    // TODO: test this part's necessity... pretty sure it is necessary...
    while (negativeFactors.length < positiveFactors.length) {
        negativeFactors.push(0 as Integer & Exponent<Prime>)
    }

    return sumMonzos(positiveFactors, negativeFactors) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalRatio,
}
