import { Cents, finalElement } from "../../../general"
import { History } from "../histories"

const computeHistoryPosition = (history: History): Cents => {
    const mostRecentEvent = finalElement(history)

    return mostRecentEvent.cents
}

export {
    computeHistoryPosition,
}
