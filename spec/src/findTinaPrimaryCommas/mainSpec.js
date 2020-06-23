describe("findTinaPrimaryCommas/main", () => {
    it("finds commas given search parameters", () => {
        const command = "npm run tina-commas -- -l 30 -u 30.5 -3 2 -c 3 -p 37 -s 58 -a 3"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name\tlimit\tSoPF>3\tcents\tratio\tapotome slope",
            "29/19C\t29\t48\t30.109177155396626\t[1 -1 0 0 0 0 0 -1 0 1⟩\t58/57\t-2.853931731162352",
        ])
    })

    it("can find commas with specific prime content (it includes inverses)", () => {
        const command = "npm run tina-commas -- -f [0,0,0,0,0,-1,0,1]"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name\tlimit\tSoPF>3\tcents\tratio\tapotome slope",
            "29/19k\t29\t48\t6.649166770747564\t[20 -13 0 0 0 0 0 -1 0 1⟩\t30408704/30292137\t-13.409413422308347",
            "29/19C\t29\t48\t30.109177155396626\t[1 -1 0 0 0 0 0 -1 0 1⟩\t58/57\t-2.853931731162352",
            "29/19M\t29\t48\t53.569187540045434\t[-18 11 0 0 0 0 0 -1 0 1⟩\t5137263/4980736\t7.701549959983657",
            "19/29L\t29\t48\t60.11581851766642\t[7 -4 0 0 0 0 0 1 0 -1⟩\t2432/2349\t-7.701549959983653",
        ])
    })
})
