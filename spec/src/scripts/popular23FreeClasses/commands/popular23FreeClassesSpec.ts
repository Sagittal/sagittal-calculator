// tslint:disable max-line-length

import { Io } from "../../../../../src/general/io"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"
import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"

describe("popular-2-3-free-classes", () => {
    it("gives you the list of the most popular 2,3-free classes, according to N2D3P9", () => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 136 --for-forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        // this is shared here: http://forum.sagittal.org/viewtopic.php?p=2246#p2246
        const expected = [
            "count of results with N2D3P9 <= 136: 131",
            "",
            "[table]",
            "[tr][th][/th][th][/th][th]exactly[/th][th]introducing[/th][th][/th][th][/th][th][/th][/tr]",
            "[tr][th]2,3-[/th][th][/th][th]notating[/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]",
            "[tr][th]free[/th][th][/th][th]JI[/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]",
            "[tr][th]class[/th][th]N2D3P9[/th][th]symbols[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]",
            "[tr][td]1/1[/td][td]  1.000[/td][td]:|: :'::/|:[/td][td]0, 3[/td][td]1[/td][td]1[/td][td]7624[/td][/tr]",
            "[tr][td]5/1[/td][td]  1.389[/td][td]:'::|: :/|:[/td][td]3, 0[/td][td]2[/td][td]2[/td][td]5371[/td][/tr]",
            "[tr][td]7/1[/td][td]  2.722[/td][td]:|): :'::/|): :.::(|\\:[/td][td]0, 3, 3[/td][td]3[/td][td]3[/td][td]3016[/td][/tr]",
            "[tr][td]25/1[/td][td]  3.472[/td][td]:.::/|: :/ /|:[/td][td]3, 0[/td][td]4[/td][td]4[/td][td]1610[/td][/tr]",
            "[tr][td]7/5[/td][td]  4.537[/td][td]:|(: :'::|):[/td][td]0, 3[/td][td]5[/td][td]5[/td][td]1318[/td][/tr]",
            "[tr][td]11/1[/td][td]  6.722[/td][td]:.::(|(: :/|\\: :(|):[/td][td]3, 0, 0[/td][td]6[/td][td]6[/td][td]1002[/td][/tr]",
            "[tr][td]35/1[/td][td]  6.806[/td][td]:.::|): :`::.::/ /|: :/|): :(|\\:[/td][td]3, 4, 0, 0[/td][td]7[/td][td]7[/td][td]875[/td][/tr]",
            "[tr][td]125/1[/td][td]  8.681[/td][td]:.::/ /|: :`::/|): :,::(|\\:[/td][td]3, 4, 4[/td][td]8[/td][td]8[/td][td]492[/td][/tr]",
            "[tr][td]13/1[/td][td]  9.389[/td][td]:,::.::|): :,::/|): :`::(|\\:[/td][td]4, 4, 4[/td][td]9[/td][td]10[/td][td]447[/td][/tr]",
            "[tr][td]49/1[/td][td]  9.528[/td][td]:~|): :(/|: :|\\):[/td][td]2, 2, 2[/td][td]10[/td][td]9[/td][td]463[/td][/tr]",
            "[tr][td]11/5[/td][td] 11.204[/td][td]:(|(: :.::/|\\: :'::(|):[/td][td]1, 3, 3[/td][td]11[/td][td]11[/td][td]339[/td][/tr]",
            "[tr][td]25/7[/td][td] 11.343[/td][td]:'::|(: :,,::|~:[/td][td]3, 4[/td][td]12[/td][td]14[/td][td]312[/td][/tr]",
            "[tr][td]13/5[/td][td] 15.648[/td][td]:``::/ /|: :)/ /|: :)|\\ \\:[/td][td]4, 2, 2[/td][td]13[/td][td]16[/td][td]205[/td][/tr]",
            "[tr][td]11/7[/td][td] 15.685[/td][td]:)|(: :(|:[/td][td]1, 1[/td][td]14[/td][td]12[/td][td]324[/td][/tr]",
            "[tr][td]49/5[/td][td] 15.880[/td][td]:)/|\\: :`::)/|\\:[/td][td]2, 4[/td][td]15[/td][td]15[/td][td]246[/td][/tr]",
            "[tr][td]17/1[/td][td] 16.056[/td][td]:~|: :~|(:[/td][td]2, 1[/td][td]16[/td][td]13[/td][td]318[/td][/tr]",
            "[tr][td]55/1[/td][td] 16.806[/td][td]:|\\: :'::/|\\: :.::(|):[/td][td]1, 3, 3[/td][td]17[/td][td]24[/td][td]119[/td][/tr]",
            "[tr][td]175/1[/td][td] 17.014[/td][td]:`::/ /|: :`::)/ /|: :,::)|\\ \\:[/td][td]4, 4, 4[/td][td]18[/td][td]17[/td][td]168[/td][/tr]",
            "[tr][td]19/1[/td][td] 20.056[/td][td]:)|: :)|~:[/td][td]2, 2[/td][td]19[/td][td]18[/td][td]166[/td][/tr]",
            "[tr][td]625/1[/td][td] 21.701[/td][td]:`::|): :`::'::/|): :,::.::(|\\:[/td][td]4, 4, 4[/td][td]20[/td][td]21[/td][td]143[/td][/tr]",
            "[tr][td]13/7[/td][td] 21.907[/td][td]:,,::(|(:[/td][td]4[/td][td]21[/td][td]20[/td][td]145[/td][/tr]",
            "[tr][td]65/1[/td][td] 23.472[/td][td]:,::|): :,::'::/|): :`::.::(|\\:[/td][td]4, 4, 4[/td][td]22[/td][td]50[/td][td]40[/td][/tr]",
            "[tr][td]77/1[/td][td] 23.528[/td][td]:`::.::|):[/td][td]4[/td][td]23[/td][td]25[/td][td]111[/td][/tr]",
            "[tr][td]245/1[/td][td] 23.819[/td][td]:,::~|(: :'::~|):[/td][td]4, 3[/td][td]24[/td][td]19[/td][td]165[/td][/tr]",
            "[tr][td]49/25[/td][td] 26.466[/td][td]:'::(|:[/td][td]3[/td][td]25[/td][td]23[/td][td]134[/td][/tr]",
            "[tr][td]17/5[/td][td] 26.759[/td][td]:.::~|(: :`::~|):[/td][td]3, 4[/td][td]26[/td][td]26[/td][td]108[/td][/tr]",
            "[tr][td]25/11[/td][td] 28.009[/td][td][/td][td][/td][td]27[/td][td]47[/td][td]42[/td][/tr]",
            "[tr][td]125/7[/td][td] 28.356[/td][td]:,,::~|(:[/td][td]4[/td][td]28[/td][td]33[/td][td]62[/td][/tr]",
            "[tr][td]23/1[/td][td] 29.389[/td][td]:|~: :~|\\:[/td][td]2, 2[/td][td]29[/td][td]22[/td][td]136[/td][/tr]",
            "[tr][td]91/1[/td][td] 32.861[/td][td]:`::'::|: :,::/|:[/td][td]4, 4[/td][td]30[/td][td]57[/td][td]30[/td][/tr]",
            "[tr][td]343/1[/td][td] 33.347[/td][td]:,::~|:[/td][td]4[/td][td]31[/td][td]31[/td][td]70[/td][/tr]",
            "[tr][td]19/5[/td][td] 33.426[/td][td]:.::)|: :)/|:[/td][td]3, 2[/td][td]32[/td][td]27[/td][td]97[/td][/tr]",
            "[tr][td]13/11[/td][td] 34.426[/td][td]:,,::|(: :``::|):[/td][td]4, 4[/td][td]33[/td][td]29[/td][td]89[/td][/tr]",
            "[tr][td]121/1[/td][td] 36.972[/td][td][/td][td][/td][td]34[/td][td]42.5[/td][td]46[/td][/tr]",
            "[tr][td]17/7[/td][td] 37.463[/td][td]:``::~~|: :,,::/ /|:[/td][td]4, 4[/td][td]35[/td][td]40[/td][td]50[/td][/tr]",
            "[tr][td]25/13[/td][td] 39.120[/td][td]:``::/|: :,::)/ /|: :`::)|\\ \\:[/td][td]4, 4, 4[/td][td]36[/td][td]52.5[/td][td]34[/td][/tr]",
            "[tr][td]35/11[/td][td] 39.213[/td][td]:'::)|(:[/td][td]3[/td][td]38[/td][td]28[/td][td]92[/td][/tr]",
            "[tr][td]55/7[/td][td] 39.213[/td][td]:.::(|:[/td][td]3[/td][td]38[/td][td]34[/td][td]61[/td][/tr]",
            "[tr][td]77/5[/td][td] 39.213[/td][td]:,,::)/|:[/td][td]4[/td][td]38[/td][td]35.5[/td][td]55[/td][/tr]",
            "[tr][td]85/1[/td][td] 40.139[/td][td]:.::~|:[/td][td]3[/td][td]40[/td][td]78[/td][td]20[/td][/tr]",
            "[tr][td]275/1[/td][td] 42.014[/td][td]:`::)|(:[/td][td]4[/td][td]41[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]875/1[/td][td] 42.535[/td][td]:`::/|:[/td][td]4[/td][td]42[/td][td]76[/td][td]21[/td][/tr]",
            "[tr][td]29/1[/td][td] 46.722[/td][td][/td][td][/td][td]43[/td][td]32[/td][td]67[/td][/tr]",
            "[tr][td]19/7[/td][td] 46.796[/td][td]:)|):[/td][td]2[/td][td]44[/td][td]37.5[/td][td]52[/td][/tr]",
            "[tr][td]23/5[/td][td] 48.981[/td][td]:/|~: :,,::/|\\: :``::(|):[/td][td]2, 4, 4[/td][td]45[/td][td]44[/td][td]45[/td][/tr]",
            "[tr][td]95/1[/td][td] 50.139[/td][td][/td][td][/td][td]46[/td][td]72[/td][td]23[/td][/tr]",
            "[tr][td]143/1[/td][td] 51.639[/td][td]:)~|:[/td][td]2[/td][td]47[/td][td]66[/td][td]26[/td][/tr]",
            "[tr][td]31/1[/td][td] 53.389[/td][td]:,::~|): :`::(/|: :,::|\\):[/td][td]4, 4, 4[/td][td]48[/td][td]30[/td][td]80[/td][/tr]",
            "[tr][td]3125/1[/td][td] 54.253[/td][td]:`::'::|):[/td][td]4[/td][td]49[/td][td]52.5[/td][td]34[/td][/tr]",
            "[tr][td]35/13[/td][td] 54.769[/td][td][/td][td][/td][td]51[/td][td]68[/td][td]25[/td][/tr]",
            "[tr][td]65/7[/td][td] 54.769[/td][td]:,::(/|: :`::|\\):[/td][td]4, 4[/td][td]51[/td][td]102.5[/td][td]11[/td][/tr]",
            "[tr][td]91/5[/td][td] 54.769[/td][td]:,::.::/|: :,::/ /|:[/td][td]4, 4[/td][td]51[/td][td]102.5[/td][td]11[/td][/tr]",
            "[tr][td]49/11[/td][td] 54.898[/td][td]:~~|:[/td][td]2[/td][td]53[/td][td]54[/td][td]33[/td][/tr]",
            "[tr][td]343/5[/td][td] 55.579[/td][td]:`::|(:[/td][td]4[/td][td]54[/td][td]55.5[/td][td]31[/td][/tr]",
            "[tr][td]119/1[/td][td] 56.194[/td][td][/td][td][/td][td]55[/td][td]252.5[/td][td]3[/td][/tr]",
            "[tr][td]325/1[/td][td] 58.681[/td][td]:,::'::|):[/td][td]4[/td][td]56[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]385/1[/td][td] 58.819[/td][td]:``::)|:[/td][td]4[/td][td]57[/td][td]37.5[/td][td]52[/td][/tr]",
            "[tr][td]17/11[/td][td] 58.870[/td][td]:,::(|(: :`::.::/|\\: :,::'::(|):[/td][td]4, 4, 4[/td][td]58[/td][td]35.5[/td][td]55[/td][/tr]",
            "[tr][td]1225/1[/td][td] 59.549[/td][td]:,::'::|(: :,::|~:[/td][td]4, 4[/td][td]59[/td][td]41[/td][td]47[/td][/tr]",
            "[tr][td]169/1[/td][td] 61.028[/td][td]:`::|~:[/td][td]4[/td][td]60[/td][td]86[/td][td]14[/td][/tr]",
            "[tr][td]121/5[/td][td] 61.620[/td][td][/td][td][/td][td]61[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]77/25[/td][td] 65.355[/td][td]:,,::)/ /|: :``::)|\\ \\:[/td][td]4, 4[/td][td]62[/td][td]63[/td][td]27[/td][/tr]",
            "[tr][td]125/49[/td][td] 66.165[/td][td][/td][td][/td][td]63[/td][td]63[/td][td]27[/td][/tr]",
            "[tr][td]25/17[/td][td] 66.898[/td][td]:``::(|:[/td][td]4[/td][td]64[/td][td]134.5[/td][td]8[/td][/tr]",
            "[tr][td]23/7[/td][td] 68.574[/td][td][/td][td][/td][td]65[/td][td]47[/td][td]42[/td][/tr]",
            "[tr][td]17/13[/td][td] 69.574[/td][td]:`::(|:[/td][td]4[/td][td]66[/td][td]47[/td][td]42[/td][/tr]",
            "[tr][td]125/11[/td][td] 70.023[/td][td][/td][td][/td][td]67[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]133/1[/td][td] 70.194[/td][td][/td][td][/td][td]68[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]625/7[/td][td] 70.891[/td][td][/td][td][/td][td]69[/td][td]113[/td][td]10[/td][/tr]",
            "[tr][td]115/1[/td][td] 73.472[/td][td][/td][td][/td][td]70[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]19/11[/td][td] 73.537[/td][td]:(|~: :|\\ \\:[/td][td]2, 2[/td][td]71[/td][td]55.5[/td][td]31[/td][/tr]",
            "[tr][td]37/1[/td][td] 76.056[/td][td]:``::)/ /|: :,,::)|\\ \\:[/td][td]4, 4[/td][td]72[/td][td]42.5[/td][td]46[/td][/tr]",
            "[tr][td]49/13[/td][td] 76.676[/td][td]:``::)|(:[/td][td]4[/td][td]73[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]29/5[/td][td] 77.870[/td][td][/td][td][/td][td]74[/td][td]59.5[/td][td]28[/td][/tr]",
            "[tr][td]455/1[/td][td] 82.153[/td][td]:`::|:[/td][td]4[/td][td]75[/td][td]186.5[/td][td]5[/td][/tr]",
            "[tr][td]539/1[/td][td] 82.347[/td][td][/td][td][/td][td]76[/td][td]186.5[/td][td]5[/td][/tr]",
            "[tr][td]1715/1[/td][td] 83.368[/td][td][/td][td][/td][td]77[/td][td]76[/td][td]21[/td][/tr]",
            "[tr][td]25/19[/td][td] 83.565[/td][td]:.::)/|:[/td][td]3[/td][td]78[/td][td]79.5[/td][td]19[/td][/tr]",
            "[tr][td]55/13[/td][td] 86.065[/td][td][/td][td][/td][td]80[/td][td]217.5[/td][td]4[/td][/tr]",
            "[tr][td]65/11[/td][td] 86.065[/td][td]:,,::|):[/td][td]4[/td][td]80[/td][td]164[/td][td]6[/td][/tr]",
            "[tr][td]143/5[/td][td] 86.065[/td][td][/td][td][/td][td]80[/td][td]90[/td][td]13[/td][/tr]",
            "[tr][td]121/7[/td][td] 86.269[/td][td][/td][td][/td][td]82[/td][td]164[/td][td]6[/td][/tr]",
            "[tr][td]19/13[/td][td] 86.907[/td][td]:'::/ /|:[/td][td]3[/td][td]83[/td][td]45[/td][td]44[/td][/tr]",
            "[tr][td]187/1[/td][td] 88.306[/td][td][/td][td][/td][td]84[/td][td]217.5[/td][td]4[/td][/tr]",
            "[tr][td]31/5[/td][td] 88.981[/td][td][/td][td][/td][td]85[/td][td]68[/td][td]25[/td][/tr]",
            "[tr][td]91/25[/td][td] 91.281[/td][td]:,::.::/ /|:[/td][td]4[/td][td]86[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]55/49[/td][td] 91.497[/td][td]:`::)|:[/td][td]4[/td][td]87[/td][td]39[/td][td]51[/td][/tr]",
            "[tr][td]605/1[/td][td] 92.431[/td][td][/td][td][/td][td]88[/td][td]94.5[/td][td]12[/td][/tr]",
            "[tr][td]343/25[/td][td] 92.631[/td][td][/td][td][/td][td]89[/td][td]68[/td][td]25[/td][/tr]",
            "[tr][td]41/1[/td][td] 93.389[/td][td][/td][td][/td][td]90[/td][td]72[/td][td]23[/td][/tr]",
            "[tr][td]35/17[/td][td] 93.657[/td][td][/td][td][/td][td]92[/td][td]123.5[/td][td]9[/td][/tr]",
            "[tr][td]85/7[/td][td] 93.657[/td][td][/td][td][/td][td]92[/td][td]-[/td][td]0[/td][/tr]",
            "[tr][td]119/5[/td][td] 93.657[/td][td][/td][td][/td][td]92[/td][td]217.5[/td][td]4[/td][/tr]",
            "[tr][td]125/13[/td][td] 97.801[/td][td]:,::)/|:[/td][td]4[/td][td]94[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]175/11[/td][td] 98.032[/td][td][/td][td][/td][td]95.5[/td][td]102.5[/td][td]11[/td][/tr]",
            "[tr][td]275/7[/td][td] 98.032[/td][td]:,::/|\\: :`::(|):[/td][td]4, 4[/td][td]95.5[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]425/1[/td][td]100.347[/td][td][/td][td][/td][td]97[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]169/5[/td][td]101.713[/td][td][/td][td][/td][td]98[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]121/25[/td][td]102.701[/td][td][/td][td][/td][td]99[/td][td]217.5[/td][td]4[/td][/tr]",
            "[tr][td]43/1[/td][td]102.722[/td][td][/td][td][/td][td]100[/td][td]58[/td][td]29[/td][/tr]",
            "[tr][td]161/1[/td][td]102.861[/td][td][/td][td][/td][td]101[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]221/1[/td][td]104.361[/td][td][/td][td][/td][td]102[/td][td]252.5[/td][td]3[/td][/tr]",
            "[tr][td]1375/1[/td][td]105.035[/td][td][/td][td][/td][td]103[/td][td]-[/td][td]0[/td][/tr]",
            "[tr][td]4375/1[/td][td]106.337[/td][td]:`::'::/|:[/td][td]4[/td][td]104[/td][td]147[/td][td]7[/td][/tr]",
            "[tr][td]23/11[/td][td]107.759[/td][td]:`::.::~|(: :,::.::(|(:[/td][td]4, 4[/td][td]105[/td][td]63[/td][td]27[/td][/tr]",
            "[tr][td]29/7[/td][td]109.019[/td][td][/td][td][/td][td]106[/td][td]83[/td][td]15[/td][/tr]",
            "[tr][td]209/1[/td][td]110.306[/td][td][/td][td][/td][td]107[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]19/17[/td][td]113.648[/td][td][/td][td][/td][td]108[/td][td]72[/td][td]23[/td][/tr]",
            "[tr][td]637/1[/td][td]115.014[/td][td][/td][td][/td][td]109[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]2401/1[/td][td]116.715[/td][td][/td][td][/td][td]110[/td][td]79.5[/td][td]19[/td][/tr]",
            "[tr][td]145/1[/td][td]116.806[/td][td][/td][td][/td][td]111[/td][td]-[/td][td]0[/td][/tr]",
            "[tr][td]35/19[/td][td]116.991[/td][td][/td][td][/td][td]113[/td][td]164[/td][td]6[/td][/tr]",
            "[tr][td]95/7[/td][td]116.991[/td][td][/td][td][/td][td]113[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]133/5[/td][td]116.991[/td][td][/td][td][/td][td]113[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]77/13[/td][td]120.491[/td][td][/td][td][/td][td]116[/td][td]134.5[/td][td]8[/td][/tr]",
            "[tr][td]91/11[/td][td]120.491[/td][td]:`::|\\: :`::'::/|\\: :,::.::(|):[/td][td]4, 4, 4[/td][td]116[/td][td]217.5[/td][td]4[/td][/tr]",
            "[tr][td]143/7[/td][td]120.491[/td][td]:`::~|(:[/td][td]4[/td][td]116[/td][td]123.5[/td][td]9[/td][/tr]",
            "[tr][td]25/23[/td][td]122.454[/td][td][/td][td][/td][td]118[/td][td]164[/td][td]6[/td][/tr]",
            "[tr][td]47/1[/td][td]122.722[/td][td][/td][td][/td][td]119[/td][td]51[/td][td]37[/td][/tr]",
            "[tr][td]31/7[/td][td]124.574[/td][td][/td][td][/td][td]120[/td][td]113[/td][td]10[/td][/tr]",
            "[tr][td]475/1[/td][td]125.347[/td][td][/td][td][/td][td]121[/td][td]94.5[/td][td]12[/td][/tr]",
            "[tr][td]37/5[/td][td]126.759[/td][td][/td][td][/td][td]122[/td][td]70[/td][td]24[/td][/tr]",
            "[tr][td]23/13[/td][td]127.352[/td][td][/td][td][/td][td]123[/td][td]63[/td][td]27[/td][/tr]",
            "[tr][td]65/49[/td][td]127.793[/td][td][/td][td][/td][td]124[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]715/1[/td][td]129.097[/td][td][/td][td][/td][td]125[/td][td]186.5[/td][td]5[/td][/tr]",
            "[tr][td]847/1[/td][td]129.403[/td][td][/td][td][/td][td]126[/td][td]113[/td][td]10[/td][/tr]",
            "[tr][td]29/25[/td][td]129.784[/td][td][/td][td][/td][td]127[/td][td]113[/td][td]10[/td][/tr]",
            "[tr][td]247/1[/td][td]130.361[/td][td][/td][td][/td][td]128[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]49/17[/td][td]131.120[/td][td]:,::'::/ /|:[/td][td]4[/td][td]129[/td][td]329[/td][td]2[/td][/tr]",
            "[tr][td]155/1[/td][td]133.472[/td][td][/td][td][/td][td]130[/td][td]604.5[/td][td]1[/td][/tr]",
            "[tr][td]15625/1[/td][td]135.634[/td][td][/td][td][/td][td]131[/td][td]63[/td][td]27[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })

    it("works for a different max N2D3P9", () => {
        onlyRunInCi()

        const command = "npm run popular-2-3-free-classes -- --max-n2d3p9 10 --for-forum" as Io

        const actual = runCommandAndGetConsoleOutput(command)

        const expected = [
            "count of results with N2D3P9 <= 10: 10",
            "",
            "[table]",
            "[tr][th][/th][th][/th][th]exactly[/th][th]introducing[/th][th][/th][th][/th][th][/th][/tr]",
            "[tr][th]2,3-[/th][th][/th][th]notating[/th][th]symbol[/th][th][/th][th]Scala[/th][th]Scala[/th][/tr]",
            "[tr][th]free[/th][th][/th][th]JI[/th][th]subset[/th][th]N2D3P9[/th][th]archive[/th][th]archive[/th][/tr]",
            "[tr][th]class[/th][th]N2D3P9[/th][th]symbols[/th][th]indices[/th][th]rank[/th][th]rank[/th][th]occurrences[/th][/tr]",
            "[tr][td]1/1[/td][td]  1.000[/td][td]:|: :'::/|:[/td][td]0, 3[/td][td]1[/td][td]1[/td][td]7624[/td][/tr]",
            "[tr][td]5/1[/td][td]  1.389[/td][td]:'::|: :/|:[/td][td]3, 0[/td][td]2[/td][td]2[/td][td]5371[/td][/tr]",
            "[tr][td]7/1[/td][td]  2.722[/td][td]:|): :'::/|): :.::(|\\:[/td][td]0, 3, 3[/td][td]3[/td][td]3[/td][td]3016[/td][/tr]",
            "[tr][td]25/1[/td][td]  3.472[/td][td]:.::/|: :/ /|:[/td][td]3, 0[/td][td]4[/td][td]4[/td][td]1610[/td][/tr]",
            "[tr][td]7/5[/td][td]  4.537[/td][td]:|(: :'::|):[/td][td]0, 3[/td][td]5[/td][td]5[/td][td]1318[/td][/tr]",
            "[tr][td]11/1[/td][td]  6.722[/td][td]:.::(|(: :/|\\: :(|):[/td][td]3, 0, 0[/td][td]6[/td][td]6[/td][td]1002[/td][/tr]",
            "[tr][td]35/1[/td][td]  6.806[/td][td]:.::|): :`::.::/ /|: :/|): :(|\\:[/td][td]3, 4, 0, 0[/td][td]7[/td][td]7[/td][td]875[/td][/tr]",
            "[tr][td]125/1[/td][td]  8.681[/td][td]:.::/ /|: :`::/|): :,::(|\\:[/td][td]3, 4, 4[/td][td]8[/td][td]8[/td][td]492[/td][/tr]",
            "[tr][td]13/1[/td][td]  9.389[/td][td]:,::.::|): :,::/|): :`::(|\\:[/td][td]4, 4, 4[/td][td]9[/td][td]10[/td][td]447[/td][/tr]",
            "[tr][td]49/1[/td][td]  9.528[/td][td]:~|): :(/|: :|\\):[/td][td]2, 2, 2[/td][td]10[/td][td]9[/td][td]463[/td][/tr]",
            "[/table]",
            "",
        ] as Io[]
        expect(actual).toEqual(expected)
    })
})
