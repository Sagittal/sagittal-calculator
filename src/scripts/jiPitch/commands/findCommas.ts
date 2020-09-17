import { Comma, Io, LogTarget, saveLog, sort } from "../../../general"
import { addMaybeSymbolClassId, analyzeComma, CommaAnalysis } from "../../../sagittal"
import { computeCommas } from "../commas"
import { jiPitchScriptGroupSettings } from "../globals"
import { computeFindCommasOutput, parseFindCommasOptions, readFindCommasOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasOptions = parseFindCommasOptions()

// TODO: get straight on difference between settings & options
//  like, do some/many options BECOME settings once saved or parsed?
//  is there really any good reason for these options not to be saved on the jiPitchScriptGroupSettings global object?
const commas = computeCommas({ ...jiPitchScriptGroupSettings, ...findCommasOptions })
const commasWithMaybeSagittalSymbolClassIds = commas.map(addMaybeSymbolClassId)
// TODO: I can't find it right now, but the other to-do where I say I should just include the maybe sagittal symbol
//  class ID in the analysis -- so then this would get refactored a bit
//  (it was the computeNotatingCommasRowSpec)
//  should the maybe symbolClassId just be part of a CommaAnalysis? same with the other thing
//  which sometimes has one? 
//  yeah it's actually almost always a CommaAnalysis & { symbolClassId?: Id<SymbolClass> }
//  this is the only place where it's a Comma & very briefly, but there's no need for it to be that way
const commaAnalyses = commasWithMaybeSagittalSymbolClassIds.map((comma: Comma): CommaAnalysis => {
    return analyzeComma(comma, jiPitchScriptGroupSettings.commaNameOptions)
})
if (jiPitchScriptGroupSettings.sortKey) {
    sort(commaAnalyses, { by: jiPitchScriptGroupSettings.sortKey })
}
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, findCommasOptions)
saveLog(findCommasOutput, LogTarget.ALL)
