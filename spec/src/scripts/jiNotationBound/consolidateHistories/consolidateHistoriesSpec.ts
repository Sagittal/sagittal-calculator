import { Cents, Multiplier, Name, Pitch } from "../../../../../src/general"
import { JiNotationLevel, Tina } from "../../../../../src/sagittal/notations/ji"
import { consolidateHistories } from "../../../../../src/scripts/jiNotationBound/consolidateHistories"
import { EventType } from "../../../../../src/scripts/jiNotationBound/histories"
import { EventAnalysis, HistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { eventAnalysisFixture, historyAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("consolidateHistories", (): void => {
    it("consolidates histories to collapse redundancies per JI notation level and show which events can lead into which events in the next JI notation level, and which ones are members of histories that are possible, and what the best rank is in any event that becomes part of this consolidation, and what the best rank of any history this event is a member of is, and membership in the best possible history", (): void => {
        const eventOneGoesToEventThreeAndFour: EventAnalysis = {
            ...eventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.COMMA_MEAN,
            name: "'/| )/|" as Name<Pitch>,
            cents: 24.200000 as Cents,
            rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const eventTwoGoesToEventThree: EventAnalysis = {
            ...eventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.ULTRA,
            type: EventType.INA_MIDPOINT,
            name: "12.5°58" as Name<Pitch>,
            cents: 24.333333 as Cents,
            rank: RANKS[ EventType.COMMA_MEAN ],
            exact: false,
        }
        const eventThree: EventAnalysis = {
            ...eventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.581395 as Cents,
            rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
            exact: false,
        }
        const eventFour: EventAnalysis = {
            ...eventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.INA_MIDPOINT,
            name: "50.5°233" as Name<Pitch>,
            cents: 24.151964 as Cents,
            rank: RANKS[ EventType.COMMA_MEAN ],
            exact: false,
        }
        const eventThreeButWithBetterRank: EventAnalysis = {
            ...eventAnalysisFixture,
            jiNotationLevel: JiNotationLevel.EXTREME,
            type: EventType.COMMA_MEAN,
            name: ",)/|_)/|" as Name<Pitch>,
            cents: 24.581395 as Cents,
            rank: RANKS[ EventType.COMMA_MEAN ],
            exact: false,
        }

        const bestPossibleHistory: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                eventTwoGoesToEventThree,
                eventThreeButWithBetterRank,
            ],
            rank: RANKS[ EventType.COMMA_MEAN ],
            possible: true,
            tinaError: 0 as Multiplier<Tina>,
            cents: 24.581395 as Cents,
        }
        const historyAnalyses: HistoryAnalysis[] = [
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventOneGoesToEventThreeAndFour,
                    eventThree,
                ],
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                possible: true,
                tinaError: 0 as Multiplier<Tina>,
                cents: 24.581395 as Cents,
            },
            bestPossibleHistory,
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventOneGoesToEventThreeAndFour,
                    eventFour,
                ],
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 3.05589400712 as Multiplier<Tina>,
                cents: 24.151964 as Cents,
            },
            {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    eventTwoGoesToEventThree,
                ],
                rank: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                possible: false,
                tinaError: 2.26723955922 as Multiplier<Tina>,
                cents: 24.900000 as Cents,
            },
        ]

        const actual = consolidateHistories(historyAnalyses, bestPossibleHistory)

        const expected = {
            [ JiNotationLevel.ULTRA ]: [
                {
                    type: eventOneGoesToEventThreeAndFour.type,
                    jiNotationLevel: eventOneGoesToEventThreeAndFour.jiNotationLevel,
                    name: eventOneGoesToEventThreeAndFour.name,
                    cents: eventOneGoesToEventThreeAndFour.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                    rankOfBestRankedMemberHistory: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                    nextEvents: [
                        eventThree.name,
                        eventFour.name,
                    ] as Name<Pitch>[],
                },
                {
                    type: eventTwoGoesToEventThree.type,
                    jiNotationLevel: eventTwoGoesToEventThree.jiNotationLevel,
                    name: eventTwoGoesToEventThree.name,
                    cents: eventTwoGoesToEventThree.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                    nextEvents: [
                        eventThree.name,
                        // eventImpossible.name,
                    ] as Name<Pitch>[],
                },
            ],
            [ JiNotationLevel.EXTREME ]: [
                {
                    type: eventThree.type,
                    jiNotationLevel: eventThree.jiNotationLevel,
                    name: eventThree.name,
                    cents: eventThree.cents,
                    isPossibleHistoryMember: true,
                    isBestPossibleHistoryMember: true,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                    nextEvents: [] as Name<Pitch>[],
                },
                {
                    type: eventFour.type,
                    jiNotationLevel: eventFour.jiNotationLevel,
                    name: eventFour.name,
                    cents: eventFour.cents,
                    isPossibleHistoryMember: false,
                    isBestPossibleHistoryMember: false,
                    exact: false,
                    rankOfBestRankedEventInAnyMemberHistory: RANKS[ EventType.COMMA_MEAN ],
                    rankOfBestRankedMemberHistory: RANKS[ EventType.SIZE_CATEGORY_BOUND ],
                    nextEvents: [] as Name<Pitch>[],
                },
            ],
        }
        expect(actual).toEqual(expected)
    })
})
