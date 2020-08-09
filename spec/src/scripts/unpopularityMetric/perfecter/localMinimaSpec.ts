import { Combination } from "../../../../../src/general/math"
import { Sample, SamplePoint } from "../../../../../src/scripts/unpopularityMetric/bestMetric/scopeToSamples"
import { SumOfSquares, SumsOfSquares } from "../../../../../src/scripts/unpopularityMetric/bestMetric/types"
import { computeLocalMinima } from "../../../../../src/scripts/unpopularityMetric/perfecter/localMinima"
import { LocalMinimum } from "../../../../../src/scripts/unpopularityMetric/perfecter/types"
import { Submetric } from "../../../../../src/scripts/unpopularityMetric/sumOfSquares"

describe("computeLocalMinima", () => {
    const samples: Sample[] = [
        { samplePoint: [0, 0, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [0, 0, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [0, 0, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [0, 1, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [0, 1, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [0, 1, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 0, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 0, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 0, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 1, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 1, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [1, 1, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 0, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 0, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 0, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 1, 0] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 1, 1] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
        { samplePoint: [2, 1, 2] as SamplePoint, submetrics: [] as unknown as Combination<Submetric> },
    ]

    it("returns an empty array if all the values are the same", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
        ]

        const result = computeLocalMinima(samples, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty area if it is just a boundary between two values", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.003 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.003 as SumOfSquares, 0.003 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.003 as SumOfSquares, 0.003 as SumOfSquares, 0.003 as SumOfSquares],
                [0.003 as SumOfSquares, 0.003 as SumOfSquares, 0.003 as SumOfSquares],
            ],
        ]

        const result = computeLocalMinima(samples, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns an empty array if it is an area surrounded by another area (this one I'm less sure about, but the issue might be precluded if we used a resolution of 2)", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.003 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.003 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
        ]

        const result = computeLocalMinima(samples, sumsOfSquares)

        expect(result).toEqual([])
    })

    it("returns a result if there are local minima", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.003 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.002 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
        ]

        const result = computeLocalMinima(samples, sumsOfSquares)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            { sumOfSquares: 0.003 as SumOfSquares, samplePoint: [0, 1, 0], submetrics: [] },
            { sumOfSquares: 0.002 as SumOfSquares, samplePoint: [1, 1, 2], submetrics: [] },
        ]))
    })

    it("does not include results if the sum of squares is not appreciably lower than the current local minimum", () => {
        const sumsOfSquares: SumsOfSquares = [
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.003 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
            [
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
                [0.004 as SumOfSquares, 0.004 as SumOfSquares, 0.004 as SumOfSquares],
            ],
        ]
        const localMinimum: LocalMinimum = {
            sumOfSquares: 0.00300001 as SumOfSquares,
            samplePoint: [0] as SamplePoint,
            submetrics: [] as unknown as Combination<Submetric>,
        }

        const result = computeLocalMinima(samples, sumsOfSquares, localMinimum)

        expect(result).toEqual(jasmine.arrayWithExactContents([]))
    })
})