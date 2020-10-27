import {Name} from "../../../../../src/general"
import {BoundType, JiNotationBound, JiNotationLevelId} from "../../../../../src/sagittal/notations"
import {isBoundEventContained} from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/doEventsContainEvent"
import {BoundEventAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {boundEventAnalysisFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("isBoundEventContained", (): void => {
    it("returns true when the bound class events contain an event which has the same name and the same JI notation level            ", (): void => {
        const boundEventAnalyses: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeTruthy()
    })

    it("returns false when the bound class events contain an event which has the same name but not the same JI notation level            ", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain an event which has the same JI notation level but not the same name           ", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain no events which have either the same name or the same JI notation level", (): void => {
        const boundEventAnalyses = [
            {
                ...boundEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevelId,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundEvent = {
            ...boundEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevelId,
            rank: RANKS[BoundType.COMMA_MEAN],
        }

        const actual = isBoundEventContained(boundEventAnalyses, targetBoundEvent)

        expect(actual).toBeFalsy()
    })
})
