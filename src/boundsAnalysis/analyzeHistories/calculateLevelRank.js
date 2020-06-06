const {RANKS} = require("../data/ranks")

const calculateLevelRank = (type, withinHalfLevelEda) => {
    if (["EDA", "MEAN", "SIZE"].includes(type)) {
        const maybeInferiorPrefix = withinHalfLevelEda ? "" : "INFERIOR_"

        return RANKS[`${maybeInferiorPrefix}${type}`]
    }

    return RANKS[type]
}

module.exports = {
    calculateLevelRank,
}
