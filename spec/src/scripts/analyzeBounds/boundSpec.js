const {analyzeBound} = require("../../../../src/scripts/analyzeBounds/bound")
const rankAnalysis = require("../../../../src/scripts/analyzeBounds/ranks")
const levelAnalysis = require("../../../../src/scripts/analyzeBounds/levels")

describe("analyzeBound", () => {
    const notBestHistory = [
        {
            level: "ULTRA",
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
            type: "INA",
            name: "164.5°809",
            position: 23.116419649559468,
            // this one gets rank 4
        },
    ]
    const bestHistory = [
        {
            level: "ULTRA",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
        },
        {
            level: "EXTREME",
            type: "INA",
            name: "47.5°233",
            position: 23.15,
        },
        {
            level: "INSANE",
            type: "INA",
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
        levels: ["ULTRA", "EXTREME", "INSANE"],
        id: 47,
    }
    const expectedBestHistoryEvents = [
        {
            level: "ULTRA",
            type: "MEAN",
            name: ".)/| '/|",
            position: 23.2,
            rank: 1,
            distance: 0,
            inaDistance: 0,
            exact: false,
        },
        {
            level: "EXTREME",
            type: "INA",
            name: "47.5°233",
            position: 23.15,
            rank: 0,
            distance: 0.05000000000000071,
            inaDistance: 0.10247613475154385,
            exact: false,
        },
        {
            level: "INSANE",
            type: "INA",
            name: "164.5°809",
            position: 23.116419649559468,
            rank: 0,
            distance: 0.03358035044053054,
            inaDistance: 0.238962941978454,
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
        distance: 0.08358035044053125,
        inaDistance: 0.34143907672999785,
        tinaError: 0,
        initialPositionTinaDifference: -0.5613173198970488,
    }

    it("returns an analysis of the bound using its histories, including a consolidated presentation of said histories, and its best possible history, and the difference between the bound and its initial position", () => {
        const result = analyzeBound(histories, bound)

        expect(result).toEqual({
            bestRank: 1,
            initialPosition: 23.195298960947348,
            initialPositionTinaDifference: -0.5613173198954056,
            possibleHistoryCount: 2,
            bestPossibleHistory: expectedBestPossibleHistory,
            bestPossibleHistoryDistance: 0.08358035044053125,
            bestPossibleHistoryInaDistance: 0.34143907672999785,
            consolidatedHistories: {
                ULTRA: [
                    {
                        level: "ULTRA",
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
                        type: "INA",
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
                        type: "INA",
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
        spyOn(rankAnalysis, "updateRankAnalysis")

        analyzeBound(histories, bound)

        const expectedBestHistoryRank = 1
        expect(rankAnalysis.updateRankAnalysis).toHaveBeenCalledWith(expectedBestHistoryRank, bound.id)
    })

    it("updates the level analysis", () => {
        spyOn(levelAnalysis, "updateLevelAnalysis")

        analyzeBound(histories, bound)

        expect(levelAnalysis.updateLevelAnalysis).toHaveBeenCalledWith(expectedBestPossibleHistory)
    })
})
