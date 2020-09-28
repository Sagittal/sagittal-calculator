import { MULTIPLICATIVE_IDENTITY } from "../../../constants"
import { SMOOTH_ROUGH_OFFSET } from "../../constants"
import { Roughness, Smoothness } from "../../types"

import { computeRoughIntegerDecimal } from "./roughness"
import { IntegerDecimal } from "./types"

const isSmoothIntegerDecimal = (integerDecimal: IntegerDecimal, smoothness: Smoothness): boolean => {
    return computeRoughIntegerDecimal(
        integerDecimal, 
        smoothness + SMOOTH_ROUGH_OFFSET as Roughness
    ) === MULTIPLICATIVE_IDENTITY
}

export {
    isSmoothIntegerDecimal,

}
