describe("one-off antivotes", () => {
    it("gives you the antivotes of a specific ratio for the submetric combination set in the file", () => {
        const command = "node src/scripts/unpopularityMetric/oneOff/antivotes"

        const result = runCommandAndGetConsoleOutput(command, {headerLinesCount: 0})

        expect(result).toEqual([
            `soapfar: 1.3944921183454442`,
            `coapfar: 1.154`,
            `11/7`,
            `[{"k":0,"a":1.994,"aIsBaseOrExponent":-1,"y":0.455,"w":-2.08},{"submetricType":"coapfar","weight":0.577}]`,
            `2.548492118345444`,
        ])
    })
})
