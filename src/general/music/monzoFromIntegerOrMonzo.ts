import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

const computeMonzoFromIntegerOrMonzo = (integerOrMonzo: number | Monzo): Monzo => { // TODO: Integer type
    let monzo
    if (typeof integerOrMonzo === "number") {
        monzo = computeMonzoFromInteger(integerOrMonzo)
    } else {
        monzo = integerOrMonzo
    }

    return monzo
}

export {
    computeMonzoFromIntegerOrMonzo
}
