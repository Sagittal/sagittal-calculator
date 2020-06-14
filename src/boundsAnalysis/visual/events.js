const {LEVEL_CENTERS, LEVEL_BOTTOMS} = require("./levelHeights")
const {RANK_FILLS} = require("./colors")
const {computeX} = require("./x")

const visualizeEvents = events => {
    const eventElements = []

    events.forEach((event, index) => {
        const {level, position} = event
        if (level === "INSANE") {
            return
        }

        const {level: nextLevel, position: nextPosition, rank: nextRank, distance: nextDistance} = events[index + 1] || {}

        const stroke = RANK_FILLS[nextRank]

        const positionX = computeX(position)
        const positionY = level ? LEVEL_CENTERS[level] : LEVEL_BOTTOMS[nextLevel]

        const nextPositionX = computeX(nextPosition)
        const nextPositionY = LEVEL_CENTERS[nextLevel]

        eventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />`)

        const textX = (positionX+nextPositionX)/2
        const textY = (positionY+nextPositionY)/2
        const rise = nextPositionY - positionY
        const run = nextPositionX - positionX
        const slope = rise/run
        const angle = run === 0 ?
            rise > 0 ? 90 : 270 :
            Math.sin(slope) * (180/Math.PI)
        eventElements.push(`  <text transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" fill="red" x="${textX}" y="${textY}">${nextDistance.toPrecision(5)}</text>`)
    })

    return eventElements
}

module.exports = {
    visualizeEvents,
}
