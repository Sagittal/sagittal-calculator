import { Max, Monzo } from "../../../../src/general/math"
import { N2D3P9 } from "../../../../src/general/music/n2d3p9"
import { computeMaybePopularRatio } from "../../../../src/scripts/popularRatios/maybePopularRatio"

describe("computeMaybePopularRatio", () => {
    it("returns a popular ratio if the N2D3P9 is under the max and the monzo is super", () => {
        const monzo = [0, 0, 1] as Monzo
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopularRatio(monzo, maxN2D3P9)

        expect(actual).toBeDefined()
    })

    it("returns undefined if the N2D3P9 is under the max but the monzo is sub", () => {
        const monzo = [0, 0, -1] as Monzo
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopularRatio(monzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })

    it("returns undefined if the N2D3P9 is over the max, even if the monzo is super", () => {
        const monzo = [0, 0, 1] as Monzo
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computeMaybePopularRatio(monzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })
})
