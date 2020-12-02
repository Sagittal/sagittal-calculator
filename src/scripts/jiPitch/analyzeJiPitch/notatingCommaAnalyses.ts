import {Comma, Scamon, sort} from "../../../general"
import {analyzeComma, CommaAnalysis, findNotatingCommas} from "../../../sagittal"
import {FindCommasOptions} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"

const findNotatingCommaAnalyses = (
    jiPitch: Scamon<{rational: true}>,
    findNotatingCommasOptions: Partial<FindCommasOptions> = {},
): CommaAnalysis[] => {
    const notatingCommas: Comma[] = findNotatingCommas(
        jiPitch,
        {...jiPitchScriptGroupSettings, ...findNotatingCommasOptions},
    )

    const notatingCommaAnalyses = notatingCommas.map((comma: Comma): CommaAnalysis => {
        return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
    })

    if (jiPitchScriptGroupSettings.sortKey) {
        sort(notatingCommaAnalyses, {by: jiPitchScriptGroupSettings.sortKey})
    }

    return notatingCommaAnalyses
}

export {
    findNotatingCommaAnalyses,
}
