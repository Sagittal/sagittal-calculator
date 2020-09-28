import { isNumber } from "../../../../code"
import { IntegerDecimal } from "../decimal"
import { computeIntegerMonzoFromIntegerDecimal } from "./monzoFromIntegerDecimal"
import { IntegerMonzo, RationalMonzo } from "./types"

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
