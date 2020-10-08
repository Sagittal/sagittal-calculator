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
    Pitch,
    Prime,
    Quotient,
    Sopfr,
    Two3FreeClass,
} from "../../../../../src/general"
import { ApotomeSlope, N2D3P9, Two3FreeClassAnalysis } from "../../../../../src/sagittal"
import { analyzeJiPitch } from "../../../../../src/sagittal/ji"

describe("analyzeJiPitch", (): void => {
    it("returns an analysis of a JI pitch, given its monzo", (): void => {
        const jiPitch = { monzo: [-7, -6, 3, 5, -1] } as Pitch<{ rational: true }>

        const actual = analyzeJiPitch(jiPitch)

        // Todo: DEFER UNTIL AFTER SCALED MONZO
        //  Here's an example of a bad spread: analysis types should no longer extend, they should contain the types
        //  Which they analyze http://forum.sagittal.org/viewtopic.php?p=2469#p2469
        //  "cease approaching the analysis types"
        const expected = {
            ...jiPitch,
            cents: 1240.022726 as Cents,
            monzo: [-7, -6, 3, 5, -1] as Monzo<{ rational: true }>,
            quotient: [2100875, 1026432] as Quotient<{ rational: true }>,
            decimal: 2.046775 as Decimal<{ rational: true }>,
            apotomeSlope: -82.352717 as ApotomeSlope,
            ate: 6 as Abs<Decimal<{ integer: true }> & Exponent<3 & Prime>>,
            aas: 82.352717 as Abs<ApotomeSlope>,
            two3FreeClassAnalysis: {
                two3FreeClass: {
                    monzo: [0, 0, 3, 5, -1] as Monzo<{ rational: true, rough: 5, direction: Direction.SUPER }>,
                },
                name: "2100875/11₍₂,₃₎" as Name<Two3FreeClass>,
                two3FreePrimeLimit: 11 as Max<Prime<{ rough: 5 }>>,
                two3FreeCopfr: 9 as Copfr<{ rough: 5 }>,
                two3FreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            } as Two3FreeClassAnalysis,
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
