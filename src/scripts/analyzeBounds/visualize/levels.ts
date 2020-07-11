import { MAXIMUM_POSITION } from "../../../notations/ji/intervals"
import { computeX } from "./x"
import { LEVELS } from "../../../notations/ji/levels"
import { LEVEL_BOTTOMS } from "./levelHeights"
import { Cents } from "../../../utilities/types"

const visualizeLevels = () => {
    const levelElements: string[] = []

    LEVELS.forEach(level => {
        const leftEdgeX = computeX(0 as Cents)
        const rightEdgeX = computeX(MAXIMUM_POSITION)
        const levelY = LEVEL_BOTTOMS[ level ]

        levelElements.push(`  <line stroke="black" x1="${leftEdgeX}" x2="${rightEdgeX}" y1="${levelY}" y2="${levelY}"/>\n`)
    })

    return levelElements
}

export {
    visualizeLevels,
}
