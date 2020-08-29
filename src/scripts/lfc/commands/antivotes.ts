import { Combination, Filename, formatRatio, IO, LogTarget, Ratio, saveLog } from "../../../general"
import { LFC } from "../constants"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.ANTIVOTES] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics)

saveLog(
    `${formatRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}` as IO,
    LogTarget.ANTIVOTES,
    LFC,
)
