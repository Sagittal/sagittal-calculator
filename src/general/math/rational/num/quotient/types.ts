import {
    Direction,
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
} from "../../../num"
import { Integer } from "../../types"
import { RationalDecimal } from "../decimal"
import { IntegerMonzo, RationalMonzo } from "../monzo"

type IntegerNumerator<T extends NumTypeParameters = {}> =
    Integer<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type IntegerDenominator<T extends NumTypeParameters = {}> =
    Integer<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }

type IntegerQuotientPart<T extends NumTypeParameters = {}> = IntegerNumerator<T> | IntegerDenominator<T>

type RationalQuotient<T extends NumTypeParameters = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalNumByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
}
type IntegerQuotient<T extends NumTypeParameters = {}> =
    [IntegerNumerator<T>, IntegerDenominator<T>]
    & NumTypeParameterEffects<T & { integer: true, irrational: false, direction: Direction.SUPER }>

type IntegerNumByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: Integer<T>,
    monzo?: IntegerMonzo<T>,
    quotient: IntegerQuotient<T>,
}

export {
    IntegerNumerator,
    IntegerDenominator,
    IntegerQuotientPart,
    RationalQuotient,
    RationalNumByQuotient,
    IntegerQuotient,
    IntegerNumByQuotient,
}
