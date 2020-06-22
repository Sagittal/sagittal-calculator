const {computeCommasFromFiveMonzo} = require("../../../../src/findTinaPrimaryCommas/utilities/commasFromFiveMonzo")

describe("computeCommasFromFiveMonzo", () => {
    const fiveMonzo = [3, 5, -1]

    it("returns analyzed commas with the prime content from the five monzo", () => {
        const lowerBound = 40
        const upperBound = 40.1
        const maximumAbsoluteThreeExponent = 12

        const result = computeCommasFromFiveMonzo(fiveMonzo, {lowerBound, upperBound, maximumAbsoluteThreeExponent})

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                cents: 40.02272638304789,
                monzo: [-8, -6, 3, 5, -1],
                ratio: [2100875, 2052864],
                commaName: "2100875/11S",
                limit: 11,
                apotomeSlope: -8.464345074135046,
                sopfgtt: 61
            }
        ]))
    })

    describe("errors", () => {
        it("throws an error if the lower bound is not supplied", () => {
            const upperBound = 40.1
            const maximumAbsoluteThreeExponent = 12

            expect(() => computeCommasFromFiveMonzo(fiveMonzo, {upperBound, maximumAbsoluteThreeExponent}))
                .toThrowError("Lower bound must be supplied.")
        })

        it("throws an error if the upper bound is not supplied", () => {
            const lowerBound = 40.1
            const maximumAbsoluteThreeExponent = 12

            expect(() => computeCommasFromFiveMonzo(fiveMonzo, {lowerBound, maximumAbsoluteThreeExponent}))
                .toThrowError("Upper bound must be supplied.")
        })

        it("throws an error if the maximum absolute three exponent is not supplied", () => {
            const lowerBound = 40
            const upperBound = 40.1

            expect(() => computeCommasFromFiveMonzo(fiveMonzo, {lowerBound, upperBound}))
                .toThrowError("Maximum absolute three exponent must be supplied.")
        })
    })
})
