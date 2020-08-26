import { invertMonzo } from "./invertMonzo"
import { computeIsSubMonzo } from "./isSubMonzo"
import { Monzo } from "./types"

const computeSuperMonzo = (monzo: Monzo) => {
    if (computeIsSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo
}

export {
    computeSuperMonzo,
}
