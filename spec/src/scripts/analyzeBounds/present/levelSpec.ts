import { Level } from "../../../../../src/notations/ji"
import { presentLevel } from "../../../../../src/scripts/analyzeBounds/present/level"

describe("presentLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(presentLevel(Level.ULTRA)).toBe("Ultra")
        expect(presentLevel(Level.EXTREME)).toBe("Extreme")
    })
})
