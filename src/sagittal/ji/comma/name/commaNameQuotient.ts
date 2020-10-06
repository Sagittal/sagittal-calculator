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

const computeCommaNameQuotient = <T extends NumericProperties>(comma: Comma<T>): CommaNameQuotient => {
    const superComma: Comma<T & { rational: true, direction: Direction.SUPER }> = computeSuperPitch(comma)
    const quotient = computeQuotientFromPitch(superComma)

    return computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS) as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
