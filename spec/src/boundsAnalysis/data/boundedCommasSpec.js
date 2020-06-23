const {computeBoundedCommas} = require("../../../../src/boundsAnalysis/data/boundedCommas")

describe("computeBoundedCommas", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of commas it bounds at that level", () => {
        const bound = {
            position: 24.66219847111080,
            levels: ["MEDIUM", "EXTREME", "INSANE"],
            id: 54,
        }

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            id: 54,
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 21.5062895967148,
                    distance: 3.1559088743959975,
                    ascii: "/|",
                    unicode: "",
                    mina: 44,
                    monzo: [-4, 4, -1],
                    id: 44,
                },
                {
                    introducingLevel: "MEDIUM",
                    position: 27.2640918001001,
                    distance: 2.601893328989302,
                    ascii: "|)",
                    unicode: "",
                    mina: 56,
                    monzo: [6, -2, 0, -1],
                    id: 58,
                },
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    ascii: ",)/|",
                    unicode: "",
                    mina: 50,
                    monzo: [-8, 3, 3, 0, 0, -1],
                    id: 51,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    ascii: ")/|",
                    unicode: "",
                    mina: 51,
                    monzo: [-13, 7, -1, 0, 0, 0, 0, 1],
                    id: 52,
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 24.2784824213563,
                    distance: 0.38371604975449713,
                    ascii: ",)/|",
                    unicode: "",
                    mina: 50,
                    monzo: [-8, 3, 3, 0, 0, -1],
                    id: 51,
                },
                {
                    introducingLevel: "HIGH",
                    position: 24.8843083251798,
                    distance: 0.22210985406900008,
                    ascii: ")/|",
                    unicode: "",
                    mina: 51,
                    monzo: [-13, 7, -1, 0, 0, 0, 0, 1],
                    id: 52,
                },
            ],
        })
    })

    it("works for the final bound", () => {
        const bound = {
            position: 68.57250822118040,
            levels: ["MEDIUM", "HIGH", "ULTRA", "EXTREME", "INSANE"],
            id: 54,
        }

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            id: 54,
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    position: 64.9146246608968,
                    ascii: "(|\\",
                    unicode: "",
                    mina: 133,
                    id: 142,
                    distance: 3.6578835602835937,
                    monzo: [-13, 5, 1, 1],
                },
                undefined,
            ],
            HIGH: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    ascii: ")|\\\\",
                    unicode: "",
                    mina: 138,
                    id: 147,
                    distance: 1.2814466063946952,
                    monzo: [-16, 11, 1, 0, 0, -1],
                },
                undefined,
            ],
            ULTRA: [
                {
                    introducingLevel: "HIGH",
                    position: 67.2910616147857,
                    ascii: ")|\\\\",
                    unicode: "",
                    mina: 138,
                    id: 147,
                    distance: 1.2814466063946952,
                    monzo: [-16, 11, 1, 0, 0, -1],
                },
                undefined,
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    ascii: "``)|\\\\",
                    unicode: "",
                    mina: 140,
                    id: 149,
                    distance: 0.44892240228040237,
                    monzo: [-11, 8, 2, -1, -1],
                },
                undefined,
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    position: 68.1235858189,
                    ascii: "``)|\\\\",
                    unicode: "",
                    mina: 140,
                    id: 149,
                    distance: 0.44892240228040237,
                    monzo: [-11, 8, 2, -1, -1],
                },
                undefined,
            ],
        })
    })


    it("works for the first bound", () => {
        const bound = {
            position: 0.210788021120605,
            levels: ["EXTREME", "INSANE"],
            id: 55,
        }

        const result = computeBoundedCommas(bound)

        expect(result).toEqual({
            id: 55,
            EXTREME: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    ascii: "`|",
                    unicode: "",
                    mina: 1,
                    monzo: [12, -2, -1, -1, 0, -1],
                    id: 1,
                    distance: 0.211928144834215,
                },
            ],
            INSANE: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    position: 0.42271616595482,
                    ascii: "`|",
                    unicode: "",
                    mina: 1,
                    monzo: [12, -2, -1, -1, 0, -1],
                    id: 1,
                    distance: 0.211928144834215,
                },
            ],
        })
    })
})
