import {DEFAULT_PRECISION, Io, Px, round} from "@sagittal/general"
import {JiNotationLevelId, SizeCategoryBound} from "@sagittal/system"
import {JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS} from "../../histories"
import {JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_TOPS} from "./levelHeights"
import {SIZE_CATEGORY_BOUND_HEX_COLOR} from "./rankColors"
import {DASH_SIZE} from "./sizes"
import {computeX} from "./x"

const visualizeSizeCategoryBounds = (): Io[] => {
    // Same at every JI notation level
    const sizeCategoryBounds = JI_NOTATION_LEVELS_SIZE_CATEGORY_BOUNDS[JiNotationLevelId.MEDIUM]

    const sizeCategoryBoundElements: Io[] = []

    sizeCategoryBounds.forEach(({name, pitch}: SizeCategoryBound): void => {
        const topEdgeY: Px = round(JI_NOTATION_LEVEL_TOPS[JiNotationLevelId.INSANE], DEFAULT_PRECISION)
        const bottomEdgeY: Px = round(JI_NOTATION_LEVEL_BOTTOMS[JiNotationLevelId.MEDIUM], DEFAULT_PRECISION)
        const centerY: Px = round((topEdgeY + bottomEdgeY) / 2 as Px, DEFAULT_PRECISION)

        const positionX = computeX(pitch)

        sizeCategoryBoundElements.push(`  <line stroke-dasharray="${DASH_SIZE}" stroke="${SIZE_CATEGORY_BOUND_HEX_COLOR}" x1="${positionX}" x2="${positionX}" y1="${topEdgeY}" y2="${bottomEdgeY}" />\n` as Io)
        sizeCategoryBoundElements.push(`  <text stroke="white" stroke-width="0.45em" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
        sizeCategoryBoundElements.push(`  <text fill="${SIZE_CATEGORY_BOUND_HEX_COLOR}" text-anchor="middle" xml:space="preserve" x="${positionX}" y="${centerY}" font-size="10px" font-family="Helvetica">${name}</text>` as Io)
    })

    return sizeCategoryBoundElements
}

export {
    visualizeSizeCategoryBounds,
}
