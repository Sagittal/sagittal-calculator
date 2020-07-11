import * as cp from "child_process"

describe("analyzeBound", () => {
    it("runs without error", () => {
        cp.execSync("npm run analyze-bound -- 80")
    })

    it("can receive the argument without a flag", () => {
        cp.execSync("npm run analyze-bound 80")
    })
})

export {}
