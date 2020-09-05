import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, N2D3P9 } from "../../../../src/sagittal"
import { analyzeRationalPitch } from "../../../../src/sagittal/commaEvaluation"

describe("analyzeRationalPitch", () => {
    it("returns a bundle of analyzed properties of a comma, given its monzo", () => {
        const monzo = [-8, -6, 3, 5, -1] as Monzo

        const actual = analyzeRationalPitch(monzo)

        const expected = {
            cents: 40.02272638304789 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<AnalyzedRationalPitch>,
            limit: 11 as Prime,
            apotomeSlope: -8.464345074135046 as ApotomeSlope,
            fiveRoughSopfr: 61 as Sopfr<5>,
            n2d3p9: 36777.470341 as N2D3P9,
        } as AnalyzedRationalPitch
        expect(actual).toEqual(expected)
    })

    it("for example when the pitch may be too big to be a comma, can say to not give it a name", () => {
        const monzo = [0, 0, -1, 2, 0, 0, 0, -1] as Monzo

        const actual = analyzeRationalPitch(monzo, { giveName: false })

        expect(actual.name).toBeUndefined()
    })
})
