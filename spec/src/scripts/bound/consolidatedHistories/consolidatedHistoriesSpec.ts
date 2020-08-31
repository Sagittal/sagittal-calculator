import { Cents, Integer, Name, Pitch, Proportion, Rank } from "../../../../../src/general"
import { Level, Tina } from "../../../../../src/sagittal/notations/ji"
import { AnalyzedEvent, AnalyzedHistory } from "../../../../../src/scripts/bound/analyzedHistory"
import { computeConsolidatedHistories } from "../../../../../src/scripts/bound/consolidatedHistories"
import { EventType } from "../../../../../src/scripts/bound/histories"
import { analyzedEventFixture, analyzedHistoryFixture } from "../../../../helpers/src/scripts/bound/fixtures"

describe("computeConsolidatedHistories", () => {
    it("consolidates histories to collapse redundancies per level and show which events can lead into which events in the next level, and which ones are members of histories that are possible, and what the best rank is in any event that gets consolidated into this consolidated display, and what the best rank of any history this event is a member of is, and membership in the best possible history", () => {
        const eventOneGoesToEventThreeAndFour: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.ULTRA,
            type: EventType.MEAN,
            name: "'/| )/|" as Name<Pitch>,
            cents: 24.2 as Cents,
            rank: 2 as Rank<AnalyzedEvent, Integer>,
            exact: false,
        }
        const eventTwoGoesToEventThree: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.ULTRA,
            type: EventType.INA,
            name: "12.5°58" as Name<Pitch>,
            cents: 24.33333 as Cents,
            rank: 1 as Rank<AnalyzedEvent, Integer>,
            exact: false,
        }
        const eventThree: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.58139537326805 as Cents,
            rank: 2 as Rank<AnalyzedEvent, Integer>,
            exact: false,
        }
        const eventFour: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.INA,
            name: "50.5°233" as Name<Pitch>,
            cents: 24.151964806252103 as Cents,
            rank: 1 as Rank<AnalyzedEvent, Integer>,
            exact: false,
        }
        const eventThreeButWithBetterRank: AnalyzedEvent = {
            ...analyzedEventFixture,
            level: Level.EXTREME,
            type: EventType.MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.58139537326805 as Cents,
            rank: 1 as Rank<AnalyzedEvent, Integer>,
            exact: false,
        }

        const bestPossibleHistory: AnalyzedHistory = {
            ...analyzedHistoryFixture,
            events: [
                eventTwoGoesToEventThree,
                eventThreeButWithBetterRank,
            ],
            rank: 1 as Rank<AnalyzedEvent, Integer>,
            possible: true,
            tinaError: 0 as Proportion<Tina>,
            cents: 24.58139537326805 as Cents,
        }
        const analyzedHistories: AnalyzedHistory[] = [
            {
                ...analyzedHistoryFixture,
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: 2 as Rank<AnalyzedEvent, Integer>,
                possible: true,
                tinaError: 0 as Proportion<Tina>,
                cents: 24.58139537326805 as Cents,
            },
            bestPossibleHistory,
            {
                ...analyzedHistoryFixture,
                events: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: 2 as Rank<AnalyzedEvent, Integer>,
                possible: false,
                tinaError: 3.05589400712 as Proportion<Tina>,
                cents: 24.151964806252103 as Cents,
            },
            {
                ...analyzedHistoryFixture,
                events: [
                    eventTwoGoesToEventThree,
                ],
                rank: 8 as Rank<AnalyzedEvent, Integer>,
                possible: false,
                tinaError: 2.26723955922 as Proportion<Tina>,
                cents: 24.9 as Cents,
            },
        ]

        const actual = computeConsolidatedHistories(analyzedHistories, bestPossibleHistory)

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
                    rankOfBestRankedEventInAnyMemberHistory: 2 as Rank<AnalyzedEvent, Integer>,
                    rankOfBestRankedMemberHistory: 2 as Rank<AnalyzedEvent, Integer>,
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
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                    rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
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
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                    rankOfBestRankedMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
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
                    rankOfBestRankedEventInAnyMemberHistory: 1 as Rank<AnalyzedEvent, Integer>,
                    rankOfBestRankedMemberHistory: 2 as Rank<AnalyzedEvent, Integer>,
                    nextEvents: [] as Name<Pitch>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})
