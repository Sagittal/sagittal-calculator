import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("best metric from scope", () => {
    it("runs without error", () => {
        const command = "npm run best-metric-from-scope"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).not.toBeUndefined()

        // TODO: here you could write something that expects the values to mostly go up
    })
})
