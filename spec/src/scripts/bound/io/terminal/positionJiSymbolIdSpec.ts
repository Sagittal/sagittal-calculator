import { Cents, Id } from "../../../../../../src/general"
import { JiSymbol } from "../../../../../../src/sagittal/notations/ji"
import { computePositionJiSymbolId } from "../../../../../../src/scripts/bound/io/terminal/positionJiSymbolId"

describe("computePositionJiSymbolId", (): void => {
    it("given a position, returns the symbol at that position", (): void => {
        const position: Cents = 3.378019 as Cents

        const actual = computePositionJiSymbolId(position)

        const expected = 7 as Id<JiSymbol>
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", (): void => {
        const position = undefined

        const actual = computePositionJiSymbolId(position)

        expect(actual).toBeUndefined()
    })
})
