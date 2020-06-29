const {computeLevelBoundedSymbols} = require("../../../../src/notations/ji/levelBoundedSymbols")

describe("computeLevelBoundedSymbols", () => {
    it("returns, given a bound, for each of its levels, an array of the pair of symbols it bounds at that level, as well as their distances and ina-distances from the bound", () => {
        const bound = {
            position: 24.66219847111080,
            levels: ["MEDIUM", "EXTREME", "INSANE"],
            id: 54,
        }

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54,
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    distance: 3.1559088743959975,
                    inaDistance: 0.5829624209957123,
                    ascii: "/|",
                    unicode: "",
                    mina: 44,
                    primaryComma: {
                        monzo: [-4, 4, -1],
                        position: 21.5062895967148,
                    },
                    id: 44,
                    elements: ["/|"],
                },
                {
                    introducingLevel: "MEDIUM",
                    distance: 2.601893328989302,
                    inaDistance: 0.48062415443807605,
                    ascii: "|)",
                    unicode: "",
                    mina: 56,
                    primaryComma: {
                        monzo: [6, -2, 0, -1],
                        position: 27.2640918001001,
                    },
                    id: 58,
                    elements: ["|)"],
                },
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    distance: 0.38371604975449713,
                    inaDistance: 0.786434752419428,
                    ascii: ",)/|",
                    unicode: "",
                    mina: 50,
                    primaryComma: {
                        monzo: [-8, 3, 3, 0, 0, -1],
                        position: 24.2784824213563,
                    },
                    id: 51,
                    elements: [",|", ")|", "/|"],
                },
                {
                    introducingLevel: "HIGH",
                    distance: 0.22210985406900008,
                    inaDistance: 0.4552191867044054,
                    ascii: ")/|",
                    unicode: "",
                    mina: 51,
                    primaryComma: {
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1],
                        position: 24.8843083251798,
                    },
                    id: 52,
                    elements: [")|", "/|"],
                },
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    distance: 0.38371604975449713,
                    inaDistance: 2.7305824665550094,
                    ascii: ",)/|",
                    unicode: "",
                    mina: 50,
                    primaryComma: {
                        monzo: [-8, 3, 3, 0, 0, -1],
                        position: 24.2784824213563,
                    },
                    id: 51,
                    elements: [",|", ")|", "/|"],
                },
                {
                    introducingLevel: "HIGH",
                    distance: 0.22210985406900008,
                    inaDistance: 1.5805679057676565,
                    ascii: ")/|",
                    unicode: "",
                    mina: 51,
                    primaryComma: {
                        monzo: [-13, 7, -1, 0, 0, 0, 0, 1],
                        position: 24.8843083251798,
                    },
                    id: 52,
                    elements: [")|", "/|"],
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

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 54,
            MEDIUM: [
                {
                    introducingLevel: "MEDIUM",
                    ascii: "(|\\",
                    unicode: "",
                    id: 142,
                    mina: 133,
                    distance: 3.6578835602835937,
                    inaDistance: 0.6756876516060547,
                    primaryComma: {
                        monzo: [-13, 5, 1, 1],
                        position: 64.9146246608968,
                    },
                    elements: ["(|", "|\\"],
                },
                undefined,
            ],
            HIGH: [
                {
                    introducingLevel: "HIGH",
                    ascii: ")|\\\\",
                    unicode: "",
                    mina: 138,
                    id: 147,
                    distance: 1.2814466063946952,
                    inaDistance: 0.5297795425192314,
                    primaryComma: {
                        monzo: [-16, 11, 1, 0, 0, -1],
                        position: 67.2910616147857,
                    },
                    elements: [")|", "|\\", "|\\"],
                },
                undefined,
            ],
            ULTRA: [
                {
                    introducingLevel: "HIGH",
                    ascii: ")|\\\\",
                    unicode: "",
                    mina: 138,
                    id: 147,
                    distance: 1.2814466063946952,
                    inaDistance: 0.6537704992790516,
                    primaryComma: {
                        monzo: [-16, 11, 1, 0, 0, -1],
                        position: 67.2910616147857,
                    },
                    elements: [")|", "|\\", "|\\"],
                },
                undefined,
            ],
            EXTREME: [
                {
                    introducingLevel: "EXTREME",
                    ascii: "``)|\\\\",
                    unicode: "",
                    id: 149,
                    mina: 140,
                    distance: 0.44892240228040237,
                    inaDistance: 0.9200766517814528,
                    primaryComma: {
                        monzo: [-11, 8, 2, -1, -1],
                        position: 68.1235858189,
                    },
                    elements: ["``|", ")|", "|\\", "|\\"],
                },
                undefined,
            ],
            INSANE: [
                {
                    introducingLevel: "EXTREME",
                    ascii: "``)|\\\\",
                    unicode: "",
                    mina: 140,
                    id: 149,
                    distance: 0.44892240228040237,
                    inaDistance: 3.194600906829164,
                    primaryComma: {
                        monzo: [-11, 8, 2, -1, -1],
                        position: 68.1235858189,
                    },
                    elements: ["``|", ")|", "|\\", "|\\"],
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

        const result = computeLevelBoundedSymbols(bound)

        expect(result).toEqual({
            id: 55,
            EXTREME: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    ascii: "`|",
                    unicode: "",
                    mina: 1,
                    primaryComma: {
                        monzo: [12, -2, -1, -1, 0, -1],
                        position: 0.42271616595482,
                    },
                    id: 1,
                    distance: 0.211928144834215,
                    inaDistance: 0.43435154255350816,
                    elements: ["`|"],
                },
            ],
            INSANE: [
                undefined,
                {
                    introducingLevel: "EXTREME",
                    ascii: "`|",
                    unicode: "",
                    mina: 1,
                    primaryComma: {
                        monzo: [12, -2, -1, -1, 0, -1],
                        position: 0.42271616595482,
                    },
                    id: 1,
                    distance: 0.211928144834215,
                    inaDistance: 1.508113295818833,
                    elements: ["`|"],
                },
            ],
        })
    })
})
