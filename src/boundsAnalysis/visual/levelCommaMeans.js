const {LEVELS_COMMA_MEANS} = require("../data/snappablePositions")
const {DASH_SIZE, HALF_TICK_SIZE, TEXT_OFFSET} = require("./size")
const {MEAN_COLOR} = require("./colors")
const {LEVEL_CENTERS} = require("./levelHeights")
const {unicodeFromAscii} = require("../data/asciiUnicode")
const {computeX} = require("./x")

const visualizeLevelCommaMeans = () => {
    const levelCommaMeanLines = []

    Object.entries(LEVELS_COMMA_MEANS).forEach(([level, levelCommaMeans]) => {
        if (level === "INSANE") return

        const y = LEVEL_CENTERS[level]
        const y1 = y - HALF_TICK_SIZE
        const y2 = y + HALF_TICK_SIZE
        const textY = y2 + TEXT_OFFSET

        levelCommaMeans.forEach(levelCommaMean => {
            const {position, name} = levelCommaMean

            const formattedName = name.split(" ").map(symbolAscii => unicodeFromAscii(symbolAscii)).join("   ")
            const x = computeX(position)

            levelCommaMeanLines.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${MEAN_COLOR}" x1="${x}" x2="${x}" y1="${y1}" y2="${y2}"/>`)
            levelCommaMeanLines.push(`  <text fill="${MEAN_COLOR}" text-anchor="middle" xml:space="preserve" x="${x}" y="${textY}" font-size="10px" font-family="Bravura">${formattedName}</text>\n`)
        })
    })

    return levelCommaMeanLines
}

module.exports = {
    visualizeLevelCommaMeans,
}
