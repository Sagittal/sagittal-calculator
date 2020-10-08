import { Comma, Name, NumericProperties } from "../../../general"
import { JiPitchAnalysisProperties } from "../pitch"

type CommaAnalysis<T extends NumericProperties = {}, U extends Comma<T> = Comma<T>> =
    JiPitchAnalysisProperties<T>
    & { name: Name<Comma>, pitch: U }

export {
    CommaAnalysis,
}
