import { formatMonzo } from "../../../../io"
import { computeQuotientFromMonzo, NumTypeParameters } from "../../../num"
import { Integer } from "../../types"
import { RationalMonzo } from "../monzo"

const computeIntegerFromIntegerMonzo = <T extends NumTypeParameters>(
    integerMonzo: RationalMonzo<T>, // TODO: actually make an IntegerMonzo
): Integer<T> => {
    const quotient = computeQuotientFromMonzo(integerMonzo)
    const [numerator, denominator] = quotient

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(integerMonzo)}.`)
    }

    return numerator as Integer as Integer<T>
}

export {
    computeIntegerFromIntegerMonzo,
}
