import { Decimal, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { RANKS } from "../ranks"
import { BoundClassEventAnalysis } from "./events"

const computeRank = (
    boundClassEventAnalyses: BoundClassEventAnalysis[],
): Decimal<{ integer: true }> & Rank<BoundType> =>
    boundClassEventAnalyses.reduce(
        (
            rank: Decimal<{ integer: true }> & Rank<BoundType>,
            boundClassEventAnalysis: BoundClassEventAnalysis,
        ): Decimal<{ integer: true }> & Rank<BoundType> =>
            rank > boundClassEventAnalysis.rank ? rank : boundClassEventAnalysis.rank,
        RANKS[ BoundType.INA_MIDPOINT ],
    )

export {
    computeRank,
}
