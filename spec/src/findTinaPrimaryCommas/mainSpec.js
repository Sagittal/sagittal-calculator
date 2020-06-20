const cp = require("child_process")

describe("findTinaPrimaryCommas/main", () => {
    it("runs without error", () => {
        cp.execSync("npm run tina-commas 45 45.01")
    })
})
