import { Level } from "../../../../../src/sagittal/notations/ji"
import { isWithinLevel } from "../../../../../src/sagittal/notations/ji/isWithinLevel"

describe("isWithinLevel", (): void => {
    it("returns true if the level is below or at to the target level, and false otherwise", (): void => {
        expect(isWithinLevel(Level.MEDIUM, Level.INSANE)).toBe(true)
        expect(isWithinLevel(Level.HIGH, Level.INSANE)).toBe(true)
        expect(isWithinLevel(Level.ULTRA, Level.INSANE)).toBe(true)
        expect(isWithinLevel(Level.EXTREME, Level.INSANE)).toBe(true)
        expect(isWithinLevel(Level.INSANE, Level.INSANE)).toBe(true)

        expect(isWithinLevel(Level.MEDIUM, Level.EXTREME)).toBe(true)
        expect(isWithinLevel(Level.HIGH, Level.EXTREME)).toBe(true)
        expect(isWithinLevel(Level.ULTRA, Level.EXTREME)).toBe(true)
        expect(isWithinLevel(Level.EXTREME, Level.EXTREME)).toBe(true)
        expect(isWithinLevel(Level.INSANE, Level.EXTREME)).toBe(false)

        expect(isWithinLevel(Level.MEDIUM, Level.ULTRA)).toBe(true)
        expect(isWithinLevel(Level.HIGH, Level.ULTRA)).toBe(true)
        expect(isWithinLevel(Level.ULTRA, Level.ULTRA)).toBe(true)
        expect(isWithinLevel(Level.EXTREME, Level.ULTRA)).toBe(false)
        expect(isWithinLevel(Level.INSANE, Level.ULTRA)).toBe(false)

        expect(isWithinLevel(Level.MEDIUM, Level.HIGH)).toBe(true)
        expect(isWithinLevel(Level.HIGH, Level.HIGH)).toBe(true)
        expect(isWithinLevel(Level.ULTRA, Level.HIGH)).toBe(false)
        expect(isWithinLevel(Level.EXTREME, Level.HIGH)).toBe(false)
        expect(isWithinLevel(Level.INSANE, Level.HIGH)).toBe(false)

        expect(isWithinLevel(Level.MEDIUM, Level.MEDIUM)).toBe(true)
        expect(isWithinLevel(Level.HIGH, Level.MEDIUM)).toBe(false)
        expect(isWithinLevel(Level.ULTRA, Level.MEDIUM)).toBe(false)
        expect(isWithinLevel(Level.EXTREME, Level.MEDIUM)).toBe(false)
        expect(isWithinLevel(Level.INSANE, Level.MEDIUM)).toBe(false)
    })
})
