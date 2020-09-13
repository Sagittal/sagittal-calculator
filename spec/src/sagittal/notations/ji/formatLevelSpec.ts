import { Level } from "../../../../../src/sagittal"
import { formatLevel } from "../../../../../src/sagittal/notations/ji"

describe("formatLevel", (): void => {
    it("makes levels nice for people to read", (): void => {
        expect(formatLevel(Level.ULTRA)).toBe("Ultra")
        expect(formatLevel(Level.EXTREME)).toBe("Extreme")
    })
})
