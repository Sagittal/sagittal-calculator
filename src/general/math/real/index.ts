export {
    RealDecimal,
    computeDecimalFromReal,
    computeDecimalFromQuotient,
    computeDecimalFromMonzo,
} from "./decimal"
export {
    isSubQuotient,
    isSuperQuotient,
    QuotientPartType,
    computeSuperQuotient,
    isUnisonQuotient,
    Quotient,
    computeSubQuotient,
    invertQuotient,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
    Denominator,
    QuotientPart,
    computeQuotientFromMonzo,
    equalIrrationalQuotients,
    computeQuotientProduct,
} from "./quotient"
export {
    isSubMonzo,
    computeSuperMonzo,
    invertMonzo,
    isSuperMonzo,
    computeMonzoSum,
    Monzo,
    isUnisonMonzo,
    equalMonzos,
} from "./monzo"
export { isSubReal, isSuperReal, isUnisonReal, computeSuperReal } from "./direction"
export { computeRealFromMonzo } from "./fromMonzo"
export { divideReals, computeRealSqrt } from "./typedOperations"
export { computeRealFromQuotient } from "./fromQuotient"
export { computeRealFromRealOrDecimal } from "./fromRealOrDecimal"
export { equalReals, realIsHigher, realIsLower, realIsLowerOrEqual, realIsHigherOrEqual } from "./comparison"
export {
    Direction,
    NumericProperties,
    Real,
    NumTypeParameterEffects,
} from "./types"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  Right, so I'm pretty sure a goal should be to have "decimal" not really occur outside of general/math
