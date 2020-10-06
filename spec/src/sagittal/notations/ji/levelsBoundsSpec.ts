import { Id } from "../../../../../src/general"
import {
    JiNotationBound,
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

    it("gives the correct bound IDs for the Medium level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.MEDIUM ]
            .map((jiNotationBound: JiNotationBound): Id<JiNotationBound> => jiNotationBound.id)

        const expected = [
            5, 16, 27, 38, 51, 63, 74, 86, 96, 109, 122, 135, 148,
        ] as Array<Id<JiNotationBound>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the High level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.HIGH ]
            .map((jiNotationBound: JiNotationBound): Id<JiNotationBound> => jiNotationBound.id)

        const expected = [
            2, 9, 13, 18, 22, 27, 31, 35, 38, 41, 46, 55, 60, 65, 68, 72, 79, 81, 85, 89, 96, 101, 105, 111, 115, 120,
            124, 129, 133, 139, 143, 148,
        ] as Array<Id<JiNotationBound>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Ultra level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.ULTRA ]
            .map((jiNotationBound: JiNotationBound): Id<JiNotationBound> => jiNotationBound.id)

        const expected = [
            2, 3, 5, 9, 13, 14, 16, 18, 22, 24, 25, 27, 31, 35, 38, 40, 41, 46, 47, 49, 52, 55, 60, 63, 65, 66, 68, 72,
            74, 77, 79, 80, 81, 85, 86, 89, 94, 96, 101, 105, 106, 109, 111, 115, 118, 120, 124, 126, 129, 133, 135,
            138, 139, 143, 148,
        ] as Array<Id<JiNotationBound>>
        expect(actual).toEqual(expected)
    })

    it("gives the correct bound IDs for the Extreme level", (): void => {
        const actual = JI_NOTATION_LEVELS_BOUNDS[ JiNotationLevel.EXTREME ]
            .map((jiNotationBound: JiNotationBound): Id<JiNotationBound> => jiNotationBound.id)

        const expected = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
            29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55,
            56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82,
            83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107,
            108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128,
            129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148,
        ] as Array<Id<JiNotationBound>>
        expect(actual).toEqual(expected)
    })
})
