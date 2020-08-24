import { Cents, Id, Rank } from "../../../../../src/general"
import { Bound, Level } from "../../../../../src/notations/ji"
import { AnalysisMode, presentBound } from "../../../../../src/scripts/analyzeBounds/present"
import { AnalyzedBound, AnalyzedEvent } from "../../../../../src/scripts/analyzeBounds/types"
import { boundFixture } from "../../../../helpers/scripts/analyzeBounds/fixtures"

describe("presentBound", () => {
    let mode: AnalysisMode
    describe("when formatting a summarized version to be presented in a list with all the other bounds", () => {
        beforeEach(() => {
            mode = AnalysisMode.SUMMARY
        })

        it("returns a string of the bound id, identifying symbol, actual bound cents, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
            const bound: Bound = {
                ...boundFixture,
                cents: 5.44763529181809 as Cents,
                id: 10 as Id<Bound>,
            }
            const analyzedBound: AnalyzedBound = {
                bestPossibleHistory: {
                    events: [
                        { level: Level.ULTRA, rank: 0 as Rank<AnalyzedEvent>, distance: 0.000 as Cents, inaDistance: 0.000 },
                        { level: Level.EXTREME, rank: 0 as Rank<AnalyzedEvent>, distance: 0.333 as Cents, inaDistance: 0.682 },
                        { level: Level.INSANE, rank: 1 as Rank<AnalyzedEvent>, distance: 0.022 as Cents, inaDistance: 0.157 },
                    ],
                },
                bestRank: 1 as Rank<AnalyzedEvent>,
                initialPosition: 5.48533 as Cents,
                initialPositionTinaDifference: 0.0393,
                bestPossibleHistoryDistance: 0.355 as Cents,
                bestPossibleHistoryInaDistance: 0.839,
            } as AnalyzedBound

            const result = presentBound(analyzedBound, { bound, mode })

            expect(result).toEqual("10\t 10\t 11\t   ,,|( \t    ,|( \t \t \t0\t0\t1\t \t \t  0.333\t  0.022\t  0.355\t \t \t  0.682\t  0.157\t  0.839\t  5.448\t  5.485\t  0.039"[ "cyan" ])
        })
    })

    describe("when formatting details for a specific bound", () => {
        beforeEach(() => {
            mode = AnalysisMode.DETAILS
        })

        it("returns a string which is a multi-line, properly indented rendition of the bound analysis object as well as identifying information for the bound", () => {
            const bound = {
                ...boundFixture,
                cents: 5.44763529181809 as Cents,
                id: 10 as Id<Bound>,
            }
            const analyzedBound: AnalyzedBound = {
                bestRank: 2 as Rank<AnalyzedEvent>,
            } as AnalyzedBound

            const result = presentBound(analyzedBound, { bound, mode })

            const expectedResult = [
                `{`,
                `    "extremeLevelLesserBoundedSymbol": ",,|(",`,
                `    "extremeLevelGreaterBoundedSymbol": ",|(",`,
                `    "cents": 5.44763529181809,`,
                `    "boundedSymbols": {`,
                `        "id": 10,`,
                `        "EXTREME": [`,
                `            {`,
                `                "id": 10,`,
                `                "distance": 0.20389718131742995,`,
                `                "inaDistance": 0.4178919005628925,`,
                `                "ascii": ",,|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "lowestSymbolSet": "olympian",`,
                `                "mina": 10,`,
                `                "primaryComma": {`,
                `                    "apotomeSlope": -3.303,`,
                `                    "fiveRoughSopfr": 24,`,
                `                    "limit": 13,`,
                `                    "ratio": [`,
                `                        352,`,
                `                        351`,
                `                    ],`,
                `                    "monzo": [`,
                `                        5,`,
                `                        -3,`,
                `                        0,`,
                `                        0,`,
                `                        1,`,
                `                        -1`,
                `                    ],`,
                `                    "cents": 4.92527799928397,`,
                `                    "name": "11/13k",`,
                `                    "n2d3p9": 34.425925925925924`,
                `                },`,
                `                "elements": [`,
                `                    ",,|",`,
                `                    "|("`,
                `                ]`,
                `            },`,
                `            {`,
                `                "id": 11,`,
                `                "distance": 0.31846011121669004,`,
                `                "inaDistance": 0.6526912254006542,`,
                `                "ascii": ",|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "lowestSymbolSet": "olympian",`,
                `                "mina": 11,`,
                `                "primaryComma": {`,
                `                    "apotomeSlope": 5.665,`,
                `                    "fiveRoughSopfr": 42,`,
                `                    "limit": 31,`,
                `                    "ratio": [`,
                `                        22599,`,
                `                        22528`,
                `                    ],`,
                `                    "monzo": [`,
                `                        -11,`,
                `                        6,`,
                `                        0,`,
                `                        0,`,
                `                        -1,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        1`,
                `                    ],`,
                `                    "cents": 5.44763529181809,`,
                `                    "name": "31/11k",`,
                `                    "n2d3p9": 195.75925925925924`,
                `                },`,
                `                "elements": [`,
                `                    ",|",`,
                `                    "|("`,
                `                ]`,
                `            }`,
                `        ],`,
                `        "INSANE": [`,
                `            {`,
                `                "id": 10,`,
                `                "distance": 0.20389718131742995,`,
                `                "inaDistance": 1.450963723413648,`,
                `                "ascii": ",,|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "lowestSymbolSet": "olympian",`,
                `                "mina": 10,`,
                `                "primaryComma": {`,
                `                    "apotomeSlope": -3.303,`,
                `                    "fiveRoughSopfr": 24,`,
                `                    "limit": 13,`,
                `                    "ratio": [`,
                `                        352,`,
                `                        351`,
                `                    ],`,
                `                    "monzo": [`,
                `                        5,`,
                `                        -3,`,
                `                        0,`,
                `                        0,`,
                `                        1,`,
                `                        -1`,
                `                    ],`,
                `                    "cents": 4.92527799928397,`,
                `                    "name": "11/13k",`,
                `                    "n2d3p9": 34.425925925925924`,
                `                },`,
                `                "elements": [`,
                `                    ",,|",`,
                `                    "|("`,
                `                ]`,
                `            },`,
                `            {`,
                `                "id": 11,`,
                `                "distance": 0.31846011121669004,`,
                `                "inaDistance": 2.266211164588537,`,
                `                "ascii": ",|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "lowestSymbolSet": "olympian",`,
                `                "mina": 11,`,
                `                "primaryComma": {`,
                `                    "apotomeSlope": 5.665,`,
                `                    "fiveRoughSopfr": 42,`,
                `                    "limit": 31,`,
                `                    "ratio": [`,
                `                        22599,`,
                `                        22528`,
                `                    ],`,
                `                    "monzo": [`,
                `                        -11,`,
                `                        6,`,
                `                        0,`,
                `                        0,`,
                `                        -1,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        0,`,
                `                        1`,
                `                    ],`,
                `                    "cents": 5.44763529181809,`,
                `                    "name": "31/11k",`,
                `                    "n2d3p9": 195.75925925925924`,
                `                },`,
                `                "elements": [`,
                `                    ",|",`,
                `                    "|("`,
                `                ]`,
                `            }`,
                `        ]`,
                `    },`,
                `    "lesserBoundedMina": 10,`,
                `    "greaterBoundedMina": 11`,
                `}`,
                `{`,
                `    "bestRank": 2`,
                `}`,
            ].join("\n")

            expect(result).toEqual(expectedResult)
        })
    })
})
