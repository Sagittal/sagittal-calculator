import { Combination, Filename, formatRatio, Io, LogTarget, saveLog, stringify } from "../../../general"
import { TwoThreeFreeClass } from "../../../sagittal"
import { LFC_SCRIPT_GROUP } from "../constants"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.ANTIVOTES] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const twoThreeFreeClass: TwoThreeFreeClass = [11, 7] as TwoThreeFreeClass

const antivotes = computeAntivotes(twoThreeFreeClass, submetrics)

saveLog(
    `${formatRatio(twoThreeFreeClass)}\n${stringify(submetrics)}\n${antivotes}` as Io,
    LogTarget.ANTIVOTES,
    LFC_SCRIPT_GROUP,
)
