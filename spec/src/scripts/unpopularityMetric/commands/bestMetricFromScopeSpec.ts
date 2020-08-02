import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("best metric from scope", () => {
    it("recursively finds the absolute perfect metric within the given scope", () => {
        const command = "npm run best-metric-from-scope -- --no-color --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            ``,
            `best metric: {"{aAsBase,kAsCoefficient,sum,w,y}":{"sumOfSquares":0.031658919704634324,"submetrics":[{"sum":true,"kAsCoefficient":0.9872839506172839,"aAsBase":2.0260593827160496,"y":1.9479012345679012,"w":-2.039084074074074}]}}`,
        ])
    })
})
