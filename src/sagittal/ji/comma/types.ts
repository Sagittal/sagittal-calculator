import { Comma, Name, NumericTypeParameters } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis<T extends NumericTypeParameters = {}> = Comma<T> & JiPitchAnalysisProperties<T> & {
    name: Name<Comma<T>>,
}

export {
    CommaAnalysis,
}
