import { HistoricalEvent } from "../histories"

const computeDoEventsContainEvent = <T extends HistoricalEvent, U extends HistoricalEvent>(
    events: T[],
    targetEvent: U,
): boolean =>
    !!events.find((event: T): boolean => event.name === targetEvent.name && event.level === targetEvent.level)

export {
    computeDoEventsContainEvent,
}
