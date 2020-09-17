// tslint:disable max-line-length

import * as cp from "child_process"
import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

xdescribe("analyze-ji-pitch", (): void => {
    const expected = [
        "   --- JI pitch ---",
        "",
        "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
        "        \t       \t2200/2187 \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      \t 11    \t 21           \t 42.014              ",
        "",
        "   --- exactly notating commas ---",
        "",
        "symbol  \tname  \tratio            \tmonzo                  \tcents  \tapotome slope",
        "   `)|( \t275k  \t2200/2187        \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      ",
        "        \t275S  \t66825/65536      \t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
        "        \t1/275M\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t 56.505\t-13.479      ",
        "",
    ] as Io[]

    it("analyzes a JI pitch, given it in monzo form (note that it includes inverses in the exactly notating commas list)", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- -m [3,-7,2,0,1]" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a JI pitch for you", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- -r 2200/2187" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- --comma-name 275k" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you, in a completely different format", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- --comma-name 5².11-kleisma" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo nor ratio nor name", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch" as Io

        expect((): void => {
            cp.execSync(command, { stdio: [undefined, undefined, undefined] })
        }).toThrowError(/Unable to determine monzo for JI pitch/)
    })

    it("can appraise a JI pitch which is just a simple integer", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- -i 275" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "   --- JI pitch ---",
            "",
            "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
            "        \t       \t275/1     \t[   0   0   2   0   1 ⟩\t9723.94\t-598.739     \t 11    \t 21           \t 42.014              ",
            "",
            "   --- exactly notating commas ---",
            "",
            "symbol  \tname  \tratio            \tmonzo                  \tcents  \tapotome slope",
            "   `)|( \t275k  \t2200/2187        \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      ",
            "        \t275S  \t66825/65536      \t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
            "        \t1/275M\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t 56.505\t-13.479      ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can format the names of the commas in the exactly notating commas table", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch [3,-7,2,0,1] -- --undirected --factored --unabbreviated" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "   --- JI pitch ---",
            "",
            "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
            "        \t       \t2200/2187 \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      \t 11    \t 21           \t 42.014              ",
            "",
            "   --- exactly notating commas ---",
            "",
            "symbol  \tname               \tratio            \tmonzo                  \tcents  \tapotome slope",
            "   `)|( \t5².11-kleisma      \t2200/2187        \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      ",
            "        \t5².11-Small-Diesis \t66825/65536      \t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
            "        \t5².11-Medium-Diesis\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t 56.505\t-13.479      ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("automatically adjusts the filters to include the JI pitch itself in the list of exactly notating commas", (): void => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch \"[  -34   19   0   0   1  -1   0   1 ⟩\"" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "   --- JI pitch ---",
            "",
            "        \t       \tratio                    \tmonzo                              \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
            "        \t       \t242912646603/223338299392\t[ -34  19   0   0   1  -1   0   1 ⟩\t145.448\t 10.044      \t 19    \t 43           \t477.991              ",
            "",
            "   --- exactly notating commas ---",
            "",
            "symbol  \tname   \tratio              \tmonzo                              \tcents  \tapotome slope",
            "        \t209/13k\t209/208            \t[  -4   0   0   0   1  -1   0   1 ⟩\t  8.303\t -0.511      ",
            "        \t209/13C\t111071169/109051904\t[ -23  12   0   0   1  -1   0   1 ⟩\t 31.763\t 10.044      ",
            "        \t13/209C\t6908733/6848512    \t[ -15  12   0   0  -1   1   0  -1 ⟩\t 15.157\t 11.067      ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
