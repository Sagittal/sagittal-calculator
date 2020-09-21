import { Id, Monzo } from "../../../../../src/general"
import { SymbolClass } from "../../../../../src/sagittal/notations"
import { computeExactlyNotatingSymbolClassIds } from "../../../../../src/scripts/popular23FreeClass/exactlyNotatingSymbolClass/exactlyNotatingSymbolClassIds"

describe("computeExactlyNotatingSymbolClassIds", (): void => {
    it(
        `returns a list of JI Notation symbol class IDs for symbol classes which exactly notate this pitch relative to a skeleton of Pythagorean nominals`,
        (): void => {
            const monzo: Monzo = [0, -2, 0, 0, 1] as Monzo

            const actual = computeExactlyNotatingSymbolClassIds({ monzo })

            const expected = [
                79,     // 1/11S
                114,    // 11M
                131,    // 1/11L
            ] as Array<Id<SymbolClass>>
            expect(actual).toEqual(expected)
        },
    )

    it("another example", (): void => {
        const monzo: Monzo = [0, 0, 1, 1] as Monzo

        const actual = computeExactlyNotatingSymbolClassIds({ monzo })

        const expected = [
            54,     // 1/35C
            89,     // 35S
            104,    // 1/35M
            141,    // 35L
        ] as Array<Id<SymbolClass>>
        expect(actual).toEqual(expected)
    })
})
