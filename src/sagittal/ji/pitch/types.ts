import { Cents, JiPitch, Monzo, NumericTypeParameters, Ratio } from "../../../general"
import { TwoThreeFreeClassAnalysis } from "../twoThreeFreeClass"

interface JiPitchAnalysisProperties<T extends NumericTypeParameters = {}> {
    apotomeSlope: ApotomeSlope,
    monzo: Monzo<T>,
    ratio: Ratio<T>,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis<T>,
}

type JiPitchAnalysis<T extends NumericTypeParameters = {}> = JiPitch<T> & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
