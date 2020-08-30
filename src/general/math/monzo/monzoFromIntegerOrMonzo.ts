import { Integer } from "../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

const computeMonzoFromIntegerOrMonzo = (integerOrMonzo: Integer | Monzo): Monzo => {
    let monzo: Monzo
    if (typeof integerOrMonzo === "number") {
        monzo = computeMonzoFromInteger(integerOrMonzo)
    } else {
        monzo = integerOrMonzo as Monzo
    }

    return monzo
}

export {
    computeMonzoFromIntegerOrMonzo,
}
