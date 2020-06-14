const {LEVELS_COMMAS} = require("../data/levelsCommas")
const {LEVEL_CENTERS} = require("./levelHeights")
const {COMMA_OFFSET, DOT_SIZE} = require("./size")
const {computeX} = require("./x")

const visualizeLevelCommas = () => {
    const levelCommaElements = []

    Object.entries(LEVELS_COMMAS).forEach(([level, levelsCommas]) => {
        if (level === "INSANE") return

        const centerY = LEVEL_CENTERS[level]
        const dotY = centerY - COMMA_OFFSET
        const symbolY = centerY + COMMA_OFFSET

        levelsCommas.forEach(levelComma => {
            const {position, unicode} = levelComma

            const positionX = computeX(position)

            levelCommaElements.push(`  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            levelCommaElements.push(`  <text text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${unicode}</text>\n`)
        })
    })

    return levelCommaElements
}

module.exports = {
    visualizeLevelCommas,
}
