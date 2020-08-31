import { Cents, Id } from "../../../../../../src/general"
import { JiSymbol } from "../../../../../../src/sagittal/notations/ji"
import { computePositionJiSymbolId } from "../../../../../../src/scripts/bound/io/terminal/positionJiSymbolId"

describe("computePositionJiSymbolId", () => {
    it("given a position, returns the symbol at that position", () => {
        const position: Cents = 3.37801872846485 as Cents

        const actual = computePositionJiSymbolId(position)

        const expected = 7 as Id<JiSymbol>
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", () => {
        const position = undefined

        const actual = computePositionJiSymbolId(position)

        expect(actual).toBeUndefined()
    })
})
