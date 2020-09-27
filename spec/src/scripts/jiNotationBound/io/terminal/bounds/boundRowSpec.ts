import { Abs, Cents, Decimal, Id, Multiplier, Row, Sum } from "../../../../../../../src/general"
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
            decimal: 1.00315163335 as Decimal,  // 5.447635¢
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
            " 10    ",          // bound ID
            " 10",              // lesser bounded mina name
            " 11",              // greater bounded mina name
            "   ,,|( ",         // Extreme lesser bounded symbol class
            "    ,|( ",         // Extreme greater bounded symbol class
            " ",                // Medium rank
            " ",                // High rank
            "  1    ",          // Ultra rank
            "  1    ",          // Extreme rank
            "  2    ",          // best rank
            "",                 // best possible bound history Medium distance
            "",                 // best possible bound history High distance
            "  0.333",          // best possible bound history Ultra distance
            "  0.022",          // best possible bound history Extreme distance
            "  0.355",          // best possible bound history total distance
            "",                 // best possible bound history Medium ina distance  (medina)
            "",                 // best possible bound history High ina distance    (highina)
            "  0.682",          // best possible bound history Ultra ina distance   (ultrina)
            "  0.157",          // best possible bound history Extreme ina distance (mina)
            "  0.839",          // best possible bound history total ina distance
            "  5.448",          // cents
            "  5.485",          // initial position
            "  0.039",          // initial position tina distance
        ] as Row<{ of: JiNotationBoundAnalysis }>
        expect(actual).toEqual(expected)
    })
})
