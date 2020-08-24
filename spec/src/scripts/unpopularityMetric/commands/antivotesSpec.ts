import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("antivotes", () => {
    it("gives you the antivotes of a specific ratio for the submetric combination set in the file", () => {
        onlyRunInCi()

        const command = "npm run antivotes -- --no-color --no-write"

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            `{"sum":true,"kAsCoefficient":0.038,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true}: 1.422596030341406`,
            `{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}: 1.154`,
            `11/7`,
            `[{"sum":true,"kAsCoefficient":0.038,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08,"useNuminator":true},{"count":true,"weightAsCoefficient":0.577,"useNuminator":true}]`,
            `2.57659603`,
        ]
        expect(actual).toEqual(expected)
    })
})
