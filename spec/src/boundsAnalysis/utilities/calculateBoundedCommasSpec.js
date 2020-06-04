const {calculateBoundedCommas} = require("../../../../src/boundsAnalysis/utilities/calculateBoundedCommas")

describe("calculateBoundedCommas", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of commas it bounds at that level", () => {
        const bound = {
            position: 24.662198471110800,
            levels: ["Medium", "Extreme", "Insane"],
        }

        const result = calculateBoundedCommas(bound)

        expect(result).toEqual({
            Medium: [
                {
                    introducingLevel: "Medium",
                    position: 21.5062895967148,
                    distance: 3.1559088743959975,
                    symbol: "/|",
                    mina: 44,
                },
                {
                    introducingLevel: "Medium",
                    position: 27.2640918001001,
                    distance: 2.601893328989302,
                    symbol: "|)",
                    mina: 56,
                },
            ],
            Extreme: [
                {
                    introducingLevel: "Extreme",
                    position: 24.27848242135630,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    mina: 50,
                },
                {
                    introducingLevel: "High",
                    position: 24.88430832517980,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    mina: 51,
                },
            ],
            Insane: [
                {
                    introducingLevel: "Extreme",
                    position: 24.27848242135630,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    mina: 50,
                },
                {
                    introducingLevel: "High",
                    position: 24.88430832517980,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    mina: 51,
                },
            ],
        })
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.572508221180400,
            levels: ["Medium", "High", "VeryHigh", "Extreme", "Insane"],
        }

        const result = calculateBoundedCommas(bound)

        expect(result).toEqual({
            Medium: [
                {
                    introducingLevel: "Medium",
                    position: 64.9146246608968,
                    symbol: "(|\\",
                    mina: 133,
                    distance: 3.6578835602835937,
                },
            ],
            High: [
                {
                    introducingLevel: "High",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    mina: 138,
                    distance: 1.2814466063946952,
                },
            ],
            VeryHigh: [
                {
                    introducingLevel: "High",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    mina: 138,
                    distance: 1.2814466063946952,
                },
            ],
            Extreme: [
                {
                    introducingLevel: "Extreme",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    mina: 140,
                    distance: 0.44892240228040237,
                },
            ],
            Insane: [
                {
                    introducingLevel: "Extreme",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    mina: 140,
                    distance: 0.44892240228040237,
                },
            ],
        })
    })
})
