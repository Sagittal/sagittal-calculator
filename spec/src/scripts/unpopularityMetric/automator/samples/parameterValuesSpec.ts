import { computeParameterValues } from "../../../../../../src/scripts/unpopularityMetric/automator/samples/parameterValues"
import {
    DynamicParameterValue,
} from "../../../../../../src/scripts/unpopularityMetric/automator/samples/types"
import {
    DynamicParameterConfig,
    SampleRange,
    SampleResolution,
} from "../../../../../../src/scripts/unpopularityMetric/types"

describe("computeParameterValues", () => {
    it("given a parameter config (a center, a range, and a resolution), will return a block of points to sample", () => {
        const parameterConfig: DynamicParameterConfig = {
            center: 1,
            range: 0.5,
            resolution: 5,
        } as DynamicParameterConfig

        const result: DynamicParameterValue[] = computeParameterValues(parameterConfig)

        expect(result).toEqual([
            0.75,
            0.875,
            1.0,
            1.125,
            1.25,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterConfig.resolution as number)
        expect(result[ result.length - 1 ] - result[ 0 ]).toBe(parameterConfig.range as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterConfig.center as number)
    })

    it("works when the resolution is even", () => {
        const parameterConfig: DynamicParameterConfig = {
            center: 5 as DynamicParameterValue,
            range: 1 as SampleRange,
            resolution: 4 as SampleResolution,
        }

        const result = computeParameterValues(parameterConfig)

        expect(result).toEqual([
            4.5,
            4.833333333333333333,
            5.166666666666666666,
            5.5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterConfig.resolution as number)
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

    it("works when the resolution is one", () => {
        const parameterConfig: DynamicParameterConfig = {
            center: 5 as DynamicParameterValue,
            resolution: 1 as SampleResolution,
        }

        const result = computeParameterValues(parameterConfig)

        expect(result).toEqual([
            5,
        ] as DynamicParameterValue[])
        expect(result.length).toBe(parameterConfig.resolution as number)
        expect(result[ Math.floor(result.length / 2) ] as number).toBe(parameterConfig.center as number)
    })

    it("works when the resolution is zero", () => {
        const parameterConfig: DynamicParameterConfig = {
            resolution: 0 as SampleResolution,
        } // todo: ah ha, of course... I should only allow myself to do "as" for anything that is nominally typed.

        const result = computeParameterValues(parameterConfig)

        expect(result).toEqual([])
        expect(result.length).toBe(parameterConfig.resolution as number)
    })
})
