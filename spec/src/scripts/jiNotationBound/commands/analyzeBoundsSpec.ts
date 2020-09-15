import { Filename, Io } from "../../../../../src/general"
import { readLines } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-ji-notation-bounds", (): void => {
    it("returns the same output for both the terminal and the image as the snapshot", (): void => {
        onlyRunInCi()

        const actual = runCommandAndGetConsoleOutput("npm run analyze-ji-notation-bounds" as Io)

        const expected = readLines("src/scripts/jiNotationBound/results/boundsTerminalAndImage.txt" as Filename)
        expected.pop()
        expect(actual).toEqual(expected)
    })
})