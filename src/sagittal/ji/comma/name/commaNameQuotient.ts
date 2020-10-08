import {
    Comma,
    computeRationalQuotientFromJiPitch,
    computeRoughRationalQuotient,
    computeSuperPitch,
    Direction,
    FIVE_ROUGHNESS,
} from "../../../../general"
import { CommaNameQuotient } from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperPitch(comma) as Comma<{ rational: true, direction: Direction.SUPER }>
    const quotient = computeRationalQuotientFromJiPitch(superComma)

    return computeRoughRationalQuotient(quotient, FIVE_ROUGHNESS) as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
