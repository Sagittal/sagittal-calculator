import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("antivotes", () => {
    it("gives you the antivotes of a specific ratio for the submetric combination set in the file", () => {
        const command = "npm run antivotes -- --no-color --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            `{"sum":true,"kAsCoefficient":0,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08}: 1.3944921183454442`,
            `{"count":true,"weightAsCoefficient":0.577}: 1.154`,
            `11/7`,
            `[{"sum":true,"kAsCoefficient":0,"aAsLogarithmBase":1.994,"y":0.455,"w":-2.08},{"count":true,"weightAsCoefficient":0.577}]`,
            `2.548492118345444`,
        ])
    })
})
