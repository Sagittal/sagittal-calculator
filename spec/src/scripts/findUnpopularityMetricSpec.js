describe("unpopularityMetric", () => {
    xit("runs without error", () => {
        const command = "npm run find-unpopularity-metric"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).not.toBeUndefined()

        // TODO: here you could write something that expects the values to mostly go up
    })
})
