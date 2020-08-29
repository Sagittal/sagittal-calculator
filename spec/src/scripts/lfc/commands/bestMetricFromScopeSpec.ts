import { IO } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("best-metric-from-scope", () => {
    it("recursively finds the absolute perfect metric within the given scope", () => {
        onlyRunInCi()

        const command = "npm run best-metric-from-scope" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            ``,
            `best metric: {"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}":{"sumOfSquares":0.04896782502024761,"submetrics":[{"sum":true,"kAsCoefficient":0.99,"aAsLogarithmBase":2.01001,"y":1.98,"w":-2.01501}],"name":"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}"}}`,
        ] as IO[]
        expect(actual).toEqual(expected)
    })
})
