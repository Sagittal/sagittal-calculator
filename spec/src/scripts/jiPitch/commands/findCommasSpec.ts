import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("find-commas", (): void => {
    it("finds commas, given the finding options", (): void => {
        onlyRunInCi()

        const command = `           \
        npm run find-commas --      \
         --lower-bound 30c          \
         --upper-bound 30.5c        \
         --max-ate 2                \
         --max-2-3-free-copfr 3     \
         --max-prime-limit 37       \
         --max-2-3-free-sopfr 58    \
         --max-aas 3                \
        ` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "",
            "lower bound:       \t        30.000¢",
            "upper bound:       \t        30.500¢",
            "max ATE:           \t  2    ",
            "max AAS:           \t  3.000",
            "max N2D3P9:        \t307.000",
            "max 2,3-free sopfr:\t 58    ",
            "max 2,3-free copfr:\t  3    ",
            "max prime limit:   \t 37    ",
            "",
            "      \t      \t     \t                                           \t               \t       \t       \t       \t2,3-free\t2,3-free\t2,3-free\t2,3-free\t2,3-free",
            "symbol\tcomma \t     \t                                           \t               \tapotome\t       \t       \tprime   \tclass   \tclass   \tclass   \tclass   ",
            "class \tname  \tratio\tmonzo                                      \tcents          \tslope  \tAAS    \tATE    \tlimit   \tname    \tCoPFR   \tSoPFR   \tN2D3P9  ",
            "      \t29/19C\t58/57\t[   1  -1   0   0   0   0   0  -1   0   1 ⟩\t        30.109¢\t -2.854\t  2.854\t  1    \t 29     \t29/19   \t  2     \t 48     \t295.907 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can sort the resulting list", (): void => {
        onlyRunInCi()

        const command = "npm run find-commas -- --lower-bound 50c --upper-bound 50.31c --sort-by apotomeSlope" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "",
            "lower bound:       \t        50.000¢",
            "upper bound:       \t        50.310¢",
            "max ATE:           \t 15    ",
            "max AAS:           \t 14.000",
            "max N2D3P9:        \t307.000",
            "max 2,3-free sopfr:\t 61    ",
            "max 2,3-free copfr:\t555    ",
            "max prime limit:   \t 47    ",
            "",
            "        \t       \t                 \t                                   \t               \t       \t       \t       \t2,3-free\t2,3-free\t2,3-free\t2,3-free\t2,3-free",
            "symbol  \tcomma  \t                 \t                                   \t               \tapotome\t       \t       \tprime   \tclass   \tclass   \tclass   \tclass   ",
            "class   \tname   \tratio            \tmonzo                              \tcents          \tslope  \tAAS    \tATE    \tlimit   \tname    \tCoPFR   \tSoPFR   \tN2D3P9  ",
            "        \t19/175M\t4864/4725        \t[   8  -3  -2  -1   0   0   0   1 ⟩\t        50.195¢\t -6.091\t  6.091\t  3    \t 19     \t175/19  \t  4     \t 36     \t292.477 ",
            "        \t35/17M \t35/34            \t[  -1   0   1   1   0   0  -1 ⟩    \t        50.184¢\t -3.090\t  3.090\t  0    \t 17     \t35/17   \t  3     \t 29     \t 93.657 ",
            "  ,'/|) \t65M    \t34543665/33554432\t[ -25  12   1   0   0   1 ⟩        \t        50.301¢\t  8.903\t  8.903\t 12    \t 13     \t65/1    \t  2     \t 18     \t 23.472 ",
            "        \t1/3025M\t1594323/1548800  \t[  -9  13  -2   0  -2 ⟩            \t        50.152¢\t  9.912\t  9.912\t 13    \t 11     \t3025/1  \t  4     \t 32     \t231.076 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can set the format of the comma names", (): void => {
        onlyRunInCi()

        const command = `npm run find-commas -- --lower-bound 50c --upper-bound 50.31c --undirected --factored --unabbreviated` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "",
            "lower bound:       \t        50.000¢",
            "upper bound:       \t        50.310¢",
            "max ATE:           \t 15    ",
            "max AAS:           \t 14.000",
            "max N2D3P9:        \t307.000",
            "max 2,3-free sopfr:\t 61    ",
            "max 2,3-free copfr:\t555    ",
            "max prime limit:   \t 47    ",
            "",
            "        \t                     \t                 \t                                   \t               \t       \t       \t       \t2,3-free\t2,3-free\t2,3-free\t2,3-free\t2,3-free",
            "symbol  \tcomma                \t                 \t                                   \t               \tapotome\t       \t       \tprime   \tclass   \tclass   \tclass   \tclass   ",
            "class   \tname                 \tratio            \tmonzo                              \tcents          \tslope  \tAAS    \tATE    \tlimit   \tname    \tCoPFR   \tSoPFR   \tN2D3P9  ",
            "  ,'/|) \t5.13-Medium-Diesis   \t34543665/33554432\t[ -25  12   1   0   0   1 ⟩        \t        50.301¢\t  8.903\t  8.903\t 12    \t 13     \t65/1    \t  2     \t 18     \t 23.472 ",
            "        \t17:5.7-Medium-Diesis \t35/34            \t[  -1   0   1   1   0   0  -1 ⟩    \t        50.184¢\t -3.090\t  3.090\t  0    \t 17     \t35/17   \t  3     \t 29     \t 93.657 ",
            "        \t5².11²-Medium-Diesis \t1594323/1548800  \t[  -9  13  -2   0  -2 ⟩            \t        50.152¢\t  9.912\t  9.912\t 13    \t 11     \t3025/1  \t  4     \t 32     \t231.076 ",
            "        \t19:5².7-Medium-Diesis\t4864/4725        \t[   8  -3  -2  -1   0   0   0   1 ⟩\t        50.195¢\t -6.091\t  6.091\t  3    \t 19     \t175/19  \t  4     \t 36     \t292.477 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can exclude fields from the results", (): void => {
        onlyRunInCi()

        const command = `           \
        npm run find-commas --      \
         --lower-bound 30c          \
         --upper-bound 30.5c        \
         --max-ate 2                \
         --max-2-3-free-copfr 3     \
         --max-prime-limit 37       \
         --max-2-3-free-sopfr 58    \
         --max-aas 3                \
         --excluded-fields aas,ate  \
        ` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "",
            "lower bound:       \t        30.000¢",
            "upper bound:       \t        30.500¢",
            "max ATE:           \t  2    ",
            "max AAS:           \t  3.000",
            "max N2D3P9:        \t307.000",
            "max 2,3-free sopfr:\t 58    ",
            "max 2,3-free copfr:\t  3    ",
            "max prime limit:   \t 37    ",
            "",
            "      \t      \t     \t                                           \t               \t       \t2,3-free\t2,3-free\t2,3-free\t2,3-free\t2,3-free",
            "symbol\tcomma \t     \t                                           \t               \tapotome\tprime   \tclass   \tclass   \tclass   \tclass   ",
            "class \tname  \tratio\tmonzo                                      \tcents          \tslope  \tlimit   \tname    \tCoPFR   \tSoPFR   \tN2D3P9  ",
            "      \t29/19C\t58/57\t[   1  -1   0   0   0   0   0  -1   0   1 ⟩\t        30.109¢\t -2.854\t 29     \t29/19   \t  2     \t 48     \t295.907 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can set bounds by monzos and ratios instead of just cents", (): void => {
        onlyRunInCi()

        const command = `npm run find-commas -- --lower-bound 1594323/1548800 --upper-bound "[ -25  12   1   0   0   1 ⟩" --undirected --factored --unabbreviated` as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "",
            "lower bound:       \t1594323/1548800",
            "upper bound:       \t[ -25  12   1   0   0   1 ⟩",
            "max ATE:           \t 15    ",
            "max AAS:           \t 14.000",
            "max N2D3P9:        \t307.000",
            "max 2,3-free sopfr:\t 61    ",
            "max 2,3-free copfr:\t555    ",
            "max prime limit:   \t 47    ",
            "",
            "        \t                     \t                 \t                                   \t               \t       \t       \t       \t2,3-free\t2,3-free\t2,3-free\t2,3-free\t2,3-free",
            "symbol  \tcomma                \t                 \t                                   \t               \tapotome\t       \t       \tprime   \tclass   \tclass   \tclass   \tclass   ",
            "class   \tname                 \tratio            \tmonzo                              \tcents          \tslope  \tAAS    \tATE    \tlimit   \tname    \tCoPFR   \tSoPFR   \tN2D3P9  ",
            "  ,'/|) \t5.13-Medium-Diesis   \t34543665/33554432\t[ -25  12   1   0   0   1 ⟩        \t        50.301¢\t  8.903\t  8.903\t 12    \t 13     \t65/1    \t  2     \t 18     \t 23.472 ",
            "        \t17:5.7-Medium-Diesis \t35/34            \t[  -1   0   1   1   0   0  -1 ⟩    \t        50.184¢\t -3.090\t  3.090\t  0    \t 17     \t35/17   \t  3     \t 29     \t 93.657 ",
            "        \t5².11²-Medium-Diesis \t1594323/1548800  \t[  -9  13  -2   0  -2 ⟩            \t        50.152¢\t  9.912\t  9.912\t 13    \t 11     \t3025/1  \t  4     \t 32     \t231.076 ",
            "        \t19:5².7-Medium-Diesis\t4864/4725        \t[   8  -3  -2  -1   0   0   0   1 ⟩\t        50.195¢\t -6.091\t  6.091\t  3    \t 19     \t175/19  \t  4     \t 36     \t292.477 ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
