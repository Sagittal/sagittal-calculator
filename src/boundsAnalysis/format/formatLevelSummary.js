const {formatRank} = require("./formatRank")
const {formatLevel} = require("./formatLevel")
const {COLORS} = require("./colors")

const formatLevelSummary = (level, levelsBestHistoryRanks) => {
    const statement = [formatLevel(level)]

    Object.entries(levelsBestHistoryRanks).forEach(([rankIndex, count]) => {
        let formattedCount = count.toString()
        while (formattedCount.length < 3) {
            formattedCount = " " + formattedCount
        }

        statement.push(`${formattedCount} ${formatRank(rankIndex)}`[COLORS[rankIndex]])
    })

    return statement.join("\n")
}

module.exports = {
    formatLevelSummary,
}
