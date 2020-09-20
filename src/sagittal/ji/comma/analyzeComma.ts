import { Comma } from "../../../general"
import { analyzeJiPitch } from "../pitch"
import { CommaNameOptions, computeCommaName } from "./name"
import { CommaAnalysis } from "./types"

const analyzeComma = (comma: Comma, options: CommaNameOptions = {}): CommaAnalysis => {
    const { directed = true, factored = false, abbreviated = true } = options
    const name = computeCommaName(comma, { directed, factored, abbreviated })

    const jiPitchAnalysis = analyzeJiPitch(comma)

    return { ...comma, ...jiPitchAnalysis, name }
}

export {
    analyzeComma,
}
