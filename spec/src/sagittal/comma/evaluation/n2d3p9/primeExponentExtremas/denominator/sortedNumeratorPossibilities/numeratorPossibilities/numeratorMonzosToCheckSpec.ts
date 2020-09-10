import { Direction, Max, Monzo } from "../../../../../../../../../../src/general"
import { N2D3P9 } from "../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeNumeratorMonzosToCheckGivenMaxN2D3P9 } from "../../../../../../../../../../src/sagittal/comma/evaluation/n2d3p9/primeExponentExtremas/denominator/sortedNumeratorPossibilities/numeratorPossibilities/numeratorMonzosToCheck"

describe("computeNumeratorMonzosToCheckGivenMaxN2D3P9", () => {
    it("returns the monzos for numerators worth checking", () => {
        const maxN2D3P9 = 3 as Max<N2D3P9>

        const actual = computeNumeratorMonzosToCheckGivenMaxN2D3P9(maxN2D3P9)

        const expected = [
            [],             // N2D3P9(1)  = 1

            [0, 0, 1],      // N2D3P9(5)  = 1.39

            [0, 0, 0, 1],   // N2D3P9(7)  = 2.72

            // this one is not less than 3, but the only thing that's right to worry about at this point is that
            // 5^1 and 7^1 are okay, so we gotta try them together to be safe
            [0, 0, 1, 1],   // N2D3P9(35) = 6.81 <---- GREATER THAN 3
        ] as Array<Monzo<{ direction: Direction.SUPER, rough: 5 }>>
        expect(actual).toEqual(expected)
    })
})
