import { Name } from "../../../../../src/general"
import { BoundType, JiNotationLevel } from "../../../../../src/sagittal/notations/ji"
import { computeIsBoundEventContained } from "../../../../../src/scripts/jiNotationBound/consolidateHistories/doEventsContainEvent"
import { BoundPosition } from "../../../../../src/scripts/jiNotationBound/histories"
import { BoundEventAnalysis } from "../../../../../src/scripts/jiNotationBound/history"
import { RANKS } from "../../../../../src/scripts/jiNotationBound/ranks"
import { boundEventAnalysisFixture } from "../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeIsBoundEventContained", (): void => {
    it(
        "returns true when the bound events contain an event which has the same name and the same JI notation level",
        (): void => {
            const boundEventAnalyses: BoundEventAnalysis[] = [
                {
                    ...boundEventAnalysisFixture,
                    name: "someName" as Name<BoundPosition>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ BoundType.COMMA_MEAN ],
                },
            ]
            const targetBoundEvent = {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<BoundPosition>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeIsBoundEventContained(boundEventAnalyses, targetBoundEvent)

            expect(actual).toBeTruthy()
        },
    )

    it(
        "returns false when the bound events contain an event which has the same name but not the same JI notation level",
        (): void => {
            const boundEventAnalyses = [
                {
                    ...boundEventAnalysisFixture,
                    name: "someName" as Name<BoundPosition>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ BoundType.COMMA_MEAN ],
                },
            ]
            const targetBoundEvent = {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<BoundPosition>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeIsBoundEventContained(boundEventAnalyses, targetBoundEvent)

            expect(actual).toBeFalsy()
        },
    )

    it(
        "returns false when the bound events contain an event which has the same JI notation level but not the same name",
        (): void => {
            const boundEventAnalyses = [
                {
                    ...boundEventAnalysisFixture,
                    name: "someName" as Name<BoundPosition>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ BoundType.COMMA_MEAN ],
                },
            ]
            const targetBoundEvent = {
                ...boundEventAnalysisFixture,
                name: "otherName" as Name<BoundPosition>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
            }

            const actual = computeIsBoundEventContained(boundEventAnalyses, targetBoundEvent)

            expect(actual).toBeFalsy()
        },
    )

    it(
        "returns false when the bound events contain no events which have either the same name or the same JI notation level",
        (): void => {
            const boundEventAnalyses = [
                {
                    ...boundEventAnalysisFixture,
                    name: "someName" as Name<BoundPosition>,
                    jiNotationLevel: "someLevel" as JiNotationLevel,
                    rank: RANKS[ BoundType.COMMA_MEAN ],
                },
            ]
            const targetBoundEvent = {
                ...boundEventAnalysisFixture,
                name: "otherName" as Name<BoundPosition>,
                jiNotationLevel: "otherLevel" as JiNotationLevel,
                rank: RANKS[ BoundType.COMMA_MEAN ],
            }

            const actual = computeIsBoundEventContained(boundEventAnalyses, targetBoundEvent)

            expect(actual).toBeFalsy()
        },
    )
})
