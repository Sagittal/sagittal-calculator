import { AnalyzedComma, Comma } from "../types"
import { analyzeRationalPitch } from "./analyzeRationalPitch"
import { computeSagittalCommaName } from "./name"
import { CommaNameOptions } from "./types"

const analyzeComma = (comma: Comma, options: CommaNameOptions = {}): AnalyzedComma => {
    const { directed = true, factored = false, abbreviated = true } = options
    const name = computeSagittalCommaName(comma.monzo, { directed, factored, abbreviated })

    const analyzedRationalPitch = analyzeRationalPitch(comma)

    return { ...analyzedRationalPitch, name } as AnalyzedComma
}

export {
    analyzeComma,
}
