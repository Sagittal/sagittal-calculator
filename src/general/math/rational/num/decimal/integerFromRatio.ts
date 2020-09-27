import { formatRatio } from "../../../../io"
import { NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { computeLowestTermsRationalRatio, RationalRatio } from "../ratio"

const computeIntegerFromIntegerRatio = <T extends NumTypeParameters>(integerRatio: RationalRatio<T>): Integer<T> => {
    // TODO: actually make an IntegerRatio
    const [numerator, denominator] = computeLowestTermsRationalRatio(integerRatio)

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer ratio ${formatRatio(integerRatio)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromIntegerRatio,
}
