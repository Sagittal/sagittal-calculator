import { Cents } from "../../../../src/general/music"
import { Bound, Level } from "../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../src/scripts/analyzeBounds/initialPosition"
import { boundFixture } from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeInitialPosition", () => {
    it("returns the mean of the bounded commas at the introducing level", () => {
        const bound: Bound = {
            ...boundFixture,
            levels: [Level.HIGH, Level.EXTREME],
            cents: 42 as Cents, // between ~|\ (40.0043524607400) and //| (43.0125791934297) at the High level
        }

        const actual = computeInitialPosition(bound)

        const expected = (40.0043524607400 + 43.0125791934297) / 2 as Cents
        expect(actual).toEqual(expected)
    })
})
