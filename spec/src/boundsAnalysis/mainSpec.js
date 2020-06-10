const cp = require("child_process")

describe("main", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds") // TODO: there should be a test mode or no output mode to prevent it from regenerating the svg when running the tests
    })

    it("runs in summary mode without error", () => {
        cp.execSync("npm run analyze-bounds 80")
    })
})
