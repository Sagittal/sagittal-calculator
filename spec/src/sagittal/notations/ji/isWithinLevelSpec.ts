import {JiNotationLevelId} from "../../../../../src/sagittal"
import {isWithinJiNotationLevel} from "../../../../../src/sagittal/notations/ji/isWithinLevel"

describe("isWithinJiNotationLevel", (): void => {
    it("returns true if the JI notation level is below or at to the target JI notation level, and false otherwise         ", (): void => {
        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.INSANE)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.INSANE)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.INSANE)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.INSANE)).toBeTruthy()

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.EXTREME)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.EXTREME)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.EXTREME)).toBeFalsy()

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.ULTRA)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.ULTRA)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.ULTRA)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.ULTRA)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.ULTRA)).toBeFalsy()

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.HIGH)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.HIGH)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.HIGH)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.HIGH)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.HIGH)).toBeFalsy()

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.MEDIUM)).toBeTruthy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.MEDIUM)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.MEDIUM)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.MEDIUM)).toBeFalsy()
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.MEDIUM)).toBeFalsy()
    })
})
