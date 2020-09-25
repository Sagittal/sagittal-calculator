import {
    Abs,
    Cents,
    Copfr,
    DecimalNotDefaultingToPotentiallyIrrational,
    Direction,
    Exponent,
    Integer,
    Monzo,
    Prime,
    Ratio,
    Sopfr,
} from "../../../../../src/general"
import { ApotomeSlope, N2D3P9, TwoThreeFreeClassAnalysis } from "../../../../../src/sagittal"
import { analyzeJiPitch } from "../../../../../src/sagittal/ji"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its monzo", (): void => {
        const jiPitch = { monzo: [-7, -6, 3, 5, -1] as Monzo }

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            cents: 1240.022726 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 1026432] as Ratio,
            decimal: 2.04677465239 as DecimalNotDefaultingToPotentiallyIrrational,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Abs<Integer & Exponent<3 & Prime>>,
            aas: 82.352717 as Abs<ApotomeSlope>,
            twoThreeFreeClassAnalysis: {
                twoThreeFreePrimeLimit: 11 as Prime,
                monzo: [0, 0, 3, 5, -1] as Monzo<{ rough: 5, direction: Direction.SUPER }>,
                twoThreeFreeCopfr: 9 as Copfr<{ rough: 5 }>,
                twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            } as TwoThreeFreeClassAnalysis,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
