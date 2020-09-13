import { Cents, Id, Integer, Multiplier, Rank, Row, Sum } from "../../../../../../../src/general"
import { Bound, Ina, Level, Tina } from "../../../../../../../src/sagittal"
import { BoundAnalysis } from "../../../../../../../src/scripts/bound/analyzeBound"
import { EventAnalysis } from "../../../../../../../src/scripts/bound/analyzeHistory"
import { computeBoundRow } from "../../../../../../../src/scripts/bound/io/terminal/bounds/boundRow"
import {
    boundAnalysisFixture,
    boundFixture,
    eventAnalysisFixture,
    historyAnalysisFixture,
} from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("computeBoundRow", (): void => {
    it("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", (): void => {
        const bound: Bound = {
            ...boundFixture,
            cents: 5.44763529181809 as Cents,
            id: 10 as Id<Bound>,
        }
        const boundAnalysis: BoundAnalysis = {
            ...boundAnalysisFixture,
            bestPossibleHistory: {
                ...historyAnalysisFixture,
                events: [
                    {
                        ...eventAnalysisFixture,
                        level: Level.ULTRA,
                        rank: 0 as Integer & Rank<EventAnalysis>,
                        distance: 0.000 as Cents,
                        inaDistance: 0.000 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        level: Level.EXTREME,
                        rank: 0 as Integer & Rank<EventAnalysis>,
                        distance: 0.333 as Cents,
                        inaDistance: 0.682 as Multiplier<Ina>,
                    },
                    {
                        ...eventAnalysisFixture,
                        level: Level.INSANE,
                        rank: 1 as Integer & Rank<EventAnalysis>,
                        distance: 0.022 as Cents,
                        inaDistance: 0.157 as Multiplier<Ina>,
                    },
                ],
            },
            bestRank: 1 as Integer & Rank<EventAnalysis>,
            initialPosition: 5.48533 as Cents,
            initialPositionTinaDistance: 0.0393 as Multiplier<Tina>,
            bestPossibleHistoryTotalDistance: 0.355 as Cents,
            bestPossibleHistoryTotalInaDistance: 0.839 as Sum<Multiplier<Ina>>,
        }

        const actual = computeBoundRow(boundAnalysis, { bound })

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
            "  0    ",
            "  0    ",
            "  1    ",
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
        ] as Row<{ of: BoundAnalysis }>
        expect(actual).toEqual(expected)
    })
})
