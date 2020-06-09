const {computeStructuredHistories} = require("../../../../src/boundsAnalysis/analyze/structuredHistories")

describe("computeStructuredHistories", () => {
    it("structures histories to consolidate redundancies per level and show which events can lead in which events in the next level, and which ones are members of histories that are possible, and what the best rank is in any event that gets consolidated into this structured display, and what the best rank of any history this event is a member of is", () => {
        const eventOneGoesToEventThreeAndFour = {
            level: "VERY_HIGH",
            type: "MEAN",
            name: "'/| )/|",
            position: 24.2,
            rank: 2,
        }
        const eventTwoGoesToEventThreeAndToImpossibleTwice = {
            level: "VERY_HIGH",
            type: "EDA",
            name: "12.5/58",
            position: 24.33333,
            rank: 1,
        }
        const eventThree = {
            level: "EXTREME",
            type: "MEAN",
            name: ",)/|_)/|",
            position: 24.58139537326805,
            rank: 2,
        }
        const eventFour = {
            level: "EXTREME",
            type: "EDA",
            name: "50.5/233",
            position: 24.151964806252103,
            rank: 1,
        }
        const eventImpossible = {
            level: "VERY_HIGH",
            type: "IMPOSSIBLE",
            name: "not between 88.8 and 99.9",
            position: 24.9,
            rank: 8,
        }
        const eventThreeButWithBetterRank = {
            level: "EXTREME",
            type: "MEAN",
            name: ",)/|_)/|",
            position: 24.58139537326805,
            rank: 1,
        }

        const analyzedHistories = [
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: 2,
                possible: true,
                tinaError: 0,
                position: 24.58139537326805,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventThreeButWithBetterRank,
                ],
                rank: 1,
                possible: true,
                tinaError: 0,
                position: 24.58139537326805,
            },
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: 2,
                possible: false,
                tinaError: 3.05589400712,
                position: 24.151964806252103,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventImpossible,
                ],
                rank: 8,
                possible: false,
                tinaError: 2.26723955922,
                position: 24.9,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventImpossible,
                ],
                rank: 8,
                possible: false,
                tinaError: 2.26723955922,
                position: 24.9,
            },
        ]

        const result = computeStructuredHistories(analyzedHistories)

        expect(result).toEqual({
            VERY_HIGH: [
                {
                    type: eventOneGoesToEventThreeAndFour.type,
                    level: eventOneGoesToEventThreeAndFour.level,
                    name: eventOneGoesToEventThreeAndFour.name,
                    position: eventOneGoesToEventThreeAndFour.position,
                    isPossibleHistoryMember: true,
                    rankOfBestRankedEventInAnyMemberHistory: 2,
                    rankOfBestRankedMemberHistory: 2,
                    nextEvents: [
                        eventThree.name,
                        eventFour.name,
                    ],
                },
                {
                    type: eventTwoGoesToEventThreeAndToImpossibleTwice.type,
                    level: eventTwoGoesToEventThreeAndToImpossibleTwice.level,
                    name: eventTwoGoesToEventThreeAndToImpossibleTwice.name,
                    position: eventTwoGoesToEventThreeAndToImpossibleTwice.position,
                    isPossibleHistoryMember: true,
                    rankOfBestRankedEventInAnyMemberHistory: 1,
                    rankOfBestRankedMemberHistory: 1,
                    nextEvents: [
                        eventThree.name,
                        eventImpossible.name,
                    ],
                },
            ],
            EXTREME: [
                {
                    type: eventThree.type,
                    level: eventThree.level,
                    name: eventThree.name,
                    position: eventThree.position,
                    isPossibleHistoryMember: true,
                    rankOfBestRankedEventInAnyMemberHistory: 1,
                    rankOfBestRankedMemberHistory: 1,
                    nextEvents: [],
                },
                {
                    type: eventFour.type,
                    level: eventFour.level,
                    name: eventFour.name,
                    position: eventFour.position,
                    isPossibleHistoryMember: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1,
                    rankOfBestRankedMemberHistory: 2,
                    nextEvents: [],
                },
            ],
        })
    })
})