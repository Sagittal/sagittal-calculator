import {
    COMMA_POPULARITIES,
    IO,
    LogTarget,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    saveLog,
    stringify,
} from "../../../../general"
import { LFC } from "../../constants"

const fractionalizeRanks = () => {
    // this script is only kept for historical reasons
    // when it was needed to replace the existing rank which wasn't fractional
    const rankedPopularities: Array<Ranked<Popularity>> = rank(COMMA_POPULARITIES, {
        by: "votes",
        strategy: RankStrategy.FRACTIONAL,
        descending: true,
    })

    saveLog(stringify(rankedPopularities, { multiline: true }) as IO, LogTarget.ALL, LFC)
}

fractionalizeRanks()
