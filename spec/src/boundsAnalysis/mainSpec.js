describe("main", () => {
    it("runs without error", () => {
        const formerConsoleLog = console.log
        console.log = () => {}
        require("../../../src/boundsAnalysis/main")
        console.log = formerConsoleLog
    })
})
