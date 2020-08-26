import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { Monzo } from "./types"

const computeIsSubMonzo = (monzo: Monzo): boolean => {
    const ratio = computeRatioFromMonzo(monzo)
    const value = ratio[ 0 ] / ratio[ 1 ]

    return value < 1
}

export {
    computeIsSubMonzo,
}
