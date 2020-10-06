import {
    Abs,
    Cents,
    computePitchFromDecimal,
    Decimal,
    Id,
    Multiplier,
    Row,
    Sum,
} from "../../../../../../../src/general"
import { BoundType, Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../../../src/sagittal"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { computeJiNotationBoundRow } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds/boundRow"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
    jiNotationBoundAnalysisFixture,
    jiNotationBoundFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationBoundRow", (): void => {
    it("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible bound history, the error in tinas, and the ranks at each JI notation level of the best possible bound history, separated by tabs in a single line, and makes it the correct color", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            pitch: computePitchFromDecimal(1.00315163335 as Decimal<{ rational: false }>),  // 5.447635¢
            id: 10 as Id<JiNotationBound>,
        }
        const jiNotationBoundAnalysis: JiNotationBoundAnalysis = {
            ...jiNotationBoundAnalysisFixture,
            bestPossibleBoundHistoryAnalysis: {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                        distance: 0.000 as Abs<Cents>,
                        inaDistance: 0.000 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        rank: RANKS[ BoundType.INA_MIDPOINT ],
                        distance: 0.333 as Abs<Cents>,
                        inaDistance: 0.682 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.INSANE,
                        rank: RANKS[ BoundType.COMMA_MEAN ],
                        distance: 0.022 as Abs<Cents>,
                        inaDistance: 0.157 as Multiplier<Ina>,
                    },
                ],
            },
            bestRank: RANKS[ BoundType.COMMA_MEAN ],
            initialPosition: 5.48533 as Cents,
            initialPositionTinaDistance: 0.0393 as Multiplier<Tina>,
            bestPossibleBoundHistoryTotalDistance: 0.355 as Cents,
            bestPossibleBoundHistoryTotalInaDistance: 0.839 as Sum<Multiplier<Ina>>,
        }

        const actual = computeJiNotationBoundRow(jiNotationBoundAnalysis, { jiNotationBound })

        const expected = [
            " 10    ",          // Bound ID
            " 10",              // Lesser bounded mina name
            " 11",              // Greater bounded mina name
            "   ,,|( ",         // Extreme lesser bounded symbol class
            "    ,|( ",         // Extreme greater bounded symbol class
            " ",                // Medium rank
            " ",                // High rank
            "  1    ",          // Ultra rank
            "  1    ",          // Extreme rank
            "  2    ",          // Best rank
            "",                 // Best possible bound history Medium distance
            "",                 // Best possible bound history High distance
            "  0.333",          // Best possible bound history Ultra distance
            "  0.022",          // Best possible bound history Extreme distance
            "  0.355",          // Best possible bound history total distance
            "",                 // Best possible bound history Medium ina distance  (medina)
            "",                 // Best possible bound history High ina distance    (highina)
            "  0.682",          // Best possible bound history Ultra ina distance   (ultrina)
            "  0.157",          // Best possible bound history Extreme ina distance (mina)
            "  0.839",          // Best possible bound history total ina distance
            "  5.448",          // Cents
            "  5.485",          // Initial position
            "  0.039",          // Initial position tina distance
        ] as Row<{ of: JiNotationBoundAnalysis }>
        expect(actual).toEqual(expected)
    })
})
