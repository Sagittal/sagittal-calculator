import * as fs from "fs"
import { Io } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-bounds", () => {
    it("returns the same output for both the terminal and the image as the snapshot", () => {
        onlyRunInCi()

        const actual = runCommandAndGetConsoleOutput("npm run analyze-bounds" as Io)

        const expected = fs.readFileSync(
            "src/scripts/bound/results/boundsTerminalAndImage.txt",
            { encoding: "utf8" },
        ).split("\n") as Io[]
        expected.pop()
        expect(actual).toEqual(expected)
    })
})
