import { runCommandAndGetConsoleOutput } from "../../../../helpers/specHelper"

describe("findCommas", () => {
    it("finds commas, given the finding options", () => {
        const command = "npm run find-commas -- -l 30 -u 30.5 -3 2 -# 3 -p 37 -+ 58 -a 3"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                    \tratio\tapotome slope     \tN2D3P9           ",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩\t58/57\t-2.853931731162352\t295.9074074074074",
        ])
    })

    it("can find commas with specific prime content (it includes inverses)", () => {
        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1]"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                      \tratio            \tapotome slope      \tN2D3P9           ",
            "29/19k    \t29   \t48           \t6.649166770747564 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409413422308347\t295.9074074074074",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.853931731162352 \t295.9074074074074",
            "29/19M    \t29   \t48           \t53.569187540045434\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.701549959983657  \t295.9074074074074",
            "19/29L    \t29   \t48           \t60.11581851766642 \t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.701549959983653 \t295.9074074074074",
        ])
    })

    it("can sort the resulting list", () => {
        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1] -s apotomeSlope"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                      \tratio            \tapotome slope      \tN2D3P9           ",
            "29/19k    \t29   \t48           \t6.649166770747564 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409413422308347\t295.9074074074074",
            "19/29L    \t29   \t48           \t60.11581851766642 \t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.701549959983653 \t295.9074074074074",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.853931731162352 \t295.9074074074074",
            "29/19M    \t29   \t48           \t53.569187540045434\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.701549959983657  \t295.9074074074074",
        ])
    })
})
