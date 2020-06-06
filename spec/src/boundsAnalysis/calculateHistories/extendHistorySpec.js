const {extendHistory} = require("../../../../src/boundsAnalysis/calculateHistories/extendHistory")

describe("extend history", () => {
    it("given a history and an event, adds the event to the history's events and updates the history's position with the event's position, and preserves its overridden status if any, and decreases its rank if need be", () => {
        const priorEvent = {
            level: "HIGH",
            type: "EDA",
            name: "15.5/47",
            position: 56,
            rank: 1,
        }
        const history = {
            position: 56,
            rank: 1,
            events: [
                priorEvent,
            ],
        }
        const event = {
            level: "VERY_HIGH",
            type: "MEAN",
            name: "(|\\ /|)",
            position: 57,
            rank: 2,
        }

        const result = extendHistory(history, event)

        expect(result).toEqual({
            position: 57,
            rank: 2,
            events: [
                priorEvent,
                event,
            ],
        })
    })

    it("does not update the rank if the new event's rank is not worse than the current rank", () => {
        const priorEvent = {
            level: "HIGH",
            type: "EDA",
            name: "15.5/47",
            position: 56,
            rank: 2,
        }
        const history = {
            position: 56,
            rank: 2,
            events: [
                priorEvent,
            ],
        }
        const event = {
            level: "VERY_HIGH",
            type: "MEAN",
            name: "(|\\ /|)",
            position: 57,
            rank: 1,
        }

        const result = extendHistory(history, event)

        expect(result).toEqual({
            position: 57,
            rank: 2,
            events: [
                priorEvent,
                event,
            ],
        })
    })
})
