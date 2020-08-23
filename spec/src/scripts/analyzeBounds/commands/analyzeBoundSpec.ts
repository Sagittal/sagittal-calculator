import * as cp from "child_process"

describe("analyze-bound", () => {
    it("can receive the argument without a flag", () => {
        cp.execSync("npm run analyze-bound 80")
    })
})

export {}
