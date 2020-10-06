import { ACCURACY_THRESHOLD, computeCentsFromPitch, Io, Px, round } from "../../../../general"
import { JiNotationLevel, SizeCategoryBound } from "../../../../sagittal"
import { JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS } from "../../histories"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_TOPS } from "./levelHeights"
import { SIZE_CATEGORY_BOUND_HEX_COLOR } from "./rankColors"
import { DASH_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeSizeCategoryBounds = (): Io[] => {
    // Same at every JI notation level
    const sizeCategoryBounds = JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS[ JiNotationLevel.MEDIUM ]

    const sizeCategoryBoundElements: Io[] = []

    sizeCategoryBounds.forEach((sizeCategoryBound: SizeCategoryBound): void => {
        const { name } = sizeCategoryBound
        const cents = computeCentsFromPitch(sizeCategoryBound.pitch)

        const topEdgeY: Px = round(JI_NOTATION_LEVEL_TOPS[ JiNotationLevel.INSANE ], ACCURACY_THRESHOLD)
        const bottomEdgeY: Px = round(JI_NOTATION_LEVEL_BOTTOMS[ JiNotationLevel.MEDIUM ], ACCURACY_THRESHOLD)
        const centerY: Px = round((topEdgeY + bottomEdgeY) / 2 as Px, ACCURACY_THRESHOLD)

        const positionX = computeX(cents)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_CATEGORY_BOUND_HEX_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n` as Io)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_CATEGORY_BOUND_HEX_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
    })

    return sizeCategoryBoundElements
}

export {
    visualizeSizeCategoryBounds,
}
