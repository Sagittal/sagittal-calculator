import { Combination, Ratio, round } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"
import { Antivotes, Submetric } from "../types"
import { ANTIVOTES_PRECISION } from "./constants"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Combination<Submetric>): Antivotes =>
    round(
        submetrics.reduce(
            (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
                const weightedSubmetricAntivotes: Antivotes =
                    computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

                saveDebugMessage(`${JSON.stringify(submetric)}: ${weightedSubmetricAntivotes}`, DebugTarget.ANTIVOTES)

                return totalAntivotes + weightedSubmetricAntivotes as Antivotes
            },
            0 as Antivotes,
        ),
        ANTIVOTES_PRECISION,
    )

export {
    computeAntivotes,
}
