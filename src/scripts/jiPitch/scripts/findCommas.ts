import {Io, LogTarget, Maybe, saveLog} from "../../../general"
import {CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {computeCommaAnalyses, computeFindCommasSettings} from "../findCommas"
import {computeFindCommasOutput} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()

const findCommasSettings = computeFindCommasSettings()
const commaAnalyses: CommaAnalysis[] = computeCommaAnalyses(findCommasSettings)
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasSettings)
saveLog(findCommasOutput, LogTarget.FINAL)
