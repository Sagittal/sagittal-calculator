import { Combination } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeSumOfSquaresForSubmetrics, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup, load } from "./shared"

applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets: [DebugTarget.UNPOPULARITIES] })

const submetrics = load("submetrics") as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveDebugMessage(`${sumOfSquares}\n${JSON.stringify(submetrics)}`, DebugTarget.ALL)
