import {
    COMMA_POPULARITIES,
    computeKeyPath,
    LogTarget,
    rank,
    Ranked,
    RankStrategy,
    saveLog,
    ScalaPopularityStat,
    stringify,
} from "../../../../general"

const fractionalizeRanks = (): void => {
    // This script is only kept for historical reasons
    // When it was needed to replace the existing rank which wasn't fractional
    const rankedPopularities: Array<Ranked<ScalaPopularityStat>> = rank(COMMA_POPULARITIES, {
        by: computeKeyPath("votes"),
        strategy: RankStrategy.FRACTIONAL,
        descending: true,
    })

    saveLog(stringify(rankedPopularities, {multiline: true}), LogTarget.FINAL)
}

fractionalizeRanks()
