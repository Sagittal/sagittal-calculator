import { Id } from "../../../../../src/general"
import { JiSymbol, Level } from "../../../../../src/sagittal/notations/ji"
import { computeLevelJiSymbolIds } from "../../../../../src/sagittal/notations/ji/levelsJiSymbolIds"

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
