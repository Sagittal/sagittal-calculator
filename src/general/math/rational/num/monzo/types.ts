import {
    NumTypeParameterEffects,
    NumTypeParameters,
    NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality,
    NumTypeParameterTranslationForMonzosToTheirTermsExceptDefaultRationality,
} from "../../../num"
import { Exponent } from "../../../types"
import { Prime } from "../../types"
import { RationalDecimal } from "../decimal"
import { RationalRatio } from "../ratio"

type RationalMonzo<T extends NumTypeParameters = {}> =
// tslint:disable-next-line max-line-length
    Array<RationalDecimal<NumTypeParameterTranslationForMonzosAndRatiosToTheirFractionalPartsAndTermsAboutRationality<T & { irrational: false }>
        & NumTypeParameterTranslationForMonzosToTheirTermsExceptDefaultRationality<T & { irrational: false }>>
        & Exponent<Prime>>
    & NumTypeParameterEffects<T & { irrational: false }>

type RationalNumByMonzo<T extends NumTypeParameters = {}> = {
    decimal?: RationalDecimal<T>,
    monzo: RationalMonzo<T>,
    ratio?: RationalRatio<T>,
}

export {
    RationalMonzo,
    RationalNumByMonzo,
}
