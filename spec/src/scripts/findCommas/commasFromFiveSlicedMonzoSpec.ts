import { Cents, Prime } from "../../../../src/general"
import { Exponent } from "../../../../src/general/math"
import { ApotomeSlope, Monzo } from "../../../../src/general/music"
import { computeCommasFromFiveSlicedMonzo } from "../../../../src/scripts/findCommas/commasFromFiveSlicedMonzo"

describe("computeCommasFromFiveSlicedMonzo", () => {
    const fiveSlicedMonzo: Monzo<5> = [3, 5, -1] as Monzo<5>

    it("returns analyzed commas with the prime content from the five-rough monzo", () => {
        const lowerBound = 40 as Cents
        const upperBound = 40.1 as Cents
        const maximumAbsoluteThreeExponent = 12 as Exponent<Prime>

        const actual = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
            lowerBound,
            upperBound,
            maximumAbsoluteThreeExponent,
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
        it("throws an error if the lower bound is not supplied", () => {
            const upperBound = 40.1 as Cents
            const maximumAbsoluteThreeExponent = 12 as Exponent<Prime>

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                upperBound,
                maximumAbsoluteThreeExponent,
            }))
                .toThrowError("Lower bound must be supplied.")
        })

        it("throws an error if the upper bound is not supplied", () => {
            const lowerBound = 40.1 as Cents
            const maximumAbsoluteThreeExponent = 12 as Exponent<Prime>

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                lowerBound,
                maximumAbsoluteThreeExponent,
            }))
                .toThrowError("Upper bound must be supplied.")
        })

        it("throws an error if the maximum absolute three exponent is not supplied", () => {
            const lowerBound = 40 as Cents
            const upperBound = 40.1 as Cents

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, { lowerBound, upperBound }))
                .toThrowError("Maximum absolute three exponent must be supplied.")
        })
    })

    describe("maximum apotome slope", () => {
        it("does not include commas with apotome slope greater than it", () => {
            const lowerBound = 40 as Cents
            const upperBound = 40.1 as Cents
            const maximumAbsoluteThreeExponent = 12 as Exponent<Prime>

            const highMaximumApotomeSlope = 10 as ApotomeSlope
            const lowMaximumApotomeSlope = 8 as ApotomeSlope

            const resultWithHighMaximumApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                lowerBound,
                upperBound,
                maximumAbsoluteThreeExponent,
                maximumApotomeSlope: highMaximumApotomeSlope,
            })

            expect(resultWithHighMaximumApotomeSlope).toEqual(jasmine.arrayWithExactContents([
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

            const resultWithLowMaximumApotomeSlope = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
                lowerBound,
                upperBound,
                maximumAbsoluteThreeExponent,
                maximumApotomeSlope: lowMaximumApotomeSlope,
            })

            expect(resultWithLowMaximumApotomeSlope).toEqual(jasmine.arrayWithExactContents([]))
        })
    })
})
