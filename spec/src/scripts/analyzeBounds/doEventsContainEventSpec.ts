import { computeDoEventsContainEvent } from "../../../../src/scripts/analyzeBounds/doEventsContainEvent"
import { AnalyzedEvent, ConsolidatedEvent } from "../../../../src/scripts/analyzeBounds/types"

describe("computeDoEventsContainEvent", () => {
    it("returns true when the events contain an event which has the same name and the same level", () => {
        const analyzedEvents: AnalyzedEvent[] = [{ name: "someName", level: "someLevel", rank: 1 } as unknown as AnalyzedEvent ]
        const targetEvent = { name: "someName", level: "someLevel", rank: 2 } as unknown as ConsolidatedEvent

        const result = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(result).toBe(true)
    })

    it("returns false when the events contain an event which has the same name but not the same level", () => {
        const analyzedEvents = [{ name: "someName", level: "someLevel", rank: 1 } as unknown as AnalyzedEvent ]
        const targetEvent = { name: "someName", level: "otherLevel", rank: 2 } as unknown as ConsolidatedEvent

        const result = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(result).toBe(false)
    })

    it("returns false when the events contain an event which has the same level but not the same name", () => {
        const analyzedEvents = [{ name: "someName", level: "someLevel", rank: 1 } as unknown as AnalyzedEvent ]
        const targetEvent = { name: "otherName", level: "someLevel", rank: 2 } as unknown as ConsolidatedEvent

        const result = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(result).toBe(false)
    })

    it("returns false when the events contain no events which have either the same name or the same level", () => {
        const analyzedEvents = [{ name: "someName", level: "someLevel", rank: 1 } as unknown as AnalyzedEvent ]
        const targetEvent = { name: "otherName", level: "otherLevel", rank: 1 } as unknown as ConsolidatedEvent

        const result = computeDoEventsContainEvent(analyzedEvents, targetEvent)

        expect(result).toBe(false)
    })
})
