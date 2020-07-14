import { Cents } from "../../../../src/general/music"
import { computeHistoryPosition } from "../../../../src/scripts/analyzeBounds/historyPosition"
import { History } from "../../../../src/scripts/analyzeBounds/types"
import { eventFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeHistoryPosition", () => {
    it("returns the position of the history's final event", () => {
        const history: History = [
            { ...eventFixture, cents: 10.010 as Cents },
            { ...eventFixture, cents: 10.030 as Cents },
            { ...eventFixture, cents: 10.020 as Cents },
        ]

        const result = computeHistoryPosition(history)

        expect(result).toBe(10.020 as Cents)
    })
})
