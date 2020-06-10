const {computeBoundedCommas} = require("../../../../src/boundsAnalysis/data/boundedCommas")

describe("computeBoundedCommas", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of commas it bounds at that level", () => {
        const bound = {
            position: 24.66219847111080,
            levels: ["MEDIUM", "EXTREME", "INSANE"],
        }

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 21.5062895967148,
                    distance: 3.1559088743959975,
                    symbol: "/|",
                    unicode: '',
                    mina: 44,
                },
                {
                    introducingLevel: "MEDIUM",
                    position: 27.2640918001001,
                    distance: 2.601893328989302,
                    symbol: "|)",
                    unicode: '',
                    mina: 56,
                },
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    unicode: '',
                    mina: 50,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    unicode: '',
                    mina: 51,
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    symbol: ",)/|",
                    unicode: '',
                    mina: 50,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    symbol: ")/|",
                    unicode: '',
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

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 64.9146246608968,
                    symbol: "(|\\",
                    unicode: '',
                    mina: 133,
                    distance: 3.6578835602835937,
                },
                undefined,
            ],
            HIGH: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    unicode: '',
                    mina: 138,
                    distance: 1.2814466063946952,
                },
                undefined,
            ],
            VERY_HIGH: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    symbol: ")|\\\\",
                    unicode: '',
                    mina: 138,
                    distance: 1.2814466063946952,
                },
                undefined,
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    unicode: '',
                    mina: 140,
                    distance: 0.44892240228040237,
                },
                undefined,
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    symbol: "``)|\\\\",
                    unicode: '',
                    mina: 140,
                    distance: 0.44892240228040237,
                },
                undefined,
            ],
        })
    })


    it("works for the first bound", () => {
        const bound = {
            position: 0.210788021120605,
            levels: ["EXTREME", "INSANE"],
        }

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            EXTREME: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    symbol: "`|",
                    unicode: '',
                    mina: 1,
                    distance: 0.211928144834215,
                },
            ],
            INSANE: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    symbol: "`|",
                    unicode: '',
                    mina: 1,
                    distance: 0.211928144834215,
                },
            ],
        })
    })
})
