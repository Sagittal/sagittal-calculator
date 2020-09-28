import { Decimal } from "../decimal"
import { Monzo } from "../monzo"
import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality,
} from "../types"

type NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality<T extends NumTypeParameters = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})
    & (T extends { integer: true } ? { irrational: false, integer: true } : {})

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }
type Quotient<T extends NumTypeParameters = {}> =
    [Numerator<T>, Denominator<T>]
    & NumTypeParameterEffects<T>

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart<T extends NumTypeParameters = {}> = Numerator<T> | Denominator<T>

type NumByQuotient<T extends NumTypeParameters> = {
    decimal?: Decimal<T>,
    monzo?: Monzo<T>,
    quotient: Quotient<T>,
}

export {
    NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality,
    FractionalPartType,
    Quotient,
    FractionalPart,
    NumByQuotient,
    Numerator,
    Denominator,
}
