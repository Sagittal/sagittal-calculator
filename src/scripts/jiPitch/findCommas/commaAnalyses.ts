import { Comma, sort } from "../../../general"
import { analyzeComma, CommaAnalysis } from "../../../sagittal"
import { jiPitchScriptGroupSettings } from "../globals"
import { computeCommas } from "./commas"
import { FindCommasSettings } from "./types"

const computeCommaAnalyses = (findCommasSettings: Partial<FindCommasSettings> = {}): CommaAnalysis[] => {
    const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...findCommasSettings })

    const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })

    if (jiPitchScriptGroupSettings.sortKey) {
        sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
    }

    return commaAnalyses
}

export {
    computeCommaAnalyses,
}
