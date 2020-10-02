import {
    Abs,
    Cents,
    Exponent,
    IntegerDecimal,
    NumericProperties,
    Prime,
    Rational,
    RationalDecimal,
    RationalMonzo,
    RationalQuotient,
} from "../../../general"
import { Two3FreeClassAnalysis } from "../two3FreeClass"

interface JiPitchAnalysisProperties<T extends NumericProperties = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<IntegerDecimal & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
    decimal: RationalDecimal<T>,
    cents: Cents,
    two3FreeClassAnalysis: Two3FreeClassAnalysis,
}

type JiPitchAnalysis<T extends NumericProperties = {}> = Rational<T> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
