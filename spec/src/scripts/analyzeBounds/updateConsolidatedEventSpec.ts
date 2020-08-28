import { Name, Pitch, Rank } from "../../../../src/general"
import { Level } from "../../../../src/notations/ji"
import { AnalyzedEvent, AnalyzedHistory, ConsolidatedEvent } from "../../../../src/scripts/analyzeBounds/types"
import { updateConsolidatedEvent } from "../../../../src/scripts/analyzeBounds/updateConsolidatedEvent"
import {
    analyzedEventFixture,
    analyzedHistoryFixture,
    consolidatedEventFixture,
} from "../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("updateConsolidatedEvent", () => {
    let analyzedHistory: AnalyzedHistory
    let analyzedEvent: AnalyzedEvent
    let nextAnalyzedEvent: AnalyzedEvent | undefined
    let bestPossibleHistory: AnalyzedHistory

    beforeEach(() => {
        analyzedHistory = { ...analyzedHistoryFixture }
        analyzedEvent = { ...analyzedEventFixture }
        nextAnalyzedEvent = undefined
        bestPossibleHistory = { ...analyzedHistoryFixture, events: [] }
    })

    describe("next events", () => {
        it("when there is no next analyzed event (i.e. this is the last event of the analyzed history) the next events stays the same", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(["2.5°58"] as Name<Pitch>[])
        })

        it("when there is a next analyzed event, it adds its name to the next events", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }
            nextAnalyzedEvent = { ...analyzedEvent, name: ".)/| '/|" as Name<Pitch> }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next analyzed event, but an event with that name has already been updated into this consolidated event, the next events stays the same", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }
            nextAnalyzedEvent = { ...analyzedEventFixture, name: "2.5°58" as Name<Pitch> }

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
            const consolidatedEvent: ConsolidatedEvent = { ...consolidatedEventFixture, isPossibleHistoryMember: true }
            analyzedHistory = { ...analyzedHistoryFixture, possible: true }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { ...consolidatedEventFixture, isPossibleHistoryMember: true }
            analyzedHistory = { ...analyzedHistoryFixture, possible: false }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is possible, the consolidated event becomes identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { ...consolidatedEventFixture, isPossibleHistoryMember: false }
            analyzedHistory = { ...analyzedHistoryFixture, possible: true }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of a possible history, and the analyzed history is not possible, the consolidated event remains not identified as a member of a possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = { ...consolidatedEventFixture, isPossibleHistoryMember: false }
            analyzedHistory = { ...analyzedHistoryFixture, possible: false }

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
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                isBestPossibleHistoryMember: true,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [{ ...analyzedEventFixture, name: "eventName" as Name<Pitch>, level: Level.ULTRA }],
            }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                isBestPossibleHistoryMember: true,
                name: "eventName" as Name<Pitch>,
            }
            bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [{ ...analyzedEventFixture, name: "eventName" as Name<Pitch>, level: Level.EXTREME }],
            }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history contains this event at this level, the consolidated event becomes identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                isBestPossibleHistoryMember: false,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [{ ...analyzedEventFixture, name: "eventName" as Name<Pitch>, level: Level.ULTRA }],
            }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the consolidated event has not been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the consolidated event remains not identified as a member of the best possible history", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                isBestPossibleHistoryMember: false,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...analyzedHistoryFixture,
                events: [{ ...analyzedEventFixture, name: "eventName" as Name<Pitch>, level: Level.EXTREME }],
            }

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
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                rankOfBestRankedMemberHistory: 3 as Rank<AnalyzedEvent>,
            }
            analyzedHistory = { ...analyzedHistoryFixture, rank: 2 as Rank<AnalyzedEvent> }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(2 as Rank<AnalyzedEvent>)
        })

        it("when the analyzed history's rank is not less than the rank of the best ranked history this consolidated event has so far been updated with an event from, it keeps its rank of best ranked member history the same", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent>,
            }
            analyzedHistory = { ...analyzedHistoryFixture, rank: 2 as Rank<AnalyzedEvent> }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedMemberHistory).toBe(1 as Rank<AnalyzedEvent>)
        })
    })

    describe("rank of the best ranked event updated into this consolidated event", () => {
        it("when the analyzed event's rank is less than the rank of the best ranked event this consolidated event has so far been updated with, it updates its rank of best ranked event", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                rankOfBestRankedEventInAnyMemberHistory: 3 as Rank<AnalyzedEvent>,
            }
            analyzedEvent = { ...analyzedEventFixture, rank: 2 as Rank<AnalyzedEvent> }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(2 as Rank<AnalyzedEvent>)
        })

        it("when the analyzed event's rank is not less than the rank of the best ranked event this consolidated event has so far been updated with, it keeps its rank of best ranked event the same", () => {
            const consolidatedEvent: ConsolidatedEvent = {
                ...consolidatedEventFixture,
                rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent>,
            }
            analyzedEvent = { ...analyzedEventFixture, rank: 2 as Rank<AnalyzedEvent> }

            updateConsolidatedEvent(consolidatedEvent, {
                analyzedHistory,
                analyzedEvent,
                nextAnalyzedEvent,
                bestPossibleHistory,
            })

            expect(consolidatedEvent.rankOfBestRankedEventInAnyMemberHistory).toBe(1 as Rank<AnalyzedEvent>)
        })
    })
})
