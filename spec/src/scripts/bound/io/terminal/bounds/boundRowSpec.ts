import { Cents, Id, Integer, Multiplier, Rank, Row, Sum } from "../../../../../../../src/general"
import { Bound, Ina, Level, Tina } from "../../../../../../../src/sagittal"
import { AnalyzedBound } from "../../../../../../../src/scripts/bound/analyzeBound"
import { AnalyzedEvent } from "../../../../../../../src/scripts/bound/analyzedHistory"
import { computeBoundRow } from "../../../../../../../src/scripts/bound/io/terminal/bounds/boundRow"
import {
    analyzedBoundFixture,
    analyzedEventFixture,
    analyzedHistoryFixture,
    boundFixture,
} from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("computeBoundRow", () => {
    it("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
        const bound: Bound = {
            ...boundFixture,
            cents: 5.44763529181809 as Cents,
            id: 10 as Id<Bound>,
        }
        const analyzedBound: AnalyzedBound = {
            ...analyzedBoundFixture,
            bestPossibleHistory: {
                ...analyzedHistoryFixture,
                events: [
                    {
                        ...analyzedEventFixture,
                        level: Level.ULTRA,
                        rank: 0 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.000 as Cents,
                        inaDistance: 0.000 as Multiplier<Ina>,
                    },
                    {
                        ...analyzedEventFixture,
                        level: Level.EXTREME,
                        rank: 0 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.333 as Cents,
                        inaDistance: 0.682 as Multiplier<Ina>,
                    },
                    {
                        ...analyzedEventFixture,
                        level: Level.INSANE,
                        rank: 1 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.022 as Cents,
                        inaDistance: 0.157 as Multiplier<Ina>,
                    },
                ],
            },
            bestRank: 1 as Rank<AnalyzedEvent, Integer>,
            initialPosition: 5.48533 as Cents,
            initialPositionTinaDistance: 0.0393 as Multiplier<Tina>,
            bestPossibleHistoryTotalDistance: 0.355 as Cents,
            bestPossibleHistoryTotalInaDistance: 0.839 as Sum<Multiplier<Ina>>,
        }

        const actual = computeBoundRow(analyzedBound, { bound })

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
        ] as Row<AnalyzedBound>
        expect(actual).toEqual(expected)
    })
})
