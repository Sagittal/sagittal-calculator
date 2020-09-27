// tslint:disable max-line-length

import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality,
    NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality,
} from "../../../num"
import { RationalDecimal } from "../decimal"
import { RationalMonzo } from "../monzo"

type RationalNumerator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality<T & { irrational: false }>>
    & { _NumeratorBrand: boolean }
type RationalDenominator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForRatiosToTheirFractionalPartsExceptRationality<T & { irrational: false }>>
    & { _DenominatorBrand: boolean }
type RationalRatio<T extends NumTypeParameters = {}> =
    [RationalNumerator<T>, RationalDenominator<T>]
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalFractionalPart<T extends NumTypeParameters = {}> = RationalNumerator<T> | RationalDenominator<T>

type RationalNumByRatio<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    ratio: RationalRatio<T>,
}

export {
    RationalRatio,
    RationalNumerator,
    RationalDenominator,
    RationalFractionalPart,
    RationalNumByRatio,
}
