import { Abs, Cents, Exponent, Integer, Max, Min, Monzo, Prime } from "../../../../src/general"
import { ApotomeSlope, computeCommasFromFiveSlicedMonzo, N2D3P9 } from "../../../../src/sagittal"

describe("computeCommasFromFiveSlicedMonzo", () => {
    const fiveSlicedMonzo: Monzo<Integer, 5> = [3, 5, -1] as Monzo<Integer, 5>
    const minCents = 40 as Min<Cents>
    const maxCents = 40.1 as Max<Cents>
    const maxAbsoluteThreeExponent = 12 as Max<Abs<Integer & Exponent<Prime>>>
    const maxN2D3P9 = 40000 as Max<N2D3P9>

    it("returns analyzed commas with the prime content from the two-three-free monzo", () => {
        const actual = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
            minCents,
            maxCents,
            maxAbsoluteThreeExponent,
            maxN2D3P9,
        })

        const expected = jasmine.arrayWithExactContents([
            {
                cents: 40.02272638304789,
                monzo: [-8, -6, 3, 5, -1],
                ratio: [2100875, 2052864],
                name: "2100875/11S",
                limit: 11,
                apotomeSlope: -8.464345074135046,
                twoThreeFreeSopfr: 61,
                n2d3p9: 36777.470341,
            },
        ])
        expect(actual).toEqual(expected)
    })

    describe("max apotome slope", () => {
        it("does not include commas with apotome slope greater than it", () => {
            const highMaxAbsoluteApotomeSlope = 10 as Max<Abs<ApotomeSlope>>
            const lowMaxAbsoluteApotomeSlope = 8 as Max<Abs<ApotomeSlope>>

            const resultWithHighMaxAbsoluteApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                minCents,
                maxCents,
                maxAbsoluteThreeExponent,
                maxAbsoluteApotomeSlope: highMaxAbsoluteApotomeSlope,
                maxN2D3P9,
            })

            expect(resultWithHighMaxAbsoluteApotomeSlope).toEqual(jasmine.arrayWithExactContents([
                {
                    cents: 40.02272638304789,
                    monzo: [-8, -6, 3, 5, -1],
                    ratio: [2100875, 2052864],
                    name: "2100875/11S",
                    limit: 11,
                    apotomeSlope: -8.464345074135046,
                    twoThreeFreeSopfr: 61,
                    n2d3p9: 36777.470341,
                },
            ]))

            const resultWithLowMaxAbsoluteApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                minCents,
                maxCents,
                maxAbsoluteThreeExponent,
                maxAbsoluteApotomeSlope: lowMaxAbsoluteApotomeSlope,
            })

            expect(resultWithLowMaxAbsoluteApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})
