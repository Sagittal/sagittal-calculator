import { CentsPosition, Io, Px } from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS } from "../../histories"
import { SIZE_COLOR } from "./colors"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_TOPS } from "./levelHeights"
import { DASH_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeSizeCategoryBounds = (): Io[] => {
    // Same at every JI notation level
    const sizeCategoryBounds = JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS[ JiNotationLevel.MEDIUM ]

    const sizeCategoryBoundElements: Io[] = []

    sizeCategoryBounds.forEach((sizeCategoryBound: CentsPosition): void => {
        const { name, cents } = sizeCategoryBound

        const topEdgeY: Px = JI_NOTATION_LEVEL_TOPS[ JiNotationLevel.INSANE ]
        const bottomEdgeY: Px = JI_NOTATION_LEVEL_BOTTOMS[ JiNotationLevel.MEDIUM ]
        const centerY: Px = (topEdgeY + bottomEdgeY) / 2 as Px

        const positionX = computeX(cents)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n` as Io)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
    })

    return sizeCategoryBoundElements
}

export {
    visualizeSizeCategoryBounds,
}
