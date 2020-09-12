import { Comma } from "../../general"
import { analyzeJiPitch } from "./analyzeJiPitch"
import { CommaNameOptions, computeCommaName } from "./name"
import { AnalyzedComma } from "./types"

const analyzeComma = (comma: Comma, options: CommaNameOptions = {}): AnalyzedComma => {
    const { directed = true, factored = false, abbreviated = true } = options
    const name = computeCommaName(comma, { directed, factored, abbreviated })

    const analyzedJiPitch = analyzeJiPitch(comma)

    return { ...analyzedJiPitch, name } as AnalyzedComma
}

export {
    analyzeComma,
}
