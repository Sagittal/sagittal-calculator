import { computeInitialPosition } from "../../../../src/scripts/analyzeBounds/initialPosition"
import { Bound, BoundId, Level } from "../../../../src/notations/ji/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeInitialPosition", () => {
    it("returns the mean of the bounded commas at the introducing level", () => {
        const bound: Bound = {
            levels: [Level.HIGH, Level.EXTREME],
            position: 42 as Cents, // between ~|\ (40.0043524607400) and //| (43.0125791934297) at the High level
            id: 0 as BoundId
        }

        const result = computeInitialPosition(bound)

        expect(result).toEqual((40.0043524607400 + 43.0125791934297) / 2 as Cents)
    })
})
