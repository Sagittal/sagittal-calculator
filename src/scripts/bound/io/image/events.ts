import { difference, HexColor, Io, Proportion, Px } from "../../../../general"
import { Level } from "../../../../sagittal"
import { AnalyzedEvent } from "../../analyzedHistory"
import { RANK_FILLS } from "./colors"
import { LEVEL_BOTTOMS, LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeEvents = (events: AnalyzedEvent[]): Io[] => {
    const eventElements: Io[] = []

    const initialEvent: AnalyzedEvent = events[ 0 ]
    const { cents: initialPosition, rank: initialRank, level: initialLevel } = initialEvent
    const initialX: Px = computeX(initialPosition)
    const initialY: Px = LEVEL_CENTERS[ initialLevel ]
    const initialStroke: HexColor = RANK_FILLS[ initialRank ]
    eventElements.push(
        `  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n` as Io,
    )

    events.forEach((event, index) => {
        const { level, cents } = event
        if (level === Level.INSANE) {
            return
        }

        const {
            level: nextLevel,
            cents: nextCents,
            rank: nextRank,
            distance: nextDistance,
            inaDistance: nextInaDistance,
        } = events[ index + 1 ] || {}

        const stroke: HexColor = RANK_FILLS[ nextRank ]

        const positionX: Px = computeX(cents)
        const positionY: Px = level ? LEVEL_CENTERS[ level ] : LEVEL_BOTTOMS[ nextLevel ]

        const nextPositionX: Px = computeX(nextCents)
        const nextPositionY: Px = LEVEL_CENTERS[ nextLevel ]

        eventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n` as Io)
        eventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n` as Io)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX: Px = (positionX + nextPositionX) / 2 as Px
        const textY: Px = (positionY + nextPositionY) / 2 as Px
        const rise: Px = difference(nextPositionY, positionY)
        const run: Px = difference(nextPositionX, positionX)
        const slope: Proportion<Px> = rise / run as Proportion<Px>
        const angle = Math.atan(slope) * (180 / Math.PI)
        eventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
        eventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n` as Io)
    })

    return eventElements
}

export {
    visualizeEvents,
}
