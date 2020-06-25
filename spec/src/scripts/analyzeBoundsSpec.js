const cp = require("child_process")

describe("analyzeBounds", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files")
    })

    it("runs in details mode without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files --details 80")
    })

    it("can receive the argument without a flag", () => {
        cp.execSync("npm run analyze-bounds 80")
    })
})
