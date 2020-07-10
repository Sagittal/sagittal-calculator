import {APOTOME} from "../../notations/intervals"
import {computeRatioFromMonzo} from "./ratioFromMonzo"
import {computeCentsFromRatio} from "./centsFromRatio"

const APOTOME_THREE_EXPONENT = 7

const computeApotomeSlope = monzo => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    const monzoThreeExponent = monzo[1]

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME
}

export {
    computeApotomeSlope,
}
