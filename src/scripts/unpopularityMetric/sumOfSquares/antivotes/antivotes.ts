import { Combination, Ratio } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { Antivotes, Submetric } from "../types"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Combination<Submetric>): Antivotes =>
    submetrics.reduce(
        (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
            const weightedSubmetricAntivotes: Antivotes = computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

            saveDebugMessage(`${JSON.stringify(submetric)}: ${weightedSubmetricAntivotes}`, DebugTarget.SUBMETRIC_ANTIVOTES)

            return totalAntivotes + weightedSubmetricAntivotes as Antivotes
        },
        0 as Antivotes,
    )

export {
    computeAntivotes,
}
