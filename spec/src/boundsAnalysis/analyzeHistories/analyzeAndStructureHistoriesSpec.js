const {analyzeAndStructureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeAndStructureHistories")

describe("analyzeAndStructureHistories", () => {
    it("returns helpful identifying information about the bound, alongside an analysis of its histories, and a structured presentation of said histories", () => {
        const histories = [
            {
                events: [
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                    },
                    {
                        level: "Extreme",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.1,
                    },
                ],
                position: 23.116419649559468,
            },
            {
                events: [
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "47.5/233",
                        position: 23.2,
                    },
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.1,
                    },
                ],
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
                boundedCommas: {
                    VeryHigh: [
                        {
                            introducingLevel: "VeryHigh",
                            position: 22.93058753724570,
                            distance: 23.1164196495597 - 22.93058753724570,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VeryHigh",
                            position: 23.46001038464900,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    Extreme: [
                        {
                            introducingLevel: "VeryHigh",
                            position: 22.93058753724570,
                            distance: 23.1164196495597 - 22.93058753724570,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VeryHigh",
                            position: 23.46001038464900,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    Insane: [
                        {
                            introducingLevel: "VeryHigh",
                            position: 22.93058753724570,
                            distance: 23.1164196495597 - 22.93058753724570,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VeryHigh",
                            position: 23.46001038464900,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                },
                minaUpperBoundOf: 47,
            },
            analysis: {
                hasPossibleNonoverriddenHistory: true,
                minimumError: 0,
                totalHistories: 2,
                possibleHistories: 2,
            },
            structuredHistories: {
                VeryHigh: [
                    {
                        level: "VeryHigh",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        possible: true,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5/233",
                        ],
                    },
                ],
                Extreme: [
                    {
                        level: "Extreme",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        possible: true,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                    {
                        level: "Extreme",
                        type: "EDA",
                        name: "47.5/233",
                        position: 23.2,
                        possible: true,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                ],
                Insane: [
                    {
                        level: "Insane",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.1,
                        possible: true,
                        nextEvents: [],
                    },
                ],
            },
        })
    })
})
