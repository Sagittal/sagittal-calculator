import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("find-commas", () => {
    it("finds commas, given the finding options", () => {
        onlyRunInCi()

        const command = `                   \
        npm run find-commas --              \
         --min-cents 30                     \
         --max-cents 30.5                   \
         --max-absolute-three-exponent 2    \
         --max-five-rough-copfr 3           \
         --max-prime-limit 37               \
         --max-five-rough-sopfr 58          \
         --max-absolute-apotome-slope 3     \
         --no-color                         \
         --no-write                         \
        ` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "symbol\tname  \tratio\tmonzo                                      \tcents \tapotome slope\tlimit\t5-rough sopfr\tN2D3P9",
            "      \t29/19C\t58/57\t[   1  -1   0   0   0   0   0  -1   0   1 ⟩\t30.109\t-2.854       \t29   \t48           \t295.91",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can sort the resulting list", () => {
        onlyRunInCi()

        const command = "npm run find-commas -- --min-cents 50 --max-cents 50.31 --sort-by apotomeSlope" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "symbol  \tname   \tratio            \tmonzo                              \tcents \tapotome slope\tlimit\t5-rough sopfr\tN2D3P9",
            "        \t19/175M\t4864/4725        \t[   8  -3  -2  -1   0   0   0   1 ⟩\t50.195\t-6.091       \t19   \t36           \t292.48",
            "        \t35/17M \t35/34            \t[  -1   0   1   1   0   0  -1 ⟩    \t50.184\t-3.090       \t17   \t29           \t93.66 ",
            "  ,'/|) \t65M    \t34543665/33554432\t[ -25  12   1   0   0   1 ⟩        \t50.301\t8.903        \t13   \t18           \t23.47 ",
            "        \t1/3025M\t1594323/1548800  \t[  -9  13  -2   0  -2 ⟩            \t50.152\t9.912        \t11   \t32           \t231.08",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can set the format of the comma names", () => {
        onlyRunInCi()

        const command = `npm run find-commas -- --min-cents 50 --max-cents 50.31 --undirected --factored --unabbreviated` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "symbol  \tname                 \tratio            \tmonzo                              \tcents \tapotome slope\tlimit\t5-rough sopfr\tN2D3P9",
            "        \t5².11²-Medium-Diesis \t1594323/1548800  \t[  -9  13  -2   0  -2 ⟩            \t50.152\t9.912        \t11   \t32           \t231.08",
            "        \t17:5.7-Medium-Diesis \t35/34            \t[  -1   0   1   1   0   0  -1 ⟩    \t50.184\t-3.090       \t17   \t29           \t93.66 ",
            "        \t19:5².7-Medium-Diesis\t4864/4725        \t[   8  -3  -2  -1   0   0   0   1 ⟩\t50.195\t-6.091       \t19   \t36           \t292.48",
            "  ,'/|) \t5.13-Medium-Diesis   \t34543665/33554432\t[ -25  12   1   0   0   1 ⟩        \t50.301\t8.903        \t13   \t18           \t23.47 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
