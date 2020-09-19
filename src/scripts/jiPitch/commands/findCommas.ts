import { Comma, Id, Io, LogTarget, Maybe, saveLog, sort } from "../../../general"
import { analyzeComma, CommaAnalysis, computeMaybeSymbolClassId, SymbolClass } from "../../../sagittal"
import { computeCommas, parseFindCommasSettings } from "../findCommas"
import { jiPitchScriptGroupSettings } from "../globals"
import { computeFindCommasOutput, readFindCommasOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()

const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...findCommasSettings })
const commaAnalyses = commas.map((comma: Comma): CommaAnalysis => {
    return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
})
if (jiPitchScriptGroupSettings.sortKey) {
    sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
}
const maybeSagittalSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = commaAnalyses.map(computeMaybeSymbolClassId)
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeSagittalSymbolClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.ALL)
