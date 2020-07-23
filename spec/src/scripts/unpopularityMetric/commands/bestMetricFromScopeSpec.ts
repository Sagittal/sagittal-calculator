import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("best metric from scope", () => {
    it("runs without error", () => {
        const command = "npm run best-metric-from-scope -- --no-color"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            ``,
            `best metric: {"sumOfSquares":0.04896782502024761,"submetrics":[{"sum":true,"k":0.99,"a":2.01001,"aIsBase":true,"y":1.98,"w":-2.01501}]}`,
        ])
    })
})
