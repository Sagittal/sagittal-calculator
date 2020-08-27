import { Cents, Monzo, Name, Prime, Ratio, Sopfr } from "../../../../src/general"
import { ApotomeSlope, N2D3P9 } from "../../../../src/general/music"
import { NamedComma, SagittalComma } from "../../../../src/notations"
import { formatCommas } from "../../../../src/scripts/findCommas/io"

describe("formatCommas", () => {
    const commas: NamedComma[] = [
        {
            name: "11M" as Name<SagittalComma>,
            limit: 11 as Prime,
            fiveRoughSopfr: 11 as Sopfr<5>,
            cents: 45.45 as Cents,
            monzo: [0, 0, 1] as Monzo,
            ratio: [33, 32] as Ratio,
            apotomeSlope: -4 as ApotomeSlope,
            n2d3p9: 6.722 as N2D3P9,
        },
        {
            name: "25/49M" as Name<SagittalComma>,
            limit: 7 as Prime,
            fiveRoughSopfr: 24 as Sopfr<5>,
            cents: 33.4 as Cents,
            monzo: [1, 0, 2, -2] as Monzo,
            ratio: [50, 49] as Ratio,
            apotomeSlope: -2.154 as ApotomeSlope,
            n2d3p9: 26.466 as N2D3P9,
        },
    ]

    it("aligns each comma output to the same width per column", () => {
        const actual = formatCommas(commas)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo       \tratio\tapotome slope\tN2D3P9",
            "11M       \t11   \t11           \t45.45\t[ 0 0 1 ⟩   \t33/32\t-4           \t6.722 ",
            "25/49M    \t7    \t24           \t33.4 \t[ 1 0 2 -2 ⟩\t50/49\t-2.154       \t26.466",
        ].join("\n")
        expect(actual).toEqual(expected)
    })

    it("can format tables for sharing on the Sagittal forum", () => {
        const actual = formatCommas(commas, { forForum: true })

        const expected = [
            "[table]",
            "[tr][th]comma name[/th][th]limit[/th][th]5-rough sopfr[/th][th]cents[/th][th]monzo[/th][th]ratio[/th][th]apotome slope[/th][th]N2D3P9[/th][/tr]",
            "[tr][td]11M[/td][td]11[/td][td]11[/td][td]45.45[/td][td][ 0 0 1 ⟩[/td][td]33/32[/td][td]-4[/td][td]6.722[/td][/tr]",
            "[tr][td]25/49M[/td][td]7[/td][td]24[/td][td]33.4[/td][td][ 1 0 2 -2 ⟩[/td][td]50/49[/td][td]-2.154[/td][td]26.466[/td][/tr]",
            "[/table]",
        ].join("\n")
        expect(actual).toEqual(expected)
    })
})
