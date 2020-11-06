import { shallowClone, sort } from "../../../../../src/general/code"
import { JI_NOTATION_LEVELS_COMMA_CLASS_IDS } from "../../../../../src/sagittal/notations"
import { JiNotationLevelId } from "../../../../../src/sagittal/notations/ji"

describe("JI_NOTATION_LEVELS_COMMA_CLASS_IDS", (): void => {
    it("has the correct count of comma classes per JI notation level", (): void => {
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.MEDIUM ].length).toBe(11)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.HIGH ].length).toBe(27)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.ULTRA ].length).toBe(47)
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.EXTREME ].length).toBe(123)
    })

    // TODO: POST-NOTATION-GENERATION: IDS VS INDICES
    //  I expect this test to not make any sense any more... but I still want to protect that this works
    //  It's because they need to be sorted by their indices, not their IDs
    // tslint:disable-next-line ban
    xit("keeps the comma class IDs in each level sorted", (): void => {
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.MEDIUM ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.MEDIUM ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.HIGH ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.HIGH ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.ULTRA ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.ULTRA ])),
        )
        expect(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.EXTREME ]).toEqual(
            sort(shallowClone(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevelId.EXTREME ])),
        )
    })
})
