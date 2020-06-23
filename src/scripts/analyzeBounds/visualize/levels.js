const {MAXIMUM_POSITION} = require("../../../notations/ji/intervals")
const {computeX} = require("./x")
const {LEVELS} = require("../../../notations/ji/levels")
const {LEVEL_BOTTOMS} = require("./levelHeights")

const visualizeLevels = () => {
    const levelElements = []

    LEVELS.forEach(level => {
        const leftEdgeX = computeX(0)
        const rightEdgeX = computeX(MAXIMUM_POSITION)
        const levelY = LEVEL_BOTTOMS[level]

        levelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${levelY}" y2="${levelY}"/>\n`)
    })

    return levelElements
}

module.exports = {
    visualizeLevels,
}
