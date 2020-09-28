import { computeMonzoSum, Direction, invertMonzo, NumTypeParameters } from "../../../num"
import { RationalQuotient } from "../quotient"
import { computeIntegerMonzoFromIntegerDecimal } from "./fromDecimal"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalQuotient = <T extends NumTypeParameters>(
    [numerator, denominator]: RationalQuotient<T>,
): RationalMonzo<T> => {
    const positiveFactors: RationalMonzo<{ direction: Direction.SUPER }> =
        computeIntegerMonzoFromIntegerDecimal(numerator)
    const negativeFactors: RationalMonzo<{ direction: Direction.SUB }> =
        invertMonzo(computeIntegerMonzoFromIntegerDecimal(denominator))

    return computeMonzoSum(positiveFactors, negativeFactors) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalQuotient,
}
