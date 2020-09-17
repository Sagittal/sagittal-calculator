import { Id } from "../../../../../src/general"
import { JiNotationLevel, SymbolClass } from "../../../../../src/sagittal/notations"
import { getIntroducingJiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("getIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given symbol class id", (): void => {
        expect(getIntroducingJiNotationLevel(12 as Id<SymbolClass>)).toBe(JiNotationLevel.MEDIUM)
        expect(getIntroducingJiNotationLevel(36 as Id<SymbolClass>)).toBe(JiNotationLevel.HIGH)
        expect(getIntroducingJiNotationLevel(120 as Id<SymbolClass>)).toBe(JiNotationLevel.ULTRA)
        expect(getIntroducingJiNotationLevel(60 as Id<SymbolClass>)).toBe(JiNotationLevel.EXTREME)
    })

    it("throws an error if the symbol class ID is not a member of a JI notation", (): void => {
        expect((): void => {
            getIntroducingJiNotationLevel(200 as Id<SymbolClass>)
        }).toThrowError("Symbol class ID 200 does not appear in a JI notation level.")
    })
})
