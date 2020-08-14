import { Combination } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeSumOfSquaresForSubmetrics, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"
import { load } from "./shared/load"

applySharedUnpopularityMetricCommandSetup(DebugTarget.UNPOPULARITIES)

const submetrics = load("submetrics") as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveDebugMessage(`${sumOfSquares}\n${JSON.stringify(submetrics)}`, DebugTarget.ALL)
