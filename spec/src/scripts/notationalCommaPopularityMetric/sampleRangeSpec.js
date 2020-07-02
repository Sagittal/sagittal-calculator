const {computeSampleRange} = require("../../../../src/scripts/notationalCommaPopularityMetric/sampleRange")

describe("computeSampleRange", () => {
    it("given a center, a range, and a count, will return a set of points to sample", () => {
        const sample = { // todo: this is a horrible name... maybe more like sampleSettings?
            center: 1,
            range: 0.5,
            count: 5,
        }

        const result = computeSampleRange(sample)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ])
        expect(result.length).toBe(sample.count)
        expect(result[result.length - 1] - result[0]).toBe(sample.range)
        expect(result[Math.floor(result.length / 2)]).toBe(sample.center)
    })

    it("works when the count is even", () => {
        const sample = {
            center: 5,
            range: 1,
            count: 4,
        }

        const result = computeSampleRange(sample)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ])
        expect(result.length).toBe(sample.count)
        expect(result[result.length - 1] - result[0]).toBe(sample.range)
        expect(
            (
                result[Math.floor(result.length / 2)] +
                result[Math.floor(result.length / 2) - 1]
            )
            /
            2
        ).toBe(sample.center)
    })

    it("works when the count is one", () => {
        const sample = {
            center: 5,
            count: 1,
        }

        const result = computeSampleRange(sample)

        expect(result).toEqual([
            5,
        ])
        expect(result.length).toBe(sample.count)
        expect(result[Math.floor(result.length / 2)]).toBe(sample.center)
    })

    it("works when the count is zero", () => {
        const sample = {
            count: 0,
        }

        const result = computeSampleRange(sample)

        expect(result).toEqual([])
        expect(result.length).toBe(sample.count)
    })
})
