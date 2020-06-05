const {analyzeAndStructureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeAndStructureHistories")

describe("analyzeAndStructureHistories", () => {
    it("returns helpful identifying information about the bound, alongside an analysis of its histories, and a structured presentation of said histories, and its histories which are tied for the best rank", () => {
        const notBestHistory = {
            position: 23.116419649559468,
            rank: 5,
            events: [
                {
                    level: "veryHigh",
                    type: "MEAN",
                    name: ".)/| '/|",
                    position: 23.2,
                    rank: 2,
                },
                {
                    level: "extreme",
                    type: "MEAN",
                    name: ".)/| '/|",
                    position: 23.2,
                    rank: 5,
                },
                {
                    level: "insane",
                    type: "EDA",
                    name: "164.5/809",
                    position: 23.1,
                    rank: 1,
                },
            ],
        }
        const bestHistory = {
            position: 23.116419649559468,
            rank: 2,
            events: [
                {
                    level: "veryHigh",
                    type: "MEAN",
                    name: ".)/| '/|",
                    position: 23.2,
                    rank: 2,
                },
                {
                    level: "extreme",
                    type: "EDA",
                    name: "47.5/233",
                    position: 23.2,
                    rank: 1,
                },
                {
                    level: "insane",
                    type: "EDA",
                    name: "164.5/809",
                    position: 23.1,
                    rank: 1,
                },
            ],
        }
        const histories = [
            notBestHistory,
            bestHistory,
        ]
        const datum = {
            comma: {
                introducingLevel: "veryHigh",
                position: 22.9305875372457,
                symbol: ".)/|",
                mina: 47,
            },
            bound: {
                position: 23.1164196495597,
                levels: ["veryHigh", "extreme", "insane"],
            },
        }

        const result = analyzeAndStructureHistories(histories, datum)


        expect(result).toEqual({
            bound: {
                extremeLevelLesserNeighborCommaSymbol: ".)/|",
                position: 23.1164196495597,
                boundedCommas: {
                    veryHigh: [
                        {
                            introducingLevel: "veryHigh",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "veryHigh",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    extreme: [
                        {
                            introducingLevel: "veryHigh",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "veryHigh",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    insane: [
                        {
                            introducingLevel: "veryHigh",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "veryHigh",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                },
                minaUpperBoundOf: 47,
            },
            analysis: {
                bestRank: 2,
                minimumError: 0,
                totalHistories: 2,
                possibleHistories: 2,
            },
            bestHistories: [
                {
                    ...bestHistory,
                    possible: true,
                    tinaError: -0,
                },
            ],
            structuredHistories: {
                veryHigh: [
                    {
                        level: "veryHigh",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        possible: true,
                        rank: 2,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5/233",
                        ],
                    },
                ],
                extreme: [
                    {
                        level: "extreme",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        possible: true,
                        rank: 5,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                    {
                        level: "extreme",
                        type: "EDA",
                        name: "47.5/233",
                        position: 23.2,
                        possible: true,
                        rank: 1,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                ],
                insane: [
                    {
                        level: "insane",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.1,
                        possible: true,
                        rank: 1,
                        nextEvents: [],
                    },
                ],
            },
        })
    })
})
