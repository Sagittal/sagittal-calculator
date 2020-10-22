import { Id } from "../../../../../src/general"
import {
    BoundClass,
    JiNotationBoundClass,
    JiNotationLevel,
    JI_NOTATION_LEVELS_BOUND_CLASSES, JI_NOTATION_LEVELS_COMMA_CLASS_IDS,
} from "../../../../../src/sagittal/notations"

describe("JI_NOTATION_LEVELS_BOUND_CLASSES", (): void => {
    it("has the same number of bound classes per JI notation level as the comma class ids", (): void => {
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.MEDIUM ].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.MEDIUM ].length)      // 11
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.HIGH ].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.HIGH ].length)        // 27
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.ULTRA ].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.ULTRA ].length)       // 47
        expect(JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.EXTREME ].length)
            .toBe(JI_NOTATION_LEVELS_COMMA_CLASS_IDS[ JiNotationLevel.EXTREME ].length)     // 123
    })

    it("gives the correct bound class IDs for the Medium level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.MEDIUM ]
            .map((jiNotationBoundClass: JiNotationBoundClass): Id<BoundClass> => jiNotationBoundClass.id)

        const expected = [
            5, 16, 27, 38, 51, 63, 74, 86, 96, 109, 122,
        ] as Array<Id<BoundClass>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the High level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.HIGH ]
            .map((jiNotationBoundClass: JiNotationBoundClass): Id<BoundClass> => jiNotationBoundClass.id)

        const expected = [
            2, 9, 13, 18, 22, 27, 31, 35, 38, 41, 46, 55, 60, 65, 68, 72, 79, 81, 85, 89, 96, 101, 105, 111, 115, 120,
            122,
        ] as Array<Id<BoundClass>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Ultra level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.ULTRA ]
            .map((jiNotationBoundClass: JiNotationBoundClass): Id<BoundClass> => jiNotationBoundClass.id)

        const expected = [
            2, 3, 5, 9, 13, 14, 16, 18, 22, 24, 25, 27, 31, 35, 38, 40, 41, 46, 47, 49, 52, 55, 60, 63, 65, 66, 68, 72,
            74, 77, 79, 80, 81, 85, 86, 89, 94, 96, 101, 105, 106, 109, 111, 115, 118, 120, 122,
        ] as Array<Id<BoundClass>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Extreme level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUND_CLASSES[ JiNotationLevel.EXTREME ]
            .map((jiNotationBoundClass: JiNotationBoundClass): Id<BoundClass> => jiNotationBoundClass.id)

        const expected = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
            83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
            108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
        ] as Array<Id<BoundClass>>
        expect(actual).toEqual(expected)
    })
})
