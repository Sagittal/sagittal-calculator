import {presentCommas} from "../../../../../src/utilities/comma/present/commas"

describe("presentCommas", () => {
    it("aligns each comma output to the same width per column", () => {
        const commas = [
            {
                commaName: "11M",
                limit: 11,
                fiveRoughSopfr: 11,
                cents: 45.45,
                monzo: [0, 0, 1],
                ratio: [33, 32],
                apotomeSlope: -4,
            },
            {
                commaName: "25/49M",
                limit: 7,
                fiveRoughSopfr: 24,
                cents: 33.4,
                monzo: [0, 0],
                ratio: [50, 49],
                apotomeSlope: -59.333,
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
