import { AnalyzedEvent } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeExact } from "../../../../../src/scripts/bound/analyzedHistory/exact"
import { analyzedEventFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeExact", () => {
    it("returns true if every event's position is the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
        ]

        const actual = computeExact(analyzedEvents)

        expect(actual).toBeTruthy()
    })

    it("returns false if a single event's position is not the same as the actual bound position", () => {
        const analyzedEvents: AnalyzedEvent[] = [
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: false },
            { ...analyzedEventFixture, exact: true },
            { ...analyzedEventFixture, exact: true },
        ]

        const actual = computeExact(analyzedEvents)

        expect(actual).toBeFalsy()
    })
})
