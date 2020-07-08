describe("one-off sum-of-squares", () => {
    it("gives you the sum-of-squares given the submetric combination in the file, and also logs the full list of unpopularities", () => {
        const command = "node src/scripts/unpopularityMetric/oneOff/sumOfSquares"

        const result = runCommandAndGetConsoleOutput(command, {headerLinesCount: 0})

        expect(result[0]).toBe(`{"index":0,"antivotes":0,"fiveRoughRatio":[1,1],"rank":1}`)
        expect(result[result.length - 2]).toBe(`0.004260809896143936`)
        expect(result[result.length - 1]).toBe(`[{"k":0.038,"a":1.994,"aIsBase":true,"y":0.455,"w":-2.08,"numeratorIsNuminator":false},{"submetricType":"coapfar","weight":0.577,"numeratorIsNuminator":false}]`)
    })
})
