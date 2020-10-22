import {
    COMMA_POPULARITIES,
    KeyPath,
    LogTarget,
    Popularity,
    rank,
    Ranked,
    RankStrategy,
    saveLog,
    stringify,
} from "../../../../general"

const fractionalizeRanks = (): void => {
    // This script is only kept for historical reasons
    // When it was needed to replace the existing rank which wasn't fractional
    const rankedPopularities: Array<Ranked<Popularity>> = rank(COMMA_POPULARITIES, {
        by: "votes" as KeyPath,
        strategy: RankStrategy.FRACTIONAL,
        descending: true,
    })

    saveLog(stringify(rankedPopularities, {multiline: true}), LogTarget.FINAL)
}

fractionalizeRanks()
