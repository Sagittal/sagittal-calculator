// tslint:disable max-line-length

import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality,
    NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality,
} from "../../../num"
import { RationalDecimal } from "../decimal"
import { RationalMonzo } from "../monzo"

type RationalNumerator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality<T & { irrational: false }>>
    & { _NumeratorBrand: boolean }
type RationalDenominator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirFractionalPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForQuotientsToTheirFractionalPartsExceptRationality<T & { irrational: false }>>
    & { _DenominatorBrand: boolean }
type RationalQuotient<T extends NumTypeParameters = {}> =
    [RationalNumerator<T>, RationalDenominator<T>]
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalFractionalPart<T extends NumTypeParameters = {}> = RationalNumerator<T> | RationalDenominator<T>

type RationalNumByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
}

export {
    RationalQuotient,
    RationalNumerator,
    RationalDenominator,
    RationalFractionalPart,
    RationalNumByQuotient,
}
