describe("one-off sumOfSquares", () => {
    it("gives you the unpopularity of a specific ratio given the combined adjustments set in the file", () => {
        const command = "node src/scripts/unpopularityMetric/oneOff/unpopularity"

        const result = runCommandAndGetConsoleOutput(command, {headerLinesCount: 0})

        expect(result).toEqual([
            `11/5`,
            `{"soapfar":{"weight":1,"k":0,"a":1.994,"aIsBaseNotPower":1,"w":-2.08,"y":0.455},"coapfar":{"weight":0.577}}`,
            `2.548492118345444`,
        ])
    })
})
