const {presentMina} = require("../../../../../src/scripts/analyzeBounds/present/mina")

describe("presentMina", () => {
    it("returns a whole number with no decimal positions for whole minas", () => {
        expect(presentMina(110)).toBe("110")
    })

    it("shifts over 2-digit numbers", () => {
        expect(presentMina(50)).toBe(" 50")
    })

    it("shifts over 1-digit numbers", () => {
        expect(presentMina(6)).toBe("  6")
    })

    it("returns a number with three decimal positions for split minas", () => {
        expect(presentMina(51.459235987293823)).toBe(" 51.459")
    })

    it("when it includes decimal places, always includes three", () => {
        expect(presentMina(78.390035457238243)).toBe(" 78.390")
    })

    it("returns a blank string for the last bound (when one of the minas is undefined)", () => {
        expect(presentMina(undefined)).toBe("       ")
    })
})
