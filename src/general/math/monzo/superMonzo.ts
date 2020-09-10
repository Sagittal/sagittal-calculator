import { invertMonzo } from "./invertMonzo"
import { computeIsSubMonzo } from "./monzoDirection"
import { Direction, Monzo, MonzoTypeParameters } from "./types"

const computeSuperMonzo = <T extends MonzoTypeParameters = { irrational: true }>(
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
