import {
    Direction,
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
} from "../../../num"
import { IntegerDecimal, RationalDecimal } from "../decimal"
import { IntegerMonzo, RationalMonzo } from "../monzo"

type IntegerNumerator<T extends NumTypeParameters = {}> =
    IntegerDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type IntegerDenominator<T extends NumTypeParameters = {}> =
    IntegerDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }

type IntegerQuotientPart<T extends NumTypeParameters = {}> = IntegerNumerator<T> | IntegerDenominator<T>

type RationalQuotient<T extends NumTypeParameters = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { rational: true }>

type RatioByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
}
type IntegerQuotient<T extends NumTypeParameters = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { integer: true, rational: true, direction: Direction.SUPER }>

type IntegerByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: IntegerDecimal<T>,
    monzo?: IntegerMonzo<T>,
    quotient: IntegerQuotient<T>,
}

export {
    IntegerNumerator,
    IntegerDenominator,
    IntegerQuotientPart,
    RationalQuotient,
    RatioByQuotient,
    IntegerQuotient,
    IntegerByQuotient,
}
