import { MULTIPLICATIVE_IDENTITY } from "../constants"
import { SMOOTH_ROUGH_OFFSET } from "./constants"
import { computeRoughInteger } from "./roughness"
import { Integer, Roughness, Smoothness } from "./types"

const computeIsSmoothInteger = (integer: Integer, smoothness: Smoothness): boolean => {
    return computeRoughInteger(integer, smoothness + SMOOTH_ROUGH_OFFSET as Roughness) === MULTIPLICATIVE_IDENTITY
}

export {
    computeIsSmoothInteger,
}
