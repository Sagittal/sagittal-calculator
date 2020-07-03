const {computeSampleBlock} = require("../../../../../src/scripts/notationalCommaPopularityMetric/parameters/sampleBlock")

describe("computeSampleBlock", () => {
    it("given a center, a range, and a count, will return a block of points to sample", () => {
        const sampleBlockOptions = {
            center: 1,
            range: 0.5,
            count: 5,
        }

        const result = computeSampleBlock(sampleBlockOptions)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ])
        expect(result.length).toBe(sampleBlockOptions.count)
        expect(result[result.length - 1] - result[0]).toBe(sampleBlockOptions.range)
        expect(result[Math.floor(result.length / 2)]).toBe(sampleBlockOptions.center)
    })

    it("works when the count is even", () => {
        const sampleBlockOptions = {
            center: 5,
            range: 1,
            count: 4,
        }

        const result = computeSampleBlock(sampleBlockOptions)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ])
        expect(result.length).toBe(sampleBlockOptions.count)
        expect(result[result.length - 1] - result[0]).toBe(sampleBlockOptions.range)
        expect(
            (
                result[Math.floor(result.length / 2)] +
                result[Math.floor(result.length / 2) - 1]
            )
            /
            2
        ).toBe(sampleBlockOptions.center)
    })

    it("works when the count is one", () => {
        const sampleBlockOptions = {
            center: 5,
            count: 1,
        }

        const result = computeSampleBlock(sampleBlockOptions)

        expect(result).toEqual([
            5,
        ])
        expect(result.length).toBe(sampleBlockOptions.count)
        expect(result[Math.floor(result.length / 2)]).toBe(sampleBlockOptions.center)
    })

    it("works when the count is zero", () => {
        const sampleBlockOptions = {
            count: 0,
        }

        const result = computeSampleBlock(sampleBlockOptions)

        expect(result).toEqual([])
        expect(result.length).toBe(sampleBlockOptions.count)
    })
})
