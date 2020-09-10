import { Max, Monzo } from "../../../../src/general/math"
import { N2D3P9 } from "../../../../src/sagittal/comma/evaluation/n2d3p9"
import { computeMaybePopular23FreeClass } from "../../../../src/scripts/popular23FreeClasses/maybePopular23FreeClass"

describe("computeMaybePopular23FreeClass", () => {
    it("returns a popular 2,3-free class if the N2D3P9 is under the max and the monzo is super", () => {
        const twoThreeFreeMonzo = [0, 0, 1] as Monzo<{ rough: 5 }>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeDefined()
    })

    it("returns undefined if the N2D3P9 is under the max but the monzo is sub", () => {
        const twoThreeFreeMonzo = [0, 0, -1] as Monzo<{ rough: 5 }>
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })

    it("returns undefined if the N2D3P9 is over the max, even if the monzo is super", () => {
        const twoThreeFreeMonzo = [0, 0, 1] as Monzo<{ rough: 5 }>
        const maxN2D3P9 = 1 as Max<N2D3P9>

        const actual = computeMaybePopular23FreeClass(twoThreeFreeMonzo, maxN2D3P9)

        expect(actual).toBeUndefined()
    })
})
