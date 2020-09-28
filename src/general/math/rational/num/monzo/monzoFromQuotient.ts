import { Direction, invertMonzo, NumTypeParameters, sumMonzos } from "../../../num"
import { RationalQuotient } from "../quotient"
import { computeIntegerMonzoFromInteger } from "./monzoFromInteger"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalQuotient = <T extends NumTypeParameters>(
    [numerator, denominator]: RationalQuotient<T>,
): RationalMonzo<T> => {
    const positiveFactors: RationalMonzo<{ direction: Direction.SUPER }> =
        computeIntegerMonzoFromInteger(numerator)
    const negativeFactors: RationalMonzo<{ direction: Direction.SUB }> =
        invertMonzo(computeIntegerMonzoFromInteger(denominator))

    return sumMonzos(positiveFactors, negativeFactors) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalQuotient,
}
