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

        const {level: nextLevel, position: nextPosition, rank: nextRank, sleda: nextSleda} = events[index + 1] || {}

        const stroke = RANK_FILLS[nextRank]

        const x1 = computeX(position)
        const x2 = computeX(nextPosition)

        const y2 = LEVEL_CENTERS[nextLevel]
        const y1 = level ? LEVEL_CENTERS[level] : LEVEL_BOTTOMS[nextLevel]

        fs.appendFileSync(OUTPUT, `  <line stroke="${stroke}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" />`)

        const textX = (x1+x2)/2
        const textY = (y1+y2)/2
        const rise = y2 - y1
        const run = x2 - x1
        const slope = rise/run
        const angle = run === 0 ?
            rise > 0 ? 90 : 270 :
            Math.sin(slope) * (180/Math.PI)
        fs.appendFileSync(OUTPUT, `  <text transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" fill="red" x="${textX}" y="${textY}">${nextSleda.toPrecision(5)}</text>`)
    })
}

module.exports = {
    visualizeEvents,
}
