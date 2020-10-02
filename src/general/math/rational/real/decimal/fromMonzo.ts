import { formatMonzo } from "../../../../io"
import { computeRealQuotientFromRealMonzo, NumericProperties } from "../../../real"
import { IntegerMonzo } from "../monzo"
import { IntegerDecimal } from "./types"

const computeIntegerDecimalFromIntegerMonzo = <T extends NumericProperties>(
    integerMonzo: IntegerMonzo<T>,
): IntegerDecimal<T> => {
    const realQuotient = computeRealQuotientFromRealMonzo(integerMonzo)
    const [numerator, denominator] = realQuotient

    if (denominator !== 1) {
        throw new Error(`Tried to compute integer from non-integer monzo ${formatMonzo(integerMonzo)}.`)
    }

    return numerator as IntegerDecimal as IntegerDecimal<T>
}

export {
    computeIntegerDecimalFromIntegerMonzo,
}
