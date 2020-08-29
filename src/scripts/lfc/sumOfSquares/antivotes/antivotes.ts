import { Combination, IO, LogTarget, Ratio, round, saveLog, stringify } from "../../../../general"
import { LFC } from "../../constants"
import { Antivotes, Submetric } from "../types"
import { ANTIVOTES_PRECISION } from "./constants"
import { computeWeightedSubmetricAntivotes } from "./weightedSubmetricAntivotes"

const computeAntivotes = (fiveRoughRatio: Ratio, submetrics: Combination<Submetric>): Antivotes =>
    round(
        submetrics.reduce(
            (totalAntivotes: Antivotes, submetric: Submetric): Antivotes => {
                const weightedSubmetricAntivotes: Antivotes =
                    computeWeightedSubmetricAntivotes(fiveRoughRatio, submetric)

                saveLog(
                    `${stringify(submetric)}: ${weightedSubmetricAntivotes}` as IO,
                    LogTarget.ANTIVOTES,
                    LFC,
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
