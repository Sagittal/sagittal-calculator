const {calculateBoundedCommas} = require("../../../../src/boundsAnalysis/data/boundedCommas")

describe("calculateBoundedCommas", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of commas it bounds at that level", () => {
        const bound = {
            position: 24.66219847111080,
            levels: ["MEDIUM", "EXTREME", "INSANE"],
        }

        const result = calculateBoundedCommas(bound)

        expect(result).toEqual({
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 21.5062895967148,
                    distance: 3.1559088743959975,
                    symbol: "/|",
                    mina: 44,
                },
                {
                    introducingLevel: "MEDIUM",
                    position: 27.2640918001001,
                    distance: 2.601893328989302,
                    symbol: "|)",
                    mina: 56,
                },
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    mina: 50,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    mina: 51,
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    mina: 50,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    mina: 51,
                },
            ],
        })
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.57250822118040,
            levels: ["MEDIUM", "HIGH", "VERY_HIGH", "EXTREME", "INSANE"],
        }

        const result = calculateBoundedCommas(bound)

        expect(result).toEqual({
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 64.9146246608968,
                    symbol: "(|\\",
                    mina: 133,
                    distance: 3.6578835602835937,
                },
            ],
            HIGH: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    mina: 138,
                    distance: 1.2814466063946952,
                },
            ],
            VERY_HIGH: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    mina: 138,
                    distance: 1.2814466063946952,
                },
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    mina: 140,
                    distance: 0.44892240228040237,
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    mina: 140,
                    distance: 0.44892240228040237,
                },
            ],
        })
    })


    it("works for the first bound", () => {
        const bound = {
            position: 0.210788021120605,
            levels: ["EXTREME", "INSANE"],
        }

        const result = calculateBoundedCommas(bound)

        expect(result).toEqual({
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    symbol: "`|",
                    mina: 1,
                    distance: 0.211928144834215,
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    symbol: "`|",
                    mina: 1,
                    distance: 0.211928144834215,
                },
            ],
        })
    })
})
