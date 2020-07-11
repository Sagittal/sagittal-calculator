import { RANKS } from "./ranks"
import { computeIsCloseTo } from "../../utilities/isCloseTo"
import { computeEventDistance } from "./eventDistance"
import { computeEventInaDistance } from "./eventInaDistance"
import { AnalyzedEvent, HistoricalEvent, History } from "./types"
import { Cents } from "../../utilities/types"

const analyzeEvents = (history: History, actualBoundPosition: Cents): AnalyzedEvent[] => {
    return history.map((event: HistoricalEvent, index): AnalyzedEvent => {
        const { position, type } = event
        const exact = computeIsCloseTo(position, actualBoundPosition)
        const rank = RANKS[ type ]
        const distance = computeEventDistance(event, index, history)
        const inaDistance = computeEventInaDistance(event, index, history)

        return {
            ...event,
            rank,
            exact,
            distance,
            inaDistance,
        }
    })
}

export {
    analyzeEvents,
}
