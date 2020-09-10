import { AnalyzedComma, Comma } from "../types"
import { analyzeJiPitch } from "./analyzeJiPitch"
import { computeSagittalCommaName } from "./name"
import { CommaNameOptions } from "./types"

const analyzeComma = (comma: Comma, options: CommaNameOptions = {}): AnalyzedComma => {
    const { directed = true, factored = false, abbreviated = true } = options
    const name = computeSagittalCommaName(comma, { directed, factored, abbreviated })

    const analyzedJiPitch = analyzeJiPitch(comma)

    return { ...analyzedJiPitch, name } as AnalyzedComma
}

export {
    analyzeComma,
}
