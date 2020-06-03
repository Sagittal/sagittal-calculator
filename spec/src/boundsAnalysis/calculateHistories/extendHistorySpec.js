const {extendHistory} = require("../../../../src/boundsAnalysis/calculateHistories/extendHistory")

describe("extend history", () => {
    it("given a history and an event, adds the event to the history's events and updates the history's position with the event's position", () => {
        const priorEvent = {
            level: "High",
            type: "EDA",
            name: "15.5/47",
            position: 56,
        }
        const history = {
            position: 56,
            events: [
                priorEvent,
            ],
        }
        const event = {
            level: "VeryHigh",
            type: "MEAN",
            name: "(|\\ /|)",
            position: 57,
        }

        const result = extendHistory(history, event)

        expect(result).toEqual({
            position: 57,
            events: [
                priorEvent,
                event,
            ],
        })
    })
})
