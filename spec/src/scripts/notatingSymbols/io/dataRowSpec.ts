import { Id } from "../../../../../src/general"
import { JiSymbol } from "../../../../../src/notations/ji"
import { computeNotatingSymbolDataRow } from "../../../../../src/scripts/notatingSymbols/io"

describe("computeNotatingSymbolDataRow", () => {
    it("given a JI symbol ID, return formatted data about it", () => {
        const jiSymbolId = 3 as Id<JiSymbol>

        const actual = computeNotatingSymbolDataRow(jiSymbolId)

        expect(actual).toBe(".)|\t19/5n\t1216/1215\t[ 6 -5 -1 0 0 0 0 1 ⟩\t1.424")
    })
})
