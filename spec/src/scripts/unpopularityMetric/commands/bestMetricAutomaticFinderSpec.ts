import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("best metric automatic finder", () => {
    it("runs without error", () => {
        const command = "npm run best-metric-automatic-finder -- -l 1 -u 2"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).not.toBeUndefined()
    })
})
