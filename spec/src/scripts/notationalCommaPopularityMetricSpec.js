describe("notationalCommaPopularityMetric", () => {
    it("works", () => {
        const command = "npm run ncpm"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "",
        ])
    })
})
