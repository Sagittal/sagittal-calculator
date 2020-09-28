import { Decimal } from "../decimal"
import { Monzo } from "../monzo"
import {
    NumTypeParameterEffects,
    NumTypeParameters,
} from "../types"

type NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T extends NumTypeParameters = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }
type Quotient<T extends NumTypeParameters = {}> =
    [Numerator<T>, Denominator<T>]
    & NumTypeParameterEffects<T>

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart<T extends NumTypeParameters = {}> = Numerator<T> | Denominator<T>

type NumByQuotient<T extends NumTypeParameters> = {
    decimal?: Decimal<T>,
    monzo?: Monzo<T>,
    quotient: Quotient<T>,
}

export {
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
    QuotientPartType,
    Quotient,
    QuotientPart,
    NumByQuotient,
    Numerator,
    Denominator,
}
