import { COMMA_POPULARITIES, Popularity, rank, Ranked, RankStrategy } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"

const fractionalizeRanks = () => {
    // this script is only kept for historical reasons
    // when it used the existing rank which wasn't fractional
    // and created the fractional rank "rank" which we use today
    const rankedPopularities: Array<Ranked<Popularity>> = rank(COMMA_POPULARITIES, {
        by: "nonFractionalRank",
        strategy: RankStrategy.FRACTIONAL,
    })

    saveDebugMessage(JSON.stringify(rankedPopularities, null, 4), DebugTarget.ALL)
}

fractionalizeRanks()
