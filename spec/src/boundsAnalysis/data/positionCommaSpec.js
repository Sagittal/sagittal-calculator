const {computePositionComma} = require("../../../../src/boundsAnalysis/data/positionComma")

describe("computePositionComma", () => {
    it("given a position, returns the comma with that position", () => {
        const position = 3.37801872846485

        const result = computePositionComma(position)

        expect(result).toEqual({
            introducingLevel: "HIGH",
            position: 3.37801872846485,
            ascii: ")|",
            unicode: '',
            mina: 7,
            index: 7,
        })
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = computePositionComma(position)

        expect(result).toEqual(undefined)
    })
})
