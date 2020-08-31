import { Level } from "../../../../../src/sagittal"
import { formatLevel } from "../../../../../src/sagittal/notations/ji/formatLevel"

describe("formatLevel", () => {
    it("makes levels nice for people to read", () => {
        expect(formatLevel(Level.ULTRA)).toBe("Ultra")
        expect(formatLevel(Level.EXTREME)).toBe("Extreme")
    })
})
