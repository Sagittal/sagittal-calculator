const fs = require("fs")
const {LEVELS_COMMAS} = require("../data/levelsCommas")
const {LEVELS} = require("../data/levels")
const {LEVEL_CENTERS} = require("./levelHeights")
const {COMMA_OFFSET, OUTPUT, EXCEPT_INSANE_LEVEL, DOT_SIZE} = require("./constants")
const {computeX} = require("./x")

const visualizeLevelCommas = () => {
    Object.entries(LEVELS_COMMAS).slice(0, LEVELS.length - EXCEPT_INSANE_LEVEL).forEach(([level, levelsCommas]) => {
        const y = LEVEL_CENTERS[level]
        const dotY = y - COMMA_OFFSET
        const symbolY = y + COMMA_OFFSET // TODO: perhaps I should be more consistent about naming these not with respect to their svg names but their meaning

        levelsCommas.forEach(levelComma => {
            const {position, unicode} = levelComma

            const cx = computeX(position)

            fs.appendFileSync(OUTPUT, `  <circle stroke="black" cx="${cx}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            fs.appendFileSync(OUTPUT, `  <text text-anchor="middle" x="${cx}" y="${symbolY}" font-size="40px" font-family="Bravura">${unicode}</text>\n`)
        })
    })
}

module.exports = {
    visualizeLevelCommas,
}
