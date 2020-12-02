import {Io, LogTarget, Maybe, saveLog} from "../../../general"
import {CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeFindCommasOptions, findCommaAnalyses} from "../findCommas"
import {computeFindCommasOutput} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()

const findCommasOptions = computeFindCommasOptions()
const commaAnalyses: CommaAnalysis[] = findCommaAnalyses(findCommasOptions)
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)
saveLog(findCommasOutput, LogTarget.FINAL)
