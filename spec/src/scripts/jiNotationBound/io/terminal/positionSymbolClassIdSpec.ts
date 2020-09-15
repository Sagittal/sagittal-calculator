import { Cents, Id } from "../../../../../../src/general"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { computePositionJiNotationSymbolClassId } from "../../../../../../src/scripts/jiNotationBound/io/terminal/positionSymbolClassId"

describe("computePositionJiNotationSymbolClassId", (): void => {
    it("given a position, returns the JI Notation symbol class ID at that position", (): void => {
        const position: Cents = 3.378019 as Cents

        const actual = computePositionJiNotationSymbolClassId(position)

        const expected = 7 as Id<SymbolClass>
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", (): void => {
        const position = undefined

        const actual = computePositionJiNotationSymbolClassId(position)

        expect(actual).toBeUndefined()
    })
})
