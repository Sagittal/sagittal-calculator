describe("appraiseMonzo/main", () => {
    it("runs without error", () => {
        const command = "npm run appraise-monzo [3,-7,2,0,1]"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name:   \t275k",
            "limit:        \t11",
            "SoPF>3:       \t21",
            "cents:        \t10.26036403671435",
            "ratio:        \t2200/2187",
            "apotome slope:\t-7.631767994281849",
        ])
    })
})
