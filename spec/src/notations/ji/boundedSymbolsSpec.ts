import { Cents } from "../../../../src/general"
import { Level } from "../../../../src/notations/ji"
import { computeBoundedSymbols } from "../../../../src/notations/ji/boundedSymbols"

describe("computeBoundedSymbols", () => {
    it("gives the symbols of the symbols immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedSymbols(45 as Cents, Level.ULTRA)).toEqual([
            "'//|",
            ")//|",
        ])
    })
})
