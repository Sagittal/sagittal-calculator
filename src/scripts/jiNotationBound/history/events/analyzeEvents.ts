import { Cents, isCloseTo } from "../../../../general"
import { BoundEvent, BoundHistory } from "../../histories"
import { RANKS } from "../../ranks"
import { computeBoundEventDistance } from "./eventDistance"
import { computeBoundEventInaDistance } from "./eventInaDistance"
import { BoundEventAnalysis } from "./types"

const analyzeBoundEvents = (boundHistory: BoundHistory, actualJiNotationBoundCents: Cents): BoundEventAnalysis[] =>
    boundHistory.map((boundEvent: BoundEvent, index: number): BoundEventAnalysis => {
        const { cents, boundType } = boundEvent
        const exact = isCloseTo(cents, actualJiNotationBoundCents)
        const rank = RANKS[ boundType ]
        const distance = computeBoundEventDistance(boundEvent, index, boundHistory)
        const inaDistance = computeBoundEventInaDistance(boundEvent, index, boundHistory)

        return {
            ...boundEvent,
            rank,
            exact,
            distance,
            inaDistance,
        }
    })

export {
    analyzeBoundEvents,
}
