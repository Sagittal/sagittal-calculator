const {analyzeBound} = require("../../../../src/boundsAnalysis/analyze/bound")
const rankAnalysis = require("../../../../src/boundsAnalysis/analyze/ranks")
const levelAnalysis = require("../../../../src/boundsAnalysis/analyze/levels")

describe("analyzeBound", () => {
    const notBestHistory = [
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
            name: "164.5°809",
            position: 23.116419649559468,
            // this one gets rank: 4
        },
    ]
    const bestHistory = [
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "EDA",
            name: "47.5°233",
            position: 23.15,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5°809",
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
    const expectedBestHistoryEvents = [
        {
            level: "VERY_HIGH",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
            rank: 1,
            sleda: 0,
            exact: false,
        },
        {
            level: "EXTREME",
            type: "EDA",
            name: "47.5°233",
            position: 23.15,
            rank: 0,
            sleda: 0.05000000000000071,
            exact: false,
        },
        {
            level: "INSANE",
            type: "EDA",
            name: "164.5°809",
            position: 23.116419649559468,
            rank: 0,
            sleda: 0.03358035044053054,
            exact: true,
        },
    ]
    const expectedBestPossibleHistory = {
        events: expectedBestHistoryEvents,
        position: 23.116419649559468,
        rank: 1,
        score: 131,
        possible: true,
        exact: false,
        sleda: 0.08358035044053125,
        tinaError: 0,
        initialPositionTinaDifference: -0.5613173198970488,
    }

    it("returns an analysis of the bound using its histories, including a consolidated presentation of said histories, and its best possible history, and the difference between the bound and its initial position", () => {
        const boundIndex = 47

        const result = analyzeBound(histories, bound, boundIndex)

        expect(result).toEqual({
            bestRank: 1,
            initialPosition: 23.195298960947348,
            initialPositionTinaDifference: -0.5613173198954056,
            possibleHistoryCount: 2,
            bestPossibleHistory: expectedBestPossibleHistory,
            consolidatedHistories: {
                VERY_HIGH: [
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: ".)/| '/|",
                        position: 23.2,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 1,
                        nextEvents: [
                            ".)/| '/|",
                            "47.5°233",
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
                        isBestPossibleHistoryMember: false,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 1,
                        rankOfBestRankedMemberHistory: 1,
                        nextEvents: [
                            "164.5°809",
                        ],
                    },
                    {
                        level: "EXTREME",
                        type: "EDA",
                        name: "47.5°233",
                        position: 23.15,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: false,
                        rankOfBestRankedEventInAnyMemberHistory: 0,
                        rankOfBestRankedMemberHistory: 1,
                        nextEvents: [
                            "164.5°809",
                        ],
                    },
                ],
                INSANE: [
                    {
                        level: "INSANE",
                        type: "EDA",
                        name: "164.5°809",
                        position: 23.116419649559468,
                        isPossibleHistoryMember: true,
                        isBestPossibleHistoryMember: true,
                        exact: true,
                        rankOfBestRankedEventInAnyMemberHistory: 0,
                        rankOfBestRankedMemberHistory: 1,
                        nextEvents: [],
                    },
                ],
            },
        })
    })

    it("updates the rank analysis", () => {
        const boundIndex = 88

        spyOn(rankAnalysis, "updateRankAnalysis")

        analyzeBound(histories, bound, boundIndex)

        const expectedBestHistoryRank = 1
        expect(rankAnalysis.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, boundIndex)
    })

    it("updates the level analysis", () => {
        const boundIndex = 88

        spyOn(levelAnalysis, "updateLevelAnalysis")

        analyzeBound(histories, bound, boundIndex)

        expect(levelAnalysis.updateLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})
