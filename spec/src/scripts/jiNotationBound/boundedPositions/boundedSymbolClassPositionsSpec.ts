import { Cents } from "../../../../../src/general"
import { JiNotationLevel } from "../../../../../src/sagittal"
import { computeBoundedSymbolClassPositions } from "../../../../../src/scripts/jiNotationBound/boundedPositions"

describe("computeBoundedSymbolClassPositions", (): void => {
    it(
        "gives the positions of the symbol classes immediately lesser and greater than the position at that JI notation level",
        (): void => {
            const position = 9 as Cents
            const jiNotationLevel = JiNotationLevel.MEDIUM

            const actual = computeBoundedSymbolClassPositions(position, jiNotationLevel)

            const expected = [
                5.757802 as Cents, // |(
                9.687960 as Cents, // )|(
            ]
            expect(actual).toBeCloseToArray(expected)
        },
    )

    it("when the position is greater than the greatest symbol class at the JI notation level, gives the position of the greatest symbol class for the lesser symbol and undefined for the greater symbol", (): void => {
        const position = 68.4 as Cents
        const jiNotationLevel = JiNotationLevel.ULTRA

        const actual = computeBoundedSymbolClassPositions(position, jiNotationLevel)

        const expected = [
            67.291062 as Cents, // )|\\
            undefined,
        ]
        expect(actual).toBeCloseToArray(expected)
    })
})
