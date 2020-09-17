import { Row } from "../../../../../../src/general/io/table"
import { Prime, Sopfr } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/monzo"
import { Ratio } from "../../../../../../src/general/math/ratio"
import { Cents, TwoThreeFreeClass } from "../../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../../src/sagittal/comma"
import { compute23FreeClassRow } from "../../../../../../src/scripts/jiPitch/io/row"

describe("compute23FreeClassRow", (): void => {
    it("returns a row of information about the JI pitch", (): void => {
        const jiPitchAnalysis: JiPitchAnalysis = {
            cents: 11.2 as Cents,
            monzo: [0, -1, 1] as Monzo,
            ratio: [5, 4] as Ratio,
            primeLimit: 14 as Prime,
            apotomeSlope: 8.2 as ApotomeSlope,
            twoThreeFreeClass: { ratio: [5, 1] as Ratio } as TwoThreeFreeClass,
            twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            n2d3p9: 18.4567 as N2D3P9,
        }

        const actual = compute23FreeClassRow(jiPitchAnalysis)

        const expected = [
            " 14    ",          // prime limit
            "5/1",              // 2,3-free class
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{ of: TwoThreeFreeClass, header: true }>
        expect(actual).toEqual(expected)
    })
})
