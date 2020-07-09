describe("best metric from configs", () => {
    xit("runs without error", () => {
        const command = "npm run best-metric-from-configs"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).not.toBeUndefined()

        // TODO: here you could write something that expects the values to mostly go up
    })
})
