import { Cents, isCloseTo } from "../../../../general"
import { HistoricalEvent, History } from "../../histories"
import { RANKS } from "../../ranks"
import { computeEventDistance } from "./eventDistance"
import { computeEventInaDistance } from "./eventInaDistance"
import { EventAnalysis } from "./types"

const analyzeEvents = (history: History, actualJiNotationBoundCents: Cents): EventAnalysis[] =>
    history.map((event: HistoricalEvent, index: number): EventAnalysis => {
        const { cents, type } = event
        const exact = isCloseTo(cents, actualJiNotationBoundCents)
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
