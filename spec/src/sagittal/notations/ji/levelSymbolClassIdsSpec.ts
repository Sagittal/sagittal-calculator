import { Id } from "../../../../../src/general"
import { SymbolClass } from "../../../../../src/sagittal/notations"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeJiNotationLevelSymbolClassIds } from "../../../../../src/sagittal/notations/ji/levelSymbolClassIds"

describe("computeJiNotationLevelSymbolClassIds", (): void => {
    it("has the correct count of symbol classes per JI notation level", (): void => {
        expect(computeJiNotationLevelSymbolClassIds(JiNotationLevel.MEDIUM).length).toBe(13)
        expect(computeJiNotationLevelSymbolClassIds(JiNotationLevel.HIGH).length).toBe(32)
        expect(computeJiNotationLevelSymbolClassIds(JiNotationLevel.ULTRA).length).toBe(55)
        expect(computeJiNotationLevelSymbolClassIds(JiNotationLevel.EXTREME).length).toBe(149)
    })

    it("returns a list of symbol class IDs for the symbol classes in this JI notation level", (): void => {
        const mediumLevelSymbols = computeJiNotationLevelSymbolClassIds(JiNotationLevel.MEDIUM)

        expect(mediumLevelSymbols[ 3 ]).toEqual(30 as Id<SymbolClass>)
    })
})
