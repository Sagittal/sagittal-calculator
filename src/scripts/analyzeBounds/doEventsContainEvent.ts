import { AnalyzedEvent, ConsolidatedEvent } from "./types"

const computeDoEventsContainEvent = (analyzedEvents: AnalyzedEvent[] /* todo: maybe these are ConsolidatedEvent[] actually, so this needs some work... */, targetEvent: ConsolidatedEvent) =>
    !!analyzedEvents.find(event => event.name === targetEvent.name && event.level === targetEvent.level)

export {
    computeDoEventsContainEvent,
}
