import {Decimal, Rank} from "@sagittal/general"
import {BoundType} from "@sagittal/system"
import {RANKS} from "../ranks"
import {BoundEventAnalysis} from "./events"

const computeRank = (
    boundEventAnalyses: BoundEventAnalysis[],
): Decimal<{integer: true}> & Rank<BoundType> =>
    boundEventAnalyses.reduce(
        (
            rank: Decimal<{integer: true}> & Rank<BoundType>,
            boundEventAnalysis: BoundEventAnalysis,
        ): Decimal<{integer: true}> & Rank<BoundType> =>
            rank > boundEventAnalysis.rank ? rank : boundEventAnalysis.rank,
        RANKS[BoundType.INA_MIDPOINT],
    )

export {
    computeRank,
}
