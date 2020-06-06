const RANKS = {
    EDA: 1,
    MEAN: 2,
    SIZE: 3,
    INFERIOR_EDA: 4,
    INFERIOR_MEAN: 5,
    INFERIOR_SIZE: 6,
    OVERRIDE: 7,
    IMPOSSIBLE: 8,
}

const calculateRank = (type, withinHalfLevelEda) => {
    if (["EDA", "MEAN", "SIZE"].includes(type)) {
        const maybeInferiorPrefix = withinHalfLevelEda ? "" : "INFERIOR_"

        return RANKS[`${maybeInferiorPrefix}${type}`]
    }

    return RANKS[type]
}

module.exports = {
    RANKS,
    calculateRank,
}
