import { Id } from "../../../../../src/general"
import { JiNotationLevel, SymbolClass } from "../../../../../src/sagittal/notations"
import { getIntroducingJiNotationLevel } from "../../../../../src/sagittal/notations/ji/introducingJiNotationLevel"

describe("getIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given symbol class id", (): void => {
        expect(getIntroducingJiNotationLevel(12 as Id<SymbolClass>)).toBe(JiNotationLevel.MEDIUM)
        expect(getIntroducingJiNotationLevel(36 as Id<SymbolClass>)).toBe(JiNotationLevel.HIGH)
        expect(getIntroducingJiNotationLevel(120 as Id<SymbolClass>)).toBe(JiNotationLevel.ULTRA)
        expect(getIntroducingJiNotationLevel(60 as Id<SymbolClass>)).toBe(JiNotationLevel.EXTREME)
    })
})
