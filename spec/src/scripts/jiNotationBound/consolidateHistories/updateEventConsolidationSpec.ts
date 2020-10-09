import { Name } from "../../../../../src/general"
import { Bound, BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { BoundEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/types"
import { updateEventConsolidation } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/updateEventConsolidation"
import { BoundEventAnalysis, BoundHistoryAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundEventConsolidationFixture,
    boundHistoryAnalysisFixture,
} from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("updateEventConsolidation", (): void => {
    let boundHistoryAnalysis: BoundHistoryAnalysis
    let boundEventAnalysis: BoundEventAnalysis
    let nextBoundEventAnalysis: BoundEventAnalysis | undefined
    let bestPossibleBoundHistoryAnalysis: BoundHistoryAnalysis

    beforeEach((): void => {
        boundHistoryAnalysis = { ...boundHistoryAnalysisFixture }
        boundEventAnalysis = { ...boundEventAnalysisFixture }
        nextBoundEventAnalysis = undefined
        bestPossibleBoundHistoryAnalysis = { ...boundHistoryAnalysisFixture, boundEventAnalyses: [] }
    })

    describe("next events", (): void => {
        it("when there is no next event analysis (i.e. this is the final event of the bound history analysis) the next events stays the same", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                nextBoundEvents: ["2.5°58"] as Name<Bound>[],
            }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.nextBoundEvents).toEqual(["2.5°58"] as Name<Bound>[])
        })

        it("when there is a next event analysis, it adds its name to the next events", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                nextBoundEvents: ["2.5°58"] as Name<Bound>[],
            }
            nextBoundEventAnalysis = { ...boundEventAnalysis, name: ".)/| '/|" as Name<Bound> }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.nextBoundEvents)
                .toEqual(jasmine.arrayWithExactContents(["2.5°58", ".)/| '/|"]))
        })

        it("when there is a next event analysis, but an event with that name has already been updated into this event consolidation, the next events stays the same", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                nextBoundEvents: ["2.5°58"] as Name<Bound>[],
            }
            nextBoundEventAnalysis = { ...boundEventAnalysisFixture, name: "2.5°58" as Name<Bound> }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.nextBoundEvents).toEqual(jasmine.arrayWithExactContents(["2.5°58"]))
        })
    })

    describe("membership of a bound history which is possible", (): void => {
        it("when the bound event consolidation has been identified as a member of a possible bound history, and the bound history analysis is possible, the bound event consolidation remains identified as a member of a possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation =
                { ...boundEventConsolidationFixture, isPossibleBoundHistoryMember: true }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, possible: true }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has been identified as a member of a possible bound history, and the bound history analysis is not possible, the bound event consolidation remains identified as a member of a possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation =
                { ...boundEventConsolidationFixture, isPossibleBoundHistoryMember: true }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, possible: false }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has not been identified as a member of a possible bound history, and the bound history analysis is possible, the bound event consolidation becomes identified as a member of a possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation =
                { ...boundEventConsolidationFixture, isPossibleBoundHistoryMember: false }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, possible: true }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has not been identified as a member of a possible bound history, and the bound history analysis is not possible, the bound event consolidation remains not identified as a member of a possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation =
                { ...boundEventConsolidationFixture, isPossibleBoundHistoryMember: false }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, possible: false }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isPossibleBoundHistoryMember).toBe(false)
        })
    })

    describe("membership of a bound history which is the best possible", (): void => {
        it("when the bound event consolidation has been identified as a member of the best possible bound history, and the best possible bound history contains this event at this JI notation level, the bound event consolidation remains identified as a member of the best possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                isBestPossibleBoundHistoryMember: true,
                name: "eventName" as Name<Bound>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [{
                    ...boundEventAnalysisFixture,
                    name: "eventName" as Name<Bound>,
                    jiNotationLevel: JiNotationLevel.ULTRA,
                }],
            }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isBestPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has been identified as a member of the best possible bound history, and the best possible bound history does not contain this event at this JI notation level, the bound event consolidation remains identified as a member of the best possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                isBestPossibleBoundHistoryMember: true,
                name: "eventName" as Name<Bound>,
            }
            bestPossibleBoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [{
                    ...boundEventAnalysisFixture,
                    name: "eventName" as Name<Bound>,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                }],
            }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isBestPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has not been identified as a member of the best possible bound history, and the best possible bound history contains this event at this JI notation level, the bound event consolidation becomes identified as a member of the best possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                isBestPossibleBoundHistoryMember: false,
                name: "eventName" as Name<Bound>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [{
                    ...boundEventAnalysisFixture,
                    name: "eventName" as Name<Bound>,
                    jiNotationLevel: JiNotationLevel.ULTRA,
                }],
            }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isBestPossibleBoundHistoryMember).toBe(true)
        })

        it("when the bound event consolidation has not been identified as a member of the best possible bound history, and the best possible bound history does not contain this event at this JI notation level, the bound event consolidation remains not identified as a member of the best possible bound history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                isBestPossibleBoundHistoryMember: false,
                name: "eventName" as Name<Bound>,
                jiNotationLevel: JiNotationLevel.ULTRA,
            }
            bestPossibleBoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [{
                    ...boundEventAnalysisFixture,
                    name: "eventName" as Name<Bound>,
                    jiNotationLevel: JiNotationLevel.EXTREME,
                }],
            }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.isBestPossibleBoundHistoryMember).toBe(false)
        })
    })

    describe("rank of the best ranked bound history any event updated into this event consolidation was a member of          ", (): void => {
        it("when the history analysis's rank is less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it updates its rank of best ranked member history", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                rankOfBestRankedMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.rankOfBestRankedMemberHistory).toBe(RANKS[ BoundType.COMMA_MEAN ])
        })

        it("when the history analysis's rank is not less than the rank of the best ranked history this event consolidation has so far been updated with an event from, it keeps its rank of best ranked member history the same", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                rankOfBestRankedMemberHistory: RANKS[ BoundType.COMMA_MEAN ],
            }
            boundHistoryAnalysis = { ...boundHistoryAnalysisFixture, rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ] }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.rankOfBestRankedMemberHistory).toBe(RANKS[ BoundType.COMMA_MEAN ])
        })
    })

    describe("rank of the best ranked bound event updated into this event consolidation", (): void => {
        it("when the bound event analysis's rank is less than the rank of the best ranked bound event this event consolidation has so far been updated with, it updates its rank of best ranked bound event", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }
            boundEventAnalysis = { ...boundEventAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.rankOfBestRankedEventInAnyMemberHistory).toBe(RANKS[ BoundType.COMMA_MEAN ])
        })

        it("when the bound event analysis's rank is not less than the rank of the best ranked bound event this event consolidation has so far been updated with, it keeps its rank of best ranked bound event the same", (): void => {
            const boundEventConsolidation: BoundEventConsolidation = {
                ...boundEventConsolidationFixture,
                rankOfBestRankedEventInAnyMemberHistory: RANKS[ BoundType.INA_MIDPOINT ],
            }
            boundEventAnalysis = { ...boundEventAnalysisFixture, rank: RANKS[ BoundType.COMMA_MEAN ] }

            updateEventConsolidation(boundEventConsolidation, {
                boundHistoryAnalysis,
                boundEventAnalysis: boundEventAnalysis,
                nextBoundEventAnalysis,
                bestPossibleBoundHistoryAnalysis,
            })

            expect(boundEventConsolidation.rankOfBestRankedEventInAnyMemberHistory)
                .toBe(RANKS[ BoundType.INA_MIDPOINT ])
        })
    })
})
