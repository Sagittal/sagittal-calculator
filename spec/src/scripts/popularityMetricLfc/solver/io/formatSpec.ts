import {Name, NEWLINE} from "../../../../../../src/general"
import {Io} from "../../../../../../src/general/io"
import {Combination} from "../../../../../../src/general/math"
import {Metric, SumOfSquares} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import {bestMetrics} from "../../../../../../src/scripts/popularityMetricLfc/globals"
import {formatBestMetrics} from "../../../../../../src/scripts/popularityMetricLfc/solver"
import {formatPercentage} from "../../../../../../src/scripts/popularityMetricLfc/solver/io"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("formatBestMetrics", (): void => {
    it("sorts the best metrics by sum of squares, and formats them like how they look as enums", (): void => {
        bestMetrics.set(
            "{sum}" as Name<Metric>,
            {
                sumOfSquares: 0.013 as SumOfSquares,
                name: "" as Name<Metric>,
                submetrics: [
                    {
                        [PopularityParameterId.SUM]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{count}" as Name<Metric>,
            {
                sumOfSquares: 0.012 as SumOfSquares,
                name: "" as Name<Metric>,
                submetrics: [
                    {
                        [PopularityParameterId.COUNT]: true,
                    },
                ] as Combination<Submetric>,
            },
        )
        bestMetrics.set(
            "{max}" as Name<Metric>,
            {
                sumOfSquares: 0.014 as SumOfSquares,
                name: "" as Name<Metric>,
                submetrics: [
                    {
                        [PopularityParameterId.MAX]: true,
                    },
                ] as Combination<Submetric>,
            },
        )

        const actual = formatBestMetrics()

        const expected =
            `{` + NEWLINE +
            `    "{max}": {` + NEWLINE +
            `        sumOfSquares: 0.014,` + NEWLINE +
            `        name: "",` + NEWLINE +
            `        submetrics: [` + NEWLINE +
            `            {` + NEWLINE +
            `                [ PopularityParameterId.MAX ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    },` + NEWLINE +
            `    "{sum}": {` + NEWLINE +
            `        sumOfSquares: 0.013,` + NEWLINE +
            `        name: "",` + NEWLINE +
            `        submetrics: [` + NEWLINE +
            `            {` + NEWLINE +
            `                [ PopularityParameterId.SUM ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    },` + NEWLINE +
            `    "{count}": {` + NEWLINE +
            `        sumOfSquares: 0.012,` + NEWLINE +
            `        name: "",` + NEWLINE +
            `        submetrics: [` + NEWLINE +
            `            {` + NEWLINE +
            `                [ PopularityParameterId.COUNT ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    }` + NEWLINE +
            `}`
        expect(actual).toEqual(expected)
    })
})

describe("formatPercentage", (): void => {
    it("includes both the two values and their percentage, to one decimal point", (): void => {
        const a = 1
        const b = 20

        const actual = formatPercentage(a, b)

        const expected = "1/20 (5.0%)" as Io
        expect(actual).toBe(expected)
    })

    it("works for percentages above 10", (): void => {
        const a = 3
        const b = 20

        const actual = formatPercentage(a, b)

        const expected = "3/20 (15.0%)" as Io
        expect(actual).toBe(expected)
    })
})
