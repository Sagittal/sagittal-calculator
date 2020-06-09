const {computeExtendedHistories} = require("../../../../src/boundsAnalysis/plot/extendedHistories")

describe("computeExtendedHistories", () => {
    let history
    describe("when it is impossible to extend the history any further", () => {
        beforeEach(() => {
            history = [
                {
                    level: "HIGH",
                    type: "EDA",
                    name: "16.5/47",
                    position: 45.45,
                },
                {
                    level: "VERY_HIGH",
                    type: "IMPOSSIBLE",
                    name: "not between 88.8 and 99.9",
                    position: 45.45,
                },
            ]
        })

        it("returns an array with only the passed-in history as it is", () => {
            const result = computeExtendedHistories(history)

            expect(result).toEqual([history])
        })
    })

    describe("when the history's position is not between the actual bound position's bounded commas", () => {
        beforeEach(() => {
            history = [
                {
                    level: "HIGH",
                    type: "EDA",
                    name: "16.5/47",
                    position: 45.45,
                },
            ]
        })

        it("returns an array with one element: the passed-in history extended with an event terminating it as impossible", () => {
            const actualBoundPosition = 12 // definitely 45.45 is nowhere near the position and thus no way it's between its bounded commas

            const result = computeExtendedHistories(history, "VERY_HIGH", {position: actualBoundPosition})

            expect(result).toEqual([
                [
                    {
                        level: "HIGH",
                        type: "EDA",
                        name: "16.5/47",
                        position: 45.45,
                    },
                    {
                        level: "VERY_HIGH",
                        type: "IMPOSSIBLE",
                        name: "not between ')|( @11.642 and )~| @12.064 at the VERY_HIGH level",
                        position: 45.45,
                    },
                ],
            ])
        })
    })

    describe("when the history's position is between the actual bound position's bounded commas", () => {
        let passedInHistoryEvent = {
            level: "HIGH",
            type: "EDA",
            name: "16.5/47",
            position: 45.45,
        }
        beforeEach(() => {
            history = [
                passedInHistoryEvent,
            ]
        })

        it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", () => {
            const actualBoundPosition = 45.4

            const result = computeExtendedHistories(history, "VERY_HIGH", {
                position: actualBoundPosition,
                levels: ["VERY_HIGH", "EXTREME"],
            })

            expect(result).toEqual(jasmine.arrayWithExactContents([
                [
                    passedInHistoryEvent,
                    {
                        level: "VERY_HIGH",
                        type: "EDA",
                        name: "23.5/58",
                        position: 46.062028316486725,
                    },
                ],
                [
                    passedInHistoryEvent,
                    {
                        level: "VERY_HIGH",
                        type: "MEAN",
                        name: "'//| )//|",
                        position: 45.681795472660895,
                    },
                ],
                [
                    passedInHistoryEvent,
                    {
                        level: "VERY_HIGH",
                        type: "SIZE",
                        name: "S|M",
                        position: 45.1124978365313,
                    },
                ],
                [
                    passedInHistoryEvent,
                    {
                        level: "VERY_HIGH",
                        type: "OVERRIDE",
                        name: "guaranteed between '//| and ,,)//| at the EXTREME level, to re-initialize if necessary",
                        position: 45.26553337061005,
                    },
                ],
            ]))
        })
    })
})
