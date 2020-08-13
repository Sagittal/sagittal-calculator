import { COMMA_POPULARITIES } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { computeMonzoFromRatio } from "../../../../../src/general"
import { computeRatioFromMonzo } from "../../../../../src/general/music/ratioFromMonzo"

describe("unpopularities", () => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly", () => {
        const originalRatios = COMMA_POPULARITIES.map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })
})