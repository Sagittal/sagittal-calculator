import { computeCentsFromRatio } from "./centsFromRatio"
import { invertMonzo } from "./invertMonzo"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Monzo } from "./types"

const computeSuperunisonMonzo = (monzo: Monzo) => {
    if (computeCentsFromRatio(computeRatioFromMonzo(monzo)) < 0) {
        return invertMonzo(monzo)
    }

    return monzo
}

export {
    computeSuperunisonMonzo,
}
