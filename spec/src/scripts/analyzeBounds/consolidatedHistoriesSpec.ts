import { computeConsolidatedHistories } from "../../../../src/scripts/analyzeBounds/consolidatedHistories"
import { Level } from "../../../../src/notations/ji/types"
import {
    AnalyzedEvent,
    AnalyzedHistory,
    EventName,
    EventRank,
    EventType,
} from "../../../../src/scripts/analyzeBounds/types"
import { Cents, Proportion } from "../../../../src/utilities/types"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../helpers/scripts/analyzeBounds/fixtures"

describe("computeConsolidatedHistories", () => {
    it("consolidates histories to collapse redundancies per level and show which events can lead into which events in the next level, and which ones are members of histories that are possible, and what the best rank is in any event that gets consolidated into this consolidated display, and what the best rank of any history this event is a member of is, and membership in the best possible history", () => {
        const eventOneGoesToEventThreeAndFour: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: "'/| )/|" as EventName,
            position: 24.2 as Cents,
            rank: 2 as EventRank,
            exact: false,
        }
        const eventTwoGoesToEventThree: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.ULTRA,
            type: EventType.INA,
            name: "12.5°58" as EventName,
            position: 24.33333 as Cents,
            rank: 1 as EventRank,
            exact: false,
        }
        const eventThree: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as EventName,
            position: 24.58139537326805 as Cents,
            rank: 2 as EventRank,
            exact: false,
        }
        const eventFour: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.INA,
            name: "50.5°233" as EventName,
            position: 24.151964806252103 as Cents,
            rank: 1 as EventRank,
            exact: false,
        }
        const eventThreeButWithBetterRank: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as EventName,
            position: 24.58139537326805 as Cents,
            rank: 1 as EventRank,
            exact: false,
        }

        const bestPossibleHistory: AnalyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                eventTwoGoesToEventThree,
                eventThreeButWithBetterRank,
            ],
            rank: 1 as EventRank,
            possible: true,
            tinaError: 0 as Proportion<"Tina">,
            position: 24.58139537326805 as Cents,
        }
        const analyzedHistories: AnalyzedHistory[] = [
            {
                ...analyzedHistoryFixture,
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: 2 as EventRank,
                possible: true,
                tinaError: 0 as Proportion<"Tina">,
                position: 24.58139537326805 as Cents,
            },
            bestPossibleHistory,
            {
                ...analyzedHistoryFixture,
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: 2 as EventRank,
                possible: false,
                tinaError: 3.05589400712 as Proportion<"Tina">,
                position: 24.151964806252103 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                events: [
                    eventTwoGoesToEventThree,
                ],
                rank: 8 as EventRank,
                possible: false,
                tinaError: 2.26723955922 as Proportion<"Tina">,
                position: 24.9 as Cents,
            },
        ]

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
            ],
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
            ],
        })
    })
})
