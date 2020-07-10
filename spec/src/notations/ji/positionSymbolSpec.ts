import {computePositionSymbol} from "../../../../src/notations/ji/positionSymbol"

describe("computePositionSymbol", () => {
    it("given a position, returns the symbol at that position", () => { // TODO: this could be used for the calculator?
        const position = 3.37801872846485

        const result = computePositionSymbol(position)

        expect(result).toEqual({
            id: 7,
            ascii: ")|",
            unicode: "",
            introducingLevel: "HIGH",
            mina: 7,
            primaryComma: {
                monzo: [-9, 3, 0, 0, 0, 0, 0, 1],
                position: 3.37801872846485,
            },
            elements: [")|"],
        })
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = computePositionSymbol(position)

        expect(result).toEqual(undefined)
    })
})
