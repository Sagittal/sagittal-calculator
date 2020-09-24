import { Comma, Name, NumTypeParameters } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis<T extends NumTypeParameters = {}> = Comma<T> & JiPitchAnalysisProperties<T> & {
    name: Name<Comma<T>>,
}

export {
    CommaAnalysis,
}
