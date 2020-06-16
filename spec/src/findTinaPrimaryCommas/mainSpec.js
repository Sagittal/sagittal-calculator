const cp = require("child_process")

describe("main", () => {
    xit("runs without error", () => {
        cp.execSync("npm run tina-commas 45 45.01")
    })
})
