import { Id, Monzo } from "../../../../src/general"
import { computeNotatingSymbolIds, JiSymbol } from "../../../../src/notations/ji"

describe("computeNotatingSymbols", () => { // TODO: you should add a new script for finding these
    it("returns a list of JI symbols which exactly notate this pitch relative to a skeleton of Pythagorean nominals", () => {
        const monzo: Monzo = [0, -2, 0, 0, 1] as Monzo

        const result = computeNotatingSymbolIds(monzo)

        expect(result).toEqual([
            80,     // 1/11S
            115,    // 11M
            132,    // 1/11L
        ] as Array<Id<JiSymbol>>)
    })
})
