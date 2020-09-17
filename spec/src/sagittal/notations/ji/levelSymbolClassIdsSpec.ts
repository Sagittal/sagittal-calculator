import { shallowClone, sort } from "../../../../../src/general/code"
import { JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS } from "../../../../../src/sagittal/notations"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS", (): void => {
    it("has the correct count of symbol classes per JI notation level", (): void => {
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ].length).toBe(13)
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ].length).toBe(32)
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ].length).toBe(55)
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ].length).toBe(149)
    })

    it("keeps the symbol class IDs in each level sorted", (): void => {
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.MEDIUM ])),
        )
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.HIGH ])),
        )
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.ULTRA ])),
        )
        expect(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_SYMBOL_CLASS_IDS[ JiNotationLevel.EXTREME ])),
        )
    })
})
