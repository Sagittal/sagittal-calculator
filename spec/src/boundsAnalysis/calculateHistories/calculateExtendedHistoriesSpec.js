const {calculateExtendedHistories} = require("../../../../src/boundsAnalysis/calculateHistories/calculateExtendedHistories")

describe("calculateExtendedHistories", () => {
    let history
    describe("when it is impossible to extend the history any further", () => {
        beforeEach(() => {
            history = {
                position: 45.45,
                rank: 8,
                events: [
                    {
                        level: "high",
                        type: "EDA",
                        name: "16.5/47",
                        position: 45.45,
                        rank: 1,
                    },
                    {
                        level: "veryHigh",
                        type: "impossible",
                        name: "not between 88.8 and 99.9",
                        position: 45.45,
                        rank: 8,
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
                rank: 1,
                events: [
                    {
                        level: "high",
                        type: "EDA",
                        name: "16.5/47",
                        position: 45.45,
                        rank: 1,
                    },
                ],
            }
        })

        it("returns an array with one element: the passed-in history with its events extended with an event terminating it as impossible", () => {
            const actualBoundPosition = 12 // definitely 45.45 is nowhere near the position and thus no way it's between its neighbor commas

            const result = calculateExtendedHistories(history, "veryHigh", actualBoundPosition)

            expect(result).toEqual([
                {
                    position: 45.45,
                    rank: 8,
                    events: [
                        {
                            level: "high",
                            type: "EDA",
                            name: "16.5/47",
                            position: 45.45,
                            rank: 1,
                        },
                        {
                            level: "veryHigh",
                            type: "impossible",
                            name: "not between ')|( @11.642 and )~| @12.064 at the veryHigh level",
                            position: 45.45,
                            rank: 8,
                        },
                    ],
                },
            ])
        })
    })

    describe("when the history's position is between the actual bound position's neighbor commas", () => {
        let passedInHistoryEvent = {
            level: "high",
            type: "EDA",
            name: "16.5/47",
            position: 45.45,
            rank: 1,
        }
        beforeEach(() => {
            history = {
                position: 45.45,
                rank: 1,
                events: [
                    passedInHistoryEvent,
                ],
            }
        })

        it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history but with its events extended with a new event of snapping to that position, and its rank updated if necessary", () => {
            const actualBoundPosition = 45.4

            const result = calculateExtendedHistories(history, "veryHigh", actualBoundPosition)

            expect(result).toEqual(jasmine.arrayWithExactContents([
                {
                    position: 46.062028316486725,
                    rank: 1,
                    events: [
                        passedInHistoryEvent,
                        {
                            level: "veryHigh",
                            type: "EDA",
                            name: "23.5/58",
                            position: 46.062028316486725,
                            rank: 1,
                        },
                    ],
                },
                {
                    position: 45.681795472660895,
                    rank: 2,
                    events: [
                        passedInHistoryEvent,
                        {
                            level: "veryHigh",
                            type: "MEAN",
                            name: "'//| )//|",
                            position: 45.681795472660895,
                            rank: 2,
                        },
                    ],
                },
                {
                    position: 45.1124978365313,
                    rank: 3,
                    events: [
                        passedInHistoryEvent,
                        {
                            level: "veryHigh",
                            type: "SIZE",
                            name: "S|M",
                            position: 45.1124978365313,
                            rank: 3,
                        },
                    ],
                },
            ]))
        })
    })
})
