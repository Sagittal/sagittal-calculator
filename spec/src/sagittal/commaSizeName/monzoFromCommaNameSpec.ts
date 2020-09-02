import { Monzo, Name } from "../../../../src/general"
import { AnalyzedRationalPitch, computeMonzoFromCommaName } from "../../../../src/sagittal"

describe("monzoFromCommaName", () => {
    it("gives you the monzo for the comma with the given name", () => {
        const commaName = "1/91s" as Name<AnalyzedRationalPitch>

        const actual = computeMonzoFromCommaName(commaName)

        const expected = [-3, 6, 0, -1, 0, -1] as Monzo
        expect(actual).toEqual(expected)
    })
})
