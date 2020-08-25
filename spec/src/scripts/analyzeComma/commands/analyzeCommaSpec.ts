import * as cp from "child_process"
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
        "N2D3P9:       \t42.013888888888886",
    ]

    it("analyzes a comma, given it in monzo form", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma -- -m [3,-7,2,0,1]"

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a ratio for you", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma -- -r 2200/2187"

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo nor ratio nor name", () => {
        onlyRunInCi()

        const command = "npm run analyze-comma"

        expect(
            () => cp.execSync(command, { stdio: [null, null, null] }),
        ).toThrowError(/Unable to determine monzo for comma/)
    })

    // TODO: currently npm run analyze-comma "[ -40 22 1 1 ⟩" returns a negative comma
    //  -1.85¢ which it names as a "u" for unison
    //  I would prefer if it could be smart enough to invert it in this case
})
