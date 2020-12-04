import {Io} from "../../../../../src/general"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("analyze-ji-pitches", (): void => {
    it("takes in the list of JI pitches in the input file and outputs a table of their analyses", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitches -- --table-format forum" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "[table]",
            "[tr][th][/th][th][/th][th][/th][thr][/thr][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][th][/th][thl][/thl][th][/th][th][/th][th][/th][th][/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][th]2,3-free[/th][/tr]",
            "[tr][th]comma[/th][th][/th][th][/th][th=14]monzo[/th][th][/th][th]apotome[/th][th][/th][th][/th][th]prime[/th][th]class[/th][th]class[/th][th]class[/th][th]class[/th][/tr]",
            "[tr][th]class[/th][th]name[/th][th]quotient[/th][thr] [/thr][th]  2    [/th][th]  3    [/th][th]  5    [/th][th]  7    [/th][th] 11    [/th][th] 13    [/th][th] 17    [/th][th] 19    [/th][th] 23    [/th][th] 29    [/th][th] 31    [/th][th] 37    [/th][thl] [/thl][th]cents[/th][th]slope[/th][th]AAS[/th][th]ATE[/th][th]limit[/th][th]name[/th][th]CoPFR[/th][th]SoPFR[/th][th]N2D3P9[/th][/tr]",
            "[tr][td][/td][td]77/(5⋅37)n[/td][td][latex]\\frac{1515591}{1515520}[/latex][/td][tdr][[/tdr][tdc]-13    [/tdc][tdc]  9    [/tdc][tdc] -1    [/tdc][tdc]  1    [/tdc][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc] -1    [/tdc][td]⟩[/td][td]  0.081¢[/td][td]  8.995[/td][td]  8.995[/td][td]  9    [/td][td] 37    [/td][td][latex]\\{\\frac{185}{77}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 60    [/td][td]1626.744[/td][/tr]",
            "[tr][td][/td][td]7²⋅11⋅19/5n[/td][td][latex]\\frac{10241}{10240}[/latex][/td][tdr][[/tdr][tdc]-11    [/tdc][tdc]  0    [/tdc][tdc] -1    [/tdc][tdc]  2    [/tdc][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc]  1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.169¢[/td][td] -0.010[/td][td]  0.010[/td][td]  0    [/td][td] 19    [/td][td][latex]\\{\\frac{10241}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  5    [/td][td] 49    [/td][td]2252.072[/td][/tr]",
            "[tr][td][/td][td]1/(7³⋅17)n[/td][td][latex]\\frac{5832}{5831}[/latex][/td][tdr][[/tdr][tdc]  3    [/tdc][tdc]  6    [/tdc][tdc]  0    [/tdc][tdc] -3    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc] -1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.297¢[/td][td]  5.982[/td][td]  5.982[/td][td]  6    [/td][td] 17    [/td][td][latex]\\{5831\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 38    [/td][td]688.382[/td][/tr]",
            "[tr][td]:`::|:[/td][td]1/(5⋅7⋅13)n[/td][td][latex]\\frac{4096}{4095}[/latex][/td][tdr][[/tdr][tdc] 12    [/tdc][tdc] -2    [/tdc][tdc] -1    [/tdc][tdc] -1    [/tdc][tdc]  0    [/tdc][tdc] -1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.423¢[/td][td] -2.026[/td][td]  2.026[/td][td]  2    [/td][td] 13    [/td][td][latex]\\{455\\}_{\\scriptsize{2,3}}[/latex][/td][td]  3    [/td][td] 25    [/td][td] 82.153[/td][/tr]",
            "[tr][td][/td][td]5²⋅11²/7n[/td][td][latex]\\frac{3025}{3024}[/latex][/td][tdr][[/tdr][tdc] -4    [/tdc][tdc] -3    [/tdc][tdc]  2    [/tdc][tdc] -1    [/tdc][tdc]  2    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.572¢[/td][td] -3.035[/td][td]  3.035[/td][td]  3    [/td][td] 11    [/td][td][latex]\\{\\frac{3025}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  5    [/td][td] 39    [/td][td]539.178[/td][/tr]",
            "[tr][td][/td][td]7⁴/25n[/td][td][latex]\\frac{2401}{2400}[/latex][/td][tdr][[/tdr][tdc] -5    [/tdc][tdc] -1    [/tdc][tdc] -2    [/tdc][tdc]  4    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.721¢[/td][td] -1.044[/td][td]  1.044[/td][td]  1    [/td][td]  7    [/td][td][latex]\\{\\frac{2401}{25}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  6    [/td][td] 38    [/td][td]324.209[/td][/tr]",
            "[tr][td]:``::|:[/td][td]65/77n[/td][td][latex]\\frac{2080}{2079}[/latex][/td][tdr][[/tdr][tdc]  5    [/tdc][tdc] -3    [/tdc][tdc]  1    [/tdc][tdc] -1    [/tdc][tdc] -1    [/tdc][tdc]  1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  0.833¢[/td][td] -3.051[/td][td]  3.051[/td][td]  3    [/td][td] 13    [/td][td][latex]\\{\\frac{77}{65}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 36    [/td][td]200.818[/td][/tr]",
            "[tr][td][/td][td]7/(5²⋅17)n[/td][td][latex]\\frac{1701}{1700}[/latex][/td][tdr][[/tdr][tdc] -2    [/tdc][tdc]  5    [/tdc][tdc] -2    [/tdc][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  0    [/tdc][tdc] -1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  1.018¢[/td][td]  4.937[/td][td]  4.937[/td][td]  5    [/td][td] 17    [/td][td][latex]\\{\\frac{425}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4    [/td][td] 34    [/td][td]234.144[/td][/tr]",
            "[tr][td][/td][td]11⋅17/(5²⋅7)n[/td][td][latex]\\frac{382976}{382725}[/latex][/td][tdr][[/tdr][tdc] 11    [/tdc][tdc] -7    [/tdc][tdc] -2    [/tdc][tdc] -1    [/tdc][tdc]  1    [/tdc][tdc]  0    [/tdc][tdc]  1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  1.135¢[/td][td] -7.070[/td][td]  7.070[/td][td]  7    [/td][td] 17    [/td][td][latex]\\{\\frac{187}{175}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  5    [/td][td] 45    [/td][td]572.351[/td][/tr]",
            "[tr][td][/td][td]1/(7²⋅11)n[/td][td][latex]\\frac{131072}{130977}[/latex][/td][tdr][[/tdr][tdc] 17    [/tdc][tdc] -5    [/tdc][tdc]  0    [/tdc][tdc] -2    [/tdc][tdc] -1    [/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][tdc][/tdc][td]⟩[/td][td]  1.255¢[/td][td] -5.077[/td][td]  5.077[/td][td]  5    [/td][td] 11    [/td][td][latex]\\{539\\}_{\\scriptsize{2,3}}[/latex][/td][td]  3    [/td][td] 25    [/td][td] 82.347[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("supports reordering the fields, and overrides the default excluded fields (currently only sizeCategory)            ", (): void => {
        onlyRunInCi()

        const script = "npm run analyze-ji-pitches -- --ordered-fields cents,quotient,name,monzo,two3FreePrimeLimit,sizeCategory" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "               \t        \t \t       \t             \t     \t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t \t2,3-free\t        ",
            "               \tquotient\t \t       \t             \tmonzo\t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t       \t \tprime   \tsize    ",
            "cents          \t       n\t/\td      \tname         \t     \t  2    \t  3    \t  5    \t  7    \t 11    \t 13    \t 17    \t 19    \t 23    \t 29    \t 31    \t 37    \t \tlimit   \tcategory",
            "         0.081¢\t 1515591\t/\t1515520\t77/(5⋅37)n   \t    [\t-13    \t  9    \t -1    \t  1    \t  1    \t  0    \t  0    \t  0    \t  0    \t  0    \t  0    \t -1    \t⟩\t 37     \tn       ",
            "         0.169¢\t   10241\t/\t10240  \t7²⋅11⋅19/5n  \t    [\t-11    \t  0    \t -1    \t  2    \t  1    \t  0    \t  0    \t  1    \t       \t       \t       \t       \t⟩\t 19     \tn       ",
            "         0.297¢\t    5832\t/\t5831   \t1/(7³⋅17)n   \t    [\t  3    \t  6    \t  0    \t -3    \t  0    \t  0    \t -1    \t       \t       \t       \t       \t       \t⟩\t 17     \tn       ",
            "         0.423¢\t    4096\t/\t4095   \t1/(5⋅7⋅13)n  \t    [\t 12    \t -2    \t -1    \t -1    \t  0    \t -1    \t       \t       \t       \t       \t       \t       \t⟩\t 13     \tn       ",
            "         0.572¢\t    3025\t/\t3024   \t5²⋅11²/7n    \t    [\t -4    \t -3    \t  2    \t -1    \t  2    \t       \t       \t       \t       \t       \t       \t       \t⟩\t 11     \tn       ",
            "         0.721¢\t    2401\t/\t2400   \t7⁴/25n       \t    [\t -5    \t -1    \t -2    \t  4    \t       \t       \t       \t       \t       \t       \t       \t       \t⟩\t  7     \tn       ",
            "         0.833¢\t    2080\t/\t2079   \t65/77n       \t    [\t  5    \t -3    \t  1    \t -1    \t -1    \t  1    \t       \t       \t       \t       \t       \t       \t⟩\t 13     \tn       ",
            "         1.018¢\t    1701\t/\t1700   \t7/(5²⋅17)n   \t    [\t -2    \t  5    \t -2    \t  1    \t  0    \t  0    \t -1    \t       \t       \t       \t       \t       \t⟩\t 17     \tn       ",
            "         1.135¢\t  382976\t/\t382725 \t11⋅17/(5²⋅7)n\t    [\t 11    \t -7    \t -2    \t -1    \t  1    \t  0    \t  1    \t       \t       \t       \t       \t       \t⟩\t 17     \tn       ",
            "         1.255¢\t  131072\t/\t130977 \t1/(7²⋅11)n   \t    [\t 17    \t -5    \t  0    \t -2    \t -1    \t       \t       \t       \t       \t       \t       \t       \t⟩\t 11     \tn       ",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
