const cp = require("child_process")

describe("analyzeBounds", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files")
    })
})
