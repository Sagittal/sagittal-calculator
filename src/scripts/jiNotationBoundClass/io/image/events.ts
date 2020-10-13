import {
    computeAngle,
    Coordinates,
    DEFAULT_PRECISION,
    HexColor,
    Io,
    Px,
    radiansToDegrees,
    round,
} from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { BoundClassEventAnalysis } from "../../history"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { RANK_HEX_COLORS } from "./rankColors"
import { DOT_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeBoundClassEventAnalyses = (boundClassEventAnalyses: BoundClassEventAnalysis[]): Io[] => {
    const boundClassEventElements: Io[] = []

    const initialBoundClassEventAnalysis: BoundClassEventAnalysis = boundClassEventAnalyses[ 0 ]
    const { pitch: initialPosition, rank: initialRank, jiNotationLevel: initialLevel } = initialBoundClassEventAnalysis
    const initialX: Px = round(computeX(initialPosition), DEFAULT_PRECISION)
    const initialY: Px = round(JI_NOTATION_LEVEL_CENTERS[ initialLevel ], DEFAULT_PRECISION)
    const initialStroke: HexColor = RANK_HEX_COLORS[ initialRank ]
    boundClassEventElements.push(
        `  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n` as Io,
    )

    boundClassEventAnalyses.forEach(({ jiNotationLevel, pitch }: BoundClassEventAnalysis, index: number): void => {
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const {
            jiNotationLevel: nextLevel,
            pitch: nextPitch,
            rank: nextRank,
            distance: nextDistance,
            inaDistance: nextInaDistance,
        } = boundClassEventAnalyses[ index + 1 ] || {}

        const stroke: HexColor = RANK_HEX_COLORS[ nextRank ]

        const positionX: Px = computeX(pitch)
        const positionY: Px = round(
            jiNotationLevel ?
                JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ] :
                JI_NOTATION_LEVEL_BOTTOMS[ nextLevel ],
            DEFAULT_PRECISION,
        )

        const nextPositionX: Px = computeX(nextPitch)
        const nextPositionY: Px = round(JI_NOTATION_LEVEL_CENTERS[ nextLevel ], DEFAULT_PRECISION)

        boundClassEventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n` as Io)
        boundClassEventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n` as Io)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX: Px = round((positionX + nextPositionX) / 2 as Px, DEFAULT_PRECISION)
        const textY: Px = round((positionY + nextPositionY) / 2 as Px, DEFAULT_PRECISION)

        const angle = round(radiansToDegrees(computeAngle(
            [positionX, positionY] as unknown[] as Coordinates,
            [nextPositionX, nextPositionY] as unknown[] as Coordinates,
        )), DEFAULT_PRECISION)
        boundClassEventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
        boundClassEventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
    })

    return boundClassEventElements
}

export {
    visualizeBoundClassEventAnalyses,
}
