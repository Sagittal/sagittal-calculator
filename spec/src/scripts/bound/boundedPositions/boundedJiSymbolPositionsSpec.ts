import { Cents } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal"
import { computeBoundedJiSymbolPositions } from "../../../../../src/scripts/bound/boundedPositions"

describe("computeBoundedJiSymbolPositions", (): void => {
    it("gives the positions of the symbol immediately lesser and greater than the position at that level", (): void => {
        expect(computeBoundedJiSymbolPositions(9 as Cents, Level.MEDIUM)).toBeCloseToArray([
            5.7578022033852 as Cents, // |(
            9.6879606428187 as Cents, // )|(
        ])
    })

    it("when the position is greater than the greatest symbol at the level, gives the position of the greatest symbol for the lesser symbol and undefined for the greater symbol", (): void => {
        expect(computeBoundedJiSymbolPositions(68.4 as Cents, Level.ULTRA)).toBeCloseToArray([
            67.2910616147857 as Cents, // )|\\
            undefined,
        ])
    })
})
