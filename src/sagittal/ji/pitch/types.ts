import {
    Abs,
    Cents,
    Exponent,
    IntegerDecimal,
    NumTypeParameters,
    Prime,
    Ratio,
    RationalDecimal,
    RationalMonzo,
    RationalQuotient,
} from "../../../general"
import { Two3FreeClassAnalysis } from "../two3FreeClass"

interface JiPitchAnalysisProperties<T extends NumTypeParameters = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<IntegerDecimal & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: RationalMonzo<T>,
    quotient: RationalQuotient<T>,
    decimal: RationalDecimal<T>,
    cents: Cents,
    two3FreeClassAnalysis: Two3FreeClassAnalysis<T>,
}

type JiPitchAnalysis<T extends NumTypeParameters = {}> = Ratio<T> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
