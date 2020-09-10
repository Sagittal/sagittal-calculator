import { Combination, Io, LogTarget, round, saveLog, stringify, TwoThreeFreeClassAsRatio } from "../../../../general"
import { LFC_SCRIPT_GROUP } from "../../constants"
import { Antivotes, Submetric } from "../types"
import { ANTIVOTES_PRECISION } from "./constants"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (
    twoThreeFreeClassAsRatio: TwoThreeFreeClassAsRatio,
    submetrics: Combination<Submetric>,
): Antivotes =>
    round(
        submetrics.reduce(
            (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
                const weightedSubmetricAntivotes: Antivotes =
                    computeWeightedSubmetricAntivotes(twoThreeFreeClassAsRatio, submetric)

                saveLog(
                    `${stringify(submetric)}: ${weightedSubmetricAntivotes}` as Io,
                    LogTarget.ANTIVOTES,
                    LFC_SCRIPT_GROUP,
                )

                return totalAntivotes + weightedSubmetricAntivotes as Antivotes
            },
            0 as Antivotes,
        ),
        ANTIVOTES_PRECISION,
    )

export {
    computeAntivotes,
}
