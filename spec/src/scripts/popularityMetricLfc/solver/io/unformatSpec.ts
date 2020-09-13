import { Io } from "../../../../../../src/general"
import { unformatParameters } from "../../../../../../src/scripts/popularityMetricLfc/solver"

describe("unformatParameters", (): void => {
    it("converts parameter enum form back into JSON form", (): void => {
        const text = `[
    {
\t[ Parameter.SUM ]: true,
\t[ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
    },
]
` as Io

        const actual = unformatParameters(text)

        const expected = `[
    {
\t"sum": true,
\t"kAsCoefficient": 0.038
    }
]
` as Io
        expect(actual).toEqual(expected)
    })
})
