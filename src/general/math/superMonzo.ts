import { invertMonzo } from "./invertMonzo"
import { isSubMonzo } from "./isSubMonzo"
import { Monzo } from "./types"

const computeSuperMonzo = (monzo: Monzo) => {
    if (isSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo
}

export {
    computeSuperMonzo,
}
