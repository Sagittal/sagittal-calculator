import {Io} from "@sagittal/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("perfect-metric-from-scope", (): void => {
    const expected = [
        ``,
        `best metric: {"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}":{"sumOfSquares":0.04896782502024761,"submetrics":[{"sum":true,"kAsCoefficient":0.99,"aAsLogarithmBase":2.01001,"y":1.98,"w":-2.01501}],"name":"{},{aAsLogarithmBase,kAsCoefficient,sum,w,y}"}}`,
    ] as Io[]

    it("recursively finds the abs perfect metric within the given scope", (): void => {
        onlyRunInCi()

        const script = "npm run perfect-metric-from-scope" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })

    it("works in sync mode", (): void => {
        onlyRunInCi()

        const script = "npm run perfect-metric-from-scope -- --sync" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        expect(actual).toEqual(expected)
    })
})
