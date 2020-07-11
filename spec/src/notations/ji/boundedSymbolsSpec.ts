import { computeBoundedSymbols } from "../../../../src/notations/ji/boundedSymbols"
import { Level } from "../../../../src/notations/ji/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeBoundedSymbols", () => {
    it("gives the symbols of the symbols immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedSymbols(45 as Cents, Level.ULTRA)).toEqual([
            "'//|",
            ")//|",
        ])
    })
})
