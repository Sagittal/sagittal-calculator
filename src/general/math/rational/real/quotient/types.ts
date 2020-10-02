import {
    Direction,
    NumericProperties,
    NumTypeParameterEffects,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
} from "../../../real"
import { IntegerDecimal, RationalDecimal } from "../decimal"
import { IntegerMonzo, RationalMonzo } from "../monzo"

type IntegerNumerator<T extends NumericProperties = {}> =
    IntegerDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type IntegerDenominator<T extends NumericProperties = {}> =
    IntegerDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }

type IntegerQuotientPart<T extends NumericProperties = {}> = IntegerNumerator<T> | IntegerDenominator<T>

type RationalQuotient<T extends NumericProperties = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { rational: true }>

type RationalByRationalQuotient<T extends NumericProperties = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
}
type IntegerQuotient<T extends NumericProperties = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { integer: true, rational: true, direction: Direction.SUPER }>

type IntegerByIntegerQuotient<T extends NumericProperties = {}> = {
    decimal?: IntegerDecimal<T>,
    monzo?: IntegerMonzo<T>,
    quotient: IntegerQuotient<T>,
}

export {
    IntegerNumerator,
    IntegerDenominator,
    IntegerQuotientPart,
    RationalQuotient,
    RationalByRationalQuotient,
    IntegerQuotient,
    IntegerByIntegerQuotient,
}
