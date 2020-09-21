import { Abs, Cents, Exponent, Integer, JiPitch, Monzo, NumericTypeParameters, Prime, Ratio } from "../../../general"
import { TwoThreeFreeClassAnalysis } from "../twoThreeFreeClass"

interface JiPitchAnalysisProperties<T extends NumericTypeParameters = {}> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<Integer & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: Monzo<T>,
    ratio: Ratio<T>,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis<T>,
}

type JiPitchAnalysis<T extends NumericTypeParameters = {}> = JiPitch<T> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
