const {analyzeAndStructureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeAndStructureHistories")

describe("analyzeAndStructureHistories", () => {
    it("returns helpful identifying information about the bound, alongside an analysis of its histories, and a structured presentation of said histories", () => {
        const histories = [
            {
                events: ["VeryHigh_MEAN_.)/|-'/|_@23.2", "Extreme_MEAN_.)/|-'/|_@23.2", "Insane_EDA_164.5/809_@23.1"],
                position: 23.116419649559468,
            },
            {
                events: ["VeryHigh_MEAN_.)/|-'/|_@23.2", "Extreme_EDA_47.5/233_@23.2", "Insane_EDA_164.5/809_@23.1"],
                position: 23.116419649559468,
            },
        ]
        const datum = {
            comma: {
                introducingLevel: "VeryHigh",
                position: 22.9305875372457,
                symbol: ".)/|",
                mina: 47,
            },
            bound: {
                position: 23.1164196495597,
                levels: ["VeryHigh", "Extreme", "Insane"],
            },
        }

        const result = analyzeAndStructureHistories(histories, datum)


        expect(result).toEqual({
            bound: {
                extremeLevelLesserNeighborCommaSymbol: ".)/|",
                position: 23.1164196495597,
                levels: [
                    "VeryHigh",
                    "Extreme",
                    "Insane",
                ],
                minaUpperBoundOf: 47,
            },
            analysis: {
                hasPossibleHistory: true,
                minimumError: 0,
                totalHistories: 2,
                possibleHistories: 2,
            },
            structuredHistories: {
                "VeryHigh_MEAN_.)/|-'/|_@23.2": {
                    "Extreme_MEAN_.)/|-'/|_@23.2": {
                        "Insane_EDA_164.5/809_@23.1": 23.116419649559468,
                    },
                    "Extreme_EDA_47.5/233_@23.2": {
                        "Insane_EDA_164.5/809_@23.1": 23.116419649559468,
                    },
                },
            },
        })
    })
})
