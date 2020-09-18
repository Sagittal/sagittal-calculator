import { Comma, Name } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis = Omit<Comma, "_CommaBrand"> & JiPitchAnalysisProperties & {
    name: Name<Comma>,
}

export {
    CommaAnalysis,
}
