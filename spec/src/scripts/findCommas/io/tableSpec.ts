import { Cents, IO, ioSettings, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../../src/general"
import { ApotomeSlope, Comma } from "../../../../../src/sagittal"
import { N2D3P9 } from "../../../../../src/sagittal/commaEvaluation/n2d3p9"
import { computeFindCommasTable } from "../../../../../src/scripts/findCommas/io"

describe("computeFindCommasTable", () => {
    const commas: Comma[] = [
        {
            name: "11M" as Name<Comma>,
            limit: 11 as Prime,
            fiveRoughSopfr: 11 as Sopfr<5>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            n2d3p9: 6.722 as N2D3P9,
        },
        {
            name: "25/49M" as Name<Comma>,
            limit: 7 as Prime,
            fiveRoughSopfr: 24 as Sopfr<5>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            n2d3p9: 26.466 as N2D3P9,
        },
    ] as Comma[]

    it("aligns each comma output to the same width per column", () => {
        const actual = computeFindCommasTable(commas)

        const expected =
            "comma name\tlimit\t5-rough sopfr\tcents \tmonzo       \tratio\tapotome slope\tN2D3P9\n" +
            "11M       \t11   \t11           \t45.450\t[ 0 0 1 ⟩   \t33/32\t-4.000       \t6.72  \n" +
            "25/49M    \t7    \t24           \t33.400\t[ 1 0 2 -2 ⟩\t50/49\t-2.154       \t26.47 \n" as IO
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", () => {
        ioSettings.forForum = true
        const actual = computeFindCommasTable(commas)
        ioSettings.forForum = false

        const expected =
            "[table]\n" +
            "[tr][th]comma name[/th][th]limit[/th][th]5-rough sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]\n" +
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.450[/td][td][ 0 0 1 ⟩[/td][td]33/32[/td][td]-4.000[/td][td]6.72[/td][/tr]\n" +
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.400[/td][td][ 1 0 2 -2 ⟩[/td][td]50/49[/td][td]-2.154[/td][td]26.47[/td][/tr]\n" +
            "[/table]\n" as IO
        expect(actual).toEqual(expected)
    })
})
