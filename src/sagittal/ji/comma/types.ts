import { Comma, Name, RationalNumTypeParameters } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis<T extends RationalNumTypeParameters = { potentiallyIrrational: false }> =
    Comma<T>
    & JiPitchAnalysisProperties<T>
    & { name: Name<Comma<T>> }

export {
    CommaAnalysis,
}
