import { Cents } from "../../../../../src/general/music"
import { History } from "../../../../../src/scripts/jiNotationBound/histories"
import { computeHistoryPosition } from "../../../../../src/scripts/jiNotationBound/history/historyPosition"
import { eventFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeHistoryPosition", (): void => {
    it("returns the position of the history's final event", (): void => {
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
