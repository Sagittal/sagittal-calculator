import { Cents, Name, Prime, Ratio } from "../../../../src/general"
import { ApotomeSlope, Comma, Monzo, Position, Sopfr } from "../../../../src/general/music"
import { presentCommas } from "../../../../src/scripts/findCommas/present"
import { N2D3P9 } from "../../../../src/general/music/types"

describe("presentCommas", () => {
    it("aligns each comma output to the same width per column", () => {
        const commas: Comma[] = [
            {
                name: "11M" as Name<Position>,
                limit: 11 as Prime,
                fiveRoughSopfr: 11 as Sopfr<5>,
                cents: 45.45 as Cents,
                monzo: [0, 0, 1] as Monzo,
                ratio: [33, 32] as Ratio,
                apotomeSlope: -4 as ApotomeSlope,
                n2d3p9: 6.722 as N2D3P9,
            },
            {
                name: "25/49M" as Name<Position>,
                limit: 7 as Prime,
                fiveRoughSopfr: 24 as Sopfr<5>,
                cents: 33.4 as Cents,
                monzo: [1, 0, 2, -2] as Monzo,
                ratio: [50, 49] as Ratio,
                apotomeSlope: -2.154 as ApotomeSlope,
                n2d3p9: 26.466 as N2D3P9,
            },
        ]

        const result = presentCommas(commas)

        expect(result).toEqual([
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo       \tratio\tapotome slope\tN2D3P9",
            "11M       \t11   \t11           \t45.45\t[ 0 0 1 ⟩   \t33/32\t-4           \t6.722 ",
            "25/49M    \t7    \t24           \t33.4 \t[ 1 0 2 -2 ⟩\t50/49\t-2.154       \t26.466",
        ].join("\n"))
    })
})
