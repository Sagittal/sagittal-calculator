import * as fs from "fs"
import { Io } from "../../../../../src/general"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-ji-notation-bounds", (): void => {
    it("returns the same output for both the terminal and the image as the snapshot", (): void => {
        onlyRunInCi()

        const actual = runCommandAndGetConsoleOutput("npm run analyze-ji-notation-bounds" as Io)

        const expected = fs.readFileSync(
            "src/scripts/jiNotationBound/results/boundsTerminalAndImage.txt",
            { encoding: "utf8" },
        ).split("\n") as Io[]
        expected.pop()
        expect(actual).toEqual(expected)
    })
})
