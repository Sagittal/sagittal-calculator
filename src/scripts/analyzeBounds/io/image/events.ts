import { Level } from "../../../../notations"
import { AnalyzedEvent } from "../../types"
import { RANK_FILLS } from "./colors"
import { LEVEL_BOTTOMS, LEVEL_CENTERS } from "./levelHeights"
import { DOT_SIZE } from "./sizes"
import { computeX } from "./x"

const visualizeEvents = (events: AnalyzedEvent[]) => {
    const eventElements = []

    const initialEvent = events[ 0 ]
    const { cents: initialPosition, rank: initialRank, level: initialLevel } = initialEvent
    const initialX = computeX(initialPosition)
    const initialY = LEVEL_CENTERS[ initialLevel ]
    const initialStroke = RANK_FILLS[ initialRank ]
    eventElements.push(`  <circle stroke="${initialStroke}" r="${DOT_SIZE}" cx="${initialX}" cy="${initialY}" />\n`)

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

        const stroke = RANK_FILLS[ nextRank ]

        const positionX = computeX(cents)
        const positionY = level ? LEVEL_CENTERS[ level ] : LEVEL_BOTTOMS[ nextLevel ]

        const nextPositionX = computeX(nextCents)
        const nextPositionY = LEVEL_CENTERS[ nextLevel ]

        eventElements.push(`  <line stroke="${stroke}" x1="${positionX}" y1="${positionY}" x2="${nextPositionX}" y2="${nextPositionY}" />\n`)
        eventElements.push(`  <circle stroke="${stroke}" r="${DOT_SIZE}" cx="${nextPositionX}" cy="${nextPositionY}" />\n`)

        const formattedDistance = nextDistance.toPrecision(5)
        const formattedInaDistance = `${(nextInaDistance * 100).toPrecision(3)}%`

        const textX = (positionX + nextPositionX) / 2
        const textY = (positionY + nextPositionY) / 2
        const rise = nextPositionY - positionY
        const run = nextPositionX - positionX
        const slope = rise / run
        const angle = Math.atan(slope) * (180 / Math.PI)
        eventElements.push(`  <text stroke="white" stroke-width="0.45em" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n`)
        eventElements.push(`  <text fill="red" transform="rotate(${angle} ${textX} ${textY})" text-anchor="middle" alignment-baseline="hanging" xml:space="preserve" font-family="Helvetica" font-size="6px" x="${textX}" y="${textY}">${formattedDistance} (${formattedInaDistance})</text>\n`)
    })

    return eventElements
}

export {
    visualizeEvents,
}
