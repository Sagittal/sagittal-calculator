import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality,
    NumTypeParameterTranslationForMonzosToTheirTermsExceptDefaultRationality,
} from "../../../num"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { RationalDecimal } from "../decimal"
import { RationalQuotient } from "../quotient"

type RationalMonzo<T extends NumTypeParameters = {}> =
// tslint:disable-next-line max-line-length
    Array<RationalDecimal<NumTypeParameterTranslationForMonzosAndQuotientsToTheirQuotientPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForMonzosToTheirTermsExceptDefaultRationality<T & { irrational: false }>>
        & Exponent<Prime>>
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalNumByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo: RationalMonzo<T>,
    quotient?: RationalQuotient<T>,
}

export {
    RationalMonzo,
    RationalNumByMonzo,
}
