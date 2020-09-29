import {
    ACCURACY_THRESHOLD,
    computeAngle,
    Coordinates,
    HexColor,
    Io,
    Px,
    radiansToDegrees,
    round,
} from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { BoundEventAnalysis } from "../../history"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { RANK_HEX_COLORS } from "./rankColors"
import { DOT_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeBoundEventAnalyses = (boundEventAnalyses: BoundEventAnalysis[]): Io[] => {
    const boundEventElements: Io[] = []

    const initialBoundEventAnalysis: BoundEventAnalysis = boundEventAnalyses[ 0 ]
    const { cents: initialPosition, rank: initialRank, jiNotationLevel: initialLevel } = initialBoundEventAnalysis
    const initialX: Px = round(computeX(initialPosition), ACCURACY_THRESHOLD)
    const initialY: Px = round(JI_NOTATION_LEVEL_CENTERS[ initialLevel ], ACCURACY_THRESHOLD)
    const initialStroke: HexColor = RANK_HEX_COLORS[ initialRank ]
    boundEventElements.push(
        `  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n` as Io,
    )

    boundEventAnalyses.forEach((boundEventAnalysis: BoundEventAnalysis, index: number): void => {
        const { jiNotationLevel, cents } = boundEventAnalysis
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const {
            jiNotationLevel: nextLevel,
            cents: nextCents,
            rank: nextRank,
            distance: nextDistance,
            inaDistance: nextInaDistance,
        } = boundEventAnalyses[ index + 1 ] || {}

        const stroke: HexColor = RANK_HEX_COLORS[ nextRank ]

        const positionX: Px = computeX(cents)
        const positionY: Px = round(
            jiNotationLevel ?
                JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ] :
                JI_NOTATION_LEVEL_BOTTOMS[ nextLevel ]
            , ACCURACY_THRESHOLD)

        const nextPositionX: Px = computeX(nextCents)
        const nextPositionY: Px = round(JI_NOTATION_LEVEL_CENTERS[ nextLevel ], ACCURACY_THRESHOLD)

        boundEventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n` as Io)
        boundEventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n` as Io)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX: Px = round((positionX + nextPositionX) / 2 as Px, ACCURACY_THRESHOLD)
        const textY: Px = round((positionY + nextPositionY) / 2 as Px, ACCURACY_THRESHOLD)

        const angle = round(radiansToDegrees(computeAngle(
            [positionX, positionY] as unknown[] as Coordinates,
            [nextPositionX, nextPositionY] as unknown[] as Coordinates,
        )), ACCURACY_THRESHOLD)
        boundEventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
        boundEventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
    })

    return boundEventElements
}

export {
    visualizeBoundEventAnalyses,
}
