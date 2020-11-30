import {Filename, Io, readLines} from "../../../../../src/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-notation-bound-classes", (): void => {
    it("returns the same output for both the terminal and the image as the snapshot", (): void => {
        onlyRunInCi()

        const actual = runScriptAndGetConsoleOutput("npm run analyze-ji-notation-bound-classes" as Io)

        const expected = readLines("src/scripts/jiNotationBoundClass/results/boundsTerminalAndImage.txt" as Filename)
        expect(actual).toEqualLines(expected)
    })
})
