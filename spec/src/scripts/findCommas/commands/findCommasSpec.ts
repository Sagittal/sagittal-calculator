import { IO } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("find-commas", () => {
    it("finds commas, given the finding options", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -l 30 -u 30.5 -3 2 -# 3 -p 37 -+ 58 -a 3 --no-color --no-write" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents \tmonzo                    \tratio\tapotome slope\tN2D3P9",
            "29/19C    \t29   \t48           \t30.109\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩\t58/57\t-2.854       \t295.91",
            "",
        ] as IO[]
        expect(actual).toEqual(expected)
    })

    it("can find commas with specific prime content (it includes inverses)", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1] --no-color --no-write" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents \tmonzo                      \tratio            \tapotome slope\tN2D3P9",
            "29/19k    \t29   \t48           \t6.649 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409      \t295.91",
            "29/19C    \t29   \t48           \t30.109\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.854       \t295.91",
            "29/19M    \t29   \t48           \t53.569\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.702        \t295.91",
            "19/29L    \t29   \t48           \t60.116\t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.702       \t295.91",
            "",
        ] as IO[]
        expect(actual).toEqual(expected)
    })

    it("can sort the resulting list", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- -f [0,0,0,0,0,-1,0,1] -s apotomeSlope --no-color --no-write" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "comma name\tlimit\t5-rough sopfr\tcents \tmonzo                      \tratio            \tapotome slope\tN2D3P9",
            "29/19k    \t29   \t48           \t6.649 \t[ 20 -13 0 0 0 0 0 -1 0 1 ⟩\t30408704/30292137\t-13.409      \t295.91",
            "19/29L    \t29   \t48           \t60.116\t[ 7 -4 0 0 0 0 0 1 0 -1 ⟩  \t2432/2349        \t-7.702       \t295.91",
            "29/19C    \t29   \t48           \t30.109\t[ 1 -1 0 0 0 0 0 -1 0 1 ⟩  \t58/57            \t-2.854       \t295.91",
            "29/19M    \t29   \t48           \t53.569\t[ -18 11 0 0 0 0 0 -1 0 1 ⟩\t5137263/4980736  \t7.702        \t295.91",
            "",
        ] as IO[]
        expect(actual).toEqual(expected)
    })
})
