import { presentNumber } from "../../../../src/general/io"

describe("presentNumber", () => {
    it("always shows 3 decimal places", () => {
        expect(presentNumber(0.12340)).toBe("0.123")
    })

    it("includes a trailing zero", () => {
        expect(presentNumber(12.340)).toBe("12.340")
    })
})
