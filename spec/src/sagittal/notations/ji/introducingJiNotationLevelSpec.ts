import { Id } from "../../../../../src/general"
import { JiNotationLevel, SymbolClass } from "../../../../../src/sagittal/notations"
import { computeIntroducingJiNotationLevel } from "../../../../../src/sagittal/notations/ji/introducingJiNotationLevel"

describe("computeIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given symbol class id", (): void => {
        expect(computeIntroducingJiNotationLevel(12 as Id<SymbolClass>)).toBe(JiNotationLevel.MEDIUM)
        expect(computeIntroducingJiNotationLevel(36 as Id<SymbolClass>)).toBe(JiNotationLevel.HIGH)
        expect(computeIntroducingJiNotationLevel(120 as Id<SymbolClass>)).toBe(JiNotationLevel.ULTRA)
        expect(computeIntroducingJiNotationLevel(60 as Id<SymbolClass>)).toBe(JiNotationLevel.EXTREME)
    })
})
