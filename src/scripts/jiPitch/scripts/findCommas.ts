import {Io, LogTarget, Maybe, saveLog} from "../../../general"
import {CommaAnalysis, CommaClassId, computeMaybeCommaClassId} from "../../../sagittal"
import {DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY} from "../constants"
import {computeFindCommasOptions, findCommaAnalyses} from "../findCommas"
import {jiPitchScriptGroupSettings} from "../globals"
import {computeFindCommasOutput} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()
jiPitchScriptGroupSettings.sortKey = DEFAULT_ANALYZE_JI_PITCH_AND_FIND_COMMAS_SORT_KEY

const findCommasOptions = computeFindCommasOptions()
const commaAnalyses: CommaAnalysis[] = findCommaAnalyses(findCommasOptions)
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = commaAnalyses
    .map((commaAnalysis: CommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(commaAnalysis.pitch)
    })
const findCommasOutput: Io = computeFindCommasOutput(commaAnalyses, maybeCommaClassIds, findCommasOptions)
saveLog(findCommasOutput, LogTarget.FINAL)
