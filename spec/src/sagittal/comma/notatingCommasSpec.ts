import { Abs, Cents, Id, Max, Monzo } from "../../../../src/general"
import { AnalyzedRationalPitch, ApotomeSlope, computeNotatingCommas, JiSymbol } from "../../../../src/sagittal"

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
        ] as Array<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }>
        expect(actual).toEqual(expected)
    })

    it("can filter", () => {
        const monzo = [0, 0, 0, 0, 1] as Monzo
        const maxAbsoluteApotomeSlope = 9 as Max<Abs<ApotomeSlope>>
        const maxCents = 55 as Max<Cents>

        const actual = computeNotatingCommas(monzo, { maxAbsoluteApotomeSlope, maxCents })

        const expected = [
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
        ] as Array<AnalyzedRationalPitch & { symbolId?: Id<JiSymbol> }>
        expect(actual).toEqual(expected)
    })
})
