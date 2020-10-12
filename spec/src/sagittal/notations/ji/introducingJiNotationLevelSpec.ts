import { Id } from "../../../../../src/general"
import { CommaClass, JiNotationLevel } from "../../../../../src/sagittal/notations"
import { getIntroducingJiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("getIntroducingJiNotationLevel", (): void => {
    it("returns the lowest JI notation level which includes the given comma class id", (): void => {
        expect(getIntroducingJiNotationLevel(12 as Id<CommaClass>)).toBe(JiNotationLevel.MEDIUM)
        expect(getIntroducingJiNotationLevel(36 as Id<CommaClass>)).toBe(JiNotationLevel.HIGH)
        expect(getIntroducingJiNotationLevel(119 as Id<CommaClass>)).toBe(JiNotationLevel.ULTRA)
        expect(getIntroducingJiNotationLevel(60 as Id<CommaClass>)).toBe(JiNotationLevel.EXTREME)
    })

    it("throws an error if the comma class ID is not a member of a JI notation", (): void => {
        expect((): void => {
            getIntroducingJiNotationLevel(200 as Id<CommaClass>)
        }).toThrowError("Comma class ID 200 does not appear in a JI notation level.")
    })
})
