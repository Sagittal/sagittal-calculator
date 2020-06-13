const {MAXIMUM_POSITION} = require("../data/intervals")
const {computeX} = require("./x")
const {LEVELS} = require("../data/levels")
const {LEVEL_BOTTOMS} = require("./levelHeights")

const visualizeLevels = () => {
    const levelLines = []

    LEVELS.forEach(level => {
        const x1 = computeX(0)
        const x2 = computeX(MAXIMUM_POSITION)
        const y = LEVEL_BOTTOMS[level]

        levelLines.push(`  <line stroke="black" x1="${x1}" x2="${x2}" y1="${y}" y2="${y}"/>\n`)
    })

    return levelLines
}

module.exports = {
    visualizeLevels,
}
