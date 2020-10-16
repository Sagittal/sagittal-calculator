import { Combination, LogTarget, round, saveLog, stringify, Two3FreeClass } from "../../../../general"
import { Antivotes, Submetric } from "../types"
import { ANTIVOTES_PRECISION } from "./constants"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (
    two3FreeClass: Two3FreeClass,
    submetrics: Combination<Submetric>,
): Antivotes =>
    round(
        submetrics.reduce(
            (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
                const weightedSubmetricAntivotes: Antivotes =
                    computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

                saveLog(`${stringify(submetric)}: ${weightedSubmetricAntivotes}`, LogTarget.DETAILS)

                return totalAntivotes + weightedSubmetricAntivotes as Antivotes
            },
            0 as Antivotes,
        ),
        ANTIVOTES_PRECISION,
    )

export {
    computeAntivotes,
}
