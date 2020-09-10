import {
    Combination,
    Filename,
    formatRatio,
    Io,
    LogTarget,
    saveLog,
    stringify,
    TwoThreeFreeClassAsRatio,
} from "../../../general"
import { LFC_SCRIPT_GROUP } from "../constants"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.ANTIVOTES] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const twoThreeFreeClassAsRatio: TwoThreeFreeClassAsRatio = [11, 7] as TwoThreeFreeClassAsRatio

const antivotes = computeAntivotes(twoThreeFreeClassAsRatio, submetrics)

saveLog(
    `${formatRatio(twoThreeFreeClassAsRatio)}\n${stringify(submetrics)}\n${antivotes}` as Io,
    LogTarget.ANTIVOTES,
    LFC_SCRIPT_GROUP,
)
