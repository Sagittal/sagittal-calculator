import { computeRealMonzoSum, Direction, invertRealMonzo, NumericProperties } from "../../../real"
import { RationalQuotient } from "../quotient"
import { computeIntegerMonzoFromIntegerDecimal } from "./fromDecimal"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalQuotient = <T extends NumericProperties>(
    [numerator, denominator]: RationalQuotient<T>,
): RationalMonzo<T> => {
    const positiveFactors: RationalMonzo<{ direction: Direction.SUPER }> =
        computeIntegerMonzoFromIntegerDecimal(numerator)
    const negativeFactors: RationalMonzo<{ direction: Direction.SUB }> =
        invertRealMonzo(computeIntegerMonzoFromIntegerDecimal(denominator))

    return computeRealMonzoSum(positiveFactors, negativeFactors) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalQuotient,
}
