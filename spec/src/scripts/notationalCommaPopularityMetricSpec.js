describe("notationalCommaPopularityMetric", () => {
    xit("works", () => {
        const command = "npm run ncpm"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "",
        ])

        /*
        const {COMMA_POPULARITIES} = require("./notationalCommaPopularityMetric/popularities")
const parameters = {k: 0.368, a: 0.264, s: 0.171, u: 0.127, j: 1, b: 1, i: false, h: false}
log(COMMA_POPULARITIES.slice(0, 80).map(commaPopularity => {
    return `${presentRatio(commaPopularity.ratio)} ${ourCandidateMetric(commaPopularity.ratio, parameters)}`
}))

todo: here you could write something that says that the values mostly go up
         */
    })
})
