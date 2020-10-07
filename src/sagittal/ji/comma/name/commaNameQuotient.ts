import {
    Comma,
    computeQuotientFromPitch,
    computeRoughRationalQuotient,
    computeSuperPitch,
    Direction,
    FIVE_ROUGHNESS,
    NumericProperties,
} from "../../../../general"
import { CommaNameQuotient } from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperPitch(comma) as Comma<{ rational: true, direction: Direction.SUPER }>
    const quotient = computeQuotientFromPitch(superComma)

    return computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS) as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
