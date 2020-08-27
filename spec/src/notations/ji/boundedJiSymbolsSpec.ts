import { Cents } from "../../../../src/general"
import { SymbolLongAscii } from "../../../../src/notations"
import { Level } from "../../../../src/notations/ji"
import { computeBoundedJiSymbols } from "../../../../src/notations/ji/boundedJiSymbols"

describe("computeBoundedJiSymbols", () => {
    it("gives the symbols of the symbols immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedJiSymbols(45 as Cents, Level.ULTRA)).toEqual([
            "'//|" as SymbolLongAscii,
            ")//|" as SymbolLongAscii,
        ])
    })
})
