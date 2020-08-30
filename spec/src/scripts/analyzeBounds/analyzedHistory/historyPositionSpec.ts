import { Cents } from "../../../../../src/general/music"
import { computeHistoryPosition } from "../../../../../src/scripts/analyzeBounds/analyzedHistory/historyPosition"
import { History } from "../../../../../src/scripts/analyzeBounds/histories"
import { eventFixture } from "../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeHistoryPosition", () => {
    it("returns the position of the history's final event", () => {
        const history: History = [
            { ...eventFixture, cents: 10.010 as Cents },
            { ...eventFixture, cents: 10.030 as Cents },
            { ...eventFixture, cents: 10.020 as Cents },
        ]

        const actual = computeHistoryPosition(history)

        const expected = 10.020 as Cents
        expect(actual).toBe(expected)
    })
})
