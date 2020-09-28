import {
    Combination,
    Filename,
    format23FreeClass,
    Io,
    LogTarget,
    saveLog,
    stringify,
    TwoThreeFreeClass,
} from "../../../general"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup, load } from "./shared"

applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets: [LogTarget.DETAILS] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const twoThreeFreeClass: TwoThreeFreeClass = { quotient: [11, 7] } as TwoThreeFreeClass

const antivotes = computeAntivotes(twoThreeFreeClass, submetrics)

saveLog(`${format23FreeClass(twoThreeFreeClass)}\n${stringify(submetrics)}\n${antivotes}` as Io, LogTarget.FINAL)
