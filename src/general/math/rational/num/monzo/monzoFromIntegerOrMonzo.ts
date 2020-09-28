import { isNumber } from "../../../../code"
import { Integer } from "../../types"
import { computeIntegerMonzoFromInteger } from "./monzoFromInteger"
import { IntegerMonzo, RationalMonzo } from "./types"

const computeRationalMonzoFromIntegerOrRationalMonzo = (
    integerOrRationalMonzo: Integer | RationalMonzo,
): RationalMonzo => {
    let rationalMonzo: RationalMonzo
    if (isNumber(integerOrRationalMonzo)) {
        rationalMonzo = computeIntegerMonzoFromInteger(integerOrRationalMonzo)
    } else {
        rationalMonzo = integerOrRationalMonzo as IntegerMonzo
    }

    return rationalMonzo
}

export {
    computeRationalMonzoFromIntegerOrRationalMonzo,
}
