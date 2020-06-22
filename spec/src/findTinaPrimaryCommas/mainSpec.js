describe("findTinaPrimaryCommas/main", () => {
    it("runs without error", () => {
        const command = "npm run tina-commas -- -l 30 -u 30.5 -3 2 -c 3 -p 37 -s 58 -a 3"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            'comma name\tlimit\tSoPF>3\tcents\tratio\tapotome slope',
            '29/19C\t29\t48\t30.109177155396626\t[1 -1 0 0 0 0 0 -1 0 1⟩\t58/57\t-2.853931731162352',
        ])
    })

    xit("can find commas with specific prime content", () => {
        // TODO: per https://docs.google.com/spreadsheets/d/1fUXdga6ID1Myt6LfFBBYTjNsh7XC-lEV8SsLuS_nyJU/edit#gid=1736127328, should be able to find commas within a certain range, yes, but also for specific prime content
    })
})
