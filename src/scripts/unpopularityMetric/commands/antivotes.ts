import { program } from "commander"
import { Combination, Filename, formatRatio, IO, Ratio } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeAntivotes, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "./shared"

applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets: [DebugTarget.ANTIVOTES] })

program.parse(process.argv)

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics)

saveDebugMessage(
    `${formatRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}` as IO,
    DebugTarget.ANTIVOTES,
)
