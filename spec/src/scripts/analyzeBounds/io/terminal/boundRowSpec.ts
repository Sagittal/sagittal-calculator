import { Cents, Id, Integer, Rank, Row } from "../../../../../../src/general"
import { Bound, Level } from "../../../../../../src/sagittal"
import { computeBoundRow } from "../../../../../../src/scripts/analyzeBounds/io"
import { AnalyzedBound, AnalyzedEvent } from "../../../../../../src/scripts/analyzeBounds/types"
import { boundFixture } from "../../../../../helpers/src/scripts/analyzeBounds/fixtures"

describe("computeBoundRow", () => {
    fit("a summarized version to be formatted in a list with all the other bounds; returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
        const bound: Bound = {
            ...boundFixture,
            cents: 5.44763529181809 as Cents,
            id: 10 as Id<Bound>,
        }
        const analyzedBound: AnalyzedBound = {
            bestPossibleHistory: {
                events: [
                    {
                        level: Level.ULTRA,
                        rank: 0 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.000 as Cents,
                        inaDistance: 0.000,
                    },
                    {
                        level: Level.EXTREME,
                        rank: 0 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.333 as Cents,
                        inaDistance: 0.682,
                    },
                    {
                        level: Level.INSANE,
                        rank: 1 as Rank<AnalyzedEvent, Integer>,
                        distance: 0.022 as Cents,
                        inaDistance: 0.157,
                    },
                ],
            },
            bestRank: 1 as Rank<AnalyzedEvent, Integer>,
            initialPosition: 5.48533 as Cents,
            initialPositionTinaDifference: 0.0393,
            bestPossibleHistoryDistance: 0.355 as Cents,
            bestPossibleHistoryInaDistance: 0.839,
        } as AnalyzedBound

        const actual = computeBoundRow(analyzedBound, { bound })

        const expected = [
            "10",
            " 10",
            " 11",
            "   ," +
            "," +
            "|( ",
            "    ," +
            "|( ",
            " ",
            " ",
            "0",
            "0",
            "1",
            " ",
            " ",
            "  0.333",
            "  0.022",
            "  0.355",
            " ",
            " ",
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
