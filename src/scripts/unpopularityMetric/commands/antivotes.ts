import { program } from "commander"
import { Combination, presentRatio, Ratio } from "../../../general"
import { DebugTarget, saveDebugMessage } from "../debug"
import { computeAntivotes, Parameter, ParameterValue, Submetric } from "../sumOfSquares"
import { applySharedUnpopularityMetricCommandSetup } from "./shared/shared"
import { load } from "./shared/load"

applySharedUnpopularityMetricCommandSetup({ defaultDebugTargets: [DebugTarget.ANTIVOTES] })

program.parse(process.argv)

const submetrics = load("submetrics") as Combination<Submetric>

const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics)

saveDebugMessage(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`, DebugTarget.ANTIVOTES)
