import { COMMA_POPULARITIES, IO, Popularity, rank, Ranked, RankStrategy } from "../../../../general"
import { DebugTarget, saveDebugMessage } from "../../debug"

const fractionalizeRanks = () => {
    // this script is only kept for historical reasons
    // when it was needed to replace the existing rank which wasn't fractional
    const rankedPopularities: Array<Ranked<Popularity>> = rank(COMMA_POPULARITIES, {
        by: "votes",
        strategy: RankStrategy.FRACTIONAL,
        descending: true,
    })

    saveDebugMessage(JSON.stringify(rankedPopularities, undefined, 4) as IO, DebugTarget.ALL)
}

fractionalizeRanks()
