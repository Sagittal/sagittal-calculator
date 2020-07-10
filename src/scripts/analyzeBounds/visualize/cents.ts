import {MAXIMUM_POSITION} from "../../../notations/ji/intervals"
import {Y_SCALE, MARGIN} from "./sizes"
import {computeX} from "./x"

const visualizeCents = () => {
    const cents = [...Array(Math.ceil(MAXIMUM_POSITION)).keys()]

    const centElements = []
    const centsY = Y_SCALE * MARGIN

    cents.forEach(cent => {
        const positionX = computeX(cent)

        centElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n`)
        centElements.push(`  <text fill="black" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n`)
    })

    return centElements
}

export {
    visualizeCents,
}
