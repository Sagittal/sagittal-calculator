import { Id, Monzo } from "../../../../../src/general"
import { computeNotatingJiSymbolIds, JiSymbol } from "../../../../../src/sagittal/notations/ji"

describe("computeNotatingJiSymbols", () => {
    it(
        `returns a list of JI symbols which exactly notate this pitch relative to a skeleton of Pythagorean nominals`,
        () => {
            const monzo: Monzo = [0, -2, 0, 0, 1] as Monzo

            const actual = computeNotatingJiSymbolIds(monzo)

            const expected = [
                80,     // 1/11S
                115,    // 11M
                132,    // 1/11L
            ] as Array<Id<JiSymbol>>
            expect(actual).toEqual(expected)
        },
    )

    it("another example", () => {
        const monzo: Monzo = [0, 0, 1, 1] as Monzo

        const actual = computeNotatingJiSymbolIds(monzo)

        const expected = [
            54,     // 1/35C
            90,     // 35S
            105,    // 1/35M
            142,    // 35L
        ] as Array<Id<JiSymbol>>
        expect(actual).toEqual(expected)
    })
})
