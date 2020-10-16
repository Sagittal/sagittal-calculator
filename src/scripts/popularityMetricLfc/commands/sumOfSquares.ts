import { Combination, Filename, LogTarget, saveLog, stringify } from "../../../general"
import { computeSumOfSquaresForSubmetrics, Submetric } from "../sumOfSquares"
import { applySharedPopularityMetricLfcCommandSetup, load } from "./shared"

applySharedPopularityMetricLfcCommandSetup({ defaultLogTargets: [LogTarget.DETAILS] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveLog(`${sumOfSquares}\n${stringify(submetrics)}`, LogTarget.FINAL)
