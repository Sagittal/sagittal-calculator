import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Integer,
    Name,
    Prime,
    RationalMonzo,
    RationalQuotient,
    Sopfr,
} from "../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, N2D3P9, TwoThreeFreeClassAnalysis } from "../../../../../src/sagittal"
import { analyzeComma } from "../../../../../src/sagittal/ji"

describe("analyzeComma", (): void => {
    it("returns an analysis of a comma, given its monzo", (): void => {
        const comma = { monzo: [-8, -6, 3, 5, -1] as RationalMonzo } as Comma

        const actual = analyzeComma(comma)

        const expected = {
            cents: 40.022726 as Cents,
            monzo: [-8, -6, 3, 5, -1] as RationalMonzo,
            quotient: [2100875, 2052864] as RationalQuotient,
            decimal: 1.023387 as Decimal,
            name: "2100875/11S" as Name<Comma>,
            apotomeSlope: -8.464345 as ApotomeSlope,
            aas: 8.464345 as Abs<ApotomeSlope>,
            ate: 6 as Abs<Integer & Exponent<3 & Prime>>,
            twoThreeFreeClassAnalysis: {
                twoThreeFreePrimeLimit: 11 as Prime,
                monzo: [0, 0, 3, 5, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                twoThreeFreeCopfr: 9 as Copfr<{ rough: 5 }>,
                twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            } as TwoThreeFreeClassAnalysis,
        } as CommaAnalysis
        expect(actual).toBeCloseToObject(expected)
    })
})
