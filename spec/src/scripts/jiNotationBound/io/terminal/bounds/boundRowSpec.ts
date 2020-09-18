import { Cents, Id, Multiplier, Row, Sum } from "../../../../../../../src/general"
import { Ina, JiNotationBound, JiNotationLevel, Tina } from "../../../../../../../src/sagittal"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { EventType } from "../../../../../../../src/scripts/jiNotationBound/histories"
import { computeJiNotationBoundRow } from "../../../../../../../src/scripts/jiNotationBound/io/terminal/bounds/boundRow"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"
import {
    eventAnalysisFixture,
    historyAnalysisFixture,
    jiNotationBoundAnalysisFixture,
    jiNotationBoundFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("computeJiNotationBoundRow", (): void => {
    it("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible history, the error in tinas, and the ranks at each JI notation level of the best possible history, separated by tabs in a single line, and makes it the correct color", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            cents: 5.447635 as Cents,
            id: 10 as Id<JiNotationBound>,
        }
        const jiNotationBoundAnalysis: JiNotationBoundAnalysis = {
            ...jiNotationBoundAnalysisFixture,
            bestPossibleHistory: {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.ULTRA,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                        distance: 0.000 as Cents,
                        inaDistance: 0.000 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.EXTREME,
                        rank: RANKS[ EventType.INA_MIDPOINT ],
                        distance: 0.333 as Cents,
                        inaDistance: 0.682 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        jiNotationLevel: JiNotationLevel.INSANE,
                        rank: RANKS[ EventType.COMMA_MEAN ],
                        distance: 0.022 as Cents,
                        inaDistance: 0.157 as Multiplier<Ina>,
                    },
                ],
            },
            bestRank: RANKS[ EventType.COMMA_MEAN ],
            initialPosition: 5.48533 as Cents,
            initialPositionTinaDistance: 0.0393 as Multiplier<Tina>,
            bestPossibleHistoryTotalDistance: 0.355 as Cents,
            bestPossibleHistoryTotalInaDistance: 0.839 as Sum<Multiplier<Ina>>,
        }

        const actual = computeJiNotationBoundRow(jiNotationBoundAnalysis, { jiNotationBound })

        const expected = [
            " 10    ",
            " 10",
            " 11",
            "   ," +
            "," +
            "|( ",
            "    ," +
            "|( ",
            " ",
            " ",
            "  1    ",
            "  1    ",
            "  2    ",
            "",
            "",
            "  0.333",
            "  0.022",
            "  0.355",
            "",
            "",
            "  0.682",
            "  0.157",
            "  0.839",
            "  5.448",
            "  5.485",
            "  0.039",
        ] as Row<{ of: JiNotationBoundAnalysis }>
        expect(actual).toEqual(expected)
    })
})
