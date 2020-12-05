import {Io} from "@sagittal/general"
import {unformatParameters} from "../../../../../../src/scripts/popularityMetricLfc/solver"

describe("unformatParameters", (): void => {
    it("converts parameter enum form back into JSON form, stripping trailing commas too", (): void => {
        const text = `
        [
            {
                [ PopularityParameterId.SUM ]: true,
                [ PopularityParameterId.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
            },
        ]
        ` as Io

        const actual = unformatParameters(text)

        const expected = `
        [
            {
                "sum": true,
                "kAsCoefficient": 0.038
            }
        ]
        ` as Io
        expect(actual).toEqual(expected)
    })

    it("also works on metrics", (): void => {
        const text = `
        {
            "{},{sum,useNuminator}": {
                sumOfSquares: 0.014206086754420309,
                submetrics: [
                    {
                        [ PopularityParameterId.SUM ]: true,
                        [ PopularityParameterId.USE_NUMINATOR ]: true
                    }
                ],
                name: "{},{sum,useNuminator}",
            },
        }` as Io

        const actual = unformatParameters(text)

        const expected = `
        {
            "{},{sum,useNuminator}": {
                "sumOfSquares": 0.014206086754420309,
                "submetrics": [
                    {
                        "sum": true,
                        "useNuminator": true
                    }
                ],
                "name": "{},{sum,useNuminator}"
            }
        }` as Io
        expect(actual).toEqual(expected)
    })
})
