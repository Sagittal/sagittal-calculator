import { bestMetrics } from "../../../../../src/scripts/unpopularityMetric/globals"
import { SumOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric"
import { Parameter, Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"
import { Combination } from "../../../../../src/general/math"
import { formatBestMetrics } from "../../../../../src/scripts/unpopularityMetric/solver"

describe("formatBestMetrics", () => {
    it("sorts the best metrics by sum of squares, and formats them like how they look as enums", () => {
        bestMetrics[ "{sum}" ] = {
            sumOfSquares: 0.013 as SumOfSquares,
            submetrics: [
                {
                    [ Parameter.SUM ]: true,
                },
            ] as Combination<Submetric>,
        }
        bestMetrics[ "{count}" ] = {
            sumOfSquares: 0.012 as SumOfSquares,
            submetrics: [
                {
                    [ Parameter.COUNT ]: true,
                },
            ] as Combination<Submetric>,
        }
        bestMetrics[ "{max}" ] = {
            sumOfSquares: 0.014 as SumOfSquares,
            submetrics: [
                {
                    [ Parameter.MAX ]: true,
                },
            ] as Combination<Submetric>,
        }

        const result = formatBestMetrics()

        const expectedResult =
            `{\n` +
            `    "{max}": {\n` +
            `        sumOfSquares: 0.014,\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.MAX ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    },\n` +
            `    "{sum}": {\n` +
            `        sumOfSquares: 0.013,\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.SUM ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    },\n` +
            `    "{count}": {\n` +
            `        sumOfSquares: 0.012,\n` +
            `        submetrics: [\n` +
            `            {\n` +
            `                [ Parameter.COUNT ]: true\n` +
            `            }\n` +
            `        ]\n` +
            `    }\n` +
            `}`
        expect(result).toEqual(expectedResult)
    })
})
