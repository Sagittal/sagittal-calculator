import { computeConsolidatedHistories } from "../../../../src/scripts/analyzeBounds/consolidatedHistories"
import { Level } from "../../../../src/notations/ji/types"
import {
    AnalyzedEvent,
    AnalyzedHistory,
    ConsolidatedEvent,
    EventName,
    EventType,
    EventRank,
} from "../../../../src/scripts/analyzeBounds/types"
import { Cents } from "../../../../src/utilities/types"

describe("computeConsolidatedHistories", () => {
    it("consolidates histories to collapse redundancies per level and show which events can lead into which events in the next level, and which ones are members of histories that are possible, and what the best rank is in any event that gets consolidated into this consolidated display, and what the best rank of any history this event is a member of is, and membership in the best possible history", () => {
        const eventOneGoesToEventThreeAndFour: AnalyzedEvent = {
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: "'/| )/|" as EventName,
            position: 24.2 as Cents,
            rank: 2 as EventRank,
            exact: false,
        } as AnalyzedEvent
        const eventTwoGoesToEventThree = {
            level: Level.ULTRA,
            type: EventType.INA,
            name: "12.5°58" as EventName,
            position: 24.33333 as Cents,
            rank: 1 as EventRank,
            exact: false,
        } as AnalyzedEvent
        const eventThree = {
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as EventName,
            position: 24.58139537326805 as Cents,
            rank: 2 as EventRank,
            exact: false,
        } as AnalyzedEvent
        const eventFour = {
            level: Level.EXTREME,
            type: EventType.INA,
            name: "50.5°233" as EventName,
            position: 24.151964806252103 as Cents,
            rank: 1 as EventRank,
            exact: false,
        } as AnalyzedEvent
        const eventThreeButWithBetterRank = {
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as EventName,
            position: 24.58139537326805 as Cents,
            rank: 1 as EventRank,
            exact: false,
        } as AnalyzedEvent

        const bestPossibleHistory: AnalyzedHistory = {
            events: [
                eventTwoGoesToEventThree,
                eventThreeButWithBetterRank,
            ],
            rank: 1 as EventRank,
            possible: true,
            tinaError: 0,
            position: 24.58139537326805 as Cents,
        } as AnalyzedHistory
        const analyzedHistories: AnalyzedHistory[] = [
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: 2 as EventRank,
                possible: true,
                tinaError: 0,
                position: 24.58139537326805 as Cents,
            },
            bestPossibleHistory,
            {
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: 2 as EventRank,
                possible: false,
                tinaError: 3.05589400712,
                position: 24.151964806252103 as Cents,
            },
            {
                events: [
                    eventTwoGoesToEventThree,
                ],
                rank: 8 as EventRank,
                possible: false,
                tinaError: 2.26723955922,
                position: 24.9 as Cents,
            },
        ] as AnalyzedHistory[]

        const result = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

        expect(result).toEqual({
            [ Level.ULTRA ]: [
                {
                    type: eventOneGoesToEventThreeAndFour.type,
                    level: eventOneGoesToEventThreeAndFour.level,
                    name: eventOneGoesToEventThreeAndFour.name,
                    position: eventOneGoesToEventThreeAndFour.position,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 2 as EventRank,
                    rankOfBestRankedMemberHistory: 2 as EventRank,
                    nextEvents: [
                        eventThree.name,
                        eventFour.name,
                    ] as EventName[],
                },
                {
                    type: eventTwoGoesToEventThree.type,
                    level: eventTwoGoesToEventThree.level,
                    name: eventTwoGoesToEventThree.name,
                    position: eventTwoGoesToEventThree.position,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank,
                    rankOfBestRankedMemberHistory: 1 as EventRank,
                    nextEvents: [
                        eventThree.name,
                        // eventImpossible.name,
                    ] as EventName[],
                },
            ] as ConsolidatedEvent[],
            [ Level.EXTREME ]: [
                {
                    type: eventThree.type,
                    level: eventThree.level,
                    name: eventThree.name,
                    position: eventThree.position,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank,
                    rankOfBestRankedMemberHistory: 1 as EventRank,
                    nextEvents: [] as EventName[],
                },
                {
                    type: eventFour.type,
                    level: eventFour.level,
                    name: eventFour.name,
                    position: eventFour.position,
                    isPossibleHistoryMember: false,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: 1 as EventRank,
                    rankOfBestRankedMemberHistory: 2 as EventRank,
                    nextEvents: [] as EventName[],
                },
            ] as ConsolidatedEvent[],
        })
    })
})
