import { JiNotationLevelId } from "../../../../../src/sagittal"
import { formatJiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("formatJiNotationLevel", (): void => {
    it("makes JI levels nice for people to read", (): void => {
        expect(formatJiNotationLevel(JiNotationLevelId.ULTRA)).toBe("Ultra")
        expect(formatJiNotationLevel(JiNotationLevelId.EXTREME)).toBe("Extreme")
    })
})
