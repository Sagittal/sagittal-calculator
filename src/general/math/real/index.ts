export {
    RealDecimal,
    computeRealDecimalFromReal,
    computeRealDecimalFromRealQuotient,
    computeRealDecimalFromRealMonzo,
} from "./decimal"
export {
    isSubRealQuotient,
    isSuperRealQuotient,
    QuotientPartType,
    computeSuperRealQuotient,
    isUnisonRealQuotient,
    RealQuotient,
    computeSubRealQuotient,
    invertRealQuotient,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
    Denominator,
    QuotientPart,
    computeRealQuotientFromRealMonzo,
    equalRealQuotients,
    computeRealQuotientProduct,
} from "./quotient"
export {
    isSubRealMonzo,
    computeSuperRealMonzo,
    invertRealMonzo,
    isSuperRealMonzo,
    computeRealMonzoSum,
    RealMonzo,
    isUnisonRealMonzo,
    equalRealMonzos,
} from "./monzo"
export { isSubReal, isSuperReal, isUnisonReal, computeSuperReal } from "./direction"
export { computeRealFromRealMonzo } from "./fromMonzo"
export { divideReals, computeRealSqrt } from "./typedOperations"
export { computeRealFromRealQuotient } from "./fromQuotient"
export { computeRealFromRealOrRealDecimal } from "./fromRealOrDecimal"
export { equalReals, realIsHigher, realIsLower, realIsLowerOrEqual, realIsHigherOrEqual } from "./comparison"
export {
    Direction,
    NumericProperties,
    Real,
    NumTypeParameterEffects,
} from "./types"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  Right, so I'm pretty sure a goal should be to have "decimal" not really occur outside of general/math
