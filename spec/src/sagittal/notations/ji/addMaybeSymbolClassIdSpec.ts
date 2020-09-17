import { Comma, Id, Monzo } from "../../../../../src/general"
import { SymbolClass } from "../../../../../src/sagittal"
import { addMaybeSymbolClassId } from "../../../../../src/sagittal/notations/ji"

describe("addMaybeSymbolClassId", (): void => {
    it(
        `adds the ASCII for a Sagittal JI Notation symbol class if there is one whose primary comma has this name`,
        (): void => {
        const comma: Comma = {
            monzo: [-5, 1, 0, 0, 1] as Monzo,
        } as Comma

        const actual = addMaybeSymbolClassId(comma)

        expect(actual).toEqual({
            symbolClassId: 115 as Id<SymbolClass>,
            monzo: [-5, 1, 0, 0, 1] as Monzo,
        } as Comma & { symbolClassId: Id<SymbolClass> })
    }
    )

    it(
        `leaves the comma unchanged if there is no Sagittal JI Notation symbol class whose primary comma has this name`,
        (): void => {
            const comma: Comma = {
                monzo: [20, -12, -1, 2, 0, 0, 0, -1] as Monzo,
            } as Comma

            const actual = addMaybeSymbolClassId(comma)

            expect(actual).toEqual(comma)
        },
    )
})
