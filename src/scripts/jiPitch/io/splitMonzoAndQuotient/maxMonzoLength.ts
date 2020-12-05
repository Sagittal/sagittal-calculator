import {count, Count, Exponent, Max, max, Prime} from "@sagittal/general"
import {JiPitchAnalysis} from "../../../../sagittal"

const computeMaxMonzoLength = (jiPitchAnalyses: JiPitchAnalysis[]): Max<Count<Exponent<Prime>>> =>
    max(...jiPitchAnalyses.map((jiPitchAnalysis: JiPitchAnalysis): Count<Exponent<Prime>> => {
        return count(jiPitchAnalysis.monzo)
    }))

export {
    computeMaxMonzoLength,
}
