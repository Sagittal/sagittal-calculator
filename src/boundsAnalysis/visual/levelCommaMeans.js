const {LEVELS_COMMA_MEANS} = require("../data/snappablePositions")
const {DASH_SIZE, HALF_TICK_SIZE, TEXT_OFFSET} = require("./size")
const {MEAN_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {unicodeFromAscii} = require("../data/asciiUnicode")
const {computeX} = require("./x")

const visualizeLevelCommaMeans = () => {
    const levelCommaMeanElements = []

    Object.entries(LEVELS_COMMA_MEANS).forEach(([level, levelCommaMeans]) => {
        if (level === "INSANE") return

        const centerY = LEVEL_CENTERS[level]
        const topY = centerY - HALF_TICK_SIZE
        const bottomY = centerY + HALF_TICK_SIZE
        const textY = bottomY + TEXT_OFFSET

        levelCommaMeans.forEach(levelCommaMean => {
            const {position, name} = levelCommaMean

            const formattedName = name.split(" ").map(symbolAscii => unicodeFromAscii(symbolAscii)).join("   ")
            const positionX = computeX(position)

            levelCommaMeanElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topY}" y2="${bottomY}"/>`)
            levelCommaMeanElements.push(`  <text fill="${MEAN_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${textY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
        })
    })

    return levelCommaMeanElements
}

module.exports = {
    visualizeLevelCommaMeans,
}
