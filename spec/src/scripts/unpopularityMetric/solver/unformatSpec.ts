import { unformat } from "../../../../../src/scripts/unpopularityMetric/solver/unformat"

describe("unformat", () => {
    it("converts parameter enum form back into JSON form", () => {
        const text = `[
    {
\t[ Parameter.SUM ]: true,
\t[ Parameter.K_AS_COEFFICIENT ]: 0.038 as ParameterValue,
    },
]
`

        const result = unformat(text)

        const expectedResult = `[
    {
\t"sum": true,
\t"kAsCoefficient": 0.038
    }
]
`
        expect(result).toEqual(expectedResult)
    })
})
