import { Cents, Name, Prime, Ratio } from "../../../../src/general"
import { ApotomeSlope, Comma, Monzo, Position, Sopfr } from "../../../../src/general/music/types"
import { presentCommas } from "../../../../src/scripts/findCommas/present"

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
            },
            {
                name: "25/49M" as Name<Position>,
                limit: 7 as Prime,
                fiveRoughSopfr: 24 as Sopfr<5>,
                cents: 33.4 as Cents,
                monzo: [0, 0] as Monzo,
                ratio: [50, 49] as Ratio,
                apotomeSlope: -59.333 as ApotomeSlope,
            },
        ]

        const result = presentCommas(commas)

        expect(result).toEqual([
            "comma name\tlimit\t5-rough sopfr\tcents\tmonzo    \tratio\tapotome slope",
            "11M       \t11   \t11           \t45.45\t[ 0 0 1 ⟩\t33/32\t-4           ",
            "25/49M    \t7    \t24           \t33.4 \t[ 0 0 ⟩  \t50/49\t-59.333      ",
        ].join("\n"))
    })
})
