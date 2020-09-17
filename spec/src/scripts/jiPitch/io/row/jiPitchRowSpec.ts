import { Row } from "../../../../../../src/general/io/table"
import { Prime, Sopfr } from "../../../../../../src/general/math"
import { Monzo } from "../../../../../../src/general/math/monzo"
import { Ratio } from "../../../../../../src/general/math/ratio"
import { Cents, TwoThreeFreeClass } from "../../../../../../src/general/music"
import { ApotomeSlope, JiPitchAnalysis, N2D3P9 } from "../../../../../../src/sagittal/comma"
import { computeJiPitchRow } from "../../../../../../src/scripts/jiPitch/io/row"

describe("computeJiPitchRow", (): void => {
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
        
        const actual = computeJiPitchRow(jiPitchAnalysis)
        
        const expected = [
            "5/4",              // ratio
            "[   0  -1   1 ⟩",  // monzo
            " 11.200",          // cents
            "  8.200",          // apotome slope
        ] as Row<{ of: JiPitchAnalysis, header: true }>
        expect(actual).toEqual(expected)
    })
})
