import { computeParameterPoints } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/parameterPoints"
import { ParameterPoint } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import { ParameterConfig } from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeParameterPoints", () => {
    it("given a parameter config (a center, a range, and a count), will return a block of points to sample", () => {
        const parameterConfig: ParameterConfig = {
            center: 1,
            range: 0.5,
            count: 5,
        }

        const result: ParameterPoint[] = computeParameterPoints(parameterConfig)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ] as ParameterPoint[])
        expect(result.length).toBe(parameterConfig.count as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterConfig.range as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterConfig.center as number)
    })

    it("works when the count is even", () => {
        const parameterConfig: ParameterConfig = {
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
        ] as ParameterPoint[])
        expect(result.length).toBe(parameterConfig.count as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterConfig.range as number)
        expect(
            (
                result[ Math.floor(result.length / 2) ] +
                result[ Math.floor(result.length / 2) - 1 ]
            )
            /
            2,
        ).toBe(parameterConfig.center as number)
    })

    it("works when the count is one", () => {
        const parameterConfig: ParameterConfig = {
            center: 5,
            count: 1,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([
            5,
        ] as ParameterPoint[])
        expect(result.length).toBe(parameterConfig.count as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterConfig.center as number)
    })

    it("works when the count is zero", () => {
        const parameterConfig: ParameterConfig = {
            count: 0,
        }

        const result = computeParameterPoints(parameterConfig)

        expect(result).toEqual([])
        expect(result.length).toBe(parameterConfig.count as number)
    })
})
