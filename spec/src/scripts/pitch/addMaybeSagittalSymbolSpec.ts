import { Cents, Id, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, JiSymbol, N2D3P9, SagittalComma } from "../../../../src/sagittal"
import { addMaybeSagittalSymbol } from "../../../../src/scripts/pitch/addMaybeSagittalSymbol"

describe("addMaybeSagittalSymbol", () => {
    it(`adds the ASCII for a Sagittal symbol if there is one whose primary comma has this name`, () => {
        const comma: AnalyzedRationalPitch = {
            apotomeSlope: -2.280 as ApotomeSlope,
            fiveRoughSopfr: 11 as Sopfr<5>,
            limit: 11 as Prime,
            ratio: [33, 32] as Ratio,
            monzo: [-5, 1, 0, 0, 1] as Monzo,
            cents: 53.2729432301441 as Cents,
            name: "11M" as Name<SagittalComma>,
            n2d3p9: 6.722222222222222 as N2D3P9,
        }

        const actual = addMaybeSagittalSymbol(comma)

        expect(actual).toEqual({
            symbolId: 115 as Id<JiSymbol>,
            apotomeSlope: -2.280 as ApotomeSlope,
            fiveRoughSopfr: 11 as Sopfr<5>,
            limit: 11 as Prime,
            ratio: [33, 32] as Ratio,
            monzo: [-5, 1, 0, 0, 1] as Monzo,
            cents: 53.2729432301441 as Cents,
            name: "11M" as Name<SagittalComma>,
            n2d3p9: 6.722222222222222 as N2D3P9,
        })
    })

    it(`leaves the comma unchanged if there is no Sagittal symbol whose primary comma has this name`, () => {
        const comma: AnalyzedRationalPitch = {
            apotomeSlope: 70.574 as ApotomeSlope,
            fiveRoughSopfr: 11 as Sopfr<5>,
            limit: 19 as Prime,
            ratio: [51380224, 50486895] as Ratio,
            monzo: [20, -12, -1, 2, 0, 0, 0, -1] as Monzo,
            cents: -1146.2 as Cents,
            name: "49/95C" as Name<SagittalComma>,
            n2d3p9: 272.98 as N2D3P9,
        }

        const actual = addMaybeSagittalSymbol(comma)

        expect(actual).toEqual(comma)
    })
})
