import { Cents } from "../../../../../src/general/music"
import { BoundHistory } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeBoundHistoryPosition } from "../../../../../src/scripts/jiNotationBound/history/historyPosition"
import { boundEventFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeBoundHistoryPosition", (): void => {
    it("returns the position of the bound history's final bound event", (): void => {
        const boundHistory: BoundHistory = [
            { ...boundEventFixture, cents: 10.010 as Cents },
            { ...boundEventFixture, cents: 10.030 as Cents },
            { ...boundEventFixture, cents: 10.020 as Cents },
        ]

        const actual = computeBoundHistoryPosition(boundHistory)

        const expected = 10.020 as Cents
        expect(actual).toBe(expected)
    })
})
