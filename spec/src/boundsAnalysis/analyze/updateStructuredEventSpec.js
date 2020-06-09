const {updateStructuredEvent} = require("../../../../src/boundsAnalysis/analyze/updateStructuredEvent")

describe("updateStructuredEvent", () => {
    describe("next events", () => {
        it("when there is no next analyzed event (i.e. this is the last event of the analyzed history) the next events stays the same", () => {
            const structuredEvent = {nextEvents: ["2.5/58"]}
            const analyzedHistory = {}
            const analyzedEvent = {}
            const nextAnalyzedEvent = undefined

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent, nextAnalyzedEvent})

            expect(structuredEvent.nextEvents).toEqual(["2.5/58"])
        })

        it("when there is a next analyzed event, it adds its name to the next events", () => {
            const structuredEvent = {nextEvents: ["2.5/58"]}
            const analyzedHistory = {}
            const analyzedEvent = {}
            const nextAnalyzedEvent = {name: ".)/| '/|"}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent, nextAnalyzedEvent})

            expect(structuredEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5/58", ".)/| '/|"]))
        })

        it("when there is a next analyzed event, but an event with that name has already been updated into this structured event, the next events stays the same", () => {
            const structuredEvent = {nextEvents: ["2.5/58"]}
            const analyzedHistory = {}
            const analyzedEvent = {}
            const nextAnalyzedEvent = {name: "2.5/58"}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent, nextAnalyzedEvent})

            expect(structuredEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5/58"]))
        })
    })

    describe("membership of a history which is possible", () => {
        it("when the structured event has been identified as a member of a possible history, and the analyzed history is possible, the structured event remains identified as a member of a possible history", () => {
            const structuredEvent = {isPossibleHistoryMember: true}
            const analyzedHistory = {possible: true}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the structured event has been identified as a member of a possible history, and the analyzed history is not possible, the structured event remains identified as a member of a possible history", () => {
            const structuredEvent = {isPossibleHistoryMember: true}
            const analyzedHistory = {possible: false}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the structured event has not been identified as a member of a possible history, and the analyzed history is possible, the structured event becomes identified as a member of a possible history", () => {
            const structuredEvent = {isPossibleHistoryMember: false}
            const analyzedHistory = {possible: true}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the structured event has not been identified as a member of a possible history, and the analyzed history is not possible, the structured event remains not identified as a member of a possible history", () => {
            const structuredEvent = {isPossibleHistoryMember: false}
            const analyzedHistory = {possible: false}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.isPossibleHistoryMember).toBe(false)
        })
    })

    describe("rank of the best ranked history any event updated into this structured event was a member of", () => {
        it("when the analyzed history's rank is less than the rank of the best ranked history this structured event has so far been updated with an event from, it updates its rank of best ranked member history", () => {
            const structuredEvent = {rankOfBestRankedMemberHistory: 3}
            const analyzedHistory = {rank: 2}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.rankOfBestRankedMemberHistory).toBe(2)
        })

        it("when the analyzed history's rank is not less than the rank of the best ranked history this structured event has so far been updated with an event from, it keeps its rank of best ranked member history the same", () => {
            const structuredEvent = {rankOfBestRankedMemberHistory: 1}
            const analyzedHistory = {rank: 2}
            const analyzedEvent = {}

            updateStructuredEvent(structuredEvent, {analyzedHistory, analyzedEvent})

            expect(structuredEvent.rankOfBestRankedMemberHistory).toBe(1)
        })
    })

    describe("rank of the best ranked event updated into this structured event", () => {
        it("when the analyzed event's rank is less than the rank of the best ranked event this structured event has so far been updated with, it updates its rank of best ranked event", () => {
            const structuredEvent = {rankOfBestRankedEventInAnyMemberHistory: 3}
            const analyzedEvent = {rank: 2}
            const analyzedHistory = {}

            updateStructuredEvent(structuredEvent, {analyzedEvent, analyzedHistory})

            expect(structuredEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(2)
        })

        it("when the analyzed event's rank is not less than the rank of the best ranked event this structured event has so far been updated with, it keeps its rank of best ranked event the same", () => {
            const structuredEvent = {rankOfBestRankedEventInAnyMemberHistory: 1}
            const analyzedEvent = {rank: 2}
            const analyzedHistory = {}

            updateStructuredEvent(structuredEvent, {analyzedEvent, analyzedHistory})

            expect(structuredEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(1)
        })
    })
})
