const {calculateExtendedHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateExtendedHistories")

describe("calculateExtendedHistories", () => {
    let history
    describe("when it is impossible to extend the history any further", () => {
        beforeEach(() => {
            history = {
                position: 45.45,
                events: [
                    {
                        level: "High",
                        type: "EDA",
                        name: "16.5/47",
                        position: 45.45,
                    },
                    {
                        level: "VeryHigh",
                        type: "impossible",
                        name: "impossible",
                        position: 45.45,
                    },
                ],
            }
        })

        it("returns an array with only the passed-in history as it is", () => {
            const result = calculateExtendedHistories(history)

            expect(result).toEqual([history])
        })
    })

    describe("when the history's position is not between the actual bound position's neighbor commas", () => {
        beforeEach(() => {
            history = {
                position: 45.45,
                events: [
                    {
                        level: "High",
                        type: "EDA",
                        name: "16.5/47",
                        position: 45.45,
                    },
                ],
            }
        })

        it("returns an array with one element: the passed-in history with its events extended with an event terminating it as impossible", () => {
            const actualBoundPosition = 12 // definitely 45.45 is nowhere near the position and thus no way it's between its neighbor commas

            const result = calculateExtendedHistories(history, "VeryHigh", actualBoundPosition)

            expect(result).toEqual([
                {
                    position: 45.45,
                    events: [
                        {
                            level: "High",
                            type: "EDA",
                            name: "16.5/47",
                            position: 45.45,
                        },
                        {
                            level: "VeryHigh",
                            type: "impossible",
                            name: "impossible",
                            position: 45.45,
                        },
                    ],
                },
            ])
        })
    })

    describe("when the history's position is between the actual bound position's neighbor commas", () => {
        let passedInHistoryEvent = {
            level: "High",
            type: "EDA",
            name: "16.5/47",
            position: 45.45,
        }
        beforeEach(() => {
            history = {
                position: 45.45,
                events: [
                    passedInHistoryEvent,
                ],
            }
        })

        it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history but with its events extended with a new event of snapping to that position", () => {
            const actualBoundPosition = 45.4

            const result = calculateExtendedHistories(history, "VeryHigh", actualBoundPosition)

            expect(result).toEqual(jasmine.arrayWithExactContents([
                {
                    position: 46.062028316486725,
                    events: [
                        passedInHistoryEvent,
                        {level: "VeryHigh", type: "EDA", name: "23.5/58", position: 46.062028316486725},
                    ],
                },
                {
                    position: 45.681795472660895,
                    events: [
                        passedInHistoryEvent,
                        {level: "VeryHigh", type: "MEAN", name: "'//| )//|", position: 45.681795472660895},
                    ],
                },
                {
                    position: 45.1124978365313,
                    events: [
                        passedInHistoryEvent,
                        {level: "VeryHigh", type: "SIZE", name: "S|M", position: 45.1124978365313},
                    ],
                },
            ]))
        })
    })
})
