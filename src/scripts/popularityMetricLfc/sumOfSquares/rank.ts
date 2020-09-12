import { rank, Ranked, RankStrategy, sort } from "../../../general"
import { Unpopularity } from "./types"

const addRankToUnpopularities = (unpopularities: Unpopularity[]): Array<Ranked<Unpopularity>> => {
    const rankedUnpopularities: Array<Ranked<Unpopularity>> = rank(unpopularities, {
        by: "antivotes",
        strategy: RankStrategy.FRACTIONAL,
    })

    return sort(rankedUnpopularities, { by: "index" })
}

export {
    addRankToUnpopularities,
}
