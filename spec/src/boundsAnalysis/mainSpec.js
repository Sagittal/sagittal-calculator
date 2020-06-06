describe("main", () => {
    it("runs without error", () => {
        let oldConsole = console
        console = {
            log: () => {
            },
        }
        require("../../../src/boundsAnalysis/main")
        console = oldConsole
    })
})
