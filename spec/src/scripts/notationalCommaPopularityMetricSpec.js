describe("notationalCommaPopularityMetric", () => {
    xit("works", () => {
        const command = "npm run ncpm"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "",
        ])

        /*
        const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
        const adjustments = {k: 0.368, a: 0.264, s: 0.171, u: 0.127, usePrimeIndex: false}
        log(COMMA_POPULARITIES.slice(0, 80).map(commaPopularity => {
            return `${presentRatio(commaPopularity.ratio)} ${computeFiveRoughCommaUnpopularity(commaPopularity.ratio, adjustments)}`
        }))

        TODO: here you could write something that expects the values to mostly go up
         */
    })
})
