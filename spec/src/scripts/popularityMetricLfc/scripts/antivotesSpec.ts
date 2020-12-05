import {Io} from "@sagittal/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("antivotes", (): void => {
    it("gives you the antivotes of a specific 2,3-free class for the submetric combination set in the file              ", (): void => {
        onlyRunInCi()

        const script = "npm run antivotes" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            `{"sum":true,"kAsCoefficient":0.038,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true}: 1.422596030341406`,
            `{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}: 1.154`,
            `{11/7}₂,₃`,
            `[{"sum":true,"kAsCoefficient":0.038,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true},{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}]`,
            `2.57659603`,
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
