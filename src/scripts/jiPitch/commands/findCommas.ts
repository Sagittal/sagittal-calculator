import {Id, Io, LogTarget, Maybe, saveLog} from "../../../general"
import {CommaAnalysis, CommaClass, computeMaybeCommaClassId} from "../../../sagittal"
import {computeCommaAnalyses, parseFindCommasSettings} from "../findCommas"
import {computeFindCommasOutput, readFindCommasOptions} from "../io"
import {applySharedPitchCommandSetup} from "./shared"

readFindCommasOptions()

applySharedPitchCommandSetup()

const findCommasSettings = parseFindCommasSettings()
const commaAnalyses: CommaAnalysis[] = computeCommaAnalyses(findCommasSettings)
const maybeCommaClassIds: Array<Maybe<Id<CommaClass>>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<Id<CommaClass>> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.FINAL)
