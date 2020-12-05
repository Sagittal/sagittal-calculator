import {APOTOME, dividePitch, Scamon, THREE_PRIME_INDEX} from "@sagittal/general"
import {APOTOME_3_EXPONENT} from "../../../../constants"
import {ApotomeSlope} from "./types"

// Apotome slope = exponent_of_3 - 7 × untempered_size_in_cents/113.685

const computeApotomeSlope = (jiPitch: Scamon<{rational: true}>): ApotomeSlope => {
    const rationalMonzo3Exponent = jiPitch.monzo[THREE_PRIME_INDEX] || 0
    const apotomeFraction = dividePitch(jiPitch, APOTOME)

    return rationalMonzo3Exponent - APOTOME_3_EXPONENT * apotomeFraction as ApotomeSlope
}

export {
    computeApotomeSlope,
}
