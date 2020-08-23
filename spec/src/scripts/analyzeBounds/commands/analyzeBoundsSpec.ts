import * as cp from "child_process"

describe("analyze-bounds", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bounds -- --do-not-update-files")
    })
})
