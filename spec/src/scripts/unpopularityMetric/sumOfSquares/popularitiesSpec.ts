import { computeMonzoFromRatio } from "../../../../../src/general"
import { computeRatioFromMonzo } from "../../../../../src/general/music/ratioFromMonzo"
import { COMMA_POPULARITIES } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("unpopularities", () => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", () => {
        const originalRatios = COMMA_POPULARITIES.map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })
})
