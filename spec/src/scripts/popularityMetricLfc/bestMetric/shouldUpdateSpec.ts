import { SumOfSquares } from "../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { shouldUpdateBestMetric } from "../../../../../src/scripts/popularityMetricLfc/bestMetric/shouldUpdate"
import { metricFixture } from "../../../../helpers/src/scripts/popularityMetricLfc/fixtures"

describe("shouldUpdateBestMetric", (): void => {
    it("returns false if the sum of squares is undefined (due to an error when calculating)", (): void => {
        const bestMetric = undefined
        const onlyBetterThanSopfgtt = undefined
        const sumOfSquares = undefined

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeFalsy()
    })

    it("returns false if the SoS is defined, but only SoS better than SoPF>3 are accepted and the SoS is not better than it", (): void => {
        const bestMetric = undefined
        const onlyBetterThanSopfgtt = true
        const sumOfSquares = 0.9999 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeFalsy()
    })

    it("returns false if the SoS is defined, only SoS better than SoPF>3 are accepted, and it is better than SoPF>3, but not as good as the best SoS already found for metrics of the same name", (): void => {
        const bestMetric = { ...metricFixture, sumOfSquares: 0.007 as SumOfSquares }
        const onlyBetterThanSopfgtt = true
        const sumOfSquares = 0.009 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeFalsy()
    })

    it("returns false if the SoS is defined, and it's not as good as SoPF>3 but SoS worse than SoPF>3 are accepted, however the SoS does not beat the best SoS already found for metrics of the same name", (): void => {
        const bestMetric = { ...metricFixture, sumOfSquares: 0.777 as SumOfSquares }
        const onlyBetterThanSopfgtt = false
        const sumOfSquares = 0.9999 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeFalsy()
    })

    it("returns true if the SoS is defined, and it's not as good as SoPF>3 but SoS worse than SoPF>3 are accepted, and no best metric has yet been for metrics with this name", (): void => {
        const bestMetric = undefined
        const onlyBetterThanSopfgtt = false
        const sumOfSquares = 0.9999 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeTruthy()
    })

    it("returns true if the SoS is defined, only SoS better than SoPF>3 are accepted but it is better, and no best metric has yet been for metrics with this name", (): void => {
        const bestMetric = undefined
        const onlyBetterThanSopfgtt = true
        const sumOfSquares = 0.009 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeTruthy()
    })

    it("returns true if the SoS is defined, only SoS better than SoPF>3 are accepted but it is better, and it's better than the current best metric found with this name", (): void => {
        const bestMetric = { ...metricFixture, sumOfSquares: 0.009 as SumOfSquares }
        const onlyBetterThanSopfgtt = true
        const sumOfSquares = 0.007 as SumOfSquares

        const actual = shouldUpdateBestMetric({ bestMetric, onlyBetterThanSopfgtt, sumOfSquares })

        expect(actual).toBeTruthy()
    })
})
