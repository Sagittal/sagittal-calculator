import { Id, Io, LogTarget, Maybe, saveLog } from "../../../general"
import { CommaAnalysis, computeMaybeSymbolClassId, SymbolClass } from "../../../sagittal"
import { computeCommaAnalyses, parseFindCommasSettings } from "../findCommas"
import { computeFindCommasOutput, readFindCommasOptions } from "../io"
import { applySharedPitchCommandSetup } from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()
const commaAnalyses: CommaAnalysis[] = computeCommaAnalyses(findCommasSettings)
const maybeSymbolClassIds: Array<Maybe<Id<SymbolClass>>> = commaAnalyses.map(computeMaybeSymbolClassId)
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeSymbolClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.ALL)
