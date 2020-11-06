import {Combination, LogTarget, round, saveLog, Score, stringify, Two3FreeClass} from "../../../../general"
import {LfcUnpopularityEstimate, Submetric} from "../types"
import {ANTIVOTES_PRECISION} from "./constants"
import {computeWeightedSubmetricAntivotes} from "./weightedSubmetricAntivotes"

const computeAntivotes = (
    two3FreeClass: Two3FreeClass,
    submetrics: Combination<Submetric>,
): Score<LfcUnpopularityEstimate> =>
    round(
        submetrics.reduce(
            (totalAntivotes: Score<LfcUnpopularityEstimate>, submetric: Submetric): Score<LfcUnpopularityEstimate> => {
                const weightedSubmetricAntivotes: Score<LfcUnpopularityEstimate> =
                    computeWeightedSubmetricAntivotes(two3FreeClass, submetric)

                saveLog(`${stringify(submetric)}: ${weightedSubmetricAntivotes}`, LogTarget.DETAILS)

                return totalAntivotes + weightedSubmetricAntivotes as Score<LfcUnpopularityEstimate>
            },
            0 as Score<LfcUnpopularityEstimate>,
        ),
        ANTIVOTES_PRECISION,
    )

export {
    computeAntivotes,
}
