const {MAXIMUM_POSITION} = require("../data/intervals")
const {Y_SCALE, MARGIN} = require("./sizes")
const {computeX} = require("./x")

const visualizeCents = () => {
    const cents = [...Array(Math.ceil(MAXIMUM_POSITION)).keys()]

    const centElements = []
    const centsY = Y_SCALE * MARGIN

    cents.forEach(cent => {
        const positionX = computeX(cent)

        centElements.push(`  <text fill="black" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n`)
    })

    return centElements
}

module.exports = {
    visualizeCents,
}
