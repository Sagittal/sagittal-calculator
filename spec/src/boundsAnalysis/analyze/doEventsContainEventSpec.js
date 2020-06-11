const {computeDoEventsContainEvent} = require("../../../../src/boundsAnalysis/analyze/doEventsContainEvent")

describe("computeDoEventsContainEvent", () => {
    it("returns true when the events contain an event which has the same name and the same level", () => {
        const events = [{name: "someName", level: "someLevel", rank: 1}]
        const targetEvent = {name: "someName", level: "someLevel", rank: 2}

        const result = computeDoEventsContainEvent(events, targetEvent)

        expect(result).toBe(true)
    })

    it("returns false when the events contain an event which has the same name but not the same level", () => {
        const events = [{name: "someName", level: "someLevel", rank: 1}]
        const targetEvent = {name: "someName", level: "otherLevel", rank: 2}

        const result = computeDoEventsContainEvent(events, targetEvent)

        expect(result).toBe(false)
    })

    it("returns false when the events contain an event which has the same level but not the same name", () => {
        const events = [{name: "someName", level: "someLevel", rank: 1}]
        const targetEvent = {name: "otherName", level: "someLevel", rank: 2}

        const result = computeDoEventsContainEvent(events, targetEvent)

        expect(result).toBe(false)
    })

    it("returns false when the events contain no events which have either the same name or the same level", () => {
        const events = [{name: "someName", level: "someLevel", rank: 1}]
        const targetEvent = {name: "otherName", level: "otherLevel", rank: 1}

        const result = computeDoEventsContainEvent(events, targetEvent)

        expect(result).toBe(false)
    })
})
