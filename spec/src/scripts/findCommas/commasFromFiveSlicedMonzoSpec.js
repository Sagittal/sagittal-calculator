const {computeCommasFromFiveSlicedMonzo} = require("../../../../src/scripts/findCommas/commasFromFiveSlicedMonzo")

describe("computeCommasFromFiveSlicedMonzo", () => {
    const fiveSlicedMonzo = [3, 5, -1]

    it("returns analyzed commas with the prime content from the five-rough monzo", () => {
        const lowerBound = 40
        const upperBound = 40.1
        const maximumAbsoluteThreeExponent = 12

        const result = computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {
            lowerBound,
            upperBound,
            maximumAbsoluteThreeExponent,
        })

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                cents: 40.02272638304789,
                monzo: [-8, -6, 3, 5, -1],
                ratio: [2100875, 2052864],
                commaName: "2100875/11S",
                limit: 11,
                apotomeSlope: -8.464345074135046,
                fiveRoughSopfr: 61,
            },
        ]))
    })

    describe("errors", () => {
        it("throws an error if the lower bound is not supplied", () => {
            const upperBound = 40.1
            const maximumAbsoluteThreeExponent = 12

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {upperBound, maximumAbsoluteThreeExponent}))
                .toThrowError("Lower bound must be supplied.")
        })

        it("throws an error if the upper bound is not supplied", () => {
            const lowerBound = 40.1
            const maximumAbsoluteThreeExponent = 12

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {lowerBound, maximumAbsoluteThreeExponent}))
                .toThrowError("Upper bound must be supplied.")
        })

        it("throws an error if the maximum absolute three exponent is not supplied", () => {
            const lowerBound = 40
            const upperBound = 40.1

            expect(() => computeCommasFromFiveSlicedMonzo(fiveSlicedMonzo, {lowerBound, upperBound}))
                .toThrowError("Maximum absolute three exponent must be supplied.")
        })
    })

    describe("maximum apotome slope", () => {
        it("does not include commas with apotome slope greater than it", () => {
            const lowerBound = 40
            const upperBound = 40.1
            const maximumAbsoluteThreeExponent = 12

            const highMaximumApotomeSlope = 10
            const lowMaximumApotomeSlope = 8

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
                    commaName: "2100875/11S",
                    limit: 11,
                    apotomeSlope: -8.464345074135046,
                    fiveRoughSopfr: 61,
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
