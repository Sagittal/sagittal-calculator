import { Level } from "../../../../../../src/sagittal/notations/ji"
import { formatLevel } from "../../../../../../src/scripts/analyzeBounds/io/terminal/level"

describe("formatLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(formatLevel(Level.ULTRA)).toBe("Ultra")
        expect(formatLevel(Level.EXTREME)).toBe("Extreme")
    })
})
