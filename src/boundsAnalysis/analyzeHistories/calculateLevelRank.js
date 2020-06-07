const {RANKS} = require("../data/ranks")

const calculateLevelRank = (type, withinHalfLevelEda) => {
    if (["EDA", "MEAN", "SIZE"].includes(type)) {
        const maybeNotNearestRankNamePrefix = withinHalfLevelEda ? "" : "NOT_NEAREST_"

        return RANKS[`${maybeNotNearestRankNamePrefix}${type}`]
    }

    return RANKS[type]
}

module.exports = {
    calculateLevelRank,
}
