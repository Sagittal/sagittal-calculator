import { computeCentsFromRatio, computeRatioFromMonzo, JiPitch } from "../../../general"
import { APOTOME_CENTS, APOTOME_THREE_EXPONENT } from "../../constants"
import { ApotomeSlope } from "./types"

const computeApotomeSlope = ({ monzo }: JiPitch): ApotomeSlope => {
    const ratio = computeRatioFromMonzo(monzo)
    const cents = computeCentsFromRatio(ratio)

    const monzoThreeExponent = monzo[ 1 ] || 0

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME_CENTS as ApotomeSlope
}

export {
    computeApotomeSlope,
}
