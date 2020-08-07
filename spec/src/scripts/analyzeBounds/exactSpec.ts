import { computeExact } from "../../../../src/scripts/analyzeBounds/exact"
import { AnalyzedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { analyzedEventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeExact", () => {
    it("returns true if every event's position is the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: false },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
        ]

        const result = computeExact(analyzedEvents)

        expect(result).toBeFalsy()
    })
})