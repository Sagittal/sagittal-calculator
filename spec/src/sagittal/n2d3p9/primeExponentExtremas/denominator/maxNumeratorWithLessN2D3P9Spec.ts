import { Max, Monzo, Numerator } from "../../../../../../src/general"
import { N2D3P9 } from "../../../../../../src/sagittal/n2d3p9"
import { computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9 } from "../../../../../../src/sagittal/n2d3p9/primeExponentExtremas/denominator/maxNumeratorWithLessN2D3P9"

describe("computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9", () => {
    it("chooses the max numerator with less N2D3P9 than the max N2D3P9", () => {
        const numeratorMonzosToCheck = [
            [],             // N2D3P9(1)  = 1
            [0, 0, 1],      // N2D3P9(5)  = 1.39
            [0, 0, 0, 1],   // N2D3P9(7)  = 2.72 (this is the winner: less than 3, but max N2D3P9 otherwise)
            [0, 0, 1, 1],   // N2D3P9(35) = 6.81 (not less than 3, so it will get filtered out)
        ] as Monzo[]
        const maxN2D3P9 = 3 as Max<N2D3P9>

        const actual = computeMaxNumeratorWithLessN2D3P9ThanMaxN2D3P9(numeratorMonzosToCheck, maxN2D3P9)

        const expected = 7 as Max<Numerator>
        expect(actual).toBe(expected)
    })
})
