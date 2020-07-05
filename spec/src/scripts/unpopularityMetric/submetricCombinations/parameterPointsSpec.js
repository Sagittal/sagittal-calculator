const {computeParameterPoints} = require("../../../../../src/scripts/unpopularityMetric/submetricCombinations/parameterPoints")

describe("computeParameterPoints", () => {
    it("given a parameter config (a center, a range, and a count), will return a block of points to sample", () => {
        const parameterConfig = {
            center: 1,
            range: 0.5,
            count: 5,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ])
        expect(result.length).toBe(parameterConfig.count)
        expect(result[result.length - 1] - result[0]).toBe(parameterConfig.range)
        expect(result[Math.floor(result.length / 2)]).toBe(parameterConfig.center)
    })

    it("works when the count is even", () => {
        const parameterConfig = {
            center: 5,
            range: 1,
            count: 4,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ])
        expect(result.length).toBe(parameterConfig.count)
        expect(result[result.length - 1] - result[0]).toBe(parameterConfig.range)
        expect(
            (
                result[Math.floor(result.length / 2)] +
                result[Math.floor(result.length / 2) - 1]
            )
            /
            2,
        ).toBe(parameterConfig.center)
    })

    it("works when the count is one", () => {
        const parameterConfig = {
            center: 5,
            count: 1,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([
            5,
        ])
        expect(result.length).toBe(parameterConfig.count)
        expect(result[Math.floor(result.length / 2)]).toBe(parameterConfig.center)
    })

    it("works when the count is zero", () => {
        const parameterConfig = {
            count: 0,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([])
        expect(result.length).toBe(parameterConfig.count)
    })
})
