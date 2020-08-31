import { Io } from "../../../../../../src/general"
import { unformatParameters } from "../../../../../../src/scripts/lfc/solver"

describe("unformatParameters", () => {
    it("converts parameter enum form back into JSON form", () => {
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
