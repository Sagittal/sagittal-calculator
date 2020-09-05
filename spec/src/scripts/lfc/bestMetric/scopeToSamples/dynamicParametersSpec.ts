import { Ed, Index, Step, Window } from "../../../../../../src/general"
import { Scope } from "../../../../../../src/scripts/lfc/bestMetric"
import { computeDynamicParameters } from "../../../../../../src/scripts/lfc/bestMetric/scopeToSamples"
import { Parameter, ParameterValue, Submetric } from "../../../../../../src/scripts/lfc/sumOfSquares"

describe("computeDynamicParameters", () => {
    it("returns a flattened array of all the parameters that are dynamic -- flattened across all the submetrics, that is", () => {
        const scope: Scope = [
            {
                [ Parameter.Y ]: {
                    center: 1.2 as ParameterValue,
                    window: 1 as Window<ParameterValue>,
                    ed: 3 as Ed<ParameterValue>,
                },
                [ Parameter.W ]: 4 as ParameterValue,
            },
            {
                [ Parameter.COUNT ]: true,
                [ Parameter.Y ]: {
                    center: 1.0 as ParameterValue,
                    window: 0.2 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
                [ Parameter.A_AS_COEFFICIENT ]: {
                    center: 0.65 as ParameterValue,
                    window: 0.1 as Window<ParameterValue>,
                    ed: 2 as Ed<ParameterValue>,
                },
            },
        ] as Scope

        const actual = computeDynamicParameters(scope)

        const expected = [
            {
                submetricIndex: 0 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.7, 1.2, 1.7] as ParameterValue[],
                unit: 0.5 as Step<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.Y,
                values: [0.9, 1.1] as ParameterValue[],
                unit: 0.2 as Step<ParameterValue>,
            },
            {
                submetricIndex: 1 as Index<Submetric>,
                parameter: Parameter.A_AS_COEFFICIENT,
                values: [0.6, 0.7] as ParameterValue[],
                unit: 0.1 as Step<ParameterValue>,
            },
        ]
        expect(actual).toEqual(expected)
    })
})
