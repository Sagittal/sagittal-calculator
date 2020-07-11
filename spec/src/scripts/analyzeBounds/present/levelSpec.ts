import { presentLevel } from "../../../../../src/scripts/analyzeBounds/present/level"
import { Level } from "../../../../../src/notations/ji/types"

describe("presentLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(presentLevel(Level.ULTRA)).toBe("Ultra")
        expect(presentLevel(Level.EXTREME)).toBe("Extreme")
    })
})
