import { computeExact } from "../../../../src/scripts/analyzeBounds/exact"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"

describe("computeExact", () => {
    it("returns true if every event's position is the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { exact: true } as AnalyzedEvent,
            { exact: true } as AnalyzedEvent,
            { exact: true } as AnalyzedEvent,
            { exact: true } as AnalyzedEvent,
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { exact: true } as AnalyzedEvent,
            { exact: false } as AnalyzedEvent,
            { exact: true } as AnalyzedEvent,
            { exact: true } as AnalyzedEvent,
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeFalsy()
    })
})
