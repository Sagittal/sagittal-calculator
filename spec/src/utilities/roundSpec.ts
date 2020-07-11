import { round } from "../../../src/utilities/round"

describe("round", () => {
    const num: number = 29.59845456

    it("rounds to the precision specified", () => {
        expect(round(num, 1)).toBe(29.6)
        expect(round(num, 5)).toBe(29.59845)
        expect(round(num, 6)).toBe(29.598455)
    })

    it("defaults to precision 0", () => {
        expect(round(num)).toBe(30)
    })
})
