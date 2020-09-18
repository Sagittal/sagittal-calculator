import { Name, NEWLINE } from "../../../../../../src/general"
import { Io } from "../../../../../../src/general/io"
import { Combination } from "../../../../../../src/general/math"
import { Metric, SumOfSquares } from "../../../../../../src/scripts/popularityMetricLfc/bestMetric"
import { bestMetrics } from "../../../../../../src/scripts/popularityMetricLfc/globals"
import { formatBestMetrics } from "../../../../../../src/scripts/popularityMetricLfc/solver"
import { formatPercentage } from "../../../../../../src/scripts/popularityMetricLfc/solver/io"
import { Parameter, Submetric } from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("formatBestMetrics", (): void => {
    it("sorts the best metrics by sum of squares, and formats them like how they look as enums", (): void => {
        bestMetrics.set(
            "{sum}" as Name<Metric>,
            {
                sumOfSquares: 0.013 as SumOfSquares,
                name: "" as Name<Metric>,
                submetrics: [
                    {
                        [ Parameter.SUM ]: true,
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
                        [ Parameter.COUNT ]: true,
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
                        [ Parameter.MAX ]: true,
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
            `                [ Parameter.MAX ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    },` + NEWLINE +
            `    "{sum}": {` + NEWLINE +
            `        sumOfSquares: 0.013,` + NEWLINE +
            `        name: "",` + NEWLINE +
            `        submetrics: [` + NEWLINE +
            `            {` + NEWLINE +
            `                [ Parameter.SUM ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    },` + NEWLINE +
            `    "{count}": {` + NEWLINE +
            `        sumOfSquares: 0.012,` + NEWLINE +
            `        name: "",` + NEWLINE +
            `        submetrics: [` + NEWLINE +
            `            {` + NEWLINE +
            `                [ Parameter.COUNT ]: true` + NEWLINE +
            `            }` + NEWLINE +
            `        ]` + NEWLINE +
            `    }` + NEWLINE +
            `}`
        expect(actual).toEqual(expected)
    })
})

describe("formatPercentage", (): void => {
    it("includes both the two values and their percentage", (): void => {
        const a = 1
        const b = 20

        const actual = formatPercentage(a, b)

        const expected = "1/20 (5.00%)" as Io
        expect(actual).toBe(expected)
    })
})
