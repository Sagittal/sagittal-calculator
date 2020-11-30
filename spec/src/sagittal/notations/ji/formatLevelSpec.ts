import {formatJiNotationLevel, JiNotationLevelId} from "../../../../../src/sagittal"

describe("formatJiNotationLevel", (): void => {
    it("makes JI levels nice for people to read", (): void => {
        expect(formatJiNotationLevel(JiNotationLevelId.ULTRA)).toBe("Ultra")
        expect(formatJiNotationLevel(JiNotationLevelId.EXTREME)).toBe("Extreme")
    })
})
