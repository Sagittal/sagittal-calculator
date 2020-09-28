import { Direction, invertMonzo, NumTypeParameters, sumMonzos } from "../../../num"
import { Exponent } from "../../../types"
import { Integer, Prime } from "../../types"
import { RationalQuotient } from "../quotient"
import { computeIntegerMonzoFromInteger } from "./monzoFromInteger"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalQuotient = <T extends NumTypeParameters>(
    [ numerator, denominator ]: RationalQuotient<T>
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
    computeRationalMonzoFromRationalQuotient,
}
