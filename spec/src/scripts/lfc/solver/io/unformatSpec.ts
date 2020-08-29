import { IO } from "../../../../../../src/general"
import { unformatParameters } from "../../../../../../src/scripts/lfc/solver"

describe("unformatParameters", () => {
    it("converts parameter enum form back into JSON form", () => {
        const text = `[
    {
\t[ Parameter.SUM ]: true,
\t[ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
    },
]
` as IO

        const actual = unformatParameters(text)

        const expected = `[
    {
\t"sum": true,
\t"kAsCoefficient": 0.038
    }
]
` as IO
        expect(actual).toEqual(expected) // TODO: do we need a "toEqualTyped" ?
    })
})
