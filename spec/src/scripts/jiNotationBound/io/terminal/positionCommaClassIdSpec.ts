import { Id, Monzo, Scamon } from "../../../../../../src/general"
import { CommaClass } from "../../../../../../src/sagittal/notations"
import { computePositionCommaClassId } from "../../../../../../src/scripts/jiNotationBound/io/terminal/positionCommaClassId"

describe("computePositionCommaClassId", (): void => {
    it("given a position, returns the JI Notation comma class ID at that position", (): void => {
        const position = {
            monzo: [-9, 3, 0, 0, 0, 0, 0, 1] as Monzo<{ rational: true }>,
        } as Scamon<{ rational: true }>

        const actual = computePositionCommaClassId(position)

        const expected = 7 as Id<CommaClass>
        expect(actual).toEqual(expected)
    })

    it("does not fail if given an undefined position", (): void => {
        const position = undefined

        const actual = computePositionCommaClassId(position)

        expect(actual).toBeUndefined()
    })
})
