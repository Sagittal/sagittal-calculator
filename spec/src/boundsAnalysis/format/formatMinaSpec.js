const {formatMina} = require("../../../../src/boundsAnalysis/format/formatMina")

describe("formatMina", () => {
    it("returns a whole number with no decimal positions for whole minas", () => {
        expect(formatMina(110)).toBe("110")
    })

    it("shifts over 2-digit numbers", () => {
        expect(formatMina(50)).toBe(" 50")
    })

    it("shifts over 1-digit numbers", () => {
        expect(formatMina(6)).toBe("  6")
    })

    it("returns a number with three decimal positions for split minas", () => {
        expect(formatMina(51.459235987293823)).toBe(" 51.459")
    })

    it('when it includes decimal places, always includes three', () => {
        expect(formatMina(78.390035457238243)).toBe(" 78.390")
    })
})
