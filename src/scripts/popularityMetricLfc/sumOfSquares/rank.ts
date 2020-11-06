import {KeyPath, rank, Ranked, RankStrategy, sort} from "../../../general"
import {LfcUnpopularityEstimate} from "./types"

const addRankToUnpopularities = (unpopularities: LfcUnpopularityEstimate[]): Array<Ranked<LfcUnpopularityEstimate>> => {
    const rankedUnpopularities: Array<Ranked<LfcUnpopularityEstimate>> = rank(unpopularities, {
        by: "antivotes" as KeyPath,
        strategy: RankStrategy.FRACTIONAL,
    })

    return sort(rankedUnpopularities, {by: "index" as KeyPath})
}

export {
    addRankToUnpopularities,
}
