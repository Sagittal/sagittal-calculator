const {computeExtendedHistories} = require("../../../../src/boundsAnalysis/plot/extendedHistories")

describe("computeExtendedHistories", () => {
    let history

    let passedInHistoryEvent = {
        level: "HIGH",
        type: "EDA",
        name: "16.5°47",
        position: 45.45,
    }
    beforeEach(() => {
        history = [
            passedInHistoryEvent,
        ]
    })

    it("returns an array with potentially many elements: for each snappable position of any event type, a new history which is like the passed-in history extended with a new event of snapping to that position, and its rank updated if necessary", () => {
        const actualBoundPosition = 45.4

        const result = computeExtendedHistories(history, "ULTRA", {
            position: actualBoundPosition,
            levels: ["ULTRA", "EXTREME"],
        })

        expect(result).toEqual(jasmine.arrayWithExactContents([
            [
                passedInHistoryEvent,
                {
                    level: "ULTRA",
                    type: "EDA",
                    name: "23.5°58",
                    position: 46.062028316486725,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: "ULTRA",
                    type: "MEAN",
                    name: "'//| )//|",
                    position: 45.681795472660895,
                },
            ],
            [
                passedInHistoryEvent,
                {
                    level: "ULTRA",
                    type: "SIZE",
                    name: "S|M",
                    position: 45.1124978365313,
                },
            ],
        ]))
    })
})
