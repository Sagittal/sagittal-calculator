import { Id } from "../../../../../src/general"
import { Comma } from "../../../../../src/general/music/ji"
import { SymbolClass } from "../../../../../src/sagittal"
import { computeMaybeSymbolClassId } from "../../../../../src/sagittal/notations/ji"

describe("computeMaybeSymbolClassId", (): void => {
    it("if the comma is a primary comma in the Sagittal JI notation, returns the symbol class ID of the symbol class with that primary comma", (): void => {
        const comma: Comma = { monzo: [-5, 1, 0, 0, 1] } as Comma

        const actual = computeMaybeSymbolClassId(comma)

        const expected = 114 as Id<SymbolClass>
        expect(actual).toEqual(expected)
    })

    it("returns nothing otherwise", (): void => {
        const comma: Comma = { monzo: [20, -12, -1, 2, 0, 0, 0, -1] } as Comma

        const actual = computeMaybeSymbolClassId(comma)

        expect(actual).toBeUndefined()
    })
})
