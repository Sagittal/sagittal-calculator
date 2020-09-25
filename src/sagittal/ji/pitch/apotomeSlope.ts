import { computeCentsFromPitch, computeMonzoFromJiPitch, JiPitch, THREE_PRIME_INDEX } from "../../../general"
import { APOTOME, APOTOME_3_EXPONENT } from "../../constants"
import { ApotomeSlope } from "./types"

// apotome_slope = exponent_of_3 - 7 × untempered_size_in_cents/113.685

const computeApotomeSlope = (jiPitch: JiPitch): ApotomeSlope => {
    const monzo = computeMonzoFromJiPitch(jiPitch)
    const monzo3Exponent = monzo[ THREE_PRIME_INDEX ] || 0

    const cents = computeCentsFromPitch(jiPitch)
    const apotomeFraction = cents / computeCentsFromPitch(APOTOME)

    return monzo3Exponent - APOTOME_3_EXPONENT * apotomeFraction as ApotomeSlope
}

export {
    computeApotomeSlope,
}
