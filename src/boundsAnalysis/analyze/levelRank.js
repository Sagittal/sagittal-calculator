const {RANKS} = require("../data/ranks")

const computeLevelRank = (type, withinHalfLevelEda) => {
    if (["EDA", "MEAN", "SIZE"].includes(type)) {
        const maybeNotNearestRankNamePrefix = withinHalfLevelEda ? "" : "NOT_NEAREST_"

        return RANKS[`${maybeNotNearestRankNamePrefix}${type}`]
    }

    return RANKS[type]
}

module.exports = {
    computeLevelRank,
}
