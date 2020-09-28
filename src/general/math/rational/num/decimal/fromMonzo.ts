import { formatMonzo } from "../../../../io"
import { computeQuotientFromMonzo, NumTypeParameters } from "../../../num"
import { IntegerMonzo } from "../monzo"
import { IntegerDecimal } from "./types"

const computeIntegerDecimalFromIntegerMonzo = <T extends NumTypeParameters>(
    integerMonzo: IntegerMonzo<T>,
): IntegerDecimal<T> => {
    const quotient = computeQuotientFromMonzo(integerMonzo)
    const [numerator, denominator] = quotient

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(integerMonzo)}.`)
    }

    return numerator as IntegerDecimal as IntegerDecimal<T>
}

export {
    computeIntegerDecimalFromIntegerMonzo,
}
