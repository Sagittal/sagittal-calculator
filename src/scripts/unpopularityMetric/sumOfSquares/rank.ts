import { fractionallyRank, Ranked, sort } from "../../../general"
import { Unpopularity } from "./types"

const addRankToUnpopularities = (unpopularities: Unpopularity[]): Array<Ranked<Unpopularity>> => {
    const rankedUnpopularities: Array<Ranked<Unpopularity>> = fractionallyRank(unpopularities, "antivotes")

    return sort(rankedUnpopularities, {by: "index"})
}

export {
    addRankToUnpopularities,
}
