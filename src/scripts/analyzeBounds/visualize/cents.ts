import { ceil, Cents } from "../../../general"
import { MAX_POSITION } from "../../../notations"
import { MARGIN, Y_SCALE } from "./sizes"
import { computeX } from "./x"

const visualizeCents = () => {
    const cents: Cents[] = [...Array(ceil(MAX_POSITION)).keys()] as Cents[]

    const centElements: string[] = []
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
