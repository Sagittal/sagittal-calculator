import { Id, Monzo, Pitch } from "../../../../../../src/general"
import { SymbolClass } from "../../../../../../src/sagittal/notations"
import { computePositionSymbolClassId } from "../../../../../../src/scripts/jiNotationBound/io/terminal/positionSymbolClassId"

describe("computePositionSymbolClassId", (): void => {
    it("given a position, returns the JI Notation symbol class ID at that position", (): void => {
        const position = {
            monzo: [-9, 3, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
        } as Pitch<{ rational: true }>

        const actual = computePositionSymbolClassId(position)

        const expected = 7 as Id<SymbolClass>
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", (): void => {
        const position = undefined

        const actual = computePositionSymbolClassId(position)

        expect(actual).toBeUndefined()
    })
})
