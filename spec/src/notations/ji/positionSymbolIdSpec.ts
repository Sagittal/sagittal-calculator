import { Cents, Id } from "../../../../src/general"
import { JiSymbol } from "../../../../src/notations/ji"
import { computePositionSymbolId } from "../../../../src/notations/ji/positionSymbolId"

describe("computePositionSymbolId", () => {
    it("given a position, returns the symbol at that position", () => { // TODO: this could be used for the calculator?
        const position: Cents = 3.37801872846485 as Cents

        const result = computePositionSymbolId(position)

        expect(result).toEqual(7 as Id<JiSymbol>)
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const result = computePositionSymbolId(position)

        expect(result).toEqual(undefined)
    })
})
