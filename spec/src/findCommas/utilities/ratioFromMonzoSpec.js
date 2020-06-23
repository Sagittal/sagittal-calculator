const {computeRatioFromMonzo} = require("../../../../src/findCommas/utilities/ratioFromMonzo")

describe("ratioFromMonzo", () => {
    it("converts a monzo into a two-element array representing the numerator and denominator", () => {
        const monzo = [-4, 9, -2, -2]

        const result = computeRatioFromMonzo(monzo)

        expect(result).toEqual([19683, 19600])
    })
})
