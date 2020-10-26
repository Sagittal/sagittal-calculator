import { shallowClone, sort } from "../../../../../src/general/code"
import { JI_NOTATION_LEVELS_COMMA_CLASS_IDS } from "../../../../../src/sagittal/notations"
import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("JI_NOTATION_LEVELS_COMMA_CLASS_IDS", (): void => {
    it("has the correct count of comma classes per JI notation level", (): void => {
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.MEDIUM ].length).toBe(11)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.HIGH ].length).toBe(27)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.ULTRA ].length).toBe(47)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.EXTREME ].length).toBe(123)
    })

    // Todo: SORTED COMMA CLASS IDS TEST POST NO-ID REFACTOR
    //  I expect this test to not make any sense any more... but I still want to protect that this works
    //  It's because they need to be sorted by their indices, not their IDs
    // tslint:disable-next-line ban
    xit("keeps the comma class IDs in each level sorted", (): void => {
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.MEDIUM ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.MEDIUM ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.HIGH ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.HIGH ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.ULTRA ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.ULTRA ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.EXTREME ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.EXTREME ])),
        )
    })
})
