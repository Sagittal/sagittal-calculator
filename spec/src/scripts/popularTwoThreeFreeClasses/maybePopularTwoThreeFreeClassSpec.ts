import { Max, Monzo } from "../../../../src/general/math"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeMaybePopularTwoThreeFreeClass } from "../../../../src/scripts/popularTwoThreeFreeClasses/maybePopularTwoThreeFreeClass"

describe("computeMaybePopularTwoThreeFreeClass", () => {
    it("returns a popular 2,3-free class if the N2D3P9 is under the max and the monzo is super", () => {
        const twoThreeFreeMonzo = [0, 0, 1] as Monzo
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopularTwoThreeFreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeDefined()
    })

    it("returns undefined if the N2D3P9 is under the max but the monzo is sub", () => {
        const twoThreeFreeMonzo = [0, 0, -1] as Monzo
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopularTwoThreeFreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })

    it("returns undefined if the N2D3P9 is over the max, even if the monzo is super", () => {
        const twoThreeFreeMonzo = [0, 0, 1] as Monzo
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computeMaybePopularTwoThreeFreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })
})
