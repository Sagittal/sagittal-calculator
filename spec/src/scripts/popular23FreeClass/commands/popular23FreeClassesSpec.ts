// tslint:disable max-line-length

import { Filename, Io, readLines } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("popular-2-3-free-classes", (): void => {
    it("gives you the list of the most popular 3,3-free classes, according to N2D3P9", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 136 --table-format forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        // This is shared here: http://forum.sagittal.org/viewtopic.php?p=2246#p2246
        const expected = [
            "count of results with N2D3P9 ≤ 136: 131",
            "",
            "[table]",
            "[tr][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]exactly[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][/tr]",
            "[tr][th][pre]2,3-[/pre][/th][th][pre][/pre][/th][th][pre]notating[/pre][/th][th][pre]smallest[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][/tr]",
            "[tr][th][pre]free[/pre][/th][th][pre][/pre][/th][th][pre]JI[/pre][/th][th][pre]symbol[/pre][/th][th][pre][/pre][/th][th][pre]Scala[/pre][/th][th][pre]Scala[/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre][/pre][/th][th][pre]symbol[/pre][/th][th][pre]subset[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]archive[/pre][/th][th][pre]archive[/pre][/th][/tr]",
            "[tr][th][pre]name[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]classes[/pre][/th][th][pre]indices[/pre][/th][th][pre]rank[/pre][/th][th][pre]rank[/pre][/th][th][pre]occurrences[/pre][/th][/tr]",
            "[tr][td][pre][latex]\\frac{1}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  1.000[/pre][/td][td][pre](:h:) :'::/|:[/pre][/td][td][pre]0, 5[/pre][/td][td][pre]1[/pre][/td][td][pre]1[/pre][/td][td][pre]7624[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{5}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  1.389[/pre][/td][td][pre]:'::|: :/|:[/pre][/td][td][pre]5, 1[/pre][/td][td][pre]2[/pre][/td][td][pre]2[/pre][/td][td][pre]5371[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  2.722[/pre][/td][td][pre]:|): :'::/|): :.::(|\\:[/pre][/td][td][pre]1, 5, 5[/pre][/td][td][pre]3[/pre][/td][td][pre]3[/pre][/td][td][pre]3016[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  3.472[/pre][/td][td][pre]:.::/|: :/ /|:[/pre][/td][td][pre]5, 1[/pre][/td][td][pre]4[/pre][/td][td][pre]4[/pre][/td][td][pre]1610[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  4.537[/pre][/td][td][pre]:|(: :'::|):[/pre][/td][td][pre]1, 5[/pre][/td][td][pre]5[/pre][/td][td][pre]5[/pre][/td][td][pre]1318[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{11}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  6.722[/pre][/td][td][pre]:.::(|(: :/|\\: :(|):[/pre][/td][td][pre]5, 1, 1[/pre][/td][td][pre]6[/pre][/td][td][pre]6[/pre][/td][td][pre]1002[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  6.806[/pre][/td][td][pre]:.::|): :`::.::/ /|: :/|): :(|\\:[/pre][/td][td][pre]5, 6, 1, 1[/pre][/td][td][pre]7[/pre][/td][td][pre]7[/pre][/td][td][pre]875[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  8.681[/pre][/td][td][pre]:.::/ /|: :`::/|): :,::(|\\:[/pre][/td][td][pre]5, 6, 6[/pre][/td][td][pre]8[/pre][/td][td][pre]8[/pre][/td][td][pre]492[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  9.389[/pre][/td][td][pre]:,::.::|): :,::/|): :`::(|\\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]9[/pre][/td][td][pre]10[/pre][/td][td][pre]447[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  9.528[/pre][/td][td][pre]:~|): :(/|: :|\\):[/pre][/td][td][pre]4, 4, 4[/pre][/td][td][pre]10[/pre][/td][td][pre]9[/pre][/td][td][pre]463[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{11}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 11.204[/pre][/td][td][pre]:(|(: :.::/|\\: :'::(|):[/pre][/td][td][pre]2, 5, 5[/pre][/td][td][pre]11[/pre][/td][td][pre]11[/pre][/td][td][pre]339[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 11.343[/pre][/td][td][pre]:'::|(: :,,::|~:[/pre][/td][td][pre]5, 6[/pre][/td][td][pre]12[/pre][/td][td][pre]14[/pre][/td][td][pre]312[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 15.648[/pre][/td][td][pre]:``::/ /|: :)/ /|: :)|\\ \\:[/pre][/td][td][pre]6, 4, 4[/pre][/td][td][pre]13[/pre][/td][td][pre]16[/pre][/td][td][pre]205[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{11}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 15.685[/pre][/td][td][pre]:)|(: :(|:[/pre][/td][td][pre]2, 2[/pre][/td][td][pre]14[/pre][/td][td][pre]12[/pre][/td][td][pre]324[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 15.880[/pre][/td][td][pre]:)/|\\: :`::)/|\\:[/pre][/td][td][pre]4, 6[/pre][/td][td][pre]15[/pre][/td][td][pre]15[/pre][/td][td][pre]246[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{17}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 16.056[/pre][/td][td][pre]:~|: :~|(:[/pre][/td][td][pre]4, 2[/pre][/td][td][pre]16[/pre][/td][td][pre]13[/pre][/td][td][pre]318[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{55}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 16.806[/pre][/td][td][pre]:|\\: :'::/|\\: :.::(|):[/pre][/td][td][pre]2, 5, 5[/pre][/td][td][pre]17[/pre][/td][td][pre]24[/pre][/td][td][pre]119[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{175}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 17.014[/pre][/td][td][pre]:`::/ /|: :`::)/ /|: :,::)|\\ \\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]18[/pre][/td][td][pre]17[/pre][/td][td][pre]168[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 20.056[/pre][/td][td][pre]:)|: :)|~:[/pre][/td][td][pre]4, 4[/pre][/td][td][pre]19[/pre][/td][td][pre]18[/pre][/td][td][pre]166[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{625}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 21.701[/pre][/td][td][pre]:`::|): :`::'::/|): :,::.::(|\\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]20[/pre][/td][td][pre]21[/pre][/td][td][pre]143[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 21.907[/pre][/td][td][pre]:,,::(|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]21[/pre][/td][td][pre]20[/pre][/td][td][pre]145[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{65}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 23.472[/pre][/td][td][pre]:,::|): :,::'::/|): :`::.::(|\\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]22[/pre][/td][td][pre]50[/pre][/td][td][pre]40[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{77}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 23.528[/pre][/td][td][pre]:`::.::|):[/pre][/td][td][pre]6[/pre][/td][td][pre]23[/pre][/td][td][pre]25[/pre][/td][td][pre]111[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{245}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 23.819[/pre][/td][td][pre]:,::~|(: :'::~|):[/pre][/td][td][pre]6, 5[/pre][/td][td][pre]24[/pre][/td][td][pre]19[/pre][/td][td][pre]165[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 26.466[/pre][/td][td][pre]:'::(|:[/pre][/td][td][pre]5[/pre][/td][td][pre]25[/pre][/td][td][pre]23[/pre][/td][td][pre]134[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{17}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 26.759[/pre][/td][td][pre]:.::~|(: :`::~|):[/pre][/td][td][pre]5, 6[/pre][/td][td][pre]26[/pre][/td][td][pre]26[/pre][/td][td][pre]108[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 28.009[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]27[/pre][/td][td][pre]47[/pre][/td][td][pre]42[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 28.356[/pre][/td][td][pre]:,,::~|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]28[/pre][/td][td][pre]33[/pre][/td][td][pre]62[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{23}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 29.389[/pre][/td][td][pre]:|~: :~|\\:[/pre][/td][td][pre]3, 4[/pre][/td][td][pre]29[/pre][/td][td][pre]22[/pre][/td][td][pre]136[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{91}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 32.861[/pre][/td][td][pre]:`::'::|: :,::/|:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]30[/pre][/td][td][pre]57[/pre][/td][td][pre]30[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{343}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 33.347[/pre][/td][td][pre]:,::~|:[/pre][/td][td][pre]6[/pre][/td][td][pre]31[/pre][/td][td][pre]31[/pre][/td][td][pre]70[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 33.426[/pre][/td][td][pre]:.::)|: :)/|:[/pre][/td][td][pre]5, 3[/pre][/td][td][pre]32[/pre][/td][td][pre]27[/pre][/td][td][pre]97[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 34.426[/pre][/td][td][pre]:,,::|(: :``::|):[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]33[/pre][/td][td][pre]29[/pre][/td][td][pre]89[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{121}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 36.972[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]34[/pre][/td][td][pre]42.5[/pre][/td][td][pre]46[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{17}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 37.463[/pre][/td][td][pre]:``::~~|: :,,::/ /|:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]35[/pre][/td][td][pre]40[/pre][/td][td][pre]50[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 39.120[/pre][/td][td][pre]:``::/|: :,::)/ /|: :`::)|\\ \\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]36[/pre][/td][td][pre]52.5[/pre][/td][td][pre]34[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 39.213[/pre][/td][td][pre]:'::)|(:[/pre][/td][td][pre]5[/pre][/td][td][pre]38[/pre][/td][td][pre]28[/pre][/td][td][pre]92[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{55}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 39.213[/pre][/td][td][pre]:.::(|:[/pre][/td][td][pre]5[/pre][/td][td][pre]38[/pre][/td][td][pre]34[/pre][/td][td][pre]61[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{77}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 39.213[/pre][/td][td][pre]:,,::)/|:[/pre][/td][td][pre]6[/pre][/td][td][pre]38[/pre][/td][td][pre]35.5[/pre][/td][td][pre]55[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{85}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 40.139[/pre][/td][td][pre]:.::~|:[/pre][/td][td][pre]5[/pre][/td][td][pre]40[/pre][/td][td][pre]78[/pre][/td][td][pre]20[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{275}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 42.014[/pre][/td][td][pre]:`::)|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]41[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{875}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 42.535[/pre][/td][td][pre]:`::/|:[/pre][/td][td][pre]6[/pre][/td][td][pre]42[/pre][/td][td][pre]76[/pre][/td][td][pre]21[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{29}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 46.722[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]43[/pre][/td][td][pre]32[/pre][/td][td][pre]67[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 46.796[/pre][/td][td][pre]:)|):[/pre][/td][td][pre]4[/pre][/td][td][pre]44[/pre][/td][td][pre]37.5[/pre][/td][td][pre]52[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{23}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 48.981[/pre][/td][td][pre]:/|~: :,,::/|\\: :``::(|):[/pre][/td][td][pre]3, 6, 6[/pre][/td][td][pre]45[/pre][/td][td][pre]44[/pre][/td][td][pre]45[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{95}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 50.139[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]46[/pre][/td][td][pre]72[/pre][/td][td][pre]23[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{143}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 51.639[/pre][/td][td][pre]:)~|:[/pre][/td][td][pre]4[/pre][/td][td][pre]47[/pre][/td][td][pre]66[/pre][/td][td][pre]26[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{31}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 53.389[/pre][/td][td][pre]:,::~|): :`::(/|: :,::|\\):[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]48[/pre][/td][td][pre]30[/pre][/td][td][pre]80[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{3125}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 54.253[/pre][/td][td][pre]:`::'::|):[/pre][/td][td][pre]6[/pre][/td][td][pre]49[/pre][/td][td][pre]52.5[/pre][/td][td][pre]34[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 54.769[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]51[/pre][/td][td][pre]68[/pre][/td][td][pre]25[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{65}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 54.769[/pre][/td][td][pre]:,::(/|: :`::|\\):[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]51[/pre][/td][td][pre]102.5[/pre][/td][td][pre]11[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{91}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 54.769[/pre][/td][td][pre]:,::.::/|: :,::/ /|:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]51[/pre][/td][td][pre]102.5[/pre][/td][td][pre]11[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 54.898[/pre][/td][td][pre]:~~|:[/pre][/td][td][pre]4[/pre][/td][td][pre]53[/pre][/td][td][pre]54[/pre][/td][td][pre]33[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{343}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 55.579[/pre][/td][td][pre]:`::|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]54[/pre][/td][td][pre]55.5[/pre][/td][td][pre]31[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{119}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 56.194[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]55[/pre][/td][td][pre]252.5[/pre][/td][td][pre]3[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{325}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 58.681[/pre][/td][td][pre]:,::'::|):[/pre][/td][td][pre]6[/pre][/td][td][pre]56[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{385}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 58.819[/pre][/td][td][pre]:``::)|:[/pre][/td][td][pre]6[/pre][/td][td][pre]57[/pre][/td][td][pre]37.5[/pre][/td][td][pre]52[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{17}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 58.870[/pre][/td][td][pre]:,::(|(: :`::.::/|\\: :,::'::(|):[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]58[/pre][/td][td][pre]35.5[/pre][/td][td][pre]55[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{1225}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 59.549[/pre][/td][td][pre]:,::'::|(: :,::|~:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]59[/pre][/td][td][pre]41[/pre][/td][td][pre]47[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{169}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 61.028[/pre][/td][td][pre]:`::|~:[/pre][/td][td][pre]6[/pre][/td][td][pre]60[/pre][/td][td][pre]86[/pre][/td][td][pre]14[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{121}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 61.620[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]61[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{77}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 65.355[/pre][/td][td][pre]:,,::)/ /|: :``::)|\\ \\:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]62[/pre][/td][td][pre]63[/pre][/td][td][pre]27[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{49}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 66.165[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]63[/pre][/td][td][pre]63[/pre][/td][td][pre]27[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{17}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 66.898[/pre][/td][td][pre]:``::(|:[/pre][/td][td][pre]6[/pre][/td][td][pre]64[/pre][/td][td][pre]134.5[/pre][/td][td][pre]8[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{23}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 68.574[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]65[/pre][/td][td][pre]47[/pre][/td][td][pre]42[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{17}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 69.574[/pre][/td][td][pre]:`::(|:[/pre][/td][td][pre]6[/pre][/td][td][pre]66[/pre][/td][td][pre]47[/pre][/td][td][pre]42[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 70.023[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]67[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{133}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 70.194[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]68[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{625}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 70.891[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]69[/pre][/td][td][pre]113[/pre][/td][td][pre]10[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{115}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 73.472[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]70[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 73.537[/pre][/td][td][pre]:(|~: :|\\ \\:[/pre][/td][td][pre]4, 4[/pre][/td][td][pre]71[/pre][/td][td][pre]55.5[/pre][/td][td][pre]31[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{37}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 76.056[/pre][/td][td][pre]:``::)/ /|: :,,::)|\\ \\:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]72[/pre][/td][td][pre]42.5[/pre][/td][td][pre]46[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 76.676[/pre][/td][td][pre]:``::)|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]73[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{29}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 77.870[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]74[/pre][/td][td][pre]59.5[/pre][/td][td][pre]28[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{455}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 82.153[/pre][/td][td][pre]:`::|:[/pre][/td][td][pre]6[/pre][/td][td][pre]75[/pre][/td][td][pre]186.5[/pre][/td][td][pre]5[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{539}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 82.347[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]76[/pre][/td][td][pre]186.5[/pre][/td][td][pre]5[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{1715}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 83.368[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]77[/pre][/td][td][pre]76[/pre][/td][td][pre]21[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{19}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 83.565[/pre][/td][td][pre]:.::)/|:[/pre][/td][td][pre]5[/pre][/td][td][pre]78[/pre][/td][td][pre]79.5[/pre][/td][td][pre]19[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{55}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 86.065[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]80[/pre][/td][td][pre]217.5[/pre][/td][td][pre]4[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{65}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 86.065[/pre][/td][td][pre]:,,::|):[/pre][/td][td][pre]6[/pre][/td][td][pre]80[/pre][/td][td][pre]164[/pre][/td][td][pre]6[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{143}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 86.065[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]80[/pre][/td][td][pre]90[/pre][/td][td][pre]13[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{121}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 86.269[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]82[/pre][/td][td][pre]164[/pre][/td][td][pre]6[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 86.907[/pre][/td][td][pre]:'::/ /|:[/pre][/td][td][pre]5[/pre][/td][td][pre]83[/pre][/td][td][pre]45[/pre][/td][td][pre]44[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{187}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 88.306[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]84[/pre][/td][td][pre]217.5[/pre][/td][td][pre]4[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{31}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 88.981[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]85[/pre][/td][td][pre]68[/pre][/td][td][pre]25[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{91}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 91.281[/pre][/td][td][pre]:,::.::/ /|:[/pre][/td][td][pre]6[/pre][/td][td][pre]86[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{55}{49}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 91.497[/pre][/td][td][pre]:`::)|:[/pre][/td][td][pre]6[/pre][/td][td][pre]87[/pre][/td][td][pre]39[/pre][/td][td][pre]51[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{605}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 92.431[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]88[/pre][/td][td][pre]94.5[/pre][/td][td][pre]12[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{343}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 92.631[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]89[/pre][/td][td][pre]68[/pre][/td][td][pre]25[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{41}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 93.389[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]90[/pre][/td][td][pre]72[/pre][/td][td][pre]23[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{17}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 93.657[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]92[/pre][/td][td][pre]123.5[/pre][/td][td][pre]9[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{85}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 93.657[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]92[/pre][/td][td][pre]-[/pre][/td][td][pre]0[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{119}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 93.657[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]92[/pre][/td][td][pre]217.5[/pre][/td][td][pre]4[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 97.801[/pre][/td][td][pre]:,::)/|:[/pre][/td][td][pre]6[/pre][/td][td][pre]94[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{175}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 98.032[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]95.5[/pre][/td][td][pre]102.5[/pre][/td][td][pre]11[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{275}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre] 98.032[/pre][/td][td][pre]:,::/|\\: :`::(|):[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]95.5[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{425}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]100.347[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]97[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{169}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]101.713[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]98[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{121}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]102.701[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]99[/pre][/td][td][pre]217.5[/pre][/td][td][pre]4[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{43}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]102.722[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]100[/pre][/td][td][pre]58[/pre][/td][td][pre]29[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{161}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]102.861[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]101[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{221}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]104.361[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]102[/pre][/td][td][pre]252.5[/pre][/td][td][pre]3[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{1375}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]105.035[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]103[/pre][/td][td][pre]-[/pre][/td][td][pre]0[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{4375}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]106.337[/pre][/td][td][pre]:`::'::/|:[/pre][/td][td][pre]6[/pre][/td][td][pre]104[/pre][/td][td][pre]147[/pre][/td][td][pre]7[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{23}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]107.759[/pre][/td][td][pre]:`::.::~|(: :,::.::(|(:[/pre][/td][td][pre]6, 6[/pre][/td][td][pre]105[/pre][/td][td][pre]63[/pre][/td][td][pre]27[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{29}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]109.019[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]106[/pre][/td][td][pre]83[/pre][/td][td][pre]15[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{209}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]110.306[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]107[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{19}{17}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]113.648[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]108[/pre][/td][td][pre]72[/pre][/td][td][pre]23[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{637}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]115.014[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]109[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{2401}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]116.715[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]110[/pre][/td][td][pre]79.5[/pre][/td][td][pre]19[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{145}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]116.806[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]111[/pre][/td][td][pre]-[/pre][/td][td][pre]0[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{19}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]116.991[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]113[/pre][/td][td][pre]164[/pre][/td][td][pre]6[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{95}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]116.991[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]113[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{133}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]116.991[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]113[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{77}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]120.491[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]116[/pre][/td][td][pre]134.5[/pre][/td][td][pre]8[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{91}{11}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]120.491[/pre][/td][td][pre]:`::|\\: :`::'::/|\\: :,::.::(|):[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]116[/pre][/td][td][pre]217.5[/pre][/td][td][pre]4[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{143}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]120.491[/pre][/td][td][pre]:`::~|(:[/pre][/td][td][pre]6[/pre][/td][td][pre]116[/pre][/td][td][pre]123.5[/pre][/td][td][pre]9[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{23}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]122.454[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]118[/pre][/td][td][pre]164[/pre][/td][td][pre]6[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{47}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]122.722[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]119[/pre][/td][td][pre]51[/pre][/td][td][pre]37[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{31}{7}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]124.574[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]120[/pre][/td][td][pre]113[/pre][/td][td][pre]10[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{475}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]125.347[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]121[/pre][/td][td][pre]94.5[/pre][/td][td][pre]12[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{37}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]126.759[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]122[/pre][/td][td][pre]70[/pre][/td][td][pre]24[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{23}{13}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]127.352[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]123[/pre][/td][td][pre]63[/pre][/td][td][pre]27[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{65}{49}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]127.793[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]124[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{715}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]129.097[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]125[/pre][/td][td][pre]186.5[/pre][/td][td][pre]5[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{847}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]129.403[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]126[/pre][/td][td][pre]113[/pre][/td][td][pre]10[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{29}{25}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]129.784[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]127[/pre][/td][td][pre]113[/pre][/td][td][pre]10[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{247}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]130.361[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]128[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{17}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]131.120[/pre][/td][td][pre]:,::'::/ /|:[/pre][/td][td][pre]6[/pre][/td][td][pre]129[/pre][/td][td][pre]329[/pre][/td][td][pre]2[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{155}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]133.472[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]130[/pre][/td][td][pre]604.5[/pre][/td][td][pre]1[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{15625}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]135.634[/pre][/td][td][pre][/pre][/td][td][pre][/pre][/td][td][pre]131[/pre][/td][td][pre]63[/pre][/td][td][pre]27[/pre][/td][/tr]",
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
            "[tr][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]exactly[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][/tr]",
            "[tr][th][pre]2,3-[/pre][/th][th][pre][/pre][/th][th][pre]notating[/pre][/th][th][pre]smallest[/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][/tr]",
            "[tr][th][pre]free[/pre][/th][th][pre][/pre][/th][th][pre]JI[/pre][/th][th][pre]symbol[/pre][/th][th][pre][/pre][/th][th][pre]Scala[/pre][/th][th][pre]Scala[/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre][/pre][/th][th][pre]symbol[/pre][/th][th][pre]subset[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]archive[/pre][/th][th][pre]archive[/pre][/th][/tr]",
            "[tr][th][pre]name[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]classes[/pre][/th][th][pre]indices[/pre][/th][th][pre]rank[/pre][/th][th][pre]rank[/pre][/th][th][pre]occurrences[/pre][/th][/tr]",
            "[tr][td][pre][latex]\\frac{1}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  1.000[/pre][/td][td][pre](:h:) :'::/|:[/pre][/td][td][pre]0, 5[/pre][/td][td][pre]1[/pre][/td][td][pre]1[/pre][/td][td][pre]7624[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{5}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  1.389[/pre][/td][td][pre]:'::|: :/|:[/pre][/td][td][pre]5, 1[/pre][/td][td][pre]2[/pre][/td][td][pre]2[/pre][/td][td][pre]5371[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  2.722[/pre][/td][td][pre]:|): :'::/|): :.::(|\\:[/pre][/td][td][pre]1, 5, 5[/pre][/td][td][pre]3[/pre][/td][td][pre]3[/pre][/td][td][pre]3016[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  3.472[/pre][/td][td][pre]:.::/|: :/ /|:[/pre][/td][td][pre]5, 1[/pre][/td][td][pre]4[/pre][/td][td][pre]4[/pre][/td][td][pre]1610[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  4.537[/pre][/td][td][pre]:|(: :'::|):[/pre][/td][td][pre]1, 5[/pre][/td][td][pre]5[/pre][/td][td][pre]5[/pre][/td][td][pre]1318[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{11}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  6.722[/pre][/td][td][pre]:.::(|(: :/|\\: :(|):[/pre][/td][td][pre]5, 1, 1[/pre][/td][td][pre]6[/pre][/td][td][pre]6[/pre][/td][td][pre]1002[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  6.806[/pre][/td][td][pre]:.::|): :`::.::/ /|: :/|): :(|\\:[/pre][/td][td][pre]5, 6, 1, 1[/pre][/td][td][pre]7[/pre][/td][td][pre]7[/pre][/td][td][pre]875[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  8.681[/pre][/td][td][pre]:.::/ /|: :`::/|): :,::(|\\:[/pre][/td][td][pre]5, 6, 6[/pre][/td][td][pre]8[/pre][/td][td][pre]8[/pre][/td][td][pre]492[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  9.389[/pre][/td][td][pre]:,::.::|): :,::/|): :`::(|\\:[/pre][/td][td][pre]6, 6, 6[/pre][/td][td][pre]9[/pre][/td][td][pre]10[/pre][/td][td][pre]447[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]  9.528[/pre][/td][td][pre]:~|): :(/|: :|\\):[/pre][/td][td][pre]4, 4, 4[/pre][/td][td][pre]10[/pre][/td][td][pre]9[/pre][/td][td][pre]463[/pre][/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("can use a list of already known popular 3,3-free classes, rather than recalculate them all", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --use-known" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = readLines("src/scripts/popular23FreeClass/results/popular23FreeClasses.txt" as Filename)
        expect(actual).toEqual(expected)
    })

    it("can associate the popular 2,3-free classes with their best notating commas (instead of all of their exactly notating symbol classes)", (): void => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --use-best-notating-commas --max-n2d3p9 10 --table-format forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "count of results with N2D3P9 ≤ 10: 10",
            "",
            "[table]",
            "[tr][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre][/pre][/th][th][pre]best[/pre][/th][/tr]",
            "[tr][th][pre]2,3-[/pre][/th][th][pre][/pre][/th][th][pre]best[/pre][/th][th][pre]best[/pre][/th][th][pre]notating[/pre][/th][/tr]",
            "[tr][th][pre]free[/pre][/th][th][pre][/pre][/th][th][pre]notating[/pre][/th][th][pre]notating[/pre][/th][th][pre]comma[/pre][/th][/tr]",
            "[tr][th][pre]class[/pre][/th][th][pre]N2D3P9[/pre][/th][th][pre]comma[/pre][/th][th][pre]comma[/pre][/th][th][pre]symbol[/pre][/th][/tr]",
            "[tr][th][pre]name[/pre][/th][th][pre]rank[/pre][/th][th][pre]cents[/pre][/th][th][pre]monzo[/pre][/th][th][pre]class[/pre][/th][/tr]",
            "[tr][td][pre][latex]\\frac{1}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]1[/pre][/td][td][pre]         0.000¢[/pre][/td][td][pre][  ⟩[/pre][/td][td][pre](:h:)[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{5}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]2[/pre][/td][td][pre]        21.506¢[/pre][/td][td][pre][  -4   4  -1 ⟩[/pre][/td][td][pre]:/|:[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]3[/pre][/td][td][pre]        27.264¢[/pre][/td][td][pre][   6  -2   0  -1 ⟩[/pre][/td][td][pre]:|):[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{25}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]4[/pre][/td][td][pre]        19.553¢[/pre][/td][td][pre][  11  -4  -2 ⟩[/pre][/td][td][pre]:.::/|:[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{7}{5}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]5[/pre][/td][td][pre]        29.218¢[/pre][/td][td][pre][  -9   6   1  -1 ⟩[/pre][/td][td][pre]:'::|):[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{11}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]6[/pre][/td][td][pre]        53.273¢[/pre][/td][td][pre][  -5   1   0   0   1 ⟩[/pre][/td][td][pre]:/|\\:[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{35}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]7[/pre][/td][td][pre]        48.770¢[/pre][/td][td][pre][   2   2  -1  -1 ⟩[/pre][/td][td][pre]:/|):[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{125}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]8[/pre][/td][td][pre]        41.059¢[/pre][/td][td][pre][   7   0  -3 ⟩[/pre][/td][td][pre]:.::/ /|:[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{13}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]9[/pre][/td][td][pre]        48.348¢[/pre][/td][td][pre][ -10   4   0   0   0   1 ⟩[/pre][/td][td][pre]:,::/|):[/pre][/td][/tr]",
            "[tr][td][pre][latex]\\frac{49}{1}_{\\scriptsize{(2,3)}}[/latex][/pre][/td][td][pre]10[/pre][/td][td][pre]        35.697¢[/pre][/td][td][pre][  -4  -1   0   2 ⟩[/pre][/td][td][pre]:~|):[/pre][/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
