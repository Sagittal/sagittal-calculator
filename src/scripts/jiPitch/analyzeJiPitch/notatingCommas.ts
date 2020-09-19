import { Comma, JiPitch } from "../../../general"
import { analyzeComma, CommaAnalysis, computeNotatingCommas } from "../../../sagittal"
import { FindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"

const computeNotatingCommaAnalyses = (
    jiPitch: JiPitch,
    findCommasSettings: Partial<FindCommasSettings> = {},
): Array<CommaAnalysis> => {
    const notatingCommas: Comma[] =
        computeNotatingCommas(jiPitch, { ...jiPitchScriptGroupSettings, ...findCommasSettings })

    return notatingCommas.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })
}

export {
    computeNotatingCommaAnalyses,
}
