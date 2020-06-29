const {presentBoundAnalysis} = require("../../../../../src/scripts/analyzeBounds/present/boundAnalysis")

describe("presentBoundAnalysis", () => {
    let mode
    describe("when formatting a summarized version to be presented in a list with all the other bounds", () => {
        beforeEach(() => {
            mode = "SUMMARY"
        })

        it("returns a string of the bound id, identifying symbol, actual bound position, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
            const bound = {
                position: 5.44763529181809,
                id: 10,
            }
            const boundAnalysis = {
                bestPossibleHistory: {
                    events: [
                        {level: "ULTRA", rank: 0, distance: 0.000, inaDistance: 0.000},
                        {level: "EXTREME", rank: 0, distance: 0.333, inaDistance: 0.682},
                        {level: "INSANE", rank: 1, distance: 0.022, inaDistance: 0.157},
                    ],
                },
                bestRank: 1,
                initialPosition: 5.48533,
                initialPositionTinaDifference: 0.0393,
                bestPossibleHistoryDistance: 0.355,
                bestPossibleHistoryInaDistance: 0.839,
            }

            const result = presentBoundAnalysis(boundAnalysis, {bound, mode})

            expect(result).toEqual("10\t 10\t 11\t   ,,|( \t    ,|( \t \t \t0\t0\t1\t \t \t  0.333\t  0.022\t  0.355\t \t \t  0.682\t  0.157\t  0.839\t  5.448\t  5.485\t  0.039".cyan)
        })
    })

    describe("when formatting details for a specific bound", () => {
        beforeEach(() => {
            mode = "DETAILS"
        })

        it("returns a string which is a multi-line, properly indented rendition of the bound analysis object as well as identifying information for the bound", () => {
            const bound = {
                position: 5.44763529181809,
                id: 10,
            }
            const boundAnalysis = {
                bestRank: 2,
                minimumError: 0,
                totalHistories: 42,
                possibleHistories: 5,
            }

            const result = presentBoundAnalysis(boundAnalysis, {bound, mode})

            const expectedResult = [
                `{`,
                `    "extremeLevelLesserBoundedSymbol": ",,|(",`,
                `    "extremeLevelGreaterBoundedSymbol": ",|(",`,
                `    "position": 5.44763529181809,`,
                `    "boundedSymbols": {`,
                `        "id": 10,`,
                `        "EXTREME": [`,
                `            {`,
                `                "id": 10,`,
                `                "ascii": ",,|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "mina": 10,`,
                `                "primaryComma": {`,
                `                    "monzo": [`,
                `                        5,`,
                `                        -3,`,
                `                        0,`,
                `                        0,`,
                `                        1,`,
                `                        -1`,
                `                    ],`,
                `                    "position": 4.92527799928397`,
                `                },`,
                `                "elements": [`,
                `                    ",,|",`,
                `                    "|("`,
                `                ],`,
                `                "distance": 0.20389718131742995,`,
                `                "inaDistance": 0.4178919005628925`,
                `            },`,
                `            {`,
                `                "id": 11,`,
                `                "ascii": ",|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "mina": 11,`,
                `                "primaryComma": {`,
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
                `                    "position": 5.44763529181809`,
                `                },`,
                `                "elements": [`,
                `                    ",|",`,
                `                    "|("`,
                `                ],`,
                `                "distance": 0.31846011121669004,`,
                `                "inaDistance": 0.6526912254006542`,
                `            }`,
                `        ],`,
                `        "INSANE": [`,
                `            {`,
                `                "id": 10,`,
                `                "ascii": ",,|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "mina": 10,`,
                `                "primaryComma": {`,
                `                    "monzo": [`,
                `                        5,`,
                `                        -3,`,
                `                        0,`,
                `                        0,`,
                `                        1,`,
                `                        -1`,
                `                    ],`,
                `                    "position": 4.92527799928397`,
                `                },`,
                `                "elements": [`,
                `                    ",,|",`,
                `                    "|("`,
                `                ],`,
                `                "distance": 0.20389718131742995,`,
                `                "inaDistance": 1.450963723413648`,
                `            },`,
                `            {`,
                `                "id": 11,`,
                `                "ascii": ",|(",`,
                `                "unicode": "",`,
                `                "introducingLevel": "EXTREME",`,
                `                "mina": 11,`,
                `                "primaryComma": {`,
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
                `                    "position": 5.44763529181809`,
                `                },`,
                `                "elements": [`,
                `                    ",|",`,
                `                    "|("`,
                `                ],`,
                `                "distance": 0.31846011121669004,`,
                `                "inaDistance": 2.266211164588537`,
                `            }`,
                `        ]`,
                `    },`,
                `    "lesserBoundedMina": 10,`,
                `    "greaterBoundedMina": 11`,
                `}`,
                `{`,
                `    "bestRank": 2,`,
                `    "minimumError": 0,`,
                `    "totalHistories": 42,`,
                `    "possibleHistories": 5`,
                `}`,
            ].join("\n")

            expect(result).toEqual(expectedResult)
        })
    })
})
