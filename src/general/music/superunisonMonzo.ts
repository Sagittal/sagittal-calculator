import { Monzo } from "./types"
import { computeCentsFromRatio } from "./centsFromRatio"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { invertMonzo } from "./invertMonzo"

const computeSuperunisonMonzo = (monzo: Monzo) => {
    if (computeCentsFromRatio(computeRatioFromMonzo(monzo)) < 0) {
        return invertMonzo(monzo)
    }

    return monzo
}

export {
    computeSuperunisonMonzo,
}
