import { Multiplier } from "../../../../../../../src/general"
import { Formatted } from "../../../../../../../src/general/io"
import { Cents } from "../../../../../../../src/general/music"
import { Ina, Level } from "../../../../../../../src/sagittal/notations/ji"
import { HistoryAnalysis } from "../../../../../../../src/scripts/bound/analyzeHistory"
import { extractLevelDistances } from "../../../../../../../src/scripts/bound/io/terminal/bounds/levelDistances"
import { eventAnalysisFixture, historyAnalysisFixture } from "../../../../../../helpers/src/scripts/bound/fixtures"

describe("extractLevelDistances", (): void => {
    it("returns an array of the distances of each event (from the previous event)", (): void => {
        const historyAnalysis: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                { ...eventAnalysisFixture, level: Level.MEDIUM, distance: 0.000000 as Cents },
                { ...eventAnalysisFixture, level: Level.HIGH, distance: 4.444444 as Cents },
                { ...eventAnalysisFixture, level: Level.ULTRA, distance: 3.333333 as Cents },
                { ...eventAnalysisFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...eventAnalysisFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractLevelDistances(historyAnalysis)

        const expected = [
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    it("works when a level is skipped", (): void => {
        const historyAnalysis: HistoryAnalysis = {
            ...historyAnalysisFixture,
            eventAnalyses: [
                { ...eventAnalysisFixture, level: Level.MEDIUM, distance: 0.000000 as Cents },
                { ...eventAnalysisFixture, level: Level.HIGH, distance: 4.444444 as Cents },
                { ...eventAnalysisFixture, level: Level.EXTREME, distance: 2.222222 as Cents },
                { ...eventAnalysisFixture, level: Level.INSANE, distance: 1.111111 as Cents },
            ],
        }

        const actual = extractLevelDistances(historyAnalysis)

        const expected = [
            "  4.444",
            "  2.222",
            "",
            "  1.111",
        ] as Array<Formatted<Cents>>
        expect(actual).toEqual(expected)
    })

    describe("ina distances", (): void => {
        it("returns an array of the ina-distances of each event (from the previous event)", (): void => {
            const historyAnalysis: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    { ...eventAnalysisFixture, level: Level.MEDIUM, inaDistance: 0.000000 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.HIGH, inaDistance: 4.444444 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.ULTRA, inaDistance: 3.333333 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.EXTREME, inaDistance: 2.222222 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.INSANE, inaDistance: 1.111111 as Multiplier<Ina> },
                ],
            }

            const actual = extractLevelDistances(historyAnalysis, { ina: true })

            const expected = [
                "  4.444",
                "  3.333",
                "  2.222",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })

        it("works when a level is skipped", (): void => {
            const historyAnalysis: HistoryAnalysis = {
                ...historyAnalysisFixture,
                eventAnalyses: [
                    { ...eventAnalysisFixture, level: Level.MEDIUM, inaDistance: 0.000000 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.HIGH, inaDistance: 4.444444 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.EXTREME, inaDistance: 2.222222 as Multiplier<Ina> },
                    { ...eventAnalysisFixture, level: Level.INSANE, inaDistance: 1.111111 as Multiplier<Ina> },
                ],
            }

            const actual = extractLevelDistances(historyAnalysis, { ina: true })

            const expected = [
                "  4.444",
                "  2.222",
                "",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })
    })
})
