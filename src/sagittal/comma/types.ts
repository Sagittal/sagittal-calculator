import { Cents, Comma, JiPitch, Monzo, Name, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../general"
import { ApotomeSlope, N2D3P9 } from "./evaluation"

interface JiPitchAnalysis {
    apotomeSlope: ApotomeSlope,
    twoThreeFreeSopfr: Sopfr<5>,
    limit: Prime,
    monzo: Monzo,
    ratio: Ratio,
    n2d3p9: N2D3P9,
    cents: Cents,
    twoThreeFreeClass: TwoThreeFreeClass,
}

type AnalyzedJiPitch = JiPitch & JiPitchAnalysis

type AnalyzedComma = Comma & JiPitchAnalysis & {
    name: Name<Comma>,
}

export {
    AnalyzedJiPitch,
    AnalyzedComma,
}
