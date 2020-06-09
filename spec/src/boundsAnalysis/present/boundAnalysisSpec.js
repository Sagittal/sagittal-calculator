const {presentBoundAnalysis} = require("../../../../src/boundsAnalysis/present/boundAnalysis")

describe("presentBoundAnalysis", () => {
    let mode
    describe("when formatting a summarized version to be presented in a list with all the other bounds", () => {
        beforeEach(() => {
            mode = "SUMMARY"
        })

        it("returns a string of the bound index, identifying symbol, actual bound position, whether it has a possible history, the error in tinas, and the ranks at each level of the best possible history, separated by tabs in a single line, and makes it the correct color", () => {
            const presentedBound = {
                extremeLevelLesserBoundedCommaSymbol: ",|(",
                extremeLevelGreaterBoundedCommaSymbol: "|(",
                position: 5.44763529181809,
                lesserBoundedMina: 1,
                greaterBoundedMina: 2,
            }
            const boundAnalysis = {
                bestPossibleHistory: {
                    events: [
                        {level: "EXTREME", rank: 1},
                        {level: "INSANE", rank: 2},
                    ],
                },
                bestRank: 2,
                initialPosition: 5.48533,
                initialPositionTinaDifference: 0.0393,
            }
            const boundIndex = 10

            const result = presentBoundAnalysis(boundAnalysis, presentedBound, {boundIndex, mode})

            expect(result).toEqual("10\t  1\t  2\t    ,|( \t     |( \t \t \t \t1\t2\t2\t  5.448\t  5.485\t  0.039".cyan)
        })
    })

    describe("when formatting details for a specific bound", () => {
        beforeEach(() => {
            mode = "DETAILS"
        })

        it("returns a string which is a multi-line, properly indented rendition of the analyzed and structured histories object", () => {
            const presentedBound = {
                extremeLevelLesserBoundedCommaSymbol: "|\\\\",
                position: 5.44763529181809,
            }
            const boundAnalysis = {
                bestRank: 2,
                minimumError: 0,
                totalHistories: 42,
                possibleHistories: 5,
            }
            const boundIndex = 10

            const result = presentBoundAnalysis(boundAnalysis, presentedBound, {boundIndex, mode})

            expect(result).toEqual([
                `{`,
                `    "extremeLevelLesserBoundedCommaSymbol": "|\\\\",`, // will actually display as |\\
                `    "position": 5.44763529181809`,
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
