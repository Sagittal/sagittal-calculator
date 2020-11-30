import {
    Abs,
    Cents,
    Comma,
    Copfr,
    Decimal,
    Direction,
    Max,
    Monzo,
    Name,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "../../../../../src/general"
import {analyzeComma, ApotomeSlope, Ate, N2D3P9} from "../../../../../src/sagittal"

describe("analyzeComma", (): void => {
    it("returns an analysis of a comma, given its monzo", (): void => {
        const comma = {monzo: [-8, -6, 3, 5, -1]} as Comma

        const actual = analyzeComma(comma)

        const expected = {
            pitch: comma,
            cents: 40.022726 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo<{rational: true}>,
            quotient: [2100875, 2052864] as Quotient<{rational: true}>,
            decimal: 1.023387 as Decimal<{rational: true}>,
            name: "5³⋅7⁵/11S" as Name<Comma>,
            apotomeSlope: -8.464345 as ApotomeSlope,
            aas: 8.464345 as Abs<ApotomeSlope>,
            ate: 6 as Ate,
            two3FreeClassAnalysis: {
                name: "{2100875/11}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{rough: 5}>>,
                two3FreeCopfr: 9 as Copfr<{rough: 5}>,
                two3FreeSopfr: 61 as Sopfr<{rough: 5}>,
                n2d3p9: 36777.470341 as N2D3P9,
                two3FreeClass: {
                    monzo: [0, 0, 3, 5, -1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
