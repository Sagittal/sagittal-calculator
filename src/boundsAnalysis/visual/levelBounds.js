const fs = require("fs")
const {LEVELS_BOUNDS} = require("../data/levelsBounds")
const {LEVEL_TOPS, LEVEL_BOTTOMS} = require("./levelHeights")
const {computeX} = require("./x")
const {OUTPUT, DASH_SIZE} = require("./constants")

const visualizeLevelBounds = () => {
    Object.entries(LEVELS_BOUNDS).forEach(([level, levelsBounds]) => {
        levelsBounds.forEach(levelBound => {
            const {position} = levelBound

            const y1 = LEVEL_TOPS[level]
            const y2 = LEVEL_BOTTOMS[level]
            const x = computeX(position)

            fs.appendFileSync(OUTPUT, `  <line stroke-dasharray="${DASH_SIZE}" stroke="black" x1="${x}" x2="${x}" y1="${y1}" y2="${y2}" />\n`)
        })
    })
}

module.exports = {
    visualizeLevelBounds,
}
