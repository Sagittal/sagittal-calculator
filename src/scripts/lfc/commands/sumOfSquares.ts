import { Combination, Filename, IO, LogTarget, saveLog } from "../../../general"
import { LFC } from "../constants"
import { computeSumOfSquaresForSubmetrics, Submetric } from "../sumOfSquares"
import { applySharedLfcCommandSetup, load } from "./shared"

applySharedLfcCommandSetup({ defaultLogTargets: [LogTarget.UNPOPULARITIES] })

const submetrics = load("submetrics" as Filename) as Combination<Submetric>

const sumOfSquares = computeSumOfSquaresForSubmetrics(submetrics)

saveLog(`${sumOfSquares}\n${JSON.stringify(submetrics)}` as IO, LogTarget.ALL, LFC)
