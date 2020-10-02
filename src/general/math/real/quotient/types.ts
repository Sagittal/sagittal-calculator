import { RealDecimal } from "../decimal"
import { RealMonzo } from "../monzo"
import { NumericProperties, NumTypeParameterEffects } from "../types"

type NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T extends NumericProperties = {}> =
    (T extends { rough: number } ? { rough: T["rough"] } : {})
    & (T extends { smooth: number } ? { smooth: T["smooth"] } : {})

type Numerator<T extends NumericProperties = {}> =
    RealDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _NumeratorBrand: boolean }
type Denominator<T extends NumericProperties = {}> =
    RealDecimal<NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality<T>>
    & { _DenominatorBrand: boolean }
type RealQuotient<T extends NumericProperties = {}> =
    [Numerator<T>, Denominator<T>]
    & NumTypeParameterEffects<T>

enum QuotientPartType {
    NUMERATOR = "numerator",
    DENOMINATOR = "denominator",
}

type QuotientPart<T extends NumericProperties = {}> = Numerator<T> | Denominator<T>

type RealByRealQuotient<T extends NumericProperties> = {
    decimal?: RealDecimal<T>,
    monzo?: RealMonzo<T>,
    quotient: RealQuotient<T>,
}

export {
    NumTypeParameterTranslationForQuotientsToTheirQuotientPartsExceptRationality,
    QuotientPartType,
    RealQuotient,
    QuotientPart,
    RealByRealQuotient,
    Numerator,
    Denominator,
}
