import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("solve best metric", () => {
    it("runs without error", () => {
        const command = "npm run solve-best-metric -- -l 1 -u 1"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).not.toBeUndefined()
    })
})
