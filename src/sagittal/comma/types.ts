import { Cents, Comma, JiPitch, Monzo, Name, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../general"
import { ApotomeSlope, N2D3P9 } from "./evaluation"

interface JiPitchAnalysisProperties {
    apotomeSlope: ApotomeSlope,
    monzo: Monzo,
    ratio: Ratio,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis,
}

type TwoThreeFreeClassAnalysis = Omit<TwoThreeFreeClass, "_TwoThreeFreeClassBrand"> & {
    // TODO: simplify the property names on this analysis to assume 2,3-free?
    twoThreeFreePrimeLimit: Prime,
    n2d3p9: N2D3P9,
    // TODO: shouldn't we just include the 2,3-free CoPFR too?
    twoThreeFreeSopfr: Sopfr<{ rough: 5 }>,
}

type JiPitchAnalysis = JiPitch & JiPitchAnalysisProperties

type CommaAnalysis = Omit<Comma, "_CommaBrand"> & JiPitchAnalysisProperties & {
    name: Name<Comma>,
}

export {
    JiPitchAnalysis,
    CommaAnalysis,
    TwoThreeFreeClassAnalysis,
}
