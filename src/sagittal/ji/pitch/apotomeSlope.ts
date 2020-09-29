import { computeCentsFromPitch, computeRationalMonzoFromRatio, Ratio, THREE_PRIME_INDEX } from "../../../general"
import { APOTOME, APOTOME_3_EXPONENT } from "../../constants"
import { ApotomeSlope } from "./types"

// Apotome slope = exponent_of_3 - 7 × untempered_size_in_cents/113.685

const computeApotomeSlope = (jiPitch: Ratio): ApotomeSlope => {
    const monzo = computeRationalMonzoFromRatio(jiPitch)
    const monzo3Exponent = monzo[ THREE_PRIME_INDEX ] || 0

    // TODO: CONDUCT AT NUM LEVEL, LOGARITHMIC FRACTION HELPER
    //  Which I think is going to involve something like a "logarithmic fraction" helper
    const apotomeFraction = computeCentsFromPitch(jiPitch) / computeCentsFromPitch(APOTOME)

    return monzo3Exponent - APOTOME_3_EXPONENT * apotomeFraction as ApotomeSlope
}

export {
    computeApotomeSlope,
}
