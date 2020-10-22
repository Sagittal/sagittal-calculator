import {Name} from "../../../../../src/general"
import {BoundType, JiNotationBound, JiNotationLevel} from "../../../../../src/sagittal/notations"
import {isBoundClassEventContained} from "../../../../../src/scripts/jiNotationBoundClass/consolidateHistories/doEventsContainEvent"
import {BoundClassEventAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {boundClassEventAnalysisFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("isBoundClassEventContained", (): void => {
    it("returns true when the bound class events contain an event which has the same name and the same JI notation level            ", (): void => {
        const boundClassEventAnalyses: BoundClassEventAnalysis[] = [
            {
                ...boundClassEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundClassEvent = {
            ...boundClassEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevel,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundClassEventContained(boundClassEventAnalyses, targetBoundClassEvent)

        expect(actual).toBeTruthy()
    })

    it("returns false when the bound class events contain an event which has the same name but not the same JI notation level            ", (): void => {
        const boundClassEventAnalyses = [
            {
                ...boundClassEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundClassEvent = {
            ...boundClassEventAnalysisFixture,
            name: "someName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevel,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundClassEventContained(boundClassEventAnalyses, targetBoundClassEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain an event which has the same JI notation level but not the same name           ", (): void => {
        const boundClassEventAnalyses = [
            {
                ...boundClassEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundClassEvent = {
            ...boundClassEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "someLevel" as JiNotationLevel,
            rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
        }

        const actual = isBoundClassEventContained(boundClassEventAnalyses, targetBoundClassEvent)

        expect(actual).toBeFalsy()
    })

    it("returns false when the bound class events contain no events which have either the same name or the same JI notation level", (): void => {
        const boundClassEventAnalyses = [
            {
                ...boundClassEventAnalysisFixture,
                name: "someName" as Name<JiNotationBound>,
                jiNotationLevel: "someLevel" as JiNotationLevel,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const targetBoundClassEvent = {
            ...boundClassEventAnalysisFixture,
            name: "otherName" as Name<JiNotationBound>,
            jiNotationLevel: "otherLevel" as JiNotationLevel,
            rank: RANKS[BoundType.COMMA_MEAN],
        }

        const actual = isBoundClassEventContained(boundClassEventAnalyses, targetBoundClassEvent)

        expect(actual).toBeFalsy()
    })
})
