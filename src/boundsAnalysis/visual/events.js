const fs = require("fs")
const {OUTPUT} = require("./constants")
const {LEVEL_CENTERS, LEVEL_BOTTOMS} = require("./levelHeights")
const {RANK_FILLS} = require("./colors")
const {computeX} = require("./x")

const visualizeEvents = events => {
    events.forEach((event, index) => {
        const {level, position} = event
        if (level === "INSANE") {
            return
        }

        const {level: nextLevel, position: nextPosition, rank: nextRank} = events[index + 1] || {}

        const stroke = RANK_FILLS[nextRank]

        const x1 = computeX(position)
        const x2 = computeX(nextPosition)

        const y2 = LEVEL_CENTERS[nextLevel]
        const y1 = level ? LEVEL_CENTERS[level] : LEVEL_BOTTOMS[nextLevel]

        fs.appendFileSync(OUTPUT, `  <line stroke="${stroke}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`)
    })

}

module.exports = {
    visualizeEvents,
}
