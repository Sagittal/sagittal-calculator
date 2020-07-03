describe("one-off sumOfSquares", () => {
    it("gives you the sum of squares given the combined adjustments set in the file, and also logs the full list of unpopularities", () => {
        const command = "node src/scripts/unpopularityMetric/oneOff/sumOfSquares"

        const result = runCommandAndGetConsoleOutput(command, {headerLinesCount: 0})

        expect(result[0]).toBe("[ { index: 0, antivotes: 0, fiveRoughRatio: [ 1, 1 ], rank: 1 },")
        expect(result[result.length - 1]).toBe(`{"sumOfSquares":0.012420585660978966,"soapfar":{"weight":1,"w":-1}}`)
    })
})
