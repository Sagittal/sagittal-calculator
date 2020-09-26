import { isNumber } from "../../../code"
import { Integer } from "../../rational"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

const computeMonzoFromIntegerOrMonzo = (integerOrMonzo: Integer | Monzo): Monzo => {
    let monzo: Monzo
    if (isNumber(integerOrMonzo)) {
        monzo = computeMonzoFromInteger(integerOrMonzo)
    } else {
        monzo = integerOrMonzo as Monzo
    }

    return monzo
}

export {
    computeMonzoFromIntegerOrMonzo,
}
