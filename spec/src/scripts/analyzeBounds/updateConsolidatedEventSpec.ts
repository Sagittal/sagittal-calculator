import { updateConsolidatedEvent } from "../../../../src/scripts/analyzeBounds/updateConsolidatedEvent"
import {
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedEvent,
    EventName,
    EventRank,
} from "../../../../src/scripts/analyzeBounds/types"
import { Level } from "../../../../src/notations/ji/types"

describe("updateConsolidatedEvent", () => {
    let analyzedHistory: AnalyzedHistory
    let analyzedEvent: AnalyzedEvent
    let nextAnalyzedEvent: AnalyzedEvent
    let bestPossibleHistory: AnalyzedHistory

    beforeEach(() => {
        analyzedHistory = {} as AnalyzedHistory
        analyzedEvent = {} as AnalyzedEvent
        nextAnalyzedEvent = undefined as unknown as AnalyzedEvent
        bestPossibleHistory = { events: [] } as unknown as AnalyzedHistory
    })

    describe("next events", () => {
        it("when there is no next analyzed event (i.e. this is the last event of the analyzed history) the next events stays the same", () => {
            const consolidatedEvent: ConsolidatedEvent = { nextEvents: ["2.5°58"] as EventName[] } as unknown as ConsolidatedEvent

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(["2.5°58"] as EventName[])
        })

        it("when there is a next analyzed event, it adds its name to the next events", () => {
            const consolidatedEvent: ConsolidatedEvent = { nextEvents: ["2.5°58"] as EventName[] } as unknown as ConsolidatedEvent
            nextAnalyzedEvent = { name: ".)/| '/|" as EventName } as AnalyzedEvent

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next analyzed event, but an event with that name has already been updated into this consolidated event, the next events stays the same", () => {
            const consolidatedEvent: ConsolidatedEvent = { nextEvents: ["2.5°58"] as EventName[] } as unknown as ConsolidatedEvent
            nextAnalyzedEvent = { name: "2.5°58" as EventName } as AnalyzedEvent

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
            const consolidatedEvent: ConsolidatedEvent = { isPossibleHistoryMember: true } as unknown as ConsolidatedEvent
            analyzedHistory = { possible: true } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isPossibleHistoryMember: true } as unknown as ConsolidatedEvent
            analyzedHistory = { possible: false } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is possible, the consolidated event becomes identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isPossibleHistoryMember: false } as unknown as ConsolidatedEvent
            analyzedHistory = { possible: true } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains not identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isPossibleHistoryMember: false } as unknown as ConsolidatedEvent
            analyzedHistory = { possible: false } as AnalyzedHistory

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
            const consolidatedEvent: ConsolidatedEvent = { isBestPossibleHistoryMember: true, name: "eventName", level: Level.ULTRA } as unknown as ConsolidatedEvent
            bestPossibleHistory = { events: [{ name: "eventName", level: Level.ULTRA }] } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isBestPossibleHistoryMember: true, name: "eventName" as EventName } as unknown as ConsolidatedEvent
            bestPossibleHistory = { events: [{ name: "eventName" as EventName, level: Level.EXTREME } as AnalyzedEvent] } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history contains this event at this level, the consolidated event becomes identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isBestPossibleHistoryMember: false, name: "eventName", level: Level.ULTRA as Level } as unknown as ConsolidatedEvent
            bestPossibleHistory = { events: [{ name: "eventName" as EventName, level: Level.ULTRA } as AnalyzedEvent] } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains not identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { isBestPossibleHistoryMember: false, name: "eventName", level: Level.ULTRA as Level } as unknown as ConsolidatedEvent
            bestPossibleHistory = { events: [{ name: "eventName" as EventName, level: Level.EXTREME } as AnalyzedEvent] } as AnalyzedHistory

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
            const consolidatedEvent: ConsolidatedEvent = { rankOfBestRankedMemberHistory: 3 as EventRank } as unknown as ConsolidatedEvent
            analyzedHistory = { rank: 2 as EventRank } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(2 as EventRank)
        })

        it("when the analyzed history's rank is not less than the rank of the best ranked history this consolidated event has so far been updated with an event from, it keeps its rank of best ranked member history the same", () => {
            const consolidatedEvent: ConsolidatedEvent = { rankOfBestRankedMemberHistory: 1 as EventRank } as unknown as ConsolidatedEvent
            analyzedHistory = { rank: 2 as EventRank } as AnalyzedHistory

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(1 as EventRank)
        })
    })

    describe("rank of the best ranked event updated into this consolidated event", () => {
        it("when the analyzed event's rank is less than the rank of the best ranked event this consolidated event has so far been updated with, it updates its rank of best ranked event", () => {
            const consolidatedEvent: ConsolidatedEvent = { rankOfBestRankedEventInAnyMemberHistory: 3 as EventRank } as unknown as ConsolidatedEvent
            analyzedEvent = { rank: 2 as EventRank } as AnalyzedEvent

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(2 as EventRank)
        })

        it("when the analyzed event's rank is not less than the rank of the best ranked event this consolidated event has so far been updated with, it keeps its rank of best ranked event the same", () => {
            const consolidatedEvent: ConsolidatedEvent = { rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank } as unknown as ConsolidatedEvent
            analyzedEvent = { rank: 2 as EventRank } as AnalyzedEvent

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(1 as EventRank)
        })
    })
})
