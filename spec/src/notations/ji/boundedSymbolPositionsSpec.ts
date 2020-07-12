import { computeBoundedSymbolPositions } from "../../../../src/notations/ji/boundedSymbolPositions"
import { Cents } from "../../../../src/utilities/types"
import { Level } from "../../../../src/notations/ji/types"

describe("computeBoundedSymbolPositions", () => {
    it("gives the positions of the symbol immediately lesser and greater than the position at that level", () => {
        expect(computeBoundedSymbolPositions(9 as Cents, Level.MEDIUM)).toEqual([
            5.7578022033852 as Cents, // |(
            9.6879606428187 as Cents, // )|(
        ])
    })

    it("when the position is greater than the greatest symbol at the level, gives the position of the greatest symbol for the lesser symbol and undefined for the greater symbol", () => {
        expect(computeBoundedSymbolPositions(68.4 as Cents, Level.ULTRA)).toEqual([
            67.2910616147857 as Cents, // )|\\
            undefined,
        ])
    })
})
