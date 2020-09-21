import { Integer, Rank } from "../../../general"
import { BoundType } from "../../../sagittal"
import { RANKS } from "../ranks"
import { BoundEventAnalysis } from "./events"

const computeRank = (boundEventAnalyses: BoundEventAnalysis[]): Integer & Rank<BoundType> =>
    boundEventAnalyses.reduce(
        (rank: Integer & Rank<BoundType>, boundEventAnalysis: BoundEventAnalysis): Integer & Rank<BoundType> =>
            rank > boundEventAnalysis.rank ? rank : boundEventAnalysis.rank,
        RANKS[ BoundType.INA_MIDPOINT ],
    )

export {
    computeRank,
}
