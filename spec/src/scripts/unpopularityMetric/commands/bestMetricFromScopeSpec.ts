import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("best metric from scope", () => {
    it("recursively finds the absolute perfect metric within the given scope", () => {
        const command = "npm run best-metric-from-scope -- --no-color --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            ``,
            `best metric: {"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}":{"sumOfSquares":0.04896782502024761,"submetrics":[{"sum":true,"kAsCoefficient":0.99,"aAsLogarithmBase":2.01001,"y":1.98,"w":-2.01501}]}}`,
        ])
    })
})
