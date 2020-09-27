import { Decimal, DecimalNotDefaultingToPotentiallyIrrational } from "../decimal"
import { Monzo } from "../monzo"
import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutDefaultRationality,
} from "../types"

// tslint:disable-next-line max-line-length
type NumTypeParameterTranslationsForRatiosToTheirFractionalPartsExceptDefaultRationality<T extends NumTypeParameters = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})
    & (T extends { integer: true } ? { potentiallyIrrational: false, integer: true } : {})

type Numerator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutDefaultRationality<T>
        & NumTypeParameterTranslationsForRatiosToTheirFractionalPartsExceptDefaultRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutDefaultRationality<T>
        & NumTypeParameterTranslationsForRatiosToTheirFractionalPartsExceptDefaultRationality<T>>
    & { _DenominatorBrand: boolean }
type Ratio<T extends NumTypeParameters = {}> =
    [
        Numerator<T & { potentiallyIrrational: false }>,
        Denominator<T & { potentiallyIrrational: false }>
    ]
    & NumTypeParameterEffects<T & { potentiallyIrrational: false }>

type NumeratorNotDefaultingToRational<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationsForRatiosToTheirFractionalPartsExceptDefaultRationality<T>>
    & { _NumeratorBrand: boolean }
type DenominatorNotDefaultingToRational<T extends NumTypeParameters = {}> =
    Decimal<NumTypeParameterTranslationsForRatiosToTheirFractionalPartsExceptDefaultRationality<T>>
    & { _DenominatorBrand: boolean }
type RatioNotDefaultingToRational<T extends NumTypeParameters = {}> =
    [NumeratorNotDefaultingToRational<T>, DenominatorNotDefaultingToRational<T>]
    & NumTypeParameterEffects<T>

enum FractionalPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type FractionalPart<T extends NumTypeParameters = {}> = Numerator<T> | Denominator<T>
type FractionalPartNotDefaultingToRational<T extends NumTypeParameters = {}> =
    NumeratorNotDefaultingToRational<T> |
    DenominatorNotDefaultingToRational<T>

type RationalNumByRatio<T extends NumTypeParameters = {}> = {
    decimal?: DecimalNotDefaultingToPotentiallyIrrational<T & { potentiallyIrrational: false }>,
    monzo?: Monzo<T & { potentiallyIrrational: false }>,
    ratio: Ratio<T & { potentiallyIrrational: false }>,
}

export {
    Ratio,
    Numerator,
    Denominator,
    FractionalPartType,
    FractionalPart,
    RatioNotDefaultingToRational,
    RationalNumByRatio,
    FractionalPartNotDefaultingToRational,
}
