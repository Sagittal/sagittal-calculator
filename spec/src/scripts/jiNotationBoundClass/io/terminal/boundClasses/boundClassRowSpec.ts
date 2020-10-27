import {Abs, Cents, computePitchFromCents, Index, Multiplier, Row, Sum} from "../../../../../../../src/general"
import {
    BoundClass,
    BoundClassId,
    BoundType,
    Ina,
    JiNotationBoundClass,
    JiNotationLevelId,
    Tina,
} from "../../../../../../../src/sagittal"
import {JiNotationBoundClassAnalysis} from "../../../../../../../src/scripts/jiNotationBoundClass/boundClass"
import {computeJiNotationBoundClassRow} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/boundClasses/boundClassRow"
import {RANKS} from "../../../../../../../src/scripts/jiNotationBoundClass/ranks"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    jiNotationBoundClassAnalysisFixture,
    jiNotationBoundClassFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("computeJiNotationBoundClassRow", (): void => {
    it("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible bound class history, the error in tinas, and the ranks at each JI notation level of the best possible bound class history, separated by tabs in a single line, and makes it the correct color", (): void => {
        const jiNotationBoundClass: JiNotationBoundClass = {
            ...jiNotationBoundClassFixture,
            pitch: computePitchFromCents(5.447635 as Cents),
        }
        const boundClassId = BoundClassId.MINA_10
        const boundClassIndex = 10 as Index<BoundClass>
        const jiNotationBoundClassAnalysis: JiNotationBoundClassAnalysis = {
            ...jiNotationBoundClassAnalysisFixture,
            bestPossibleBoundHistoryAnalysis: {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                        distance: 0.000 as Abs<Cents>,
                        inaDistance: 0.000 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        rank: RANKS[BoundType.INA_MIDPOINT],
                        distance: 0.333 as Abs<Cents>,
                        inaDistance: 0.682 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.INSANE,
                        rank: RANKS[BoundType.COMMA_MEAN],
                        distance: 0.022 as Abs<Cents>,
                        inaDistance: 0.157 as Multiplier<Ina>,
                    },
                ],
            },
            bestRank: RANKS[BoundType.COMMA_MEAN],
            initialPosition: computePitchFromCents(5.48533 as Cents),
            initialPositionTinaDistance: 0.0393 as Multiplier<Tina>,
            bestPossibleBoundHistoryTotalDistance: 0.355 as Sum<Abs<Cents>>,
            bestPossibleBoundHistoryTotalInaDistance: 0.839 as Sum<Multiplier<Ina>>,
        }

        const actual = computeJiNotationBoundClassRow(
            jiNotationBoundClassAnalysis,
            [boundClassId, jiNotationBoundClass],
            boundClassIndex,
        )

        const expected = [
            " 10    ",          // Bound class index
            " 10",              // Lesser bounded mina name
            " 11",              // Greater bounded mina name
            "   ,,|( ",         // Extreme lesser bounded comma class
            "    ,|( ",         // Extreme greater bounded comma class
            " ",                // Medium rank
            " ",                // High rank
            "  1    ",          // Ultra rank
            "  1    ",          // Extreme rank
            "  2    ",          // Best rank
            "",                 // Best possible bound class history Medium distance
            "",                 // Best possible bound class history High distance
            "  0.333",          // Best possible bound class history Ultra distance
            "  0.022",          // Best possible bound class history Extreme distance
            "  0.355",          // Best possible bound class history total distance
            "",                 // Best possible bound class history Medium ina distance  (medina)
            "",                 // Best possible bound class history High ina distance    (highina)
            "  0.682",          // Best possible bound class history Ultra ina distance   (ultrina)
            "  0.157",          // Best possible bound class history Extreme ina distance (mina)
            "  0.839",          // Best possible bound class history total ina distance
            "  5.448",          // Cents
            "  5.485",          // Initial position
            "  0.039",          // Initial position tina distance
        ] as Row<{of: JiNotationBoundClassAnalysis}>
        expect(actual).toEqual(expected)
    })
})
