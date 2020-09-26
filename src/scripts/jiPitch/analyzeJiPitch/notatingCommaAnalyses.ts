import { Comma, RationalNum, sort } from "../../../general"
import { analyzeComma, CommaAnalysis, computeNotatingCommas } from "../../../sagittal"
import { FindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"

const computeNotatingCommaAnalyses = (
    jiPitch: RationalNum,
    notatingCommasSettings: Partial<FindCommasSettings> = {},
): CommaAnalysis[] => {
    const notatingCommas: Comma[] =
        computeNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...notatingCommasSettings })

    const notatingCommaAnalyses = notatingCommas.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })

    if (jiPitchScriptGroupSettings.sortKey) {
        sort(notatingCommaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
    }

    return notatingCommaAnalyses
}

export {
    computeNotatingCommaAnalyses,
}
