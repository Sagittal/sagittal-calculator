import { JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { isWithinJiNotationLevel } from "../../../../../src/sagittal/notations/ji/isWithinLevel"

describe("isWithinJiNotationLevel", (): void => {
    it(
        "returns true if the JI notation level is below or at to the target JI notation level, and false otherwise",
        (): void => {
            expect(isWithinJiNotationLevel(JiNotationLevel.MEDIUM, JiNotationLevel.INSANE)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.HIGH, JiNotationLevel.INSANE)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.ULTRA, JiNotationLevel.INSANE)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.EXTREME, JiNotationLevel.INSANE)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.INSANE, JiNotationLevel.INSANE)).toBe(true)

            expect(isWithinJiNotationLevel(JiNotationLevel.MEDIUM, JiNotationLevel.EXTREME)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.HIGH, JiNotationLevel.EXTREME)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.ULTRA, JiNotationLevel.EXTREME)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.EXTREME, JiNotationLevel.EXTREME)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.INSANE, JiNotationLevel.EXTREME)).toBe(false)

            expect(isWithinJiNotationLevel(JiNotationLevel.MEDIUM, JiNotationLevel.ULTRA)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.HIGH, JiNotationLevel.ULTRA)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.ULTRA, JiNotationLevel.ULTRA)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.EXTREME, JiNotationLevel.ULTRA)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.INSANE, JiNotationLevel.ULTRA)).toBe(false)

            expect(isWithinJiNotationLevel(JiNotationLevel.MEDIUM, JiNotationLevel.HIGH)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.HIGH, JiNotationLevel.HIGH)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.ULTRA, JiNotationLevel.HIGH)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.EXTREME, JiNotationLevel.HIGH)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.INSANE, JiNotationLevel.HIGH)).toBe(false)

            expect(isWithinJiNotationLevel(JiNotationLevel.MEDIUM, JiNotationLevel.MEDIUM)).toBe(true)
            expect(isWithinJiNotationLevel(JiNotationLevel.HIGH, JiNotationLevel.MEDIUM)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.ULTRA, JiNotationLevel.MEDIUM)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.EXTREME, JiNotationLevel.MEDIUM)).toBe(false)
            expect(isWithinJiNotationLevel(JiNotationLevel.INSANE, JiNotationLevel.MEDIUM)).toBe(false)
        },
    )
})
