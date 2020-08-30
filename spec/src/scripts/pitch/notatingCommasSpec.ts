import { Monzo } from "../../../../src/general/math/monzo"
import { computeNotatingCommas } from "../../../../src/scripts/pitch/notatingCommas"
import { AnalyzedRationalPitchWithMaybeSagittalSymbol } from "../../../../src/scripts/pitch/types"

describe("computeNotatingCommas", () => {
    it("given a monzo, returns a list of the commas that notate it, plus the symbol if that comma is a primary comma for a Sagittal JI symbol", () => {
        const monzo = [0, 0, 0, 0, 1] as Monzo

        const actual = computeNotatingCommas(monzo)

        const expected = [
            {
                cents: 29.812932845495258,
                monzo: [14, -11, 0, 0, 1],
                ratio: [180224, 177147],
                name: "11C",
                limit: 11,
                apotomeSlope: -12.835690889724944,
                fiveRoughSopfr: 11,
                n2d3p9: 6.722222,
            },
            {
                cents: 53.27294323014412,
                monzo: [-5, 1, 0, 0, 1],
                ratio: [33, 32],
                name: "11M",
                limit: 11,
                apotomeSlope: -2.2802091985789374,
                fiveRoughSopfr: 11,
                n2d3p9: 6.722222,
            },
            {
                cents: 36.952052442918934,
                monzo: [13, -6, 0, 0, -1],
                ratio: [8192, 8019],
                name: "1/11S",
                limit: 11,
                apotomeSlope: -8.275272492567069,
                fiveRoughSopfr: 11,
                n2d3p9: 6.722222,
            },
            {
                cents: 60.41206282756764,
                monzo: [-6, 6, 0, 0, -1],
                ratio: [729, 704],
                name: "1/11L",
                limit: 11,
                apotomeSlope: 2.280209198578947,
                fiveRoughSopfr: 11,
                n2d3p9: 6.722222,
            },
        ] as AnalyzedRationalPitchWithMaybeSagittalSymbol[]
        expect(actual).toEqual(expected)
    })
})
