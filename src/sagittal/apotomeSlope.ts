import { computeCentsFromRatio, computeRatioFromMonzo, Monzo } from "../general"
import { APOTOME_CENTS, APOTOME_THREE_EXPONENT } from "./constants"
import { ApotomeSlope } from "./types"

const computeApotomeSlope = (monzo: Monzo): ApotomeSlope => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    const monzoThreeExponent = monzo[ 1 ]

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME_CENTS as ApotomeSlope
}

export {
    computeApotomeSlope,
}
