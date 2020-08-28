import { Bound, Level } from "../../../../../src/sagittal/notations/ji"
import { computeBoundNextLevel } from "../../../../../src/scripts/analyzeBounds/plot/boundNextLevel"
import { boundFixture } from "../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound: Bound = {
            ...boundFixture,
            levels: [Level.MEDIUM, Level.ULTRA],
        }

        const actual = computeBoundNextLevel(bound, Level.MEDIUM)

        const expected = Level.ULTRA
        expect(actual).toBe(expected)
    })
})
