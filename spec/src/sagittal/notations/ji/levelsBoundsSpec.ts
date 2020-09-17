import {
    JiNotationLevel,
    JI_NOTATION_LEVELS_BOUNDS,
    JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS,
} from "../../../../../src/sagittal/notations/ji"

describe("JI_NOTATION_LEVELS_BOUNDS", (): void => {
    it("has the same number of bounds per JI notation level as the symbol class ids", (): void => {
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.MEDIUM ].length)
            .toBe(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ].length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.HIGH ].length)
            .toBe(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ].length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.ULTRA ].length)
            .toBe(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ].length)
        expect(JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.EXTREME ].length)
            .toBe(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ].length)
    })
})
