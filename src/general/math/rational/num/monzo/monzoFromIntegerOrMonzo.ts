import { isNumber } from "../../../../code"
import { Monzo } from "../../../num"
import { Integer } from "../../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"

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
