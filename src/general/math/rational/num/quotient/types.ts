// tslint:disable max-line-length

import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality,
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
} from "../../../num"
import { RationalDecimal } from "../decimal"
import { RationalMonzo } from "../monzo"

type RationalNumerator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T & { irrational: false }>>
    & { _NumeratorBrand: boolean }
type RationalDenominator<T extends NumTypeParameters = {}> =
    RationalDecimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T & { irrational: false }>>
    & { _DenominatorBrand: boolean }
type RationalQuotient<T extends NumTypeParameters = {}> =
    [RationalNumerator<T>, RationalDenominator<T>]
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalQuotientPart<T extends NumTypeParameters = {}> = RationalNumerator<T> | RationalDenominator<T>

type RationalNumByQuotient<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo?: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
}

export {
    RationalQuotient,
    RationalNumerator,
    RationalDenominator,
    RationalQuotientPart,
    RationalNumByQuotient,
}
