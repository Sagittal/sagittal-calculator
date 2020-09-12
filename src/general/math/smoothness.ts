import { computeRoughInteger } from "./roughness"
import { Integer, Roughness, Smoothness } from "./types"

const computeIsSmoothInteger = (integer: Integer, smoothness: Smoothness): boolean => {
    return computeRoughInteger(integer, smoothness + 1 as Integer as Roughness) === 1
}

export {
    computeIsSmoothInteger,
}
