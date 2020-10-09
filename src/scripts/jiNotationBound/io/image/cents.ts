import {
    ACCURACY_THRESHOLD,
    ceil,
    Cents,
    computeCentsFromPitch,
    computePitchFromCents,
    computePx,
    Io,
    Px,
    round,
} from "../../../../general"
import { MAX_SYMBOL_CLASS_POSITION } from "../../../../sagittal"
import { MARGIN, Y_SCALE } from "./sizes"
import { computeX } from "./x"

const visualizeCents = (): Io[] => {
    const cents: Cents[] = [...Array(ceil(computeCentsFromPitch(MAX_SYMBOL_CLASS_POSITION))).keys()] as Cents[]

    const centElements: Io[] = []
    const centsY: Px = round(computePx(MARGIN, Y_SCALE), ACCURACY_THRESHOLD)

    cents.forEach((cent: Cents): void => {
        const positionX = computeX(computePitchFromCents(cent))

        centElements.push(`  <text stroke="white" stroke-width="0.45em" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n` as Io)
        centElements.push(`  <text fill="black" alignment-baseline="hanging" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centsY}" font-size="10px" font-family="Helvetica">${cent}¢</text>\n` as Io)
    })

    return centElements
}

export {
    visualizeCents,
}
