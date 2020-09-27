import { isNumber } from "../../../../code"
import { Integer } from "../../types"
import { computeIntegerMonzoFromInteger } from "./monzoFromInteger"
import { RationalMonzo } from "./types"

const computeIntegerMonzoFromIntegerOrMonzo = (integerOrMonzo: Integer | RationalMonzo): RationalMonzo => {
    let integerMonzo: RationalMonzo
    if (isNumber(integerOrMonzo)) {
        integerMonzo = computeIntegerMonzoFromInteger(integerOrMonzo)
    } else {
        integerMonzo = integerOrMonzo as RationalMonzo
    }

    return integerMonzo
}

export {
    computeIntegerMonzoFromIntegerOrMonzo,
}
