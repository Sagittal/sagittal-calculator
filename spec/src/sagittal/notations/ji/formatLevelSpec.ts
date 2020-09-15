import { JiNotationLevel } from "../../../../../src/sagittal"
import { formatJiNotationLevel } from "../../../../../src/sagittal/notations/ji"

describe("formatJiNotationLevel", (): void => {
    it("makes JI levels nice for people to read", (): void => {
        expect(formatJiNotationLevel(JiNotationLevel.ULTRA)).toBe("Ultra")
        expect(formatJiNotationLevel(JiNotationLevel.EXTREME)).toBe("Extreme")
    })
})
