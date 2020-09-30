export {
    Rational,
    RationalByDecimal,
    Integer,
} from "./types"
export {
    computeIntegerDecimalFromIntegerMonzo,
    RationalDecimal,
    IntegerDecimal,
    isIntegerDecimal,
    isRoughIntegerDecimal,
    computeIntegerDecimalSmoothness,
    computeRationalDecimalSmoothness,
    ceil,
    floor,
    integerDivide,
} from "./decimal"
export {
    isRoughRationalQuotient,
    computeRoughRationalQuotient,
    isSmoothRationalQuotient,
    computeRationalQuotientFromRational,
    computeRationalQuotientFromRationalDecimal,
    isRationalQuotient,
    RationalByQuotient,
    computeLowestTermsRationalQuotient,
    IntegerDenominator,
    IntegerQuotientPart,
    IntegerNumerator,
    RationalQuotient,
    equalQuotients,
    IntegerQuotient,
} from "./quotient"
export {
    computeIntegerMonzoFromIntegerDecimal,
    computeRationalMonzoFromRationalQuotient,
    computeRationalMonzosFromPrimeExponentExtremas,
    computeRoughRationalMonzo,
    isRoughRationalMonzo,
    isSmoothRationalMonzo,
    computeRationalMonzoFromRational,
    RationalByMonzo,
    RationalMonzo,
    IntegerMonzo,
} from "./monzo"
export { isRational } from "./typeGuards"
export { multiplyRationals, divideRationals } from "./typedOperations"
export { isSmoothRational, computeRationalSmoothness } from "./smoothness"
export { isRoughRational } from "./roughness"

// Todo: DEFER UNTIL AFTER SCALED MONZO
//  It doens't really make sense for rational/real anymore... probably just level it out,
//  Especially now that most of the stuff directly under rational/ has now been conformed to the Num -> Real world

