import { IO } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("find-commas", () => {
    it("finds commas, given the finding options", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -l 30 -u 30.5 -3 2 -# 3 -p 37 -+ 58 -a 3" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                    \tratio\tapotome slope     \tN2D3P9    ",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩\t58/57\t-2.853931731162352\t295.907407",
        ] as IO[]
        expect(actual).toEqual(expected)
    })

    it("can find commas with specific prime content (it includes inverses)", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1]" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                      \tratio            \tapotome slope      \tN2D3P9    ",
            "29/19k    \t29   \t48           \t6.649166770747564 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409413422308347\t295.907407",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.853931731162352 \t295.907407",
            "29/19M    \t29   \t48           \t53.569187540045434\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.701549959983657  \t295.907407",
            "19/29L    \t29   \t48           \t60.115818517666426\t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.701549959983653 \t295.907407",
        ] as IO[]
        expect(actual).toEqual(expected)
    })

    it("can sort the resulting list", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1] -s apotomeSlope" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents             \tmonzo                      \tratio            \tapotome slope      \tN2D3P9    ",
            "29/19k    \t29   \t48           \t6.649166770747564 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409413422308347\t295.907407",
            "19/29L    \t29   \t48           \t60.115818517666426\t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.701549959983653 \t295.907407",
            "29/19C    \t29   \t48           \t30.109177155396626\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.853931731162352 \t295.907407",
            "29/19M    \t29   \t48           \t53.569187540045434\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.701549959983657  \t295.907407",
        ] as IO[]
        expect(actual).toEqual(expected)
    })
})
