describe("unpopularityMetric", () => {
    it("runs without error", () => {
        const command = "npm run unpopularity-metric"

        const result = runCommandAndGetConsoleOutput(command)

        // expect(result).toEqual([
        //     "",
        // ])

        /*
        const {COMMA_POPULARITIES} = require("./unpopularityMetric/popularities")
        const adjustments = {k: 0.368, a: 0.264, s: 0.171, u: 0.127, usePrimeIndex: false}
        log(COMMA_POPULARITIES.slice(0, 80).map(commaPopularity => {
            return `${presentRatio(commaPopularity.ratio)} ${computeUnpopularity(commaPopularity.ratio, adjustments)}`
        }))

        TODO: here you could write something that expects the values to mostly go up
         */
    })
})
