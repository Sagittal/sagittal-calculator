import { isNumber } from "../../code"
import { JiPitch } from "../../music"
import { Integer } from "../types"
import { computeMonzoFromInteger } from "./monzoFromInteger"
import { Monzo } from "./types"

// TODO: "JI" does not belong in math
const computeMonzoFromIntegerOrJiPitch = (integerOrJiPitch: Integer | JiPitch): Monzo => {
    let monzo: Monzo
    if (isNumber(integerOrJiPitch)) {
        monzo = computeMonzoFromInteger(integerOrJiPitch)
    } else {
        monzo = (integerOrJiPitch as JiPitch).monzo
    }

    return monzo
}

export {
    computeMonzoFromIntegerOrJiPitch,
}
