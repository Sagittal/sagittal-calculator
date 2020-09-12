import { finalElement } from "../../../general"
import { History } from "../histories"

const computeHistoryPosition = (history: History) => {
    const mostRecentEvent = finalElement(history)

    return mostRecentEvent.cents
}

export {
    computeHistoryPosition,
}
