import { History } from "../histories"

const computeHistoryPosition = (history: History) => {
    const mostRecentEvent = history[ history.length - 1 ]

    return mostRecentEvent.cents
}

export {
    computeHistoryPosition,
}
