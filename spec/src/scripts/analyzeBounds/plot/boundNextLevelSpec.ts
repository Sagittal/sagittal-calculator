import { computeBoundNextLevel } from "../../../../../src/scripts/analyzeBounds/plot/boundNextLevel"
import { Bound, Level } from "../../../../../src/notations/ji/types"
import { boundFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound: Bound = {
            ...boundFixture,
            levels: [Level.MEDIUM, Level.ULTRA],
        }

        const result = computeBoundNextLevel(bound, Level.MEDIUM)

        expect(result).toBe(Level.ULTRA)
    })
})
