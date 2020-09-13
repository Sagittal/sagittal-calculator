import { Cents, Comma, JiPitch, Monzo, Name, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../general"
import { ApotomeSlope, N2D3P9 } from "./evaluation"

interface JiPitchAnalysisProperties {
    apotomeSlope: ApotomeSlope,
    twoThreeFreeSopfr: Sopfr<{ rough: 5 }>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
    cents: Cents,
    twoThreeFreeClass: TwoThreeFreeClass,
}

type JiPitchAnalysis = JiPitch & JiPitchAnalysisProperties

type CommaAnalysis = Comma & JiPitchAnalysisProperties & {
    name: Name<Comma>,
}

export {
    JiPitchAnalysis,
    CommaAnalysis,
}
