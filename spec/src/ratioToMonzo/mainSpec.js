describe("monzoToRatio/main", () => {
    it("runs without error", () => {
        const command = "npm run ratio-to-monzo 8/9"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "[ 3, -2 ]",
        ])
    })
})
