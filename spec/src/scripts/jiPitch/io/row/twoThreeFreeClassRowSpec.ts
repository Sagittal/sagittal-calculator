import { Row } from "../../../../../../src/general/io/table"
import { Direction, Prime, Sopfr } from "../../../../../../src/general/math"
import { Ratio } from "../../../../../../src/general/math/ratio"
import { TwoThreeFreeClass } from "../../../../../../src/general/music"
import { N2D3P9, TwoThreeFreeClassAnalysis } from "../../../../../../src/sagittal/ji"
import { compute23FreeClassRow } from "../../../../../../src/scripts/jiPitch/io/row"

describe("compute23FreeClassRow", (): void => {
    it("returns a row of information about the JI pitch", (): void => {
        const twoThreeFreeClassAnalysis: TwoThreeFreeClassAnalysis = {
            ratio: [5, 1] as Ratio<{ rough: 5, direction: Direction.SUPER }>,
            twoThreeFreeSopfr: 13 as Sopfr<{ rough: 5 }>,
            n2d3p9: 18.4567 as N2D3P9,
            twoThreeFreePrimeLimit: 14 as Prime,
        }

        const actual = compute23FreeClassRow(twoThreeFreeClassAnalysis)

        const expected = [
            " 14    ",          // prime limit
            "5/1",              // 2,3-free class
            " 13    ",          // 2,3-free SoPFR
            " 18.457",          // 2,3-free N2D3P9
        ] as Row<{ of: TwoThreeFreeClass, header: true }>
        expect(actual).toEqual(expected)
    })
})
