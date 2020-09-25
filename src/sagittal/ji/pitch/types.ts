import {
    Abs,
    Cents,
    Exponent,
    Integer,
    JiPitch,
    Monzo,
    Prime,
    Ratio,
    RationalNumTypeParameters,
} from "../../../general"
import { TwoThreeFreeClassAnalysis } from "../twoThreeFreeClass"

interface JiPitchAnalysisProperties<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> {
    apotomeSlope: ApotomeSlope,
    ate: Abs<Integer & Exponent<3 & Prime>>,
    aas: Abs<ApotomeSlope>,
    monzo: Monzo<T>,
    ratio: Ratio<T>,
    // TODO: I don't want to force this now,
    //  but just as the other representations (monzo, ratio) become required in analysis,
    //  decimal should as well
    // decimal: DecimalNotDefaultingToPotentiallyIrrational<T>,
    cents: Cents,
    twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis<T>,
}

type JiPitchAnalysis<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> =
    JiPitch<T>
    & JiPitchAnalysisProperties<T>

type ApotomeSlope = number & { _ApotomeSlopeBrand: boolean }

export {
    ApotomeSlope,
    JiPitchAnalysisProperties,
    JiPitchAnalysis,
}
