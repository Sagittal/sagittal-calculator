import { HexColor, Io, Multiplier, Px, subtract } from "../../../../general"
import { JiNotationLevel } from "../../../../sagittal"
import { EventAnalysis } from "../../history"
import { JI_NOTATION_LEVEL_BOTTOMS, JI_NOTATION_LEVEL_CENTERS } from "./levelHeights"
import { RANK_HEX_COLORS } from "./rankColors"
import { DOT_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeEvents = (events: EventAnalysis[]): Io[] => {
    const eventElements: Io[] = []

    const initialEventAnalysis: EventAnalysis = events[ 0 ]
    const { cents: initialPosition, rank: initialRank, jiNotationLevel: initialLevel } = initialEventAnalysis
    const initialX: Px = computeX(initialPosition)
    const initialY: Px = JI_NOTATION_LEVEL_CENTERS[ initialLevel ]
    const initialStroke: HexColor = RANK_HEX_COLORS[ initialRank ]
    eventElements.push(
        `  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n` as Io,
    )

    events.forEach((eventAnalysis: EventAnalysis, index: number): void => {
        const { jiNotationLevel, cents } = eventAnalysis
        if (jiNotationLevel === JiNotationLevel.INSANE) {
            return
        }

        const {
            jiNotationLevel: nextLevel,
            cents: nextCents,
            rank: nextRank,
            distance: nextDistance,
            inaDistance: nextInaDistance,
        } = events[ index + 1 ] || {}

        const stroke: HexColor = RANK_HEX_COLORS[ nextRank ]

        const positionX: Px = computeX(cents)
        const positionY: Px = jiNotationLevel ?
            JI_NOTATION_LEVEL_CENTERS[ jiNotationLevel ] :
            JI_NOTATION_LEVEL_BOTTOMS[ nextLevel ]

        const nextPositionX: Px = computeX(nextCents)
        const nextPositionY: Px = JI_NOTATION_LEVEL_CENTERS[ nextLevel ]

        eventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n` as Io)
        eventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n` as Io)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX: Px = (positionX + nextPositionX) / 2 as Px
        const textY: Px = (positionY + nextPositionY) / 2 as Px
        const rise: Px = subtract(nextPositionY, positionY)
        const run: Px = subtract(nextPositionX, positionX)
        const slope: Multiplier<Px> = rise / run as Multiplier<Px>
        const angle = Math.atan(slope) * (180 / Math.PI)
        eventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
        eventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
    })

    return eventElements
}

export {
    visualizeEvents,
}
