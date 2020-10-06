import {
    Combination,
    Filename,
    format23FreeClass,
    Io,
    ioSettings,
    LogTarget,
    saveLog,
    stringify,
    Two3FreeClass,
} from "../../../general"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup, load } from "./shared"

applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets: [LogTarget.DETAILS] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const two3FreeClass: Two3FreeClass = { monzo: [0, 0, 0, -1, 1] } as Two3FreeClass

const antivotes = computeAntivotes(two3FreeClass, submetrics)

saveLog(
    `${format23FreeClass(two3FreeClass, ioSettings)}\n${stringify(submetrics)}\n${antivotes}` as Io,
    LogTarget.FINAL,
)
