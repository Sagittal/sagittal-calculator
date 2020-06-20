const cp = require("child_process")

describe("boundsAnalysis/main", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds --test")
    })

    it("runs in summary mode without error", () => {
        cp.execSync("npm run analyze-bounds 80")
    })
})
