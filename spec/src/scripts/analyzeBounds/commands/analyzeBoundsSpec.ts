import * as fs from "fs"
import { IO } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-bounds", () => {
    fit("runs without error", () => {
        // onlyRunInCi()

        const actual = runCommandAndGetConsoleOutput("npm run analyze-bounds -- --no-color --no-write" as IO)

        const expected = fs.readFileSync(
            "src/scripts/analyzeBounds/results/boundsTerminal.txt",
            { encoding: "utf8" },
        ).split("\n") as IO[]
        expected.pop()
        expect(actual).toEqual(expected)
    })
})
