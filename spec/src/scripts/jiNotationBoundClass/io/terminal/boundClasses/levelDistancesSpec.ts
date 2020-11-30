import {Abs, Cents, Formatted, Multiplier} from "../../../../../../../src/general"
import {Ina, JiNotationLevelId} from "../../../../../../../src/sagittal"
import {BoundHistoryAnalysis} from "../../../../../../../src/scripts/jiNotationBoundClass/history"
import {extractJiNotationLevelDistances} from "../../../../../../../src/scripts/jiNotationBoundClass/io/terminal/boundClasses/levelDistances"
import {
    boundEventAnalysisFixture,
    boundHistoryAnalysisFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBoundClass/fixtures"

describe("extractJiNotationLevelDistances", (): void => {
    it("returns an array of the distances of each event (from the previous bound class event)", (): void => {
        const boundHistoryAnalysis: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            boundEventAnalyses: [
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    distance: 0.000000 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    distance: 4.444444 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.ULTRA,
                    distance: 3.333333 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    distance: 2.222222 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    distance: 1.111111 as Abs<Cents>,
                },
            ],
        }

        const actual = extractJiNotationLevelDistances(boundHistoryAnalysis)

        const expected = [
            "  4.444",
            "  3.333",
            "  2.222",
            "  1.111",
        ] as Array<Formatted<Abs<Cents>>>
        expect(actual).toEqual(expected)
    })

    it("works when a JI notation level is skipped", (): void => {
        const boundHistoryAnalysis: BoundHistoryAnalysis = {
            ...boundHistoryAnalysisFixture,
            boundEventAnalyses: [
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.MEDIUM,
                    distance: 0.000000 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.HIGH,
                    distance: 4.444444 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.EXTREME,
                    distance: 2.222222 as Abs<Cents>,
                },
                {
                    ...boundEventAnalysisFixture,
                    jiNotationLevel: JiNotationLevelId.INSANE,
                    distance: 1.111111 as Abs<Cents>,
                },
            ],
        }

        const actual = extractJiNotationLevelDistances(boundHistoryAnalysis)

        const expected = [
            "  4.444",
            "  2.222",
            "",
            "  1.111",
        ] as Array<Formatted<Abs<Cents>>>
        expect(actual).toEqual(expected)
    })

    describe("ina distances", (): void => {
        it("returns an array of the ina-distances of each event (from the previous bound class event)", (): void => {
            const boundHistoryAnalysis: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        inaDistance: 0.000000 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        inaDistance: 4.444444 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.ULTRA,
                        inaDistance: 3.333333 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        inaDistance: 2.222222 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.INSANE,
                        inaDistance: 1.111111 as Multiplier<Ina>,
                    },
                ],
            }

            const actual = extractJiNotationLevelDistances(boundHistoryAnalysis, {ina: true})

            const expected = [
                "  4.444",
                "  3.333",
                "  2.222",
                "  1.111",
            ] as Array<Formatted<Multiplier<Ina>>>
            expect(actual).toEqual(expected)
        })

        it("works when a JI notation level is skipped", (): void => {
            const boundHistoryAnalysis: BoundHistoryAnalysis = {
                ...boundHistoryAnalysisFixture,
                boundEventAnalyses: [
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.MEDIUM,
                        inaDistance: 0.000000 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.HIGH,
                        inaDistance: 4.444444 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.EXTREME,
                        inaDistance: 2.222222 as Multiplier<Ina>,
                    },
                    {
                        ...boundEventAnalysisFixture,
                        jiNotationLevel: JiNotationLevelId.INSANE,
                        inaDistance: 1.111111 as Multiplier<Ina>,
                    },
                ],
            }

            const actual = extractJiNotationLevelDistances(boundHistoryAnalysis, {ina: true})

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
