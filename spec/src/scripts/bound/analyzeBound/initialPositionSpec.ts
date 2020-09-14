import { Cents } from "../../../../../src/general/music"
import { Bound, Level } from "../../../../../src/sagittal/notations/ji"
import { computeInitialPosition } from "../../../../../src/scripts/bound/analyzeBound/initialPosition"
import { boundFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeInitialPosition", (): void => {
    it("returns the mean of the bounded commas at the introducing level", (): void => {
        const bound: Bound = {
            ...boundFixture,
            levels: [Level.HIGH, Level.EXTREME],
            cents: 42 as Cents, // between ~|\ (40.004352) and //| (43.012579) at the High level
        }

        const actual = computeInitialPosition(bound)

        const expected = (40.004352 + 43.012579) / 2 as Cents
        expect(actual).toBeCloseTo(expected)
    })
})
