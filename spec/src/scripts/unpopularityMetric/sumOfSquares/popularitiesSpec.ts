import { COMMA_POPULARITIES, Popularity } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { computeMonzoFromRatio, Count } from "../../../../../src/general"
import { computeRatioFromMonzo } from "../../../../../src/general/music/ratioFromMonzo"
import { unpopularityMetricSettings } from "../../../../../src/scripts/unpopularityMetric/globals"

describe("unpopularities", () => {
    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top is 80 or less", () => {
        const onlyTop = 80 as Count<Popularity>
        unpopularityMetricSettings.onlyTop = onlyTop

        const originalRatios = COMMA_POPULARITIES.slice(0, onlyTop).map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })

    it("is the case that all the ratios capable of being parsed by monzo from ratio correctly when only top encompasses all the popularities", () => {
        const onlyTop = 820 as Count<Popularity>
        unpopularityMetricSettings.onlyTop = onlyTop

        const originalRatios = COMMA_POPULARITIES.slice(0, onlyTop).map(popularity => popularity.fiveRoughRatio)

        const monzos = originalRatios.map(computeMonzoFromRatio)
        const ratios = monzos.map(computeRatioFromMonzo)

        expect(ratios).toEqual(originalRatios)
    })
})
