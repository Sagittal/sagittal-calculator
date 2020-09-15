import { HistoricalEvent } from "../histories"

const computeDoEventsContainEvent = <T extends HistoricalEvent, U extends HistoricalEvent>(
    events: T[],
    targetEvent: U,
): boolean =>
    !!events.find((event: T): boolean => {
        return event.name === targetEvent.name && event.jiNotationLevel === targetEvent.jiNotationLevel
    })

export {
    computeDoEventsContainEvent,
}
