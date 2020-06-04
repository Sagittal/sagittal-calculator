const {structureHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/structureHistories")

describe("structureHistories", () => {
    it("structures histories to consolidate redundancies per level and show which events can lead in which events in the next level, and which ones are possible on at least one path", () => {
        const eventOneGoesToEventThreeAndFour = {
            level: "VeryHigh",
            type: "MEAN",
            name: "'/| )/|",
            position: 24.2,
        }
        const eventTwoGoesToEventThreeAndToImpossibleTwice = {
            level: "VeryHigh",
            type: "EDA",
            name: "12.5/58",
            position: 24.33333,
        }
        const eventThree = {
            level: "Extreme",
            type: "MEAN",
            name: ",)/|_)/|",
            position: 24.58139537326805,
        }
        const eventFour = {
            level: "Extreme",
            type: "EDA",
            name: "50.5/233",
            position: 24.151964806252103,
        }
        const eventImpossible = {
            level: "VeryHigh",
            type: "impossible",
            name: "not between 88.8 and 99.9",
            position: 24.9,
        }

        const analyzedHistories = [
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                possible: true,
                tinaError: 0,
                position: 24.58139537326805,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventThree,
                ],
                possible: true,
                tinaError: 0,
                position: 24.58139537326805,
            },
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                possible: false,
                tinaError: 3.05589400712,
                position: 24.151964806252103,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventImpossible,
                ],
                possible: false,
                tinaError: 2.26723955922,
                position: 24.9,
            },
            {
                events: [
                    eventTwoGoesToEventThreeAndToImpossibleTwice,
                    eventImpossible,
                ],
                possible: false,
                tinaError: 2.26723955922,
                position: 24.9,
            },
        ]

        const result = structureHistories(analyzedHistories)

        expect(result).toEqual({
            "VeryHigh": [
                {
                    ...eventOneGoesToEventThreeAndFour,
                    possible: true,
                    nextEvents: [
                        eventThree.name,
                        eventFour.name,
                    ],
                },
                {
                    ...eventTwoGoesToEventThreeAndToImpossibleTwice,
                    possible: true,
                    nextEvents: [
                        eventThree.name,
                        eventImpossible.name,
                    ],
                },
            ],
            "Extreme": [
                {
                    ...eventThree,
                    possible: true,
                    nextEvents: [],
                },
                {
                    ...eventFour,
                    possible: false,
                    nextEvents: [],
                },
            ],
        })
    })
})
