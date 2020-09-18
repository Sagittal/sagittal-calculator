import { Cents, JiPitch, Monzo, Ratio } from "../../../general"
import { TwoThreeFreeClassAnalysis } from "../twoThreeFreeClass"

interface JiPitchAnalysisProperties {
    apotomeSlope: ApotomeSlope,
    monzo: Monzo,
    ratio: Ratio,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
}

type JiPitchAnalysis = JiPitch & JiPitchAnalysisProperties

type ApotomeSlope = number & { _ApotomeSlopeBrand: "ApotomeSlope" }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
