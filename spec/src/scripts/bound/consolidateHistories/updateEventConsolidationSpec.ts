import { Integer, Name, Pitch, Rank } from "../../../../../src/general"
import { Level } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis, HistoryAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { EventConsolidation } from "../../../../../src/scripts/bound/consolidateHistories/types"
import { updateEventConsolidation } from "../../../../../src/scripts/bound/consolidateHistories/updateEventConsolidation"
import {
    eventAnalysisFixture,
    eventConsolidationFixture,
    historyAnalysisFixture,
} from "../../../../helpers/src/scripts/bound/fixtures"

describe("updateEventConsolidation", (): void => {
    let historyAnalysis: HistoryAnalysis
    let eventAnalysis: EventAnalysis
    let nextEventAnalysis: EventAnalysis | undefined
    let bestPossibleHistory: HistoryAnalysis

    beforeEach((): void => {
        historyAnalysis = { ...historyAnalysisFixture }
        eventAnalysis = { ...eventAnalysisFixture }
        nextEventAnalysis = undefined
        bestPossibleHistory = { ...historyAnalysisFixture, eventAnalyses: [] }
    })

    describe("next events", (): void => {
        it("when there is no next event analysis (i.e. this is the last event of the history analysis) the next events stays the same", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.nextEvents).toEqual(["2.5°58"] as Name<Pitch>[])
        })

        it("when there is a next event analysis, it adds its name to the next events", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }
            nextEventAnalysis = { ...eventAnalysis, name: ".)/| '/|" as Name<Pitch> }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next event analysis, but an event with that name has already been updated into this event consolidation, the next events stays the same", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                nextEvents: ["2.5°58"] as Name<Pitch>[],
            }
            nextEventAnalysis = { ...eventAnalysisFixture, name: "2.5°58" as Name<Pitch> }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.nextEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58"]))
        })
    })

    describe("membership of a history which is possible", (): void => {
        it("when the event consolidation has been identified as a member of a possible history, and the history analysis is possible, the event consolidation remains identified as a member of a possible history", (): void => {
            const eventConsolidation: EventConsolidation =
                { ...eventConsolidationFixture, isPossibleHistoryMember: true }
            historyAnalysis = { ...historyAnalysisFixture, possible: true }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has been identified as a member of a possible history, and the history analysis is not possible, the event consolidation remains identified as a member of a possible history", (): void => {
            const eventConsolidation: EventConsolidation =
                { ...eventConsolidationFixture, isPossibleHistoryMember: true }
            historyAnalysis = { ...historyAnalysisFixture, possible: false }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has not been identified as a member of a possible history, and the history analysis is possible, the event consolidation becomes identified as a member of a possible history", (): void => {
            const eventConsolidation: EventConsolidation =
                { ...eventConsolidationFixture, isPossibleHistoryMember: false }
            historyAnalysis = { ...historyAnalysisFixture, possible: true }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has not been identified as a member of a possible history, and the history analysis is not possible, the event consolidation remains not identified as a member of a possible history", (): void => {
            const eventConsolidation: EventConsolidation =
                { ...eventConsolidationFixture, isPossibleHistoryMember: false }
            historyAnalysis = { ...historyAnalysisFixture, possible: false }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isPossibleHistoryMember).toBe(false)
        })
    })

    describe("membership of a history which is the best possible", (): void => {
        it("when the event consolidation has been identified as a member of the best possible history, and the best possible history contains this event at this level, the event consolidation remains identified as a member of the best possible history", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                isBestPossibleHistoryMember: true,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...historyAnalysisFixture,
                eventAnalyses: [{ ...eventAnalysisFixture, name: "eventName" as Name<Pitch>, level: Level.ULTRA }],
            }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the event consolidation remains identified as a member of the best possible history", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                isBestPossibleHistoryMember: true,
                name: "eventName" as Name<Pitch>,
            }
            bestPossibleHistory = {
                ...historyAnalysisFixture,
                eventAnalyses: [{ ...eventAnalysisFixture, name: "eventName" as Name<Pitch>, level: Level.EXTREME }],
            }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has not been identified as a member of the best possible history, and the best possible history contains this event at this level, the event consolidation becomes identified as a member of the best possible history", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                isBestPossibleHistoryMember: false,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...historyAnalysisFixture,
                eventAnalyses: [{ ...eventAnalysisFixture, name: "eventName" as Name<Pitch>, level: Level.ULTRA }],
            }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isBestPossibleHistoryMember).toBe(true)
        })

        it("when the event consolidation has not been identified as a member of the best possible history, and the best possible history does not contain this event at this level, the event consolidation remains not identified as a member of the best possible history", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                isBestPossibleHistoryMember: false,
                name: "eventName" as Name<Pitch>,
                level: Level.ULTRA,
            }
            bestPossibleHistory = {
                ...historyAnalysisFixture,
                eventAnalyses: [{ ...eventAnalysisFixture, name: "eventName" as Name<Pitch>, level: Level.EXTREME }],
            }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.isBestPossibleHistoryMember).toBe(false)
        })
    })

    describe(
        "rank of the best ranked history any event updated into this event consolidation was a member of",
        (): void => {
            it("when the history analysis's rank is less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it updates its rank of best ranked member history", (): void => {
                const eventConsolidation: EventConsolidation = {
                    ...eventConsolidationFixture,
                    rankOfBestRankedMemberHistory: 3 as Integer & Rank<EventAnalysis>,
                }
                historyAnalysis = { ...historyAnalysisFixture, rank: 2 as Integer & Rank<EventAnalysis> }

                updateEventConsolidation(eventConsolidation, {
                    historyAnalysis,
                    eventAnalysis,
                    nextEventAnalysis,
                    bestPossibleHistory,
                })

                expect(eventConsolidation.rankOfBestRankedMemberHistory).toBe(2 as Integer & Rank<EventAnalysis>)
            })

            it("when the history analysis's rank is not less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it keeps its rank of best ranked member history the same", (): void => {
                const eventConsolidation: EventConsolidation = {
                    ...eventConsolidationFixture,
                    rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                }
                historyAnalysis = { ...historyAnalysisFixture, rank: 2 as Integer & Rank<EventAnalysis> }

                updateEventConsolidation(eventConsolidation, {
                    historyAnalysis,
                    eventAnalysis,
                    nextEventAnalysis,
                    bestPossibleHistory,
                })

                expect(eventConsolidation.rankOfBestRankedMemberHistory).toBe(1 as Integer & Rank<EventAnalysis>)
            })
        },
    )

    describe("rank of the best ranked event updated into this event consolidation", (): void => {
        it("when the event analysis's rank is less than the rank of the best ranked event this event consolidation has so far been updated with, it updates its rank of best ranked event", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: 3 as Integer & Rank<EventAnalysis>,
            }
            eventAnalysis = { ...eventAnalysisFixture, rank: 2 as Integer & Rank<EventAnalysis> }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.rankOfBestRankedEventInAnyMemberHistory).toBe(2 as Integer & Rank<EventAnalysis>)
        })

        it("when the event analysis's rank is not less than the rank of the best ranked event this event consolidation has so far been updated with, it keeps its rank of best ranked event the same", (): void => {
            const eventConsolidation: EventConsolidation = {
                ...eventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
            }
            eventAnalysis = { ...eventAnalysisFixture, rank: 2 as Integer & Rank<EventAnalysis> }

            updateEventConsolidation(eventConsolidation, {
                historyAnalysis,
                eventAnalysis,
                nextEventAnalysis,
                bestPossibleHistory,
            })

            expect(eventConsolidation.rankOfBestRankedEventInAnyMemberHistory).toBe(1 as Integer & Rank<EventAnalysis>)
        })
    })
})
