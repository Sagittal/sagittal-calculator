import { Direction, Max, RationalMonzo, RationalNumerator } from "../../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9"
import { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 } from "../../../../../../../../src/sagittal/ji/twoThreeFreeClass/n2d3p9/primeExponentExtremas/denominator/maxNumeratorWithLessN2D3P9"

describe("computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9", (): void => {
    it("chooses the max numerator with less N2D3P9 than the max N2D3P9", (): void => {
        const numeratorMonzosToCheck = [
            [],             // N2D3P9(1)  = 1
            [0, 0, 1],      // N2D3P9(5)  = 1.39
            [0, 0, 0, 1],   // N2D3P9(7)  = 2.72 (this is the winner: less than 3, but max N2D3P9 otherwise)
            [0, 0, 1, 1],   // N2D3P9(35) = 6.81 (not less than 3, so it will get filtered out)
        ] as Array<RationalMonzo<{ irrational: false, integer: true, direction: Direction.SUPER, rough: 5 }>>
        const maxN2D3P9 = 3 as Max<N2D3P9>

        const actual = computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(numeratorMonzosToCheck, maxN2D3P9)

        const expected = 7 as Max<RationalNumerator>
        expect(actual).toBe(expected)
    })
})
