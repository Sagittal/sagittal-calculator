import { Id, Monzo } from "../../../../../src/general"
import { Comma, JiSymbol } from "../../../../../src/sagittal"
import { addMaybeJiSymbol } from "../../../../../src/sagittal/notations/ji"

describe("addMaybeJiSymbol", () => {
    it(`adds the ASCII for a Sagittal JI symbol if there is one whose primary comma has this name`, () => {
        const comma: Comma = {
            monzo: [-5, 1, 0, 0, 1] as Monzo,
        } as Comma

        const actual = addMaybeJiSymbol(comma)

        expect(actual).toEqual({
            symbolId: 115 as Id<JiSymbol>,
            monzo: [-5, 1, 0, 0, 1] as Monzo,
        } as Comma & { symbolId: Id<JiSymbol> })
    })

    it(`leaves the comma unchanged if there is no Sagittal JI symbol whose primary comma has this name`, () => {
        const comma: Comma = {
            monzo: [20, -12, -1, 2, 0, 0, 0, -1] as Monzo,
        } as Comma

        const actual = addMaybeJiSymbol(comma)

        expect(actual).toEqual(comma)
    })
})
