const {formatAnalyzedAndStructuredHistories} = require("../../../../src/boundsAnalysis/analyzeHistories/formatAnalyzedAndStructuredHistories")

describe("formatAnalyzedAndStructuredHistories", () => {
    let summary
    describe("when formatting a summarized version to be presented in a list with all the other bounds", () => {
        beforeEach(() => {
            summary = true
        })

        it("returns a string of the datum index, identifying symbol, actual bound position, whether it has a possible history, the error in tinas, the number of histories, and the number of those histories which are possible. separated by tabs in a single line", () => {
            const analyzedAndStructuredHistories = {
                bound: {
                    extremeLevelLesserNeighborCommaSymbol: ",|(",
                    position: 5.447635291818090,
                },
                analysis: {
                    hasPossibleHistory: true,
                    minimumError: 0,
                    totalHistories: 42,
                    possibleHistories: 5,
                },
            }
            const datumIndex = 10

            const result = formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {datumIndex, summary})

            expect(result).toEqual("10\t,|(\t5.45\ttrue\t0.00\t42\t5")
        })
    })

    describe("when formatting details for a specific bound", () => {
        beforeEach(() => {
            summary = false
        })

        it("returns a string which is a multi-line, properly indented rendition of the analyzed and structured histories object", () => {
            const analyzedAndStructuredHistories = {
                bound: {
                    extremeLevelLesserNeighborCommaSymbol: "|\\\\",
                    position: 5.447635291818090,
                },
                analysis: {
                    hasPossibleHistory: true,
                    minimumError: 0,
                    totalHistories: 42,
                    possibleHistories: 5,
                },
            }
            const datumIndex = 10

            const result = formatAnalyzedAndStructuredHistories(analyzedAndStructuredHistories, {datumIndex, summary})

            expect(result).toEqual([
                `{`,
                `    "bound": {`,
                `        "extremeLevelLesserNeighborCommaSymbol": "|\\\\",`, // will actually display as |\\
                `        "position": 5.44763529181809`,
                `    },`,
                `    "analysis": {`,
                `        "hasPossibleHistory": true,`,
                `        "minimumError": 0,`,
                `        "totalHistories": 42,`,
                `        "possibleHistories": 5`,
                `    }`,
                `}`,
            ].join("\n"))
        })
    })
})
