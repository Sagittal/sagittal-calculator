import { Cents, Comma, Direction, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../src/general"
import { ApotomeSlope, N2D3P9 } from "../../../../src/sagittal"
import { analyzeComma } from "../../../../src/sagittal/comma"

describe("analyzeComma", (): void => {
    it("returns an analysis a comma, given its monzo", (): void => {
        const comma = { monzo: [-8, -6, 3, 5, -1] as Monzo } as Comma

        const actual = analyzeComma(comma)

        const expected = {
            cents: 40.022726 as Cents,
            monzo: [-8, -6, 3, 5, -1] as Monzo,
            ratio: [2100875, 2052864] as Ratio,
            name: "2100875/11S" as Name<Comma>,
            apotomeSlope: -8.464345 as ApotomeSlope,
            twoThreeFreeClassAnalysis: {
                twoThreeFreePrimeLimit: 11 as Prime,
                monzo: [0, 0, 3, 5, -1] as Monzo<{ rough: 5, direction: Direction.SUPER }>,
                twoThreeFreeSopfr: 61 as Sopfr<{ rough: 5 }>,
                n2d3p9: 36777.470341 as N2D3P9,
            },
        }
        expect(actual).toBeCloseToObject(expected)
    })
})
