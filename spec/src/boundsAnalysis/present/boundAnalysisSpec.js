const {presentBoundAnalysis} = require("../../../../src/boundsAnalysis/present/boundAnalysis")

describe("presentBoundAnalysis", () => {
    let mode
    describe("when formatting a summarized version to be presented in a list with all the other bounds", () => {
        beforeEach(() => {
            mode = "SUMMARY"
        })

        it("returns a string of the bound index, identifying symbol, actual bound position, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
            const bound = {
                position: 5.44763529181809,
            }
            const boundAnalysis = {
                bestPossibleHistory: {
                    events: [
                        {level: "EXTREME", rank: 0},
                        {level: "INSANE", rank: 1},
                    ],
                },
                bestRank: 1,
                initialPosition: 5.48533,
                initialPositionTinaDifference: 0.0393,
            }
            const boundIndex = 10

            const result = presentBoundAnalysis(boundAnalysis, {bound, boundIndex, mode})

            expect(result).toEqual("10\t 10\t 11\t   ,,|( \t    ,|( \t \t \t \t0\t1\t1\t  5.448\t  5.485\t  0.039".cyan)
        })
    })

    describe("when formatting details for a specific bound", () => {
        beforeEach(() => {
            mode = "DETAILS"
        })

        it("returns a string which is a multi-line, properly indented rendition of the bound analysis object as well as identifying information for the bound", () => {
            const bound = {
                position: 5.44763529181809,
            }
            const boundAnalysis = {
                bestRank: 2,
                minimumError: 0,
                totalHistories: 42,
                possibleHistories: 5,
            }
            const boundIndex = 10

            const result = presentBoundAnalysis(boundAnalysis, {bound, boundIndex, mode})

            expect(result).toEqual([
                `{`,
                `    "extremeLevelLesserBoundedCommaSymbol": ",,|(",`,
                `    "extremeLevelGreaterBoundedCommaSymbol": ",|(",`,
                `    "position": 5.44763529181809,`,
                `    "boundedCommas": {`,
                `        "EXTREME": [`,
                `            {`,
                `                "introducingLevel": "EXTREME",`,
                `                "position": 4.92527799928397,`,
                `                "symbol": ",,|(",`,
                `                "unicode": "",`,
                `                "mina": 10,`,
                `                "distance": 0.20389718131742995`,
                `            },`,
                `            {`,
                `                "introducingLevel": "EXTREME",`,
                `                "position": 5.44763529181809,`,
                `                "symbol": ",|(",`,
                `                "unicode": "",`,
                `                "mina": 11,`,
                `                "distance": 0.31846011121669004`,
                `            }`,
                `        ],`,
                `        "INSANE": [`,
                `            {`,
                `                "introducingLevel": "EXTREME",`,
                `                "position": 4.92527799928397,`,
                `                "symbol": ",,|(",`,
                `                "unicode": "",`,
                `                "mina": 10,`,
                `                "distance": 0.20389718131742995`,
                `            },`,
                `            {`,
                `                "introducingLevel": "EXTREME",`,
                `                "position": 5.44763529181809,`,
                `                "symbol": ",|(",`,
                `                "unicode": "",`,
                `                "mina": 11,`,
                `                "distance": 0.31846011121669004`,
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
            ].join("\n"))
        })
    })
})
