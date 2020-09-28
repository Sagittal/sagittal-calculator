import { IntegerDecimal, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { RANKS } from "../ranks"
import { BoundEventAnalysis } from "./events"

const computeRank = (boundEventAnalyses: BoundEventAnalysis[]): IntegerDecimal & Rank<BoundType> =>
    boundEventAnalyses.reduce(
        (
            rank: IntegerDecimal & Rank<BoundType>,
            boundEventAnalysis: BoundEventAnalysis,
        ): IntegerDecimal & Rank<BoundType> =>
            rank > boundEventAnalysis.rank ? rank : boundEventAnalysis.rank,
        RANKS[ BoundType.INA_MIDPOINT ],
    )

export {
    computeRank,
}
