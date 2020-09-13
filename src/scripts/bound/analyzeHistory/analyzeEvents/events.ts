import { Cents, isCloseTo } from "../../../../general"
import { RANKS } from "../../analyzeBound"
import { HistoricalEvent, History } from "../../histories"
import { computeEventDistance } from "./eventDistance"
import { computeEventInaDistance } from "./eventInaDistance"
import { EventAnalysis } from "./types"

const analyzeEvents = (history: History, actualBoundCents: Cents): EventAnalysis[] =>
    history.map((event: HistoricalEvent, index): EventAnalysis => {
        const { cents, type } = event
        const exact = isCloseTo(cents, actualBoundCents)
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
