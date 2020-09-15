import { JiNotationLevel, JI_NOTATION_LEVELS_BOUNDS } from "../../../../../src/sagittal/notations/ji"
import { computeJiNotationLevelSymbolClassIds } from "../../../../../src/sagittal/notations/ji/levelSymbolClassIds"

describe("JI_NOTATION_LEVELS_BOUNDS", (): void => {
    it("has the same number of bounds per JI notation level as the symbol class ids", (): void => {
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.MEDIUM ].length)
            .toBe(computeJiNotationLevelSymbolClassIds(JiNotationLevel.MEDIUM).length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.HIGH ].length)
            .toBe(computeJiNotationLevelSymbolClassIds(JiNotationLevel.HIGH).length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.ULTRA ].length)
            .toBe(computeJiNotationLevelSymbolClassIds(JiNotationLevel.ULTRA).length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.EXTREME ].length)
            .toBe(computeJiNotationLevelSymbolClassIds(JiNotationLevel.EXTREME).length)
    })
})
