import { APOTOME } from "../../notations/intervals"
import { computeRatioFromMonzo } from "./ratioFromMonzo"
import { computeCentsFromRatio } from "./centsFromRatio"
import { Monzo } from "./types"
import { ApotomeSlope } from "../../notations/ji/types"

const APOTOME_THREE_EXPONENT = 7

const computeApotomeSlope = (monzo: Monzo): ApotomeSlope => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    const monzoThreeExponent = monzo[ 1 ]

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME as ApotomeSlope
}

export {
    computeApotomeSlope,
}
