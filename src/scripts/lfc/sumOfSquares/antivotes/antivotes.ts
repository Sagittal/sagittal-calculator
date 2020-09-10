import { Combination, Io, LogTarget, round, saveLog, stringify } from "../../../../general"
import { TwoThreeFreeClass } from "../../../../sagittal"
import { LFC_SCRIPT_GROUP } from "../../constants"
import { Antivotes, Submetric } from "../types"
import { ANTIVOTES_PRECISION } from "./constants"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (
    twoThreeFreeClass: TwoThreeFreeClass,
    submetrics: Combination<Submetric>,
): Antivotes =>
    round(
        submetrics.reduce(
            (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
                const weightedSubmetricAntivotes: Antivotes =
                    computeWeightedSubmetricAntivotes(twoThreeFreeClass, submetric)

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
