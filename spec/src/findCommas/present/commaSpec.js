const {presentComma} = require("../../../../src/findCommas/present/comma")

describe("presentComma", () => {
    const comma = {
        cents: 11.2,
        monzo: [0, -1, 1],
        ratio: [5, 4],
        commaName: "6j",
        limit: 14,
        apotomeSlope: 8.2,
        sopfgtt: 13,
    }

    it("formats it in a nice single line in the default summary mode", () => {
        const result = presentComma(comma)

        expect(result).toEqual("6j\t14\t13\t11.2\t[0 -1 1⟩\t5/4\t8.2")
    })

    it("can also format it in a details mode with lines with titles for each line", () => {
        const result = presentComma(comma, {mode: "DETAILS"})

        expect(result).toEqual(
            "comma name:   \t6j\n" +
            "limit:        \t14\n" +
            "SoPF>3:       \t13\n" +
            "cents:        \t11.2\n" +
            "monzo:        \t[0 -1 1⟩\n" +
            "ratio:        \t5/4\n" +
            "apotome slope:\t8.2",
        )
    })
})
