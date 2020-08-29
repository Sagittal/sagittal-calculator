import { Id, Row } from "../../../../../src/general"
import { JiSymbol } from "../../../../../src/sagittal/notations/ji"
import { computeNotatingSymbolRow } from "../../../../../src/scripts/analyzeComma/io"

describe("computeNotatingSymbolRow", () => {
    it("given a JI symbol ID, return formatted data about it", () => {
        const jiSymbolId = 3 as Id<JiSymbol>

        const actual = computeNotatingSymbolRow(jiSymbolId)

        const expected = [
            ".)|",
            "19/5n",
            "1216/1215",
            "[ 6 -5 -1 0 0 0 0 1 ⟩",
            "1.424",
        ] as Row<JiSymbol>
        expect(actual).toEqual(expected)
    })
})
