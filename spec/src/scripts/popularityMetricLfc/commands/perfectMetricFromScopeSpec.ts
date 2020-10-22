import {Io} from "../../../../../src/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runCommandAndGetConsoleOutput} from "../../../../helpers/src/scripts/runCommand"

describe("perfect-metric-from-scope", (): void => {
    const expected = [
        ``,
        `best metric: {"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}":{"sumOfSquares":0.04896782502024761,"submetrics":[{"sum":true,"kAsCoefficient":0.99,"aAsLogarithmBase":2.01001,"y":1.98,"w":-2.01501}],"name":"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}"}}`,
    ] as Io[]

    it("recursively finds the abs perfect metric within the given scope", (): void => {
        onlyRunInCi()

        const command = "npm run perfect-metric-from-scope" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("works in sync mode", (): void => {
        onlyRunInCi()

        const command = "npm run perfect-metric-from-scope -- --sync" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })
})
