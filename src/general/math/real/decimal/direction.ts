import { MULTIPLICATIVE_IDENTITY } from "../../constants"
import { Direction, NumericProperties } from "../types"
import { RealDecimal } from "./types"

const isSuperRealDecimal = <T extends NumericProperties>(
    candidateSuperRealDecimal: RealDecimal<T>,
): candidateSuperRealDecimal is RealDecimal<T & { direction: Direction.SUPER }> => {
    return candidateSuperRealDecimal > MULTIPLICATIVE_IDENTITY
}

const isSubRealDecimal = <T extends NumericProperties>(
    candidateSubRealDecimal: RealDecimal<T>,
): candidateSubRealDecimal is RealDecimal<T & { direction: Direction.SUB }> => {
    return candidateSubRealDecimal < MULTIPLICATIVE_IDENTITY
}

const isUnisonRealDecimal = <T extends NumericProperties>(
    candidateUnisonRealDecimal: RealDecimal<T>,
): candidateUnisonRealDecimal is RealDecimal<T & { direction: Direction.SUB }> => {
    return candidateUnisonRealDecimal === MULTIPLICATIVE_IDENTITY
}

const invertRealDecimal: {
    <T extends NumericProperties & { direction: Direction.SUPER }>(
        realDecimal: RealDecimal<T>,
    ): RealDecimal<T & { direction: Direction.SUB, integer: false }>,
    <T extends NumericProperties & { direction: Direction.SUB }>(
        realDecimal: RealDecimal<T>,
    ): RealDecimal<T & { direction: Direction.SUPER, integer: false }>,
    <T extends NumericProperties>(
        realDecimal: RealDecimal<T>,
    ): RealDecimal<T & { integer: false }>,
} = <T extends NumericProperties>(
    realDecimal: RealDecimal<T>,
): RealDecimal<T & { integer: false }> => {
    return 1 / realDecimal as RealDecimal<T & { integer: false }>
}

export {
    isSubRealDecimal,
    isSuperRealDecimal,
    isUnisonRealDecimal,
    invertRealDecimal,
}
