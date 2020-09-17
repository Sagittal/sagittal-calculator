import { Cents, Monzo, Prime, Ratio, Sopfr, TwoThreeFreeClass } from "../../../../src/general"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../src/sagittal"
import { analyzeJiPitch } from "../../../../src/sagittal/comma"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its monzo", (): void => {
        const jiPitch = { monzo: [-7, -6, 3, 5, -1] as Monzo }

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            cents: 1240.022726 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 1026432] as Ratio,
            primeLimit: 11 as Prime,
            apotomeSlope: -82.352717 as ApotomeSlope,
            twoThreeFreeClass: { monzo: [0, 0, 3, 5, -1] } as TwoThreeFreeClass,
            twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
            n2d3p9: 36777.470341 as N2D3P9,
        } as JiPitchAnalysis
        expect(actual).toBeCloseToObject(expected)
    })
})
