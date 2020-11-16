import {Combination, Grade, LogTarget, round, saveLog, stringify, Two3FreeClass} from "../../../../general"
import {LfcUnpopularityEstimate, Submetric} from "../types"
import {ANTIVOTES_PRECISION} from "./constants"
import {computeWeightedSubmetricAntivotes} from "./weightedSubmetricAntivotes"

const computeAntivotes = (
    two3FreeClass: Two3FreeClass,
    submetrics: Combination<Submetric>,
): Grade<LfcUnpopularityEstimate> =>
    round(
        submetrics.reduce(
            (totalAntivotes: Grade<LfcUnpopularityEstimate>, submetric: Submetric): Grade<LfcUnpopularityEstimate> => {
                const weightedSubmetricAntivotes: Grade<LfcUnpopularityEstimate> =
                    computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

                saveLog(`${stringify(submetric)}: ${weightedSubmetricAntivotes}`, LogTarget.DETAILS)

                return totalAntivotes + weightedSubmetricAntivotes as Grade<LfcUnpopularityEstimate>
            },
            0 as Grade<LfcUnpopularityEstimate>,
        ),
        ANTIVOTES_PRECISION,
    )

export {
    computeAntivotes,
}
