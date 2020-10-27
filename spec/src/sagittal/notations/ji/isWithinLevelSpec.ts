import { JiNotationLevelId } from "../../../../../src/sagittal/notations/ji"
import { isWithinJiNotationLevel } from "../../../../../src/sagittal/notations/ji/isWithinLevel"

describe("isWithinJiNotationLevel", (): void => {
    it("returns true if the JI notation level is below or at to the target JI notation level, and false otherwise         ", (): void => {
        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.INSANE)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.INSANE)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.INSANE)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.INSANE)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.INSANE)).toBe(true)

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.EXTREME)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.EXTREME)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.EXTREME)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.EXTREME)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.EXTREME)).toBe(false)

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.ULTRA)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.ULTRA)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.ULTRA)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.ULTRA)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.ULTRA)).toBe(false)

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.HIGH)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.HIGH)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.HIGH)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.HIGH)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.HIGH)).toBe(false)

        expect(isWithinJiNotationLevel(JiNotationLevelId.MEDIUM, JiNotationLevelId.MEDIUM)).toBe(true)
        expect(isWithinJiNotationLevel(JiNotationLevelId.HIGH, JiNotationLevelId.MEDIUM)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.ULTRA, JiNotationLevelId.MEDIUM)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.EXTREME, JiNotationLevelId.MEDIUM)).toBe(false)
        expect(isWithinJiNotationLevel(JiNotationLevelId.INSANE, JiNotationLevelId.MEDIUM)).toBe(false)
    })
})
