const {computePrimeContentUnpopularitySubmetricCombinedAdjustments} = require("../../../../src/scripts/notationalCommaPopularityMetric/primeContentUnpopularitySubmetricCombinedAdjustments")

describe("computePrimeContentUnpopularitySubmetricCombinedAdjustments", () => {
    it("takes the adjustments for each prime content unpopularity submetric and returns every possible combination of them", () => {
        const computePrimeContentUnpopularitySubmetricAdjustments = {
            soapfar: [
                { a: 0.5, y: 1.5 },
                { a: 0.5, y: 1.2 },
            ],
            soapf: [
                { a: 0.7, y: 0.9 },
                { a: 0.7, y: 1.1 },
            ],
        }

        const result = computePrimeContentUnpopularitySubmetricCombinedAdjustments(computePrimeContentUnpopularitySubmetricAdjustments)

        expect(result).toEqual(jasmine.arrayWithExactContents([
            {
                soapfar: { a: 0.5, y: 1.5 },
                soapf: { a: 0.7, y: 0.9 },
            },
            {
                soapfar: { a: 0.5, y: 1.5 },
                soapf: { a: 0.7, y: 1.1 },
            },
            {
                soapfar: { a: 0.5, y: 1.2 },
                soapf: { a: 0.7, y: 0.9 },
            },
            {
                soapfar: { a: 0.5, y: 1.2 },
                soapf: { a: 0.7, y: 1.1 },
            },
        ]))
    })
})
