const {LEVELS_COMMAS} = require("../../../notations/ji/levelsCommas")
const {LEVEL_CENTERS} = require("./levelHeights")
const {COMMA_OFFSET, DOT_SIZE, MINA_OFFSET} = require("./sizes")
const {computeX} = require("./x")
const {presentMina} = require("../present/mina")

const visualizeLevelCommas = () => {
    const levelCommaElements = []

    Object.entries(LEVELS_COMMAS).forEach(([level, levelsCommas]) => {
        if (level === "INSANE") return

        const centerY = LEVEL_CENTERS[level]
        const dotY = centerY - COMMA_OFFSET
        const symbolY = centerY + COMMA_OFFSET

        levelsCommas.forEach(levelComma => {
            const {position, ascii, unicode, mina} = levelComma

            const positionX = computeX(position)

            levelCommaElements.push(`  <circle stroke="black" cx="${positionX}" cy="${dotY}" r="${DOT_SIZE}" />\n`)
            levelCommaElements.push(`  <text fill="white" text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="10px" font-family="Helvetica">${ascii}</text>\n`)
            levelCommaElements.push(`  <text text-anchor="middle" x="${positionX}" y="${symbolY}" font-size="40px" font-family="Bravura">${unicode}</text>\n`)

            if (level === "EXTREME") {
                const minaY = symbolY - MINA_OFFSET
                levelCommaElements.push(`  <text text-anchor="middle" x="${positionX}" y="${minaY}" font-size="10px" font-family="Bravura">${presentMina(mina)}</text>\n`)
            }
        })
    })

    return levelCommaElements
}

module.exports = {
    visualizeLevelCommas,
}
