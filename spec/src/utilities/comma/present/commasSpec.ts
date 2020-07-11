import { presentCommas } from "../../../../../src/utilities/comma/present/commas"
import { Comma, CommaName, Monzo } from "../../../../../src/utilities/comma/types"
import { Cents, Prime, Ratio } from "../../../../../src/utilities/types"
import { ApotomeSlope } from "../../../../../src/notations/ji/types"

describe("presentCommas", () => {
    it("aligns each comma output to the same width per column", () => {
        const commas: Comma[] = [
            {
                commaName: "11M" as CommaName,
                limit: 11 as Prime,
                fiveRoughSopfr: 11,
                cents: 45.45 as Cents,
                monzo: [0, 0, 1] as Monzo,
                ratio: [33, 32] as Ratio,
                apotomeSlope: -4 as ApotomeSlope,
            },
            {
                commaName: "25/49M" as CommaName,
                limit: 7 as Prime,
                fiveRoughSopfr: 24,
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
