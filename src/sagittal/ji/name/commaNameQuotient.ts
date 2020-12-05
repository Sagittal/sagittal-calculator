import {
    Comma,
    computeRationalQuotientFromRationalScamon,
    computeRoughRationalQuotient,
    computeSuperScamon,
    Direction,
    TWO_3_FREE,
} from "@sagittal/general"
import {CommaNameQuotient} from "./types"

const computeCommaNameQuotient = (comma: Comma): CommaNameQuotient => {
    const superComma = computeSuperScamon(comma) as Comma<{rational: true, direction: Direction.SUPER}>
    const quotient = computeRationalQuotientFromRationalScamon(superComma)

    return computeRoughRationalQuotient(quotient, TWO_3_FREE) as CommaNameQuotient
}

export {
    computeCommaNameQuotient,
}
