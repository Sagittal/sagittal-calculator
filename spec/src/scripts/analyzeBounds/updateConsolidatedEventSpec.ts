import {updateConsolidatedEvent} from "../../../../src/scripts/analyzeBounds/updateConsolidatedEvent"

describe("updateConsolidatedEvent", () => {
    let analyzedHistory
    let analyzedEvent
    let nextAnalyzedEvent
    let bestPossibleHistory

    beforeEach(() => {
        analyzedHistory = {}
        analyzedEvent = {}
        nextAnalyzedEvent = undefined
        bestPossibleHistory = {events: []}
    })

    describe("next events", () => {
        it("when there is no next analyzed event (i.e. this is the last event of the analyzed history) the next events stays the same", () => {
            const consolidatedEvent = {nextEvents: ["2.5°58"]}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(["2.5°58"])
        })

        it("when there is a next analyzed event, it adds its name to the next events", () => {
            const consolidatedEvent = {nextEvents: ["2.5°58"]}
            nextAnalyzedEvent = {name: ".)/| '/|"}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next analyzed event, but an event with that name has already been updated into this consolidated event, the next events stays the same", () => {
            const consolidatedEvent = {nextEvents: ["2.5°58"]}
            nextAnalyzedEvent = {name: "2.5°58"}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58"]))
        })
    })

    describe("membership of a history which is possible", () => {
        it("when the consolidated event has been identified as a member of a possible history, and the analyzed history is possible, the consolidated event remains identified as a member of a possible history", () => {
            const consolidatedEvent = {isPossibleHistoryMember: true}
            analyzedHistory = {possible: true}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains identified as a member of a possible history", () => {
            const consolidatedEvent = {isPossibleHistoryMember: true}
            analyzedHistory = {possible: false}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is possible, the consolidated event becomes identified as a member of a possible history", () => {
            const consolidatedEvent = {isPossibleHistoryMember: false}
            analyzedHistory = {possible: true}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains not identified as a member of a possible history", () => {
            const consolidatedEvent = {isPossibleHistoryMember: false}
            analyzedHistory = {possible: false}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(false)
        })
    })

    describe("membership of a history which is the best possible", () => {
        it("when the consolidated event has been identified as a member of the best possible history, and the best possible history contains this event at this level, the consolidated event remains identified as a member of the best possible history", () => {
            const consolidatedEvent = {isBestPossibleHistoryMember: true, name: "eventName", level: "LEVEL"}
            bestPossibleHistory = {events: [{name: "eventName", level: "LEVEL"}]}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains identified as a member of the best possible history", () => {
            const consolidatedEvent = {isBestPossibleHistoryMember: true, name: "eventName"}
            bestPossibleHistory = {events: [{name: "eventName", level: "OTHER_LEVEL"}]}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history contains this event at this level, the consolidated event becomes identified as a member of the best possible history", () => {
            const consolidatedEvent = {isBestPossibleHistoryMember: false, name: "eventName", level: "LEVEL"}
            bestPossibleHistory = {events: [{name: "eventName", level: "LEVEL"}]}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains not identified as a member of the best possible history", () => {
            const consolidatedEvent = {isBestPossibleHistoryMember: false, name: "eventName", level: "LEVEL"}
            bestPossibleHistory = {events: [{name: "eventName", level: "OTHER_LEVEL"}]}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(false)
        })
    })

    describe("rank of the best ranked history any event updated into this consolidated event was a member of", () => {
        it("when the analyzed history's rank is less than the rank of the best ranked history this consolidated event has so far been updated with an event from, it updates its rank of best ranked member history", () => {
            const consolidatedEvent = {rankOfBestRankedMemberHistory: 3}
            analyzedHistory = {rank: 2}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(2)
        })

        it("when the analyzed history's rank is not less than the rank of the best ranked history this consolidated event has so far been updated with an event from, it keeps its rank of best ranked member history the same", () => {
            const consolidatedEvent = {rankOfBestRankedMemberHistory: 1}
            analyzedHistory = {rank: 2}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(1)
        })
    })

    describe("rank of the best ranked event updated into this consolidated event", () => {
        it("when the analyzed event's rank is less than the rank of the best ranked event this consolidated event has so far been updated with, it updates its rank of best ranked event", () => {
            const consolidatedEvent = {rankOfBestRankedEventInAnyMemberHistory: 3}
            analyzedEvent = {rank: 2}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(2)
        })

        it("when the analyzed event's rank is not less than the rank of the best ranked event this consolidated event has so far been updated with, it keeps its rank of best ranked event the same", () => {
            const consolidatedEvent = {rankOfBestRankedEventInAnyMemberHistory: 1}
            analyzedEvent = {rank: 2}

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(1)
        })
    })
})
