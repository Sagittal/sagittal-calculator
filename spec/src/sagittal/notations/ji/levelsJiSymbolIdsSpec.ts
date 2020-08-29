import { Id } from "../../../../../src/general"
import { JiSymbol, Level } from "../../../../../src/sagittal/notations/ji"
import {
    computeIsWithinLevel,
    computeLevelJiSymbolIds,
} from "../../../../../src/sagittal/notations/ji/levelsJiSymbolIds"

describe("computeLevelJiSymbolIds", () => {
    it("returns the symbols for the levels up to and including the target level", () => {
        expect(computeLevelJiSymbolIds(Level.MEDIUM).length).toBe(13)
        expect(computeLevelJiSymbolIds(Level.HIGH).length).toBe(32)
        expect(computeLevelJiSymbolIds(Level.ULTRA).length).toBe(55)
        expect(computeLevelJiSymbolIds(Level.EXTREME).length).toBe(149)
    })

    it("returns only the symbol data (not the bound data)", () => {
        const levelSymbols = computeLevelJiSymbolIds(Level.MEDIUM)

        expect(levelSymbols[ 3 ]).toEqual(30 as Id<JiSymbol>)
    })
})

describe("computeIsWithinLevel", () => {
    it("returns true if the level is below or at to the target level, and false otherwise", () => {
        expect(computeIsWithinLevel(Level.MEDIUM, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.INSANE)).toBe(true)
        expect(computeIsWithinLevel(Level.INSANE, Level.INSANE)).toBe(true)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.EXTREME)).toBe(true)
        expect(computeIsWithinLevel(Level.INSANE, Level.EXTREME)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.ULTRA)).toBe(true)
        expect(computeIsWithinLevel(Level.EXTREME, Level.ULTRA)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.ULTRA)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.HIGH)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.HIGH)).toBe(true)
        expect(computeIsWithinLevel(Level.ULTRA, Level.HIGH)).toBe(false)
        expect(computeIsWithinLevel(Level.EXTREME, Level.HIGH)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.HIGH)).toBe(false)

        expect(computeIsWithinLevel(Level.MEDIUM, Level.MEDIUM)).toBe(true)
        expect(computeIsWithinLevel(Level.HIGH, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.ULTRA, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.EXTREME, Level.MEDIUM)).toBe(false)
        expect(computeIsWithinLevel(Level.INSANE, Level.MEDIUM)).toBe(false)
    })
})
