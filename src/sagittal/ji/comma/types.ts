import { Comma, Name, NumericProperties } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis<T extends NumericProperties = {}> =
    Comma<T>
    & JiPitchAnalysisProperties<T>
    & { name: Name<Comma> }

export {
    CommaAnalysis,
}
