import { computeParameterValues } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/parameterValues"
import {
    DynamicParameterSampleConfig,
    DynamicParameterValue,
    SampleRange,
    SampleResolution,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"

describe("computeParameterValues", () => {
    it("given a parameter config (a center, a range, and a resolution), will return a block of points to sample", () => {
        const parameterSampleConfig: DynamicParameterSampleConfig = {
            center: 1 as DynamicParameterValue,
            range: 0.5 as SampleRange,
            resolution: 5 as SampleResolution,
        }

        const result: DynamicParameterValue[] = computeParameterValues(parameterSampleConfig)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterSampleConfig.resolution as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterSampleConfig.range as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterSampleConfig.center as number)
    })

    it("works when the resolution is even", () => {
        const parameterSampleConfig: DynamicParameterSampleConfig = {
            center: 5 as DynamicParameterValue,
            range: 1 as SampleRange,
            resolution: 4 as SampleResolution,
        }

        const result = computeParameterValues(parameterSampleConfig)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterSampleConfig.resolution as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterSampleConfig.range as number)
        expect(
            (
                result[ Math.floor(result.length / 2) ] +
                result[ Math.floor(result.length / 2) - 1 ]
            )
            /
            2,
        ).toBe(parameterSampleConfig.center as number)
    })

    it("works when the resolution is one", () => {
        const parameterSampleConfig: DynamicParameterSampleConfig = {
            center: 5 as DynamicParameterValue,
            resolution: 1 as SampleResolution,
        }

        const result = computeParameterValues(parameterSampleConfig)

        expect(result).toEqual([
            5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterSampleConfig.resolution as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterSampleConfig.center as number)
    })

    it("works when the resolution is zero", () => {
        const parameterSampleConfig: DynamicParameterSampleConfig = {
            resolution: 0 as SampleResolution,
        }

        const result = computeParameterValues(parameterSampleConfig)

        expect(result).toEqual([])
        expect(result.length).toBe(parameterSampleConfig.resolution as number)
    })
})
