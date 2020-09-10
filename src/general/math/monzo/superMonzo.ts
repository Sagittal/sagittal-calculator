import { invertMonzo } from "./invertMonzo"
import { computeIsSubMonzo } from "./monzoDirection"
import { Direction, Monzo, NumericTypeParameters } from "./types"

const computeSuperMonzo = <T extends NumericTypeParameters = {}>(
    monzo: Monzo<T>,
): Monzo<T & { direction: Direction.SUPER }> => {
    if (computeIsSubMonzo(monzo)) {
        return invertMonzo(monzo)
    }

    return monzo as Monzo<T & { direction: Direction.SUPER }>
}

export {
    computeSuperMonzo,
}
