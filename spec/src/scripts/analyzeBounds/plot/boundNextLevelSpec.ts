import { computeBoundNextLevel } from "../../../../../src/scripts/analyzeBounds/plot/boundNextLevel"
import { Bound, Level } from "../../../../../src/notations/ji/types"

describe("computeBoundNextLevel", () => {
    it("gives the next level for this bound (since some bounds skip levels)", () => {
        const bound: Bound = {
            levels: [Level.MEDIUM, Level.ULTRA],
        } as Bound

        const result = computeBoundNextLevel(bound, Level.MEDIUM)

        expect(result).toBe(Level.ULTRA)
    })
})
