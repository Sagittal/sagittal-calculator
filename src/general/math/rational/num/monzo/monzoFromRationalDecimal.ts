import { NumTypeParameters } from "../../../num"
import { RationalDecimal } from "../decimal"
import { computeRationalRatioFromRationalDecimal } from "../ratio"
import { computeRationalMonzoFromRationalRatio } from "./monzoFromRatio"
import { RationalMonzo } from "./types"

const computeRationalMonzoFromRationalDecimal = <T extends NumTypeParameters>(
    rationalDecimal: RationalDecimal<T>,
): RationalMonzo<T> => {
    const ratio = computeRationalRatioFromRationalDecimal(rationalDecimal)

    return computeRationalMonzoFromRationalRatio(ratio) as RationalMonzo<T>
}

export {
    computeRationalMonzoFromRationalDecimal,
}
