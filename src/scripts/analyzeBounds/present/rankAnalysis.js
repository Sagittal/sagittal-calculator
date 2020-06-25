const {COLORS} = require("./colors")
const {FORMATTED_RANK_NAMES} = require("./rank")
const {rankBoundIndices} = require("../ranks")

const presentRankAnalysis = (rankCount, rankIndex) =>
    `${FORMATTED_RANK_NAMES[rankIndex].trim()} snap event was worst-ranked snap event:\n\ttotal: ${rankCount} bounds\n\tbounds: ${rankBoundIndices[rankIndex].join(", ")}`[COLORS[rankIndex]]

module.exports = {
    presentRankAnalysis,
}
