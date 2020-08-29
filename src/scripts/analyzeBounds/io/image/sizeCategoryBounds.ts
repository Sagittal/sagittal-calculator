import { IO, Px } from "../../../../general"
import { Level } from "../../../../sagittal"
import { LEVELS_SIZE_CATEGORY_BOUNDS } from "../../plot"
import { SIZE_COLOR } from "./colors"
import { LEVEL_BOTTOMS, LEVEL_TOPS } from "./levelHeights"
import { DASH_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeSizeCategoryBounds = () => {
    const sizeCategoryBounds = LEVELS_SIZE_CATEGORY_BOUNDS[ Level.MEDIUM ] // Same at every level

    const sizeCategoryBoundElements: IO[] = []

    sizeCategoryBounds.forEach(sizeCategoryBound => {
        const { name, cents } = sizeCategoryBound

        const topEdgeY: Px = LEVEL_TOPS[ Level.INSANE ]
        const bottomEdgeY: Px = LEVEL_BOTTOMS[ Level.MEDIUM ]
        const centerY: Px = (topEdgeY + bottomEdgeY) / 2 as Px

        const positionX = computeX(cents)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n` as IO)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as IO)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as IO)
    })

    return sizeCategoryBoundElements
}

export {
    visualizeSizeCategoryBounds,
}
