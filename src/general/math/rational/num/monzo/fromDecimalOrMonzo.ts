import { isNumber } from "../../../../code"
import { IntegerDecimal } from "../decimal"
import { computeIntegerMonzoFromIntegerDecimal } from "./fromDecimal"
import { IntegerMonzo, RationalMonzo } from "./types"

// TODO: this should be gone at the end of the day, after revising these old rational method to work with Nums
const computeRationalMonzoFromIntegerDecimalOrRationalMonzo = (
    integerDecimalOrRationalMonzo: IntegerDecimal | RationalMonzo,
): RationalMonzo => {
    let rationalMonzo: RationalMonzo
    if (isNumber(integerDecimalOrRationalMonzo)) {
        rationalMonzo = computeIntegerMonzoFromIntegerDecimal(integerDecimalOrRationalMonzo)
    } else {
        rationalMonzo = integerDecimalOrRationalMonzo as IntegerMonzo
    }

    return rationalMonzo
}

export {
    computeRationalMonzoFromIntegerDecimalOrRationalMonzo,
}
