import { Level, LEVELS_BOUNDS } from "../../../../../src/sagittal/notations/ji"
import { computeLevelJiSymbolIds } from "../../../../../src/sagittal/notations/ji/levelsJiSymbolIds"

describe("LEVELS_BOUNDS", () => {
    it("has the same number of bounds per level as the symbol ids", () => {
        expect(LEVELS_BOUNDS[ Level.MEDIUM ].length).toBe(computeLevelJiSymbolIds(Level.MEDIUM).length)
        expect(LEVELS_BOUNDS[ Level.HIGH ].length).toBe(computeLevelJiSymbolIds(Level.HIGH).length)
        expect(LEVELS_BOUNDS[ Level.ULTRA ].length).toBe(computeLevelJiSymbolIds(Level.ULTRA).length)
        expect(LEVELS_BOUNDS[ Level.EXTREME ].length).toBe(computeLevelJiSymbolIds(Level.EXTREME).length)
    })
})
