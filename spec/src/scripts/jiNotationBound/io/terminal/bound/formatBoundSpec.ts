import { Id, NEWLINE, RealDecimal } from "../../../../../../../src/general"
import { BoundType, JiNotationBound } from "../../../../../../../src/sagittal/notations/ji"
import { JiNotationBoundAnalysis } from "../../../../../../../src/scripts/jiNotationBound/bound"
import { formatJiNotationBound } from "../../../../../../../src/scripts/jiNotationBound/io"
import { RANKS } from "../../../../../../../src/scripts/jiNotationBound/ranks"
import {
    jiNotationBoundAnalysisFixture,
    jiNotationBoundFixture,
} from "../../../../../../helpers/src/scripts/jiNotationBound/fixtures"

describe("formatJiNotationBound", (): void => {
    it("returns a string which is a multi-line, properly indented rendition of the JI notation bound analysis, as well as identifying information for the JI notation bound", (): void => {
        const jiNotationBound: JiNotationBound = {
            ...jiNotationBoundFixture,
            decimal: 1.00315163335 as RealDecimal,
            id: 10 as Id<JiNotationBound>,
        }
        const jiNotationBoundAnalysis: JiNotationBoundAnalysis = {
            ...jiNotationBoundAnalysisFixture,
            bestRank: RANKS[ BoundType.SIZE_CATEGORY_BOUND ],
        }

        const actual = formatJiNotationBound(jiNotationBoundAnalysis, { jiNotationBound })

        const expected = [
            `{`,
            `    "extremeLevelLesserBoundedSymbolClass": ",,|(",`,
            `    "extremeLevelGreaterBoundedSymbolClass": ",|(",`,
            `    "cents": 5.44763,`,
            `    "boundedSymbolClassAnalyses": {`,
            `        "id": 10,`,
            `        "extreme": [`,
            `            {`,
            `                "id": 10,`,
            `                "distance": 0.2039,`,
            `                "inaDistance": 0.41789,`,
            `                "elements": [`,
            `                    ",,|",`,
            `                    "|("`,
            `                ],`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "minaName": "10",`,
            `                "ascii": ",,|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 10,`,
            `                    "monzo": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.92528,`,
            `                    "decimal": 1.00285,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            1`,
            `                        ],`,
            `                        "name": "13/11₋₂₃",`,
            `                        "two3FreePrimeLimit": 13,`,
            `                        "two3FreeSopfr": 24,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 34.42593`,
            `                    },`,
            `                    "apotomeSlope": -3.30327,`,
            `                    "aas": 3.30327,`,
            `                    "ate": 3,`,
            `                    "name": "11/13k"`,
            `                }`,
            `            },`,
            `            {`,
            `                "id": 11,`,
            `                "distance": 0.31846,`,
            `                "inaDistance": 0.65269,`,
            `                "elements": [`,
            `                    ",|",`,
            `                    "|("`,
            `                ],`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "minaName": "11",`,
            `                "ascii": ",|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 11,`,
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
            `                    "quotient": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.44764,`,
            `                    "decimal": 1.00315,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ],`,
            `                        "name": "31/11₋₂₃",`,
            `                        "two3FreePrimeLimit": 31,`,
            `                        "two3FreeSopfr": 42,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 195.75926`,
            `                    },`,
            `                    "apotomeSlope": 5.66457,`,
            `                    "aas": 5.66457,`,
            `                    "ate": 6,`,
            `                    "name": "31/11k"`,
            `                }`,
            `            }`,
            `        ],`,
            `        "insane": [`,
            `            {`,
            `                "id": 10,`,
            `                "distance": 0.2039,`,
            `                "inaDistance": 1.45096,`,
            `                "elements": [`,
            `                    ",,|",`,
            `                    "|("`,
            `                ],`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "minaName": "10",`,
            `                "ascii": ",,|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 10,`,
            `                    "monzo": [`,
            `                        5,`,
            `                        -3,`,
            `                        0,`,
            `                        0,`,
            `                        1,`,
            `                        -1`,
            `                    ],`,
            `                    "quotient": [`,
            `                        352,`,
            `                        351`,
            `                    ],`,
            `                    "cents": 4.92528,`,
            `                    "decimal": 1.00285,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            1`,
            `                        ],`,
            `                        "name": "13/11₋₂₃",`,
            `                        "two3FreePrimeLimit": 13,`,
            `                        "two3FreeSopfr": 24,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 34.42593`,
            `                    },`,
            `                    "apotomeSlope": -3.30327,`,
            `                    "aas": 3.30327,`,
            `                    "ate": 3,`,
            `                    "name": "11/13k"`,
            `                }`,
            `            },`,
            `            {`,
            `                "id": 11,`,
            `                "distance": 0.31846,`,
            `                "inaDistance": 2.26621,`,
            `                "elements": [`,
            `                    ",|",`,
            `                    "|("`,
            `                ],`,
            `                "smallestSymbolSubset": "olympian",`,
            `                "minaName": "11",`,
            `                "ascii": ",|(",`,
            `                "unicode": "",`,
            `                "introducingJiNotationLevel": "extreme",`,
            `                "primaryCommaAnalysis": {`,
            `                    "id": 11,`,
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
            `                    "quotient": [`,
            `                        22599,`,
            `                        22528`,
            `                    ],`,
            `                    "cents": 5.44764,`,
            `                    "decimal": 1.00315,`,
            `                    "two3FreeClassAnalysis": {`,
            `                        "monzo": [`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            -1,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            0,`,
            `                            1`,
            `                        ],`,
            `                        "name": "31/11₋₂₃",`,
            `                        "two3FreePrimeLimit": 31,`,
            `                        "two3FreeSopfr": 42,`,
            `                        "two3FreeCopfr": 2,`,
            `                        "n2d3p9": 195.75926`,
            `                    },`,
            `                    "apotomeSlope": 5.66457,`,
            `                    "aas": 5.66457,`,
            `                    "ate": 6,`,
            `                    "name": "31/11k"`,
            `                }`,
            `            }`,
            `        ]`,
            `    },`,
            `    "lesserBoundedMinaName": "10",`,
            `    "greaterBoundedMinaName": "11"`,
            `}`,
            `{`,
            `    "bestPossibleBoundHistoryAnalysis": {`,
            `        "boundEventAnalyses": [],`,
            `        "cents": 0,`,
            `        "rank": 0,`,
            `        "score": 0,`,
            `        "totalDistance": 0,`,
            `        "exact": false,`,
            `        "totalInaDistance": 0,`,
            `        "possible": false,`,
            `        "tinaError": 0,`,
            `        "initialPositionTinaDistance": 0`,
            `    },`,
            `    "bestRank": 3,`,
            `    "initialPosition": 0,`,
            `    "initialPositionTinaDistance": 0,`,
            `    "bestPossibleBoundHistoryTotalDistance": 0,`,
            `    "bestPossibleBoundHistoryTotalInaDistance": 0,`,
            `    "boundHistoryConsolidation": {},`,
            `    "possibleBoundHistoryCount": 0`,
            `}`,
        ]

        expect(actual.split(NEWLINE)).toEqual(expected)
    })
})
