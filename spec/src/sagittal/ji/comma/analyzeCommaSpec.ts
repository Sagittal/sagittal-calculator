import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Direction,
    Exponent,
    IntegerDecimal,
    Max, 
    Name,
    Prime,
    RationalMonzo,
    RationalQuotient,
    RealDecimal,
    Sopfr,
    Two3FreeClass,
} from "../../../../../src/general"
import { ApotomeSlope, CommaAnalysis, N2D3P9, Two3FreeClassAnalysis } from "../../../../../src/sagittal"
import { analyzeComma } from "../../../../../src/sagittal/ji"

describe("analyzeComma", (): void => {
    it("returns an analysis of a comma, given its monzo", (): void => {
        const comma = { monzo: [-8, -6, 3, 5, -1] as RationalMonzo } as Comma

        const actual = analyzeComma(comma)

        const expected = {
            cents: 40.022726 as Cents,
            monzo: [-8, -6, 3, 5, -1] as RationalMonzo,
            quotient: [2100875, 2052864] as RationalQuotient,
            decimal: 1.023387 as RealDecimal,
            name: "2100875/11S" as Name<Comma>,
            apotomeSlope: -8.464345 as ApotomeSlope,
            aas: 8.464345 as Abs<ApotomeSlope>,
            ate: 6 as Abs<IntegerDecimal & Exponent<3 & Prime>>,
            two3FreeClassAnalysis: {
                name: "2100875/11₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                monzo: [0, 0, 3, 5, -1] as RationalMonzo<{ rough: 5, direction: Direction.SUPER }>,
                two3FreeCopfr: 9 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            } as Two3FreeClassAnalysis,
        } as CommaAnalysis
        expect(actual).toBeCloseToObject(expected)
    })
})
