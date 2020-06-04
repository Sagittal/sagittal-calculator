const {calculateCommaFromPosition} = require("../../../../src/boundsAnalysis/utilities/calculateCommaFromPosition")

describe("calculateCommaFromPosition", () => {
    it("given a position, returns the comma with that position", () => {
        const position = 3.37801872846485

        const result = calculateCommaFromPosition(position)

        expect(result).toEqual({
            introducingLevel: "High",
            position: 3.37801872846485,
            symbol: ")|",
            mina: 7,
        })
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = calculateCommaFromPosition(position)

        expect(result).toEqual(undefined)
    })
})
