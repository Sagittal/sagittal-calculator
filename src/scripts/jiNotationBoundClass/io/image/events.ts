import {
    computeAngle,
    Coordinates,
    DEFAULT_PRECISION,
    HexColor,
    Io,
    Px,
    radiansToDegrees,
    round,
} from "@sagittal/general"
import {JiNotationLevelId} from "@sagittal/system"
import {BoundEventAnalysis} from "../../history"
import {JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_CENTERS} from "./levelHeights"
import {RANK_HEX_COLORS} from "./rankColors"
import {DOT_SIZE} from "./sizes"
import {computeX} from "./x"

const visualizeBoundEventAnalyses = (boundEventAnalyses: BoundEventAnalysis[]): Io[] => {
    const boundEventElements: Io[] = []

    const initialBoundEventAnalysis: BoundEventAnalysis = boundEventAnalyses[0]
    const {pitch: initialPosition, rank: initialRank, jiNotationLevel: initialLevel} = initialBoundEventAnalysis
    const initialX: Px = round(computeX(initialPosition), DEFAULT_PRECISION)
    const initialY: Px = round(JI_NOTATION_LEVEL_CENTERS[initialLevel], DEFAULT_PRECISION)
    const initialStroke: HexColor = RANK_HEX_COLORS[initialRank]
    boundEventElements.push(
        `  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n` as Io,
    )

    boundEventAnalyses.forEach(({jiNotationLevel, pitch}: BoundEventAnalysis, index: number): void => {
        if (jiNotationLevel === JiNotationLevelId.INSANE) {
            return
        }

        const {
            jiNotationLevel: nextLevel,
            pitch: nextPitch,
            rank: nextRank,
            distance: nextDistance,
            inaDistance: nextInaDistance,
        } = boundEventAnalyses[index + 1] || {}

        const stroke: HexColor = RANK_HEX_COLORS[nextRank]

        const positionX: Px = computeX(pitch)
        const positionY: Px = round(
            jiNotationLevel ?
                JI_NOTATION_LEVEL_CENTERS[jiNotationLevel] :
                JI_NOTATION_LEVEL_BOTTOMS[nextLevel],
            DEFAULT_PRECISION,
        )

        const nextPositionX: Px = computeX(nextPitch)
        const nextPositionY: Px = round(JI_NOTATION_LEVEL_CENTERS[nextLevel], DEFAULT_PRECISION)

        boundEventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n` as Io)
        boundEventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n` as Io)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX: Px = round((positionX + nextPositionX) / 2 as Px, DEFAULT_PRECISION)
        const textY: Px = round((positionY + nextPositionY) / 2 as Px, DEFAULT_PRECISION)

        const angle = round(radiansToDegrees(computeAngle(
            [positionX, positionY] as unknown[] as Coordinates,
            [nextPositionX, nextPositionY] as unknown[] as Coordinates,
        )), DEFAULT_PRECISION)
        boundEventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
        boundEventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
    })

    return boundEventElements
}

export {
    visualizeBoundEventAnalyses,
}
