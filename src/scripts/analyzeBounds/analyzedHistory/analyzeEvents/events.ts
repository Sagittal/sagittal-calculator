import { Cents, computeIsCloseTo } from "../../../../general"
import { RANKS } from "../../analyzeBound"
import { HistoricalEvent, History } from "../../histories"
import { computeEventDistance } from "./eventDistance"
import { computeEventInaDistance } from "./eventInaDistance"
import { AnalyzedEvent } from "./types"

const analyzeEvents = (history: History, actualBoundCents: Cents): AnalyzedEvent[] =>
    history.map((event: HistoricalEvent, index): AnalyzedEvent => {
        const { cents, type } = event
        const exact = computeIsCloseTo(cents, actualBoundCents)
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

export {
    analyzeEvents,
}
