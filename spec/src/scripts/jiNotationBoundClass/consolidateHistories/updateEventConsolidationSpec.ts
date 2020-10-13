import { Name } from "../../../../../src/general"
import { BoundClass, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundClassEventConsolidation } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/types"
import { updateEventConsolidation } from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/updateEventConsolidation"
import {
    BoundClassEventAnalysis,
    BoundClassHistoryAnalysis,
} from "../../../../../src/scripts/jiNotationBoundClass/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundClassEventAnalysisFixture,
    boundClassEventConsolidationFixture,
    boundClassHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("updateEventConsolidation", (): void => {
    let boundClassHistoryAnalysis: BoundClassHistoryAnalysis
    let boundClassEventAnalysis: BoundClassEventAnalysis
    let nextBoundClassEventAnalysis: BoundClassEventAnalysis | undefined
    let bestPossibleBoundClassHistoryAnalysis: BoundClassHistoryAnalysis

    beforeEach((): void => {
        boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture }
        boundClassEventAnalysis = { ...boundClassEventAnalysisFixture }
        nextBoundClassEventAnalysis = undefined
        bestPossibleBoundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, boundClassEventAnalyses: [] }
    })

    describe("next events", (): void => {
        it("when there is no next event analysis (i.e. this is the final event of the bound class history analysis) the next events stays the same", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                nextBoundClassEvents: ["2.5°58"] as Array<Name<BoundClass>>,
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.nextBoundClassEvents).toEqual(["2.5°58"] as Array<Name<BoundClass>>)
        })

        it("when there is a next event analysis, it adds its name to the next events", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                nextBoundClassEvents: ["2.5°58"] as Array<Name<BoundClass>>,
            }
            nextBoundClassEventAnalysis = { ...boundClassEventAnalysis, name: ".)/| '/|" as Name<BoundClass> }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.nextBoundClassEvents)
                .toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next event analysis, but an event with that name has already been updated into this event consolidation, the next events stays the same", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                nextBoundClassEvents: ["2.5°58"] as Array<Name<BoundClass>>,
            }
            nextBoundClassEventAnalysis = { ...boundClassEventAnalysisFixture, name: "2.5°58" as Name<BoundClass> }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.nextBoundClassEvents)
                .toEqual(jasmine.arrayWithExactContents(["2.5°58"]))
        })
    })

    describe("membership of a bound class history which is possible", (): void => {
        it("when the bound class event consolidation has been identified as a member of a possible bound class history, and the bound class history analysis is possible, the bound class event consolidation remains identified as a member of a possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation =
                { ...boundClassEventConsolidationFixture, isPossibleBoundClassHistoryMember: true }
            boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, possible: true }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has been identified as a member of a possible bound class history, and the bound class history analysis is not possible, the bound class event consolidation remains identified as a member of a possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation =
                { ...boundClassEventConsolidationFixture, isPossibleBoundClassHistoryMember: true }
            boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, possible: false }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has not been identified as a member of a possible bound class history, and the bound class history analysis is possible, the bound class event consolidation becomes identified as a member of a possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation =
                { ...boundClassEventConsolidationFixture, isPossibleBoundClassHistoryMember: false }
            boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, possible: true }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has not been identified as a member of a possible bound class history, and the bound class history analysis is not possible, the bound class event consolidation remains not identified as a member of a possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation =
                { ...boundClassEventConsolidationFixture, isPossibleBoundClassHistoryMember: false }
            boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, possible: false }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isPossibleBoundClassHistoryMember).toBe(false)
        })
    })

    describe("membership of a bound class history which is the best possible", (): void => {
        it("when the bound class event consolidation has been identified as a member of the best possible bound class history, and the best possible bound class history contains this event at this JI notation level, the bound class event consolidation remains identified as a member of the best possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                isBestPossibleBoundClassHistoryMember: true,
                name: "eventName" as Name<BoundClass>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundClassHistoryAnalysis = {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [{
                    ...boundClassEventAnalysisFixture,
                    name: "eventName" as Name<BoundClass>,
                    jiNotationLevel: JiNotationLevel.ULTRA,
                }],
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has been identified as a member of the best possible bound class history, and the best possible bound class history does not contain this event at this JI notation level, the bound class event consolidation remains identified as a member of the best possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                isBestPossibleBoundClassHistoryMember: true,
                name: "eventName" as Name<BoundClass>,
            }
            bestPossibleBoundClassHistoryAnalysis = {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [{
                    ...boundClassEventAnalysisFixture,
                    name: "eventName" as Name<BoundClass>,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                }],
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has not been identified as a member of the best possible bound class history, and the best possible bound class history contains this event at this JI notation level, the bound class event consolidation becomes identified as a member of the best possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                isBestPossibleBoundClassHistoryMember: false,
                name: "eventName" as Name<BoundClass>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundClassHistoryAnalysis = {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [{
                    ...boundClassEventAnalysisFixture,
                    name: "eventName" as Name<BoundClass>,
                    jiNotationLevel: JiNotationLevel.ULTRA,
                }],
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember).toBe(true)
        })

        it("when the bound class event consolidation has not been identified as a member of the best possible bound class history, and the best possible bound class history does not contain this event at this JI notation level, the bound class event consolidation remains not identified as a member of the best possible bound class history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                isBestPossibleBoundClassHistoryMember: false,
                name: "eventName" as Name<BoundClass>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundClassHistoryAnalysis = {
                ...boundClassHistoryAnalysisFixture,
                boundClassEventAnalyses: [{
                    ...boundClassEventAnalysisFixture,
                    name: "eventName" as Name<BoundClass>,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                }],
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.isBestPossibleBoundClassHistoryMember).toBe(false)
        })
    })

    describe("rank of the best ranked bound class history any event updated into this event consolidation was a member of          ", (): void => {
        it("when the history analysis's rank is less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it updates its rank of best ranked member history", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }
            boundClassHistoryAnalysis = { ...boundClassHistoryAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.rankOfBestRankedMemberHistory).toBe(RANKS[ BoundType.COMMA_MEAN ])
        })

        it("when the history analysis's rank is not less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it keeps its rank of best ranked member history the same", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
            }
            boundClassHistoryAnalysis = {
                ...boundClassHistoryAnalysisFixture,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.rankOfBestRankedMemberHistory).toBe(RANKS[ BoundType.COMMA_MEAN ])
        })
    })

    describe("rank of the best ranked bound class event updated into this event consolidation", (): void => {
        it("when the bound class event analysis's rank is less than the rank of the best ranked bound class event this event consolidation has so far been updated with, it updates its rank of best ranked bound class event", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }
            boundClassEventAnalysis = { ...boundClassEventAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.rankOfBestRankedEventInAnyMemberHistory)
                .toBe(RANKS[ BoundType.COMMA_MEAN ])
        })

        it("when the bound class event analysis's rank is not less than the rank of the best ranked bound class event this event consolidation has so far been updated with, it keeps its rank of best ranked bound class event the same", (): void => {
            const boundClassEventConsolidation: BoundClassEventConsolidation = {
                ...boundClassEventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
            }
            boundClassEventAnalysis = { ...boundClassEventAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundClassEventConsolidation, {
                boundClassHistoryAnalysis,
                boundClassEventAnalysis: boundClassEventAnalysis,
                nextBoundClassEventAnalysis,
                bestPossibleBoundClassHistoryAnalysis,
            })

            expect(boundClassEventConsolidation.rankOfBestRankedEventInAnyMemberHistory)
                .toBe(RANKS[ BoundType.INA_MIDPOINT ])
        })
    })
})
