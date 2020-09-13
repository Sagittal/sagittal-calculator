import { Cents, Integer, Multiplier, Name, Pitch, Rank } from "../../../../../src/general"
import { Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { EventAnalysis, HistoryAnalysis } from "../../../../../src/scripts/bound/analyzeHistory"
import { consolidateHistories } from "../../../../../src/scripts/bound/consolidateHistories"
import { EventType } from "../../../../../src/scripts/bound/histories"
import { eventAnalysisFixture, historyAnalysisFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("consolidateHistories", (): void => {
    it("consolidates histories to collapse redundancies per level and show which events can lead into which events in the next level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any history this event is a member of is, and membership in the best possible history", (): void => {
        const eventOneGoesToEventThreeAndFour: EventAnalysis = {
            ...eventAnalysisFixture,
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: "'/| )/|" as Name<Pitch>,
            cents: 24.2 as Cents,
            rank: 2 as Integer & Rank<EventAnalysis>,
            exact: false,
        }
        const eventTwoGoesToEventThree: EventAnalysis = {
            ...eventAnalysisFixture,
            level: Level.ULTRA,
            type: EventType.INA,
            name: "12.5°58" as Name<Pitch>,
            cents: 24.33333 as Cents,
            rank: 1 as Integer & Rank<EventAnalysis>,
            exact: false,
        }
        const eventThree: EventAnalysis = {
            ...eventAnalysisFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.58139537326805 as Cents,
            rank: 2 as Integer & Rank<EventAnalysis>,
            exact: false,
        }
        const eventFour: EventAnalysis = {
            ...eventAnalysisFixture,
            level: Level.EXTREME,
            type: EventType.INA,
            name: "50.5°233" as Name<Pitch>,
            cents: 24.151964806252103 as Cents,
            rank: 1 as Integer & Rank<EventAnalysis>,
            exact: false,
        }
        const eventThreeButWithBetterRank: EventAnalysis = {
            ...eventAnalysisFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.58139537326805 as Cents,
            rank: 1 as Integer & Rank<EventAnalysis>,
            exact: false,
        }

        const bestPossibleHistory: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                eventTwoGoesToEventThree,
                eventThreeButWithBetterRank,
            ],
            rank: 1 as Integer & Rank<EventAnalysis>,
            possible: true,
            tinaError: 0 as Multiplier<Tina>,
            cents: 24.58139537326805 as Cents,
        }
        const historyAnalyses: HistoryAnalysis[] = [
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: 2 as Integer & Rank<EventAnalysis>,
                possible: true,
                tinaError: 0 as Multiplier<Tina>,
                cents: 24.58139537326805 as Cents,
            },
            bestPossibleHistory,
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: 2 as Integer & Rank<EventAnalysis>,
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tina>,
                cents: 24.151964806252103 as Cents,
            },
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventTwoGoesToEventThree,
                ],
                rank: 8 as Integer & Rank<EventAnalysis>,
                possible: false,
                tinaError: 2.26723955922 as Multiplier<Tina>,
                cents: 24.9 as Cents,
            },
        ]

        const actual = consolidateHistories(historyAnalyses, bestPossibleHistory)

        const expected = {
            [ Level.ULTRA ]: [
                {
                    type: eventOneGoesToEventThreeAndFour.type,
                    level: eventOneGoesToEventThreeAndFour.level,
                    name: eventOneGoesToEventThreeAndFour.name,
                    cents: eventOneGoesToEventThreeAndFour.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 2 as Integer & Rank<EventAnalysis>,
                    rankOfBestRankedMemberHistory: 2 as Integer & Rank<EventAnalysis>,
                    nextEvents: [
                        eventThree.name,
                        eventFour.name,
                    ] as Name<Pitch>[],
                },
                {
                    type: eventTwoGoesToEventThree.type,
                    level: eventTwoGoesToEventThree.level,
                    name: eventTwoGoesToEventThree.name,
                    cents: eventTwoGoesToEventThree.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                    rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                    nextEvents: [
                        eventThree.name,
                        // eventImpossible.name,
                    ] as Name<Pitch>[],
                },
            ],
            [ Level.EXTREME ]: [
                {
                    type: eventThree.type,
                    level: eventThree.level,
                    name: eventThree.name,
                    cents: eventThree.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                    rankOfBestRankedMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                    nextEvents: [] as Name<Pitch>[],
                },
                {
                    type: eventFour.type,
                    level: eventFour.level,
                    name: eventFour.name,
                    cents: eventFour.cents,
                    isPossibleHistoryMember: false,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Integer & Rank<EventAnalysis>,
                    rankOfBestRankedMemberHistory: 2 as Integer & Rank<EventAnalysis>,
                    nextEvents: [] as Name<Pitch>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})
