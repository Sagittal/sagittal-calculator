const {computeSizeCategory} = require("../../../../src/findTinaPrimaryCommas/utilities/sizeCategory")

describe("computeSizeCategory", () => {
    it("returns the correct size category per the amount of cents", () => {
        expect(computeSizeCategory(1)).toBe("n")
        expect(computeSizeCategory(2)).toBe("s")
        expect(computeSizeCategory(10)).toBe("k")
        expect(computeSizeCategory(20)).toBe("C")
        expect(computeSizeCategory(40)).toBe("S")
        expect(computeSizeCategory(50)).toBe("M")
        expect(computeSizeCategory(60)).toBe("L")
    })

    it("works when not abbreviated", () => {
        expect(computeSizeCategory(1, {abbreviated: false})).toBe("schismina")
        expect(computeSizeCategory(2, {abbreviated: false})).toBe("schisma")
        expect(computeSizeCategory(10, {abbreviated: false})).toBe("kleisma")
        expect(computeSizeCategory(20, {abbreviated: false})).toBe("Comma")
        expect(computeSizeCategory(40, {abbreviated: false})).toBe("Small diesis")
        expect(computeSizeCategory(50, {abbreviated: false})).toBe("Medium diesis")
        expect(computeSizeCategory(60, {abbreviated: false})).toBe("Large diesis")
    })
})
