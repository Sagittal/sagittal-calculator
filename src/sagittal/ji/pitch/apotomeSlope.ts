import { computeCentsFromPitch, computeJiPitchMonzo, JiPitch, THREE_PRIME_INDEX } from "../../../general"
import { APOTOME_3_EXPONENT, APOTOME_CENTS } from "../../constants"
import { ApotomeSlope } from "./types"

// apotome_slope = exponent_of_3 - 7 × untempered_size_in_cents/113.685

const computeApotomeSlope = (jiPitch: JiPitch): ApotomeSlope => {
    const monzo = computeJiPitchMonzo(jiPitch)
    const cents = computeCentsFromPitch(jiPitch)

    const monzo3Exponent = monzo[ THREE_PRIME_INDEX ] || 0

    return monzo3Exponent - APOTOME_3_EXPONENT * cents / APOTOME_CENTS as ApotomeSlope
}

export {
    computeApotomeSlope,
}
