import {
    Abs,
    Cents,
    Copfr,
    Decimal,
    Direction,
    Exponent,
    Max,
    Monzo,
    Name,
    Prime,
    Quotient,
    Scamon,
    Sopfr,
    Two3FreeClass,
} from "../../../../../src/general"
import {analyzeJiPitch, ApotomeSlope, N2D3P9} from "../../../../../src/sagittal"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its monzo", (): void => {
        const jiPitch = {monzo: [-7, -6, 3, 5, -1]} as Scamon<{rational: true}>

        const actual = analyzeJiPitch(jiPitch)

        const expected = {
            pitch: jiPitch,
            cents: 1240.022726 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo<{rational: true}>,
            quotient: [2100875, 1026432] as Quotient<{rational: true}>,
            decimal: 2.046775 as Decimal<{rational: true}>,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
            aas: 82.352717 as Abs<ApotomeSlope>,
            two3FreeClassAnalysis: {
                two3FreeClass: {
                    monzo: [0, 0, 3, 5, -1] as Monzo<{rational: true, rough: 5, direction: Direction.SUPER}>,
                } as Two3FreeClass,
                name: "{2100875/11}₂,₃" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{rough: 5}>>,
                two3FreeCopfr: 9 as Copfr<{rough: 5}>,
                two3FreeSopfr: 61 as Sopfr<{rough: 5}>,
                n2d3p9: 36777.470341 as N2D3P9,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
