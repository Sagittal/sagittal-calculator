const cp = require("child_process")

describe("analyzeBounds", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files")
    })

    it("runs in summary mode without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files --details 80")
    })
})
