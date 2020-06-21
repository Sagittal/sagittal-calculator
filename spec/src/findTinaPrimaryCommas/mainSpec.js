const cp = require("child_process")

describe("findTinaPrimaryCommas/main", () => {
    it("runs without error", () => {
        cp.execSync("npm run tina-commas 45 45.01")
    })

    xit("can find commas with specific prime content", () => {
        // TODO: per https://docs.google.com/spreadsheets/d/1fUXdga6ID1Myt6LfFBBYTjNsh7XC-lEV8SsLuS_nyJU/edit#gid=1736127328, should be able to find commas within a certain range, yes, but also for specific prime content
    })
})
