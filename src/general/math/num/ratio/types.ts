import { Decimal } from "../decimal"
import { Monzo } from "../monzo"
import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality,
} from "../types"

type NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality<T extends NumTypeParameters = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})
    & (T extends { integer: true } ? { irrational: false, integer: true } : {})

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality<T>
        & NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }
type Ratio<T extends NumTypeParameters = {}> =
    [Numerator<T>, Denominator<T>]
    & NumTypeParameterEffects<T>

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart<T extends NumTypeParameters = {}> = Numerator<T> | Denominator<T>

type NumByRatio<T extends NumTypeParameters> = {
    decimal?: Decimal<T>,
    monzo?: Monzo<T>,
    ratio: Ratio<T>,
}

export {
    NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality,
    FractionalPartType,
    Ratio,
    FractionalPart,
    NumByRatio,
    Numerator,
    Denominator,
}
