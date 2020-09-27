import {
    Abs,
    Cents, 
    DecimalNotDefaultingToPotentiallyIrrational,
    Exponent,
    Integer,
    Monzo,
    NumTypeParameters,
    Prime,
    Ratio,
    RationalNum,
} from "../../../general"
import { TwoThreeFreeClassAnalysis } from "../twoThreeFreeClass"

interface JiPitchAnalysisProperties<T extends NumTypeParameters = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<Integer & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: Monzo<T>,
    ratio: Ratio<T>,
    decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis<T>,
}

type JiPitchAnalysis<T extends NumTypeParameters = {}> = RationalNum<T> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
