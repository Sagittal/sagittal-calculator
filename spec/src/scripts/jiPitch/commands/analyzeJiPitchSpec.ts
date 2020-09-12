// tslint:disable max-line-length

import * as cp from "child_process"
import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("analyze-ji-pitch", () => {
    const expected = [
        "cents range:                     \t0 - 56.84250302885596",
        "max absolute 3 exponent (ATE):   \t15",
        "max absolute apotome slope (AAS):\t14",
        "max N2D3P9:                      \t307",
        "",
        "   --- JI pitch ---",
        "",
        "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
        "        \t       \t2200/2187 \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      \t 11    \t 21           \t 42.014              ",
        "",
        "   --- notating commas ---",
        "",
        "symbol  \tname  \tratio            \tmonzo                  \tcents  \tapotome slope",
        "   `)|( \t275k  \t2200/2187        \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      ",
        "        \t275S  \t66825/65536      \t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
        "        \t1/275M\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t 56.505\t-13.479      ",
        "",
    ] as Io[]

    it("analyzes a JI pitch, given it in monzo form (note that it includes inverses in the notating commas list)", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- -m [3,-7,2,0,1]" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a JI pitch for you", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- -r 2200/2187" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- --comma-name 275k" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("can appraise a comma name for you, in a completely different format", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch -- --comma-name 5².11-kleisma" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        expect(actual).toEqual(expected)
    })

    it("throws an error if you provide neither monzo nor ratio nor name", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch" as Io

        expect(
            () => cp.execSync(command, { stdio: [undefined, undefined, undefined] }),
        ).toThrowError(/Unable to determine monzo for JI pitch/)
    })

    it("can filter the notating commas", () => {
        onlyRunInCi()

        // Note: because the absolute apotome slope is filtered to 3,
        // the comma itself does not appear in the list of notating commas
        // otherwise it would, as the 275k, `)|(
        const command = "npm run analyze-ji-pitch -- -m [3,-7,2,0,1] --max-cents 50 --max-absolute-apotome-slope 3" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "cents range:                     \t0 - 50",
            "max absolute 3 exponent (ATE):   \t15",
            "max absolute apotome slope (AAS):\t3",
            "max N2D3P9:                      \t307",
            "",
            "   --- JI pitch ---",
            "",
            "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
            "        \t       \t2200/2187 \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      \t 11    \t 21           \t 42.014              ",
            "",
            "   --- notating commas ---",
            "",
            "symbol  \tname\tratio      \tmonzo                  \tcents  \tapotome slope",
            "        \t275S\t66825/65536\t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can appraise a JI pitch which is just a simple integer", () => {
        onlyRunInCi()

        const command = "npm run analyze-ji-pitch 275" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "cents range:                     \t0 - 56.84250302885596",
            "max absolute 3 exponent (ATE):   \t15",
            "max absolute apotome slope (AAS):\t14",
            "max N2D3P9:                      \t307",
            "",
            "   --- JI pitch ---",
            "",
            "        \t       \tratio     \tmonzo                  \tcents  \tapotome slope\tlimit  \t2,3-free sopfr\t2,3-free class N2D3P9",
            "        \t       \t275/1     \t[   0   0   2   0   1 ⟩\t9723.94\t-598.739     \t 11    \t 21           \t 42.014              ",
            "",
            "   --- notating commas ---",
            "",
            "symbol  \tname  \tratio            \tmonzo                  \tcents  \tapotome slope",
            "   `)|( \t275k  \t2200/2187        \t[   3  -7   2   0   1 ⟩\t 10.260\t -7.632      ",
            "        \t275S  \t66825/65536      \t[ -16   5   2   0   1 ⟩\t 33.720\t  2.924      ",
            "        \t1/275M\t16777216/16238475\t[  24 -10  -2   0  -1 ⟩\t 56.505\t-13.479      ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
