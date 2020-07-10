import {RANKS} from "./ranks"
import {computeIsCloseTo} from "../../utilities/isCloseTo"
import {computeEventDistance} from "./eventDistance"
import {computeEventInaDistance} from "./eventInaDistance"

const analyzeEvents = (history, actualBoundPosition) => {
    return history.map((event, index) => {
        const {position, type} = event
        const exact = computeIsCloseTo(position, actualBoundPosition)
        const rank = RANKS[type]
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
