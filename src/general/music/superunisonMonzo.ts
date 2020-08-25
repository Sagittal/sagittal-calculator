import { invertMonzo } from "./invertMonzo"
import { isSubunison } from "./isSubunison"
import { Monzo } from "./types"

const computeSuperunisonMonzo = (monzo: Monzo) => {
    if (isSubunison(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo
}

export {
    computeSuperunisonMonzo,
}
