import { unformat } from "../../../../../src/scripts/unpopularityMetric/solver"

describe("unformat", () => {
    it("converts parameter enum form back into JSON form", () => {
        const text = `[
    {
\t[ Parameter.SUM ]: true,
\t[ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
    },
]
`

        const actual = unformat(text)

        const expected = `[
    {
\t"sum": true,
\t"kAsCoefficient": 0.038
    }
]
`
        expect(actual).toEqual(expected)
    })
})
