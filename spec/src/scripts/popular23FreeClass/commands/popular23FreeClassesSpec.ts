// tslint:disable max-line-length

import {Filename, Io, readLines} from "../../../../../src/general/io"
import {onlyRunInCi} from "../../../../helpers/onlyRunInCi"
import {runCommandAndGetConsoleOutput} from "../../../../helpers/src/scripts/runCommand"

describe("popular-2-3-free-classes", (): void => {
    it("gives you the list of the most popular 3,3-free classes, according to N2D3P9 (I've chosen a max N2D3P9 which cuts the results off just before the first tie between ab/c, ac/b, and bc/a, which poses a problem for testing because different computation strategies arrive at these ties in different orders, their sorting amongst each other is irrelevant, and I cannot come up with a cheap and easy way to make their sorting consistent)", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 39.125 --table-format forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        // This is shared here: http://forum.sagittal.org/viewtopic.php?p=2246#p2246
        const expected = [
            "count of results with N2D3P9 ≤ 39.125: 36",
            "",
            "[table]",
            "[tr][th][pre]2,3- [/pre][/th][th][pre]       [/pre][/th][th][pre]        [/pre][/th][th][pre]smallest[/pre][/th][th][pre]      [/pre][/th][th][pre]       [/pre][/th][th][pre]           [/pre][/th][/tr]",
            "[tr][th][pre]free [/pre][/th][th][pre]       [/pre][/th][th][pre]notating[/pre][/th][th][pre]symbol  [/pre][/th][th][pre]      [/pre][/th][th][pre]Scala  [/pre][/th][th][pre]Scala      [/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre]       [/pre][/th][th][pre]comma   [/pre][/th][th][pre]subset  [/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]archive[/pre][/th][th][pre]archive    [/pre][/th][/tr]",
            "[tr][th][pre]name [/pre][/th][th][pre]N2D3P9 [/pre][/th][th][pre]classes [/pre][/th][th][pre]indices [/pre][/th][th][pre]rank  [/pre][/th][th][pre]rank   [/pre][/th][th][pre]occurrences[/pre][/th][/tr]",
            "[tr][td][pre][/pre][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  1.000[/pre][/td][td][pre][/pre](:h:) :'::/|:[pre][/pre][/td][td][pre]0, 5    [/pre][/td][td][pre]1     [/pre][/td][td][pre]1      [/pre][/td][td][pre]7624       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  1.389[/pre][/td][td][pre][/pre]:'::|: :/|:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]2     [/pre][/td][td][pre]2      [/pre][/td][td][pre]5371       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  2.722[/pre][/td][td][pre][/pre]:|): :'::/|):[pre][/pre][/td][td][pre]1, 5    [/pre][/td][td][pre]3     [/pre][/td][td][pre]3      [/pre][/td][td][pre]3016       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  3.472[/pre][/td][td][pre][/pre]:.::/|: :/ /|:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]4     [/pre][/td][td][pre]4      [/pre][/td][td][pre]1610       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  4.537[/pre][/td][td][pre][/pre]:|(: :'::|):[pre][/pre][/td][td][pre]1, 5    [/pre][/td][td][pre]5     [/pre][/td][td][pre]5      [/pre][/td][td][pre]1318       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  6.722[/pre][/td][td][pre][/pre]:.::(|(: :/|\\:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]6     [/pre][/td][td][pre]6      [/pre][/td][td][pre]1002       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  6.806[/pre][/td][td][pre][/pre]:.::|): :`::.::/ /|: :/|):[pre][/pre][/td][td][pre]5, 6, 1 [/pre][/td][td][pre]7     [/pre][/td][td][pre]7      [/pre][/td][td][pre]875        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  8.681[/pre][/td][td][pre][/pre]:.::/ /|: :`::/|):[pre][/pre][/td][td][pre]5, 6    [/pre][/td][td][pre]8     [/pre][/td][td][pre]8      [/pre][/td][td][pre]492        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  9.389[/pre][/td][td][pre][/pre]:,::.::|): :,::/|):[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]9     [/pre][/td][td][pre]10     [/pre][/td][td][pre]447        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  9.528[/pre][/td][td][pre][/pre]:~|): :(/|:[pre][/pre][/td][td][pre]4, 4    [/pre][/td][td][pre]10    [/pre][/td][td][pre]9      [/pre][/td][td][pre]463        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{11}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 11.204[/pre][/td][td][pre][/pre]:(|(: :.::/|\\:[pre][/pre][/td][td][pre]2, 5    [/pre][/td][td][pre]11    [/pre][/td][td][pre]11     [/pre][/td][td][pre]339        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{25}{7}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 11.343[/pre][/td][td][pre][/pre]:'::|(: :,,::|~:[pre][/pre][/td][td][pre]5, 6    [/pre][/td][td][pre]12    [/pre][/td][td][pre]14     [/pre][/td][td][pre]312        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{13}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 15.648[/pre][/td][td][pre][/pre]:``::/ /|: :)/ /|:[pre][/pre][/td][td][pre]6, 4    [/pre][/td][td][pre]13    [/pre][/td][td][pre]16     [/pre][/td][td][pre]205        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{11}{7}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 15.685[/pre][/td][td][pre][/pre]:)|(: :(|:[pre][/pre][/td][td][pre]2, 2    [/pre][/td][td][pre]14    [/pre][/td][td][pre]12     [/pre][/td][td][pre]324        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{49}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 15.880[/pre][/td][td][pre][/pre]:)/|\\:[pre][/pre][/td][td][pre]4       [/pre][/td][td][pre]15    [/pre][/td][td][pre]15     [/pre][/td][td][pre]246        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{17\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 16.056[/pre][/td][td][pre][/pre]:~|: :~|(:[pre][/pre][/td][td][pre]4, 2    [/pre][/td][td][pre]16    [/pre][/td][td][pre]13     [/pre][/td][td][pre]318        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{55\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 16.806[/pre][/td][td][pre][/pre]:|\\: :'::/|\\:[pre][/pre][/td][td][pre]2, 5    [/pre][/td][td][pre]17    [/pre][/td][td][pre]24     [/pre][/td][td][pre]119        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{175\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 17.014[/pre][/td][td][pre][/pre]:`::/ /|: :`::)/ /|:[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]18    [/pre][/td][td][pre]17     [/pre][/td][td][pre]168        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{19\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 20.056[/pre][/td][td][pre][/pre]:)|: :)|~:[pre][/pre][/td][td][pre]4, 4    [/pre][/td][td][pre]19    [/pre][/td][td][pre]18     [/pre][/td][td][pre]166        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{625\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 21.701[/pre][/td][td][pre][/pre]:`::|): :`::'::/|):[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]20    [/pre][/td][td][pre]21     [/pre][/td][td][pre]143        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{13}{7}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 21.907[/pre][/td][td][pre][/pre]:,,::(|(:[pre][/pre][/td][td][pre]6       [/pre][/td][td][pre]21    [/pre][/td][td][pre]20     [/pre][/td][td][pre]145        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{65\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 23.472[/pre][/td][td][pre][/pre]:,::|): :,::'::/|):[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]22    [/pre][/td][td][pre]50     [/pre][/td][td][pre]40         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{77\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 23.528[/pre][/td][td][pre][/pre]:`::.::|):[pre][/pre][/td][td][pre]6       [/pre][/td][td][pre]23    [/pre][/td][td][pre]25     [/pre][/td][td][pre]111        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{245\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 23.819[/pre][/td][td][pre][/pre]:,::~|(: :'::~|):[pre][/pre][/td][td][pre]6, 5    [/pre][/td][td][pre]24    [/pre][/td][td][pre]19     [/pre][/td][td][pre]165        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{49}{25}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 26.466[/pre][/td][td][pre][/pre]:'::(|:[pre][/pre][/td][td][pre]5       [/pre][/td][td][pre]25    [/pre][/td][td][pre]23     [/pre][/td][td][pre]134        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{17}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 26.759[/pre][/td][td][pre][/pre]:.::~|(: :`::~|):[pre][/pre][/td][td][pre]5, 6    [/pre][/td][td][pre]26    [/pre][/td][td][pre]26     [/pre][/td][td][pre]108        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{25}{11}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 28.009[/pre][/td][td][pre]        [/pre][/td][td][pre]        [/pre][/td][td][pre]27    [/pre][/td][td][pre]47     [/pre][/td][td][pre]42         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{125}{7}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 28.356[/pre][/td][td][pre][/pre]:,,::~|(:[pre][/pre][/td][td][pre]6       [/pre][/td][td][pre]28    [/pre][/td][td][pre]33     [/pre][/td][td][pre]62         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{23\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 29.389[/pre][/td][td][pre][/pre]:|~: :~|\\:[pre][/pre][/td][td][pre]3, 4    [/pre][/td][td][pre]29    [/pre][/td][td][pre]22     [/pre][/td][td][pre]136        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{91\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 32.861[/pre][/td][td][pre][/pre]:`::'::|: :,::/|:[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]30    [/pre][/td][td][pre]57     [/pre][/td][td][pre]30         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{343\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 33.347[/pre][/td][td][pre][/pre]:,::~|:[pre][/pre][/td][td][pre]6       [/pre][/td][td][pre]31    [/pre][/td][td][pre]31     [/pre][/td][td][pre]70         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{19}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 33.426[/pre][/td][td][pre][/pre]:.::)|: :)/|:[pre][/pre][/td][td][pre]5, 3    [/pre][/td][td][pre]32    [/pre][/td][td][pre]27     [/pre][/td][td][pre]97         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{13}{11}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 34.426[/pre][/td][td][pre][/pre]:,,::|(: :``::|):[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]33    [/pre][/td][td][pre]29     [/pre][/td][td][pre]89         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{121\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 36.972[/pre][/td][td][pre]        [/pre][/td][td][pre]        [/pre][/td][td][pre]34    [/pre][/td][td][pre]42.5   [/pre][/td][td][pre]46         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{17}{7}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 37.463[/pre][/td][td][pre][/pre]:``::~~|: :,,::/ /|:[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]35    [/pre][/td][td][pre]40     [/pre][/td][td][pre]50         [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{25}{13}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre] 39.120[/pre][/td][td][pre][/pre]:``::/|: :,::)/ /|:[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]36    [/pre][/td][td][pre]52.5   [/pre][/td][td][pre]34         [/pre][/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("works for a different max N2D3P9", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 10 --table-format forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "count of results with N2D3P9 ≤ 10: 10",
            "",
            "[table]",
            "[tr][th][pre]2,3- [/pre][/th][th][pre]       [/pre][/th][th][pre]        [/pre][/th][th][pre]smallest[/pre][/th][th][pre]      [/pre][/th][th][pre]       [/pre][/th][th][pre]           [/pre][/th][/tr]",
            "[tr][th][pre]free [/pre][/th][th][pre]       [/pre][/th][th][pre]notating[/pre][/th][th][pre]symbol  [/pre][/th][th][pre]      [/pre][/th][th][pre]Scala  [/pre][/th][th][pre]Scala      [/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre]       [/pre][/th][th][pre]comma   [/pre][/th][th][pre]subset  [/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]archive[/pre][/th][th][pre]archive    [/pre][/th][/tr]",
            "[tr][th][pre]name [/pre][/th][th][pre]N2D3P9 [/pre][/th][th][pre]classes [/pre][/th][th][pre]indices [/pre][/th][th][pre]rank  [/pre][/th][th][pre]rank   [/pre][/th][th][pre]occurrences[/pre][/th][/tr]",
            "[tr][td][pre][/pre][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  1.000[/pre][/td][td][pre][/pre](:h:) :'::/|:[pre][/pre][/td][td][pre]0, 5    [/pre][/td][td][pre]1     [/pre][/td][td][pre]1      [/pre][/td][td][pre]7624       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  1.389[/pre][/td][td][pre][/pre]:'::|: :/|:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]2     [/pre][/td][td][pre]2      [/pre][/td][td][pre]5371       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  2.722[/pre][/td][td][pre][/pre]:|): :'::/|):[pre][/pre][/td][td][pre]1, 5    [/pre][/td][td][pre]3     [/pre][/td][td][pre]3      [/pre][/td][td][pre]3016       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  3.472[/pre][/td][td][pre][/pre]:.::/|: :/ /|:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]4     [/pre][/td][td][pre]4      [/pre][/td][td][pre]1610       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  4.537[/pre][/td][td][pre][/pre]:|(: :'::|):[pre][/pre][/td][td][pre]1, 5    [/pre][/td][td][pre]5     [/pre][/td][td][pre]5      [/pre][/td][td][pre]1318       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  6.722[/pre][/td][td][pre][/pre]:.::(|(: :/|\\:[pre][/pre][/td][td][pre]5, 1    [/pre][/td][td][pre]6     [/pre][/td][td][pre]6      [/pre][/td][td][pre]1002       [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  6.806[/pre][/td][td][pre][/pre]:.::|): :`::.::/ /|: :/|):[pre][/pre][/td][td][pre]5, 6, 1 [/pre][/td][td][pre]7     [/pre][/td][td][pre]7      [/pre][/td][td][pre]875        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  8.681[/pre][/td][td][pre][/pre]:.::/ /|: :`::/|):[pre][/pre][/td][td][pre]5, 6    [/pre][/td][td][pre]8     [/pre][/td][td][pre]8      [/pre][/td][td][pre]492        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  9.389[/pre][/td][td][pre][/pre]:,::.::|): :,::/|):[pre][/pre][/td][td][pre]6, 6    [/pre][/td][td][pre]9     [/pre][/td][td][pre]10     [/pre][/td][td][pre]447        [/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]  9.528[/pre][/td][td][pre][/pre]:~|): :(/|:[pre][/pre][/td][td][pre]4, 4    [/pre][/td][td][pre]10    [/pre][/td][td][pre]9      [/pre][/td][td][pre]463        [/pre][/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can use a list of already known popular 3,3-free classes, rather than recalculate them all", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 5298.1906468 --use-known" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = readLines("src/scripts/popular23FreeClass/results/popular23FreeClasses.txt" as Filename)
        expect(actual).toEqualLines(expected)
    })

    it("can associate the popular 2,3-free classes with their best notating commas (instead of all of their notating comma classes)", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --use-best-notating-commas --max-n2d3p9 10 --table-format forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "count of results with N2D3P9 ≤ 10: 10",
            "",
            "[table]",
            "[tr][th][pre]     [/pre][/th][th][pre]      [/pre][/th][th][pre]               [/pre][/th][th][pre]                           [/pre][/th][th][pre]best    [/pre][/th][/tr]",
            "[tr][th][pre]2,3- [/pre][/th][th][pre]      [/pre][/th][th][pre]best           [/pre][/th][th][pre]best                       [/pre][/th][th][pre]notating[/pre][/th][/tr]",
            "[tr][th][pre]free [/pre][/th][th][pre]      [/pre][/th][th][pre]notating       [/pre][/th][th][pre]notating                   [/pre][/th][th][pre]comma   [/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]comma          [/pre][/th][th][pre]comma                      [/pre][/th][th][pre]maybe   [/pre][/th][/tr]",
            "[tr][th][pre]name [/pre][/th][th][pre]rank  [/pre][/th][th][pre]cents          [/pre][/th][th][pre]monzo                      [/pre][/th][th][pre]flacco  [/pre][/th][/tr]",
            "[tr][td][pre][/pre][latex]\\{1\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]1     [/pre][/td][td][pre]         0.000¢[/pre][/td][td][pre][  ⟩                       [/pre][/td][td][pre][/pre](:h:)[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{5\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]2     [/pre][/td][td][pre]        21.506¢[/pre][/td][td][pre][  -4   4  -1 ⟩            [/pre][/td][td][pre][/pre]:/|:[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{7\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]3     [/pre][/td][td][pre]        27.264¢[/pre][/td][td][pre][   6  -2   0  -1 ⟩        [/pre][/td][td][pre][/pre]:|):[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{25\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]4     [/pre][/td][td][pre]        19.553¢[/pre][/td][td][pre][  11  -4  -2 ⟩            [/pre][/td][td][pre][/pre]:.::/|:[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{\\frac{7}{5}\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]5     [/pre][/td][td][pre]        29.218¢[/pre][/td][td][pre][  -9   6   1  -1 ⟩        [/pre][/td][td][pre][/pre]:'::|):[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{11\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]6     [/pre][/td][td][pre]        53.273¢[/pre][/td][td][pre][  -5   1   0   0   1 ⟩    [/pre][/td][td][pre][/pre]:/|\\:[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{35\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]7     [/pre][/td][td][pre]        48.770¢[/pre][/td][td][pre][   2   2  -1  -1 ⟩        [/pre][/td][td][pre][/pre]:/|):[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{125\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]8     [/pre][/td][td][pre]        41.059¢[/pre][/td][td][pre][   7   0  -3 ⟩            [/pre][/td][td][pre][/pre]:.::/ /|:[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{13\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]9     [/pre][/td][td][pre]        48.348¢[/pre][/td][td][pre][ -10   4   0   0   0   1 ⟩[/pre][/td][td][pre][/pre]:,::/|):[pre][/pre][/td][/tr]",
            "[tr][td][pre][/pre][latex]\\{49\\}_{\\scriptsize{2,3}}[/latex][pre][/pre][/td][td][pre]10    [/pre][/td][td][pre]        35.697¢[/pre][/td][td][pre][  -4  -1   0   2 ⟩        [/pre][/td][td][pre][/pre]:~|):[pre][/pre][/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
