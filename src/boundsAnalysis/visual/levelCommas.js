const {LEVELS_COMMAS} = require("../data/levelsCommas")
const {LEVEL_CENTERS} = require("./levelHeights")
const {COMMA_OFFSET, DOT_SIZE} = require("./size")
const {computeX} = require("./x")

const visualizeLevelCommas = () => {
    const levelCommaLines = []

    Object.entries(LEVELS_COMMAS).forEach(([level, levelsCommas]) => {
        if (level === "INSANE") return

        const y = LEVEL_CENTERS[level]
        const dotY = y - COMMA_OFFSET
        const symbolY = y + COMMA_OFFSET // TODO: perhaps I should be more consistent about naming these not with respect to their svg names but their meaning

        levelsCommas.forEach(levelComma => {
            const {position, unicode} = levelComma

            const cx = computeX(position)

            levelCommaLines.push(`  <circle stroke="black" cx="${cx}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            levelCommaLines.push(`  <text text-anchor="middle" x="${cx}" y="${symbolY}" font-size="40px" font-family="Bravura">${unicode}</text>\n`)
        })
    })

    return levelCommaLines
}

module.exports = {
    visualizeLevelCommas,
}
