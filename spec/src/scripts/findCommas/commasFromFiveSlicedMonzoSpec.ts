import { Cents, Max, Min, Prime } from "../../../../src/general"
import { Exponent } from "../../../../src/general/math"
import { ApotomeSlope, Monzo } from "../../../../src/general/music"
import { computeCommasFromFiveSlicedMonzo } from "../../../../src/scripts/findCommas/commasFromFiveSlicedMonzo"

describe("computeCommasFromFiveSlicedMonzo", () => {
    const fiveSlicedMonzo: Monzo<5> = [3, 5, -1] as Monzo<5>

    it("returns analyzed commas with the prime content from the five-rough monzo", () => {
        const minCents = 40 as Min<Cents>
        const maxCents = 40.1 as Max<Cents>
        const maxAbsoluteThreeExponent = 12 as Max<Exponent<Prime>>

        const actual = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
            minCents,
            maxCents,
            maxAbsoluteThreeExponent,
        })

        const expected = jasmine.arrayWithExactContents([
            {
                cents: 40.02272638304789,
                monzo: [-8, -6, 3, 5, -1],
                ratio: [2100875, 2052864],
                name: "2100875/11S",
                limit: 11,
                apotomeSlope: -8.464345074135046,
                fiveRoughSopfr: 61,
                n2d3p9: 36777.47034143518,
            },
        ])
        expect(actual).toEqual(expected)
    })

    describe("errors", () => {
        it("throws an error if the min cents is not supplied", () => {
            const maxCents = 40.1 as Max<Cents>
            const maxAbsoluteThreeExponent = 12 as Max<Exponent<Prime>>

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                maxCents,
                maxAbsoluteThreeExponent,
            }))
                .toThrowError("Min cents must be supplied.")
        })

        it("throws an error if the max cents is not supplied", () => {
            const minCents = 40.1 as Min<Cents>
            const maxAbsoluteThreeExponent = 12 as Max<Exponent<Prime>>

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                minCents,
                maxAbsoluteThreeExponent,
            }))
                .toThrowError("Max cents must be supplied.")
        })

        it("throws an error if the max absolute three exponent is not supplied", () => {
            const minCents = 40 as Min<Cents>
            const maxCents = 40.1 as Max<Cents>

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, { minCents, maxCents }))
                .toThrowError("Max absolute three exponent must be supplied.")
        })
    })

    describe("max apotome slope", () => {
        it("does not include commas with apotome slope greater than it", () => {
            const minCents = 40 as Min<Cents>
            const maxCents = 40.1 as Max<Cents>
            const maxAbsoluteThreeExponent = 12 as Max<Exponent<Prime>>

            const highMaxApotomeSlope = 10 as Max<ApotomeSlope>
            const lowMaxApotomeSlope = 8 as Max<ApotomeSlope>

            const resultWithHighMaxApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                minCents,
                maxCents,
                maxAbsoluteThreeExponent,
                maxApotomeSlope: highMaxApotomeSlope,
            })

            expect(resultWithHighMaxApotomeSlope).toEqual(jasmine.arrayWithExactContents([
                {
                    cents: 40.02272638304789,
                    monzo: [-8, -6, 3, 5, -1],
                    ratio: [2100875, 2052864],
                    name: "2100875/11S",
                    limit: 11,
                    apotomeSlope: -8.464345074135046,
                    fiveRoughSopfr: 61,
                    n2d3p9: 36777.47034143518,
                },
            ]))

            const resultWithLowMaxApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                minCents,
                maxCents,
                maxAbsoluteThreeExponent,
                maxApotomeSlope: lowMaxApotomeSlope,
            })

            expect(resultWithLowMaxApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})
