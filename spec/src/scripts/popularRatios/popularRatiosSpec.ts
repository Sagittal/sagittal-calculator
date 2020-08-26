import { Max } from "../../../../src/general"
import { N2D3P9 } from "../../../../src/general/music/n2d3p9"
import { computePopularRatios } from "../../../../src/scripts/popularRatios/popularRatios"

describe("computePopularRatios", () => {
    it("returns a ranked (and sorted) list of the most popular ratios with N2D3P9 less than the requested amount", () => {
        const maxN2D3P9 = 5 as Max<N2D3P9>

        const actual = computePopularRatios(maxN2D3P9)

        const expected = [

        ]
    })
})
