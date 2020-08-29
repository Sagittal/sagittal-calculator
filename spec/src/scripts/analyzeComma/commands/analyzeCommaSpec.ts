import * as cp from "child_process"
import { IO } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-comma", () => {
    const expected = [
        "comma name:   \t275k",
        "limit:        \t11",
        "5-rough sopfr:\t21",
        "cents:        \t10.26036403671435",
        "monzo:        \t[ 3 -7 2 0 1 ⟩",
        "ratio:        \t2200/2187",
        "apotome slope:\t-7.631767994281849",
        "N2D3P9:       \t42.013889",
        "",
        "   --- notating symbols ---",
        "",
        "symbol\tname\tratio    \tmonzo         \tcents ",
        "`)|(  \t275k\t2200/2187\t[ 3 -7 2 0 1 ⟩\t10.260",
        "",
    ] as IO[]

    it("analyzes a comma, given it in monzo form", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma -- -m [3,-7,2,0,1] --no-color --no-write" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a ratio for you", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma -- -r 2200/2187 --no-color --no-write" as IO

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo nor ratio nor name", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma --no-color --no-write" as IO

        expect(
            () => cp.execSync(command, { stdio: [undefined, undefined, undefined] }),
        ).toThrowError(/Unable to determine monzo for comma/)
    })
})
