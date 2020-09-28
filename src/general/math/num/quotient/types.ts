import { Decimal } from "../decimal"
import { Monzo } from "../monzo"
import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality,
} from "../types"

type NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T extends NumTypeParameters = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})
    & (T extends { integer: true } ? { irrational: false, integer: true } : {})

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
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
