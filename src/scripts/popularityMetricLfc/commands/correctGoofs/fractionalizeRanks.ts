import {
    COMMA_POPULARITIES,
    Io,
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
    // this script is only kept for historical reasons
    // when it was needed to replace the existing rank which wasn't fractional
    const rankedPopularities: Array<Ranked<Popularity>> = rank(COMMA_POPULARITIES, {
        by: "votes" as KeyPath,
        strategy: RankStrategy.FRACTIONAL,
        descending: true,
    })

    saveLog(stringify(rankedPopularities, { multiline: true }) as Io, LogTarget.FINAL)
}

fractionalizeRanks()
