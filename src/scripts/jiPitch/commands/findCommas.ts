import { addTexts, Comma, LogTarget, NEWLINE, saveLog, sort } from "../../../general"
import { addMaybeSymbolClassId, analyzeComma, CommaAnalysis } from "../../../sagittal"
import { computeCommas } from "../commas"
import { jiPitchScriptGroupSettings } from "../globals"
import {
    computeFindCommasTable,
    formatFindCommasOptions,
    parseFindCommasOptions,
    readFindCommasOptions,
} from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasOptions = parseFindCommasOptions()

const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...findCommasOptions })

const commasWithMaybeSagittalSymbolClassIds = commas.map(addMaybeSymbolClassId)
const commaAnalyses = commasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
    return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
})
if (jiPitchScriptGroupSettings.sortKey) {
    sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
}

saveLog(formatFindCommasOptions(findCommasOptions), LogTarget.ALL)

saveLog(computeFindCommasTable(commaAnalyses), LogTarget.ALL)
