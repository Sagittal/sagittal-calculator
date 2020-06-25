const cp = require("child_process")

describe("analyzeComma", () => {
    it("analyzes a comma, given it in monzo form", () => {
        const command = "npm run analyze-comma -- -m [3,-7,2,0,1]"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name:   \t275k",
            "limit:        \t11",
            "SoPF>3:       \t21",
            "cents:        \t10.26036403671435",
            "monzo:        \t[ 3 -7 2 0 1 ⟩",
            "ratio:        \t2200/2187",
            "apotome slope:\t-7.631767994281849",
        ])
    })

    it("can appraise a ratio for you", () => {
        const command = "npm run analyze-comma -- -r 2200/2187"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name:   \t275k",
            "limit:        \t11",
            "SoPF>3:       \t21",
            "cents:        \t10.26036403671435",
            "monzo:        \t[ 3 -7 2 0 1 ⟩",
            "ratio:        \t2200/2187",
            "apotome slope:\t-7.631767994281849",
        ])
    })

    it("throws an error if you provide neither monzo nor ratio nor name", () => {
        const command = "npm run analyze-comma"

        expect(
            () => cp.execSync(command, {stdio: [this.stdin, this.stdout, this.stderr]})
        ).toThrowError(/Unable to determine monzo for comma/)
    })
})
