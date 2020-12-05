import {Io, LogTarget, Maybe, saveLog} from "@sagittal/general"
import {CommaClassId, computeMaybeCommaClassId, PotentiallyCommaAnalysis} from "@sagittal/system"
import {computePotentiallyCommaAnalyses} from "../analyzeJiPitches"
import {computeJiPitchesOutput} from "../io"
import {applySharedJiPitchScriptSetup} from "./shared"

applySharedJiPitchScriptSetup()

const potentiallyCommaAnalyses = computePotentiallyCommaAnalyses()
const maybeCommaClassIds: Array<Maybe<CommaClassId>> = potentiallyCommaAnalyses
    .map((potentiallyCommaAnalyses: PotentiallyCommaAnalysis): Maybe<CommaClassId> => {
        return computeMaybeCommaClassId(potentiallyCommaAnalyses.pitch)
    })
const commasOutput: Io = computeJiPitchesOutput(potentiallyCommaAnalyses, maybeCommaClassIds)
saveLog(commasOutput, LogTarget.FINAL)
