import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("popular-ratios", () => {
    it("gives you the list of the most popular ratios, according to N2D3P9", () => {
        const command = "npm run popular-ratios -- --no-color --no-write"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result[ 0 ]).toBe("count of results with N2D3P9 < 136: 131")
        expect(result[ 1 ]).toBe("[table]")
        expect(result[ 2 ]).toBe(`[tr][th]ratio[/th][th]N2D3P9[/th][th]symbol[/th][th]levels[/th][/tr]`)
        expect(result[ result.length - 1 ]).toBe(`[/table]`)
    })
})
