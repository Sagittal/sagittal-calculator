import { Id, Io, LogTarget, Maybe, saveLog } from "../../../general"
import { CommaAnalysis, computeMaybeSymbolClassId, SymbolClass } from "../../../sagittal"
import { computeCommaAnalyses, parseFindCommasSettings } from "../findCommas"
import { computeFindCommasOutput, readFindCommasOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

// TODO: now that we include ATE and AAS so you can sort by them if you want, I'm going to need to add an option
//  for filtering them out from the results
const findCommasSettings = parseFindCommasSettings()
const commaAnalyses: CommaAnalysis[] = computeCommaAnalyses(findCommasSettings)
const maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = commaAnalyses.map(computeMaybeSymbolClassId)
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeSymbolClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.ALL)
