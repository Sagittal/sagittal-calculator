// tslint:disable max-line-length

import {Filename, Io, readLines} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runScriptAndGetConsoleOutput} from "../../../../helpers/src/scripts/runScriptAndGetConsoleOutput"

describe("popular-2-3-free-classes", (): void => {
    it("gives you the list of the most popular 3,3-free classes, according to N2D3P9 (I've chosen a max N2D3P9 which cuts the results off just before the first tie between ab/c, ac/b, and bc/a, which poses a problem for testing because different computation strategies arrive at these ties in different orders, their sorting amongst each other is irrelevant, and I cannot come up with a cheap and easy way to make their sorting consistent)", (): void => {
        onlyRunInCi()

        const script = "npm run popular-2-3-free-classes -- --max-n2d3p9 39.125 --table-format forum" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        // This is shared here: http://forum.sagittal.org/viewtopic.php?p=2246#p2246
        const expected = [
            "count of results with N2D3P9 ≤ 39.125: 36",
            "",
            "[table]",
            "[tr][th]2,3-[/th][th][/th][th][/th][th]smallest[/th][th][/th][th][/th][th][/th][/tr]",
            "[tr][th]free[/th][th][/th][th]notating[/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]",
            "[tr][th]class[/th][th][/th][th]symbol[/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]",
            "[tr][th]name[/th][th]N2D3P9[/th][th]classes[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]",
            "[tr][td][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][/td][td]  1.000[/td][td](:h:) :'::/|:[/td][td]0, 5[/td][td]1[/td][td]1[/td][td]7624[/td][/tr]",
            "[tr][td][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][/td][td]  1.389[/td][td]:'::|: :/|:[/td][td]5, 1[/td][td]2[/td][td]2[/td][td]5371[/td][/tr]",
            "[tr][td][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][/td][td]  2.722[/td][td]:|): :'::/|):[/td][td]1, 5[/td][td]3[/td][td]3[/td][td]3016[/td][/tr]",
            "[tr][td][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][/td][td]  3.472[/td][td]:.::/|: :/ /|:[/td][td]5, 1[/td][td]4[/td][td]4[/td][td]1610[/td][/tr]",
            "[tr][td][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4.537[/td][td]:|(: :'::|):[/td][td]1, 5[/td][td]5[/td][td]5[/td][td]1318[/td][/tr]",
            "[tr][td][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][/td][td]  6.722[/td][td]:.::(|(: :/|\\:[/td][td]5, 1[/td][td]6[/td][td]6[/td][td]1002[/td][/tr]",
            "[tr][td][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][/td][td]  6.806[/td][td]:.::|): :`::.::/ /|: :/|):[/td][td]5, 6, 1[/td][td]7[/td][td]7[/td][td]875[/td][/tr]",
            "[tr][td][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][/td][td]  8.681[/td][td]:.::/ /|: :`::/|):[/td][td]5, 6[/td][td]8[/td][td]8[/td][td]492[/td][/tr]",
            "[tr][td][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][/td][td]  9.389[/td][td]:,::.::|): :,::/|):[/td][td]6, 6[/td][td]9[/td][td]10[/td][td]447[/td][/tr]",
            "[tr][td][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][/td][td]  9.528[/td][td]:~|): :(/|:[/td][td]4, 4[/td][td]10[/td][td]9[/td][td]463[/td][/tr]",
            "[tr][td][latex]\\{\\frac{11}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 11.204[/td][td]:(|(: :.::/|\\:[/td][td]2, 5[/td][td]11[/td][td]11[/td][td]339[/td][/tr]",
            "[tr][td][latex]\\{\\frac{25}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 11.343[/td][td]:'::|(: :,,::|~:[/td][td]5, 6[/td][td]12[/td][td]14[/td][td]312[/td][/tr]",
            "[tr][td][latex]\\{\\frac{13}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 15.648[/td][td]:``::/ /|: :)/ /|:[/td][td]6, 4[/td][td]13[/td][td]16[/td][td]205[/td][/tr]",
            "[tr][td][latex]\\{\\frac{11}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 15.685[/td][td]:)|(: :(|:[/td][td]2, 2[/td][td]14[/td][td]12[/td][td]324[/td][/tr]",
            "[tr][td][latex]\\{\\frac{49}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 15.880[/td][td]:)/|\\:[/td][td]4[/td][td]15[/td][td]15[/td][td]246[/td][/tr]",
            "[tr][td][latex]\\{17\\}_{\\scriptsize{2,3}}[/latex][/td][td] 16.056[/td][td]:~|: :~|(:[/td][td]4, 2[/td][td]16[/td][td]13[/td][td]318[/td][/tr]",
            "[tr][td][latex]\\{55\\}_{\\scriptsize{2,3}}[/latex][/td][td] 16.806[/td][td]:|\\: :'::/|\\:[/td][td]2, 5[/td][td]17[/td][td]24[/td][td]119[/td][/tr]",
            "[tr][td][latex]\\{175\\}_{\\scriptsize{2,3}}[/latex][/td][td] 17.014[/td][td]:`::/ /|: :`::)/ /|:[/td][td]6, 6[/td][td]18[/td][td]17[/td][td]168[/td][/tr]",
            "[tr][td][latex]\\{19\\}_{\\scriptsize{2,3}}[/latex][/td][td] 20.056[/td][td]:)|: :)|~:[/td][td]4, 4[/td][td]19[/td][td]18[/td][td]166[/td][/tr]",
            "[tr][td][latex]\\{625\\}_{\\scriptsize{2,3}}[/latex][/td][td] 21.701[/td][td]:`::|): :`::'::/|):[/td][td]6, 6[/td][td]20[/td][td]21[/td][td]143[/td][/tr]",
            "[tr][td][latex]\\{\\frac{13}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 21.907[/td][td]:,,::(|(:[/td][td]6[/td][td]21[/td][td]20[/td][td]145[/td][/tr]",
            "[tr][td][latex]\\{65\\}_{\\scriptsize{2,3}}[/latex][/td][td] 23.472[/td][td]:,::|): :,::'::/|):[/td][td]6, 6[/td][td]22[/td][td]50[/td][td]40[/td][/tr]",
            "[tr][td][latex]\\{77\\}_{\\scriptsize{2,3}}[/latex][/td][td] 23.528[/td][td]:`::.::|):[/td][td]6[/td][td]23[/td][td]25[/td][td]111[/td][/tr]",
            "[tr][td][latex]\\{245\\}_{\\scriptsize{2,3}}[/latex][/td][td] 23.819[/td][td]:,::~|(: :'::~|):[/td][td]6, 5[/td][td]24[/td][td]19[/td][td]165[/td][/tr]",
            "[tr][td][latex]\\{\\frac{49}{25}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 26.466[/td][td]:'::(|:[/td][td]5[/td][td]25[/td][td]23[/td][td]134[/td][/tr]",
            "[tr][td][latex]\\{\\frac{17}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 26.759[/td][td]:.::~|(: :`::~|):[/td][td]5, 6[/td][td]26[/td][td]26[/td][td]108[/td][/tr]",
            "[tr][td][latex]\\{\\frac{25}{11}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 28.009[/td][td][/td][td][/td][td]27[/td][td]47[/td][td]42[/td][/tr]",
            "[tr][td][latex]\\{\\frac{125}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 28.356[/td][td]:,,::~|(:[/td][td]6[/td][td]28[/td][td]33[/td][td]62[/td][/tr]",
            "[tr][td][latex]\\{23\\}_{\\scriptsize{2,3}}[/latex][/td][td] 29.389[/td][td]:|~: :~|\\:[/td][td]3, 4[/td][td]29[/td][td]22[/td][td]136[/td][/tr]",
            "[tr][td][latex]\\{91\\}_{\\scriptsize{2,3}}[/latex][/td][td] 32.861[/td][td]:`::'::|: :,::/|:[/td][td]6, 6[/td][td]30[/td][td]57[/td][td]30[/td][/tr]",
            "[tr][td][latex]\\{343\\}_{\\scriptsize{2,3}}[/latex][/td][td] 33.347[/td][td]:,::~|:[/td][td]6[/td][td]31[/td][td]31[/td][td]70[/td][/tr]",
            "[tr][td][latex]\\{\\frac{19}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 33.426[/td][td]:.::)|: :)/|:[/td][td]5, 3[/td][td]32[/td][td]27[/td][td]97[/td][/tr]",
            "[tr][td][latex]\\{\\frac{13}{11}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 34.426[/td][td]:,,::|(: :``::|):[/td][td]6, 6[/td][td]33[/td][td]29[/td][td]89[/td][/tr]",
            "[tr][td][latex]\\{121\\}_{\\scriptsize{2,3}}[/latex][/td][td] 36.972[/td][td][/td][td][/td][td]34[/td][td]42.5[/td][td]46[/td][/tr]",
            "[tr][td][latex]\\{\\frac{17}{7}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 37.463[/td][td]:``::~~|: :,,::/ /|:[/td][td]6, 6[/td][td]35[/td][td]40[/td][td]50[/td][/tr]",
            "[tr][td][latex]\\{\\frac{25}{13}\\}_{\\scriptsize{2,3}}[/latex][/td][td] 39.120[/td][td]:``::/|: :,::)/ /|:[/td][td]6, 6[/td][td]36[/td][td]52.5[/td][td]34[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("works for a different max N2D3P9", (): void => {
        onlyRunInCi()

        const script = "npm run popular-2-3-free-classes -- --max-n2d3p9 10 --table-format forum" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "count of results with N2D3P9 ≤ 10: 10",
            "",
            "[table]",
            "[tr][th]2,3-[/th][th][/th][th][/th][th]smallest[/th][th][/th][th][/th][th][/th][/tr]",
            "[tr][th]free[/th][th][/th][th]notating[/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]",
            "[tr][th]class[/th][th][/th][th]symbol[/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]",
            "[tr][th]name[/th][th]N2D3P9[/th][th]classes[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]",
            "[tr][td][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][/td][td]  1.000[/td][td](:h:) :'::/|:[/td][td]0, 5[/td][td]1[/td][td]1[/td][td]7624[/td][/tr]",
            "[tr][td][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][/td][td]  1.389[/td][td]:'::|: :/|:[/td][td]5, 1[/td][td]2[/td][td]2[/td][td]5371[/td][/tr]",
            "[tr][td][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][/td][td]  2.722[/td][td]:|): :'::/|):[/td][td]1, 5[/td][td]3[/td][td]3[/td][td]3016[/td][/tr]",
            "[tr][td][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][/td][td]  3.472[/td][td]:.::/|: :/ /|:[/td][td]5, 1[/td][td]4[/td][td]4[/td][td]1610[/td][/tr]",
            "[tr][td][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td]  4.537[/td][td]:|(: :'::|):[/td][td]1, 5[/td][td]5[/td][td]5[/td][td]1318[/td][/tr]",
            "[tr][td][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][/td][td]  6.722[/td][td]:.::(|(: :/|\\:[/td][td]5, 1[/td][td]6[/td][td]6[/td][td]1002[/td][/tr]",
            "[tr][td][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][/td][td]  6.806[/td][td]:.::|): :`::.::/ /|: :/|):[/td][td]5, 6, 1[/td][td]7[/td][td]7[/td][td]875[/td][/tr]",
            "[tr][td][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][/td][td]  8.681[/td][td]:.::/ /|: :`::/|):[/td][td]5, 6[/td][td]8[/td][td]8[/td][td]492[/td][/tr]",
            "[tr][td][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][/td][td]  9.389[/td][td]:,::.::|): :,::/|):[/td][td]6, 6[/td][td]9[/td][td]10[/td][td]447[/td][/tr]",
            "[tr][td][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][/td][td]  9.528[/td][td]:~|): :(/|:[/td][td]4, 4[/td][td]10[/td][td]9[/td][td]463[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can use a list of already known popular 3,3-free classes, rather than recalculate them all", (): void => {
        onlyRunInCi()

        const script = "npm run popular-2-3-free-classes -- --max-n2d3p9 5298.1906468 --use-known" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = readLines("src/scripts/popular23FreeClass/results/popular23FreeClasses.txt" as Filename)
        expect(actual).toEqualLines(expected)
    })

    it("can associate the popular 2,3-free classes with their best notating commas (instead of all of their notating symbol classes)", (): void => {
        onlyRunInCi()

        const script = "npm run popular-2-3-free-classes -- --use-best-notating-commas --max-n2d3p9 10 --table-format forum" as Io

        const actual = runScriptAndGetConsoleOutput(script)

        const expected = [
            "count of results with N2D3P9 ≤ 10: 10",
            "",
            "[table]",
            "[tr][th][/th][th][/th][th][/th][th][/th][th]best[/th][/tr]",
            "[tr][th]2,3-[/th][th][/th][th]best[/th][th]best[/th][th]notating[/th][/tr]",
            "[tr][th]free[/th][th][/th][th]notating[/th][th]notating[/th][th]comma[/th][/tr]",
            "[tr][th]class[/th][th]N2D3P9[/th][th]comma[/th][th]comma[/th][th]maybe[/th][/tr]",
            "[tr][th]name[/th][th]rank[/th][th]cents[/th][th]monzo[/th][th]flacco[/th][/tr]",
            "[tr][td][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][/td][td]1[/td][td]  0.000¢[/td][td][  ⟩[/td][td](:h:)[/td][/tr]",
            "[tr][td][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][/td][td]2[/td][td] 21.506¢[/td][td][  -4   4  -1 ⟩[/td][td]:/|:[/td][/tr]",
            "[tr][td][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][/td][td]3[/td][td] 27.264¢[/td][td][   6  -2   0  -1 ⟩[/td][td]:|):[/td][/tr]",
            "[tr][td][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][/td][td]4[/td][td] 19.553¢[/td][td][  11  -4  -2 ⟩[/td][td]:.::/|:[/td][/tr]",
            "[tr][td][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][/td][td]5[/td][td] 29.218¢[/td][td][  -9   6   1  -1 ⟩[/td][td]:'::|):[/td][/tr]",
            "[tr][td][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][/td][td]6[/td][td] 53.273¢[/td][td][  -5   1   0   0   1 ⟩[/td][td]:/|\\:[/td][/tr]",
            "[tr][td][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][/td][td]7[/td][td] 48.770¢[/td][td][   2   2  -1  -1 ⟩[/td][td]:/|):[/td][/tr]",
            "[tr][td][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][/td][td]8[/td][td] 41.059¢[/td][td][   7   0  -3 ⟩[/td][td]:.::/ /|:[/td][/tr]",
            "[tr][td][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][/td][td]9[/td][td] 48.348¢[/td][td][ -10   4   0   0   0   1 ⟩[/td][td]:,::/|):[/td][/tr]",
            "[tr][td][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][/td][td]10[/td][td] 35.697¢[/td][td][  -4  -1   0   2 ⟩[/td][td]:~|):[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
