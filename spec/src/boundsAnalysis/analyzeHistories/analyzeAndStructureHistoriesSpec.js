const {analyzeAndStructureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/analyzeAndStructureHistories")
const {calculateBoundHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateBoundHistories")
const {BOUNDS} = require("../../../../src/boundsAnalysis/data/bounds")
const rankSummary = require("../../../../src/boundsAnalysis/analyzeHistories/rankSummary")

describe("analyzeAndStructureHistories", () => {
    const notBestHistory = [
        {
            level: "INITIAL",
            type: "INITIAL",
            name: "INITIAL",
            position: 23.2,
        },
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5/809",
            position: 23.116419649559468,
            // this one gets rank: 4
        },
    ]
    const bestHistory = [
        {
            level: "INITIAL",
            type: "INITIAL",
            name: "INITIAL",
            position: 23.2,
        },
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "EDA",
            name: "47.5/233",
            position: 23.15,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5/809",
            position: 23.116419649559468,
            // this one gets rank 1
        },
    ]
    const histories = [
        notBestHistory,
        bestHistory,
    ]
    const bound = {
        position: 23.1164196495597,
        levels: ["VERY_HIGH", "EXTREME", "INSANE"],
    }

    it("returns helpful identifying information about the bound, alongside an analysis of its histories, and a structured presentation of said histories, and its histories which are tied for the best rank", () => {
        const boundIndex = 47

        const result = analyzeAndStructureHistories(histories, bound, boundIndex)

        const expectedBestHistoryEvents = [
            {
                level: "INITIAL",
                type: "INITIAL",
                name: "INITIAL",
                position: 23.2,
                rank: 0,
            },
            {
                level: "VERY_HIGH",
                type: "MEAN",
                name: ".)/| '/|",
                position: 23.2,
                rank: 2,
            },
            {
                level: "EXTREME",
                type: "EDA",
                name: "47.5/233",
                position: 23.15,
                rank: 1,
            },
            {
                level: "INSANE",
                type: "EDA",
                name: "164.5/809",
                position: 23.116419649559468,
                rank: 1,
            },
        ]
        expect(result).toEqual({
            bound: {
                extremeLevelLesserBoundedCommaSymbol: ".)/|",
                extremeLevelGreaterBoundedCommaSymbol: "'/|",
                position: 23.1164196495597,
                boundedCommas: {
                    VERY_HIGH: [
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    EXTREME: [
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                    INSANE: [
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 22.9305875372457,
                            distance: 23.1164196495597 - 22.9305875372457,
                            symbol: ".)/|",
                            mina: 47,
                        },
                        {
                            introducingLevel: "VERY_HIGH",
                            position: 23.4600103846490,
                            distance: 23.46001038464900 - 23.1164196495597,
                            symbol: "'/|",
                            mina: 48,
                        },
                    ],
                },
                lesserBoundedMina: 47,
                greaterBoundedMina: 48,
            },
            analysis: {
                bestRank: 2,
                initialPosition: 23.195298960947348,
                initialPositionTinaDifference: -0.5613173198954056,
                possibleHistoryCount: 2,
                bestPossibleHistories: [
                    {
                        events: expectedBestHistoryEvents,
                        position: 23.116419649559468,
                        rank: 2,
                        score: 132,
                        possible: true,
                        tinaError: 0,
                        initialPositionTinaDifference: -0.5613173198970488,
                    },
                ],
            },
            structuredHistories: {
                INITIAL: [
                    {
                        level: "INITIAL",
                        type: "INITIAL",
                        name: "INITIAL",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 0,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            ".)/| '/|",
                        ],
                    },
                ],
                VERY_HIGH: [
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 2,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5/233",
                        ],
                    },
                ],
                EXTREME: [
                    {
                        level: "EXTREME",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 2,
                        rankOfBestRankedMemberHistory: 4,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                    {
                        level: "EXTREME",
                        type: "EDA",
                        name: "47.5/233",
                        position: 23.15,
                        isPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [
                            "164.5/809",
                        ],
                    },
                ],
                INSANE: [
                    {
                        level: "INSANE",
                        type: "EDA",
                        name: "164.5/809",
                        position: 23.116419649559468,
                        isPossibleHistoryMember: true,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 2,
                        nextEvents: [],
                    },
                ],
            },
        })
    })

    it("updates the rank summary", () => {
        const boundIndex = 88

        spyOn(rankSummary, "updateRankSummary")

        analyzeAndStructureHistories(histories, bound, boundIndex)

        const expectedBestHistoryRank = 2
        expect(rankSummary.updateRankSummary).toHaveBeenCalledWith(expectedBestHistoryRank, boundIndex)
    })

    it("returns exactly one best history for each bound", () => {
        BOUNDS.forEach((bound, boundIndex) => {
            const result = analyzeAndStructureHistories(calculateBoundHistories(bound), bound, boundIndex)

            expect(result.analysis.bestPossibleHistories.length).toBe(1)
        })
    })
})
