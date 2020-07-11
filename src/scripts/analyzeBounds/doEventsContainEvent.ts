import { HistoricalEvent } from "./types"

const computeDoEventsContainEvent = <T extends HistoricalEvent, U extends HistoricalEvent>(events: T[], targetEvent: U) =>
    !!events.find(event => event.name === targetEvent.name && event.level === targetEvent.level)

export {
    computeDoEventsContainEvent,
}
