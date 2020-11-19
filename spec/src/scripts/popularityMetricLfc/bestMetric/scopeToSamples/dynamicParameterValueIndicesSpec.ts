import {Index, Parameter, Step} from "../../../../../../src/general"
import {DynamicParameter} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples"
import {computeDynamicParameterValueIndices} from "../../../../../../src/scripts/popularityMetricLfc/bestMetric/scopeToSamples/dynamicParameterValueIndices"
import {PopularityParameterId, Submetric} from "../../../../../../src/scripts/popularityMetricLfc/sumOfSquares"

describe("computeDynamicParameterValueIndices", (): void => {
    it("given the dynamic parameters and a submetric, returns an array of, in order, for each of the dynamic parameters, its index in the parameter points", (): void => {
        const dynamicParameters: DynamicParameter[] = [
            // Don't pick me at all, since I'm submetric index 0 --
            // I should have already been handled by a previous call to computeDynamicParameterValueIndices
            // I.e. already be in the array which this call's returned array will be spread onto the end of
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: PopularityParameterId.Y,
                values: [1.5, 1.2, 0.9] as Parameter[],
                unit: 0 as Step<{of: Parameter}>,
            },

            // Pick from me for the first index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.Y,
                values: [0.9, 0.95, 1.0, 1.05, 1.1 /* pick my index as the value */] as Parameter[],
                unit: 0 as Step<{of: Parameter}>,
            },

            // Pick from me for the second index of the returned array
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: PopularityParameterId.A_AS_COEFFICIENT,
                values: [0.6, 0.63, 0.66, 0.69 /*pick my index as the value*/, 0.72] as Parameter[],
                unit: 0 as Step<{of: Parameter}>,
            },
        ]
        const submetric: Submetric = {
            [PopularityParameterId.A_AS_COEFFICIENT]: 0.69 as Parameter,
            [PopularityParameterId.Y]: 1.1 as Parameter,
        }
        const submetricIndex = 1 as Index<Submetric>

        const actual = computeDynamicParameterValueIndices({
            dynamicParameters,
            submetric,
            submetricIndex,
        })

        const expected = [4, 3] as Array<Index<Parameter>>
        expect(actual).toEqual(expected)
    })
})
