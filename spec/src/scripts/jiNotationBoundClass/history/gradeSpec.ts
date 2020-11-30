import {BoundType, JiNotationLevelId} from "../../../../../src/sagittal"
import {BoundEventAnalysis} from "../../../../../src/scripts/jiNotationBoundClass/history"
import {computeGrade} from "../../../../../src/scripts/jiNotationBoundClass/history/grade"
import {RANKS} from "../../../../../src/scripts/jiNotationBoundClass/ranks"
import {boundEventAnalysisFixture} from "../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeGrade", (): void => {
    it("grades histories with worse ranks worse", (): void => {
        const expectedWorseGradeHistories: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            },
        ]
        const expectedBetterGradeHistories: BoundEventAnalysis[] = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]

        const expectedWorseResult = computeGrade(expectedWorseGradeHistories)
        const expectedBetterResult = computeGrade(expectedBetterGradeHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("if two histories have the same total ranks but one incurs a worse rank at an earlier JI notation level, it gets a lesser grade", (): void => {
        const expectedWorseGradeHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]
        const expectedBetterGradeHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            },
        ]

        const expectedWorseResult = computeGrade(expectedWorseGradeHistories)
        const expectedBetterResult = computeGrade(expectedBetterGradeHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })

    it("a bound class history with the lowest event rank must get the lesser grade, even in the most case leaning as much as possible in favor of otherwise", (): void => {
        const expectedWorseGradeHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.INA_MIDPOINT],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[BoundType.INA_MIDPOINT],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                rank: RANKS[BoundType.INA_MIDPOINT],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                rank: RANKS[BoundType.INA_MIDPOINT],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.INSANE,
                rank: RANKS[BoundType.SIZE_CATEGORY_BOUND],
            },
        ]
        const expectedBetterGradeHistories = [
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.MEDIUM,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.HIGH,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.ULTRA,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.EXTREME,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
            {
                ...boundEventAnalysisFixture,
                jiNotationLevel: JiNotationLevelId.INSANE,
                rank: RANKS[BoundType.COMMA_MEAN],
            },
        ]

        const expectedWorseResult = computeGrade(expectedWorseGradeHistories)
        const expectedBetterResult = computeGrade(expectedBetterGradeHistories)

        expect(expectedWorseResult).toBeGreaterThan(expectedBetterResult)
    })
})
