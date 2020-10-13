import { areScamonsEqual, Scamon } from "../../../../general"
import { BoundClassEvent, BoundClassHistory } from "../../histories"
import { RANKS } from "../../ranks"
import { computeBoundClassEventDistance } from "./eventDistance"
import { computeBoundClassEventInaDistance } from "./eventInaDistance"
import { BoundClassEventAnalysis } from "./types"

const analyzeBoundClassEvents = (
    boundClassHistory: BoundClassHistory,
    actualJiNotationBoundPitch: Scamon,
): BoundClassEventAnalysis[] =>
    boundClassHistory.map((boundClassEvent: BoundClassEvent, index: number): BoundClassEventAnalysis => {
        const { pitch, boundType } = boundClassEvent
        const exact = areScamonsEqual(pitch, actualJiNotationBoundPitch)
        const rank = RANKS[ boundType ]
        const distance = computeBoundClassEventDistance(boundClassEvent, index, boundClassHistory)
        const inaDistance = computeBoundClassEventInaDistance(boundClassEvent, index, boundClassHistory)

        return {
            ...boundClassEvent,
            rank,
            exact,
            distance,
            inaDistance,
        }
    })

export {
    analyzeBoundClassEvents,
}
