import { computeCentsFromJiPitch, computeJiPitchMonzo, JiPitch } from "../../../general"
import { APOTOME_CENTS, APOTOME_THREE_EXPONENT } from "../../constants"
import { ApotomeSlope } from "./types"

const computeApotomeSlope = (jiPitch: JiPitch): ApotomeSlope => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const cents = computeCentsFromJiPitch(jiPitch)

    const monzoThreeExponent = monzo[ 1 ] || 0

    return monzoThreeExponent - APOTOME_THREE_EXPONENT * cents / APOTOME_CENTS as ApotomeSlope
}

export {
    computeApotomeSlope,
}
