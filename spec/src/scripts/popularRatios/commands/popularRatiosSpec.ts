import { runCommandAndGetConsoleOutput } from "../../../../helpers/src/scripts/runCommand"
import { onlyRunInCi } from "../../../../helpers/onlyRunInCi"

describe("popular-ratios", () => {
    it("gives you the list of the most popular ratios, according to N2D3P9", () => {
        onlyRunInCi()

        const command = "npm run popular-ratios -- -m 136"

        const result = runCommandAndGetConsoleOutput(command)

        // this is shared here: http://forum.sagittal.org/viewtopic.php?p=2246#p2246
        expect(result).toEqual([
            "count of results with N2D3P9 <= 136: 131",
            "[table]",
            "[tr][th]ratio[/th][th]N2D3P9[/th][th]symbol[/th][th]symbol sets[/th][th]estimated rank[/th][th]actual rank[/th][/tr]",
            "[tr][td]1/1[/td][td]1[/td][td]:|:[/td][td]0[/td][td]1[/td][td]1[/td][/tr]",
            "[tr][td]5/1[/td][td]1.39[/td][td]:'::|: :/|:[/td][td]3, 0[/td][td]2[/td][td]2[/td][/tr]",
            "[tr][td]7/1[/td][td]2.72[/td][td]:|): :'::/|): :.::(|\\:[/td][td]0, 3, 3[/td][td]3[/td][td]3[/td][/tr]",
            "[tr][td]25/1[/td][td]3.47[/td][td]:.::/|: :/ /|:[/td][td]3, 0[/td][td]4[/td][td]4[/td][/tr]",
            "[tr][td]7/5[/td][td]4.54[/td][td]:|(: :'::|):[/td][td]0, 3[/td][td]5[/td][td]5[/td][/tr]",
            "[tr][td]11/1[/td][td]6.72[/td][td]:.::(|(: :/|\\: :(|):[/td][td]3, 0, 0[/td][td]6[/td][td]6[/td][/tr]",
            "[tr][td]35/1[/td][td]6.81[/td][td]:.::|): :`::.::/ /|: :/|): :(|\\:[/td][td]3, 4, 0, 0[/td][td]7[/td][td]7[/td][/tr]",
            "[tr][td]125/1[/td][td]8.68[/td][td]:.::/ /|: :`::/|): :,::(|\\:[/td][td]3, 4, 4[/td][td]8[/td][td]8[/td][/tr]",
            "[tr][td]13/1[/td][td]9.39[/td][td]:,::.::|): :,::/|): :`::(|\\:[/td][td]4, 4, 4[/td][td]9[/td][td]10[/td][/tr]",
            "[tr][td]49/1[/td][td]9.53[/td][td]:~|): :(/|: :|\\):[/td][td]2, 2, 2[/td][td]10[/td][td]9[/td][/tr]",
            "[tr][td]11/5[/td][td]11.2[/td][td]:(|(: :.::/|\\: :'::(|):[/td][td]1, 3, 3[/td][td]11[/td][td]11[/td][/tr]",
            "[tr][td]25/7[/td][td]11.34[/td][td]:'::|(: :,,::|~:[/td][td]3, 4[/td][td]12[/td][td]14[/td][/tr]",
            "[tr][td]13/5[/td][td]15.65[/td][td]:``::/ /|: :)/ /|: :)|\\ \\:[/td][td]4, 2, 2[/td][td]13[/td][td]16[/td][/tr]",
            "[tr][td]11/7[/td][td]15.69[/td][td]:)|(: :(|:[/td][td]1, 1[/td][td]14[/td][td]12[/td][/tr]",
            "[tr][td]49/5[/td][td]15.88[/td][td]:)/|\\: :`::)/|\\:[/td][td]2, 4[/td][td]15[/td][td]15[/td][/tr]",
            "[tr][td]17/1[/td][td]16.06[/td][td]:~|: :~|(:[/td][td]2, 1[/td][td]16[/td][td]13[/td][/tr]",
            "[tr][td]55/1[/td][td]16.81[/td][td]:|\\: :'::/|\\: :.::(|):[/td][td]1, 3, 3[/td][td]17[/td][td]24[/td][/tr]",
            "[tr][td]175/1[/td][td]17.01[/td][td]:`::/ /|: :`::)/ /|: :,::)|\\ \\:[/td][td]4, 4, 4[/td][td]18[/td][td]17[/td][/tr]",
            "[tr][td]19/1[/td][td]20.06[/td][td]:)|: :)|~:[/td][td]2, 2[/td][td]19[/td][td]18[/td][/tr]",
            "[tr][td]625/1[/td][td]21.7[/td][td]:`::|): :`::'::/|): :,::.::(|\\:[/td][td]4, 4, 4[/td][td]20[/td][td]21[/td][/tr]",
            "[tr][td]13/7[/td][td]21.91[/td][td]:,,::(|(:[/td][td]4[/td][td]21[/td][td]20[/td][/tr]",
            "[tr][td]65/1[/td][td]23.47[/td][td]:,::|): :,::'::/|): :`::.::(|\\:[/td][td]4, 4, 4[/td][td]22[/td][td]50[/td][/tr]",
            "[tr][td]77/1[/td][td]23.53[/td][td]:`::.::|):[/td][td]4[/td][td]23[/td][td]25[/td][/tr]",
            "[tr][td]245/1[/td][td]23.82[/td][td]:,::~|(: :'::~|):[/td][td]4, 3[/td][td]24[/td][td]19[/td][/tr]",
            "[tr][td]49/25[/td][td]26.47[/td][td]:'::(|:[/td][td]3[/td][td]25[/td][td]23[/td][/tr]",
            "[tr][td]17/5[/td][td]26.76[/td][td]:.::~|(: :`::~|):[/td][td]3, 4[/td][td]26[/td][td]26[/td][/tr]",
            "[tr][td]25/11[/td][td]28.01[/td][td][/td][td][/td][td]27[/td][td]47[/td][/tr]",
            "[tr][td]125/7[/td][td]28.36[/td][td]:,,::~|(:[/td][td]4[/td][td]28[/td][td]33[/td][/tr]",
            "[tr][td]23/1[/td][td]29.39[/td][td]:|~: :~|\\:[/td][td]2, 2[/td][td]29[/td][td]22[/td][/tr]",
            "[tr][td]91/1[/td][td]32.86[/td][td]:`::'::|: :,::/|:[/td][td]4, 4[/td][td]30[/td][td]57[/td][/tr]",
            "[tr][td]343/1[/td][td]33.35[/td][td]:,::~|:[/td][td]4[/td][td]31[/td][td]31[/td][/tr]",
            "[tr][td]19/5[/td][td]33.43[/td][td]:.::)|: :)/|:[/td][td]3, 2[/td][td]32[/td][td]27[/td][/tr]",
            "[tr][td]13/11[/td][td]34.43[/td][td]:,,::|(: :``::|):[/td][td]4, 4[/td][td]33[/td][td]29[/td][/tr]",
            "[tr][td]121/1[/td][td]36.97[/td][td][/td][td][/td][td]34[/td][td]42.5[/td][/tr]",
            "[tr][td]17/7[/td][td]37.46[/td][td]:``::~~|: :,,::/ /|:[/td][td]4, 4[/td][td]35[/td][td]40[/td][/tr]",
            "[tr][td]25/13[/td][td]39.12[/td][td]:``::/|: :,::)/ /|: :`::)|\\ \\:[/td][td]4, 4, 4[/td][td]36[/td][td]52.5[/td][/tr]",
            "[tr][td]35/11[/td][td]39.21[/td][td]:'::)|(:[/td][td]3[/td][td]38[/td][td]28[/td][/tr]",
            "[tr][td]55/7[/td][td]39.21[/td][td]:.::(|:[/td][td]3[/td][td]38[/td][td]34[/td][/tr]",
            "[tr][td]77/5[/td][td]39.21[/td][td]:,,::)/|:[/td][td]4[/td][td]38[/td][td]35.5[/td][/tr]",
            "[tr][td]85/1[/td][td]40.14[/td][td]:.::~|:[/td][td]3[/td][td]40[/td][td]78[/td][/tr]",
            "[tr][td]275/1[/td][td]42.01[/td][td]:`::)|(:[/td][td]4[/td][td]41[/td][td]147[/td][/tr]",
            "[tr][td]875/1[/td][td]42.53[/td][td]:`::/|:[/td][td]4[/td][td]42[/td][td]76[/td][/tr]",
            "[tr][td]29/1[/td][td]46.72[/td][td][/td][td][/td][td]43[/td][td]32[/td][/tr]",
            "[tr][td]19/7[/td][td]46.8[/td][td]:)|):[/td][td]2[/td][td]44[/td][td]37.5[/td][/tr]",
            "[tr][td]23/5[/td][td]48.98[/td][td]:/|~: :,,::/|\\: :``::(|):[/td][td]2, 4, 4[/td][td]45[/td][td]44[/td][/tr]",
            "[tr][td]95/1[/td][td]50.14[/td][td][/td][td][/td][td]46[/td][td]72[/td][/tr]",
            "[tr][td]143/1[/td][td]51.64[/td][td]:)~|:[/td][td]2[/td][td]47[/td][td]66[/td][/tr]",
            "[tr][td]31/1[/td][td]53.39[/td][td]:,::~|): :`::(/|: :,::|\\):[/td][td]4, 4, 4[/td][td]48[/td][td]30[/td][/tr]",
            "[tr][td]3125/1[/td][td]54.25[/td][td]:`::'::|):[/td][td]4[/td][td]49[/td][td]52.5[/td][/tr]",
            "[tr][td]35/13[/td][td]54.77[/td][td][/td][td][/td][td]51[/td][td]68[/td][/tr]",
            "[tr][td]65/7[/td][td]54.77[/td][td]:,::(/|: :`::|\\):[/td][td]4, 4[/td][td]51[/td][td]102.5[/td][/tr]",
            "[tr][td]91/5[/td][td]54.77[/td][td]:,::.::/|: :,::/ /|:[/td][td]4, 4[/td][td]51[/td][td]102.5[/td][/tr]",
            "[tr][td]49/11[/td][td]54.9[/td][td]:~~|:[/td][td]2[/td][td]53[/td][td]54[/td][/tr]",
            "[tr][td]343/5[/td][td]55.58[/td][td]:`::|(:[/td][td]4[/td][td]54[/td][td]55.5[/td][/tr]",
            "[tr][td]119/1[/td][td]56.19[/td][td][/td][td][/td][td]55[/td][td]252.5[/td][/tr]",
            "[tr][td]325/1[/td][td]58.68[/td][td]:,::'::|):[/td][td]4[/td][td]56[/td][td]604.5[/td][/tr]",
            "[tr][td]385/1[/td][td]58.82[/td][td]:``::)|:[/td][td]4[/td][td]57[/td][td]37.5[/td][/tr]",
            "[tr][td]17/11[/td][td]58.87[/td][td]:,::(|(: :`::.::/|\\: :,::'::(|):[/td][td]4, 4, 4[/td][td]58[/td][td]35.5[/td][/tr]",
            "[tr][td]1225/1[/td][td]59.55[/td][td]:,::'::|(: :,::|~:[/td][td]4, 4[/td][td]59[/td][td]41[/td][/tr]",
            "[tr][td]169/1[/td][td]61.03[/td][td]:`::|~:[/td][td]4[/td][td]60[/td][td]86[/td][/tr]",
            "[tr][td]121/5[/td][td]61.62[/td][td][/td][td][/td][td]61[/td][td]147[/td][/tr]",
            "[tr][td]77/25[/td][td]65.35[/td][td]:,,::)/ /|: :``::)|\\ \\:[/td][td]4, 4[/td][td]62[/td][td]63[/td][/tr]",
            "[tr][td]125/49[/td][td]66.17[/td][td][/td][td][/td][td]63[/td][td]63[/td][/tr]",
            "[tr][td]25/17[/td][td]66.9[/td][td]:``::(|:[/td][td]4[/td][td]64[/td][td]134.5[/td][/tr]",
            "[tr][td]23/7[/td][td]68.57[/td][td][/td][td][/td][td]65[/td][td]47[/td][/tr]",
            "[tr][td]17/13[/td][td]69.57[/td][td]:`::(|:[/td][td]4[/td][td]66[/td][td]47[/td][/tr]",
            "[tr][td]125/11[/td][td]70.02[/td][td][/td][td][/td][td]67[/td][td]147[/td][/tr]",
            "[tr][td]133/1[/td][td]70.19[/td][td][/td][td][/td][td]68[/td][td]329[/td][/tr]",
            "[tr][td]625/7[/td][td]70.89[/td][td][/td][td][/td][td]69[/td][td]113[/td][/tr]",
            "[tr][td]115/1[/td][td]73.47[/td][td][/td][td][/td][td]70[/td][td]604.5[/td][/tr]",
            "[tr][td]19/11[/td][td]73.54[/td][td]:(|~: :|\\ \\:[/td][td]2, 2[/td][td]71[/td][td]55.5[/td][/tr]",
            "[tr][td]37/1[/td][td]76.06[/td][td]:``::)/ /|: :,,::)|\\ \\:[/td][td]4, 4[/td][td]72[/td][td]42.5[/td][/tr]",
            "[tr][td]49/13[/td][td]76.68[/td][td]:``::)|(:[/td][td]4[/td][td]73[/td][td]147[/td][/tr]",
            "[tr][td]29/5[/td][td]77.87[/td][td][/td][td][/td][td]74[/td][td]59.5[/td][/tr]",
            "[tr][td]455/1[/td][td]82.15[/td][td]:`::|:[/td][td]4[/td][td]75[/td][td]186.5[/td][/tr]",
            "[tr][td]539/1[/td][td]82.35[/td][td][/td][td][/td][td]76[/td][td]186.5[/td][/tr]",
            "[tr][td]1715/1[/td][td]83.37[/td][td][/td][td][/td][td]77[/td][td]76[/td][/tr]",
            "[tr][td]25/19[/td][td]83.56[/td][td]:.::)/|:[/td][td]3[/td][td]78[/td][td]79.5[/td][/tr]",
            "[tr][td]55/13[/td][td]86.06[/td][td][/td][td][/td][td]80[/td][td]217.5[/td][/tr]",
            "[tr][td]65/11[/td][td]86.06[/td][td]:,,::|):[/td][td]4[/td][td]80[/td][td]164[/td][/tr]",
            "[tr][td]143/5[/td][td]86.06[/td][td][/td][td][/td][td]80[/td][td]90[/td][/tr]",
            "[tr][td]121/7[/td][td]86.27[/td][td][/td][td][/td][td]82[/td][td]164[/td][/tr]",
            "[tr][td]19/13[/td][td]86.91[/td][td]:'::/ /|:[/td][td]3[/td][td]83[/td][td]45[/td][/tr]",
            "[tr][td]187/1[/td][td]88.31[/td][td][/td][td][/td][td]84[/td][td]217.5[/td][/tr]",
            "[tr][td]31/5[/td][td]88.98[/td][td][/td][td][/td][td]85[/td][td]68[/td][/tr]",
            "[tr][td]91/25[/td][td]91.28[/td][td]:,::.::/ /|:[/td][td]4[/td][td]86[/td][td]329[/td][/tr]",
            "[tr][td]55/49[/td][td]91.5[/td][td]:`::)|:[/td][td]4[/td][td]87[/td][td]39[/td][/tr]",
            "[tr][td]605/1[/td][td]92.43[/td][td][/td][td][/td][td]88[/td][td]94.5[/td][/tr]",
            "[tr][td]343/25[/td][td]92.63[/td][td][/td][td][/td][td]89[/td][td]68[/td][/tr]",
            "[tr][td]41/1[/td][td]93.39[/td][td][/td][td][/td][td]90[/td][td]72[/td][/tr]",
            "[tr][td]35/17[/td][td]93.66[/td][td][/td][td][/td][td]92[/td][td]123.5[/td][/tr]",
            "[tr][td]85/7[/td][td]93.66[/td][td][/td][td][/td][td]92[/td][td]-[/td][/tr]",
            "[tr][td]119/5[/td][td]93.66[/td][td][/td][td][/td][td]92[/td][td]217.5[/td][/tr]",
            "[tr][td]125/13[/td][td]97.8[/td][td]:,::)/|:[/td][td]4[/td][td]94[/td][td]604.5[/td][/tr]",
            "[tr][td]175/11[/td][td]98.03[/td][td][/td][td][/td][td]95.5[/td][td]102.5[/td][/tr]",
            "[tr][td]275/7[/td][td]98.03[/td][td]:,::/|\\: :`::(|):[/td][td]4, 4[/td][td]95.5[/td][td]147[/td][/tr]",
            "[tr][td]425/1[/td][td]100.35[/td][td][/td][td][/td][td]97[/td][td]329[/td][/tr]",
            "[tr][td]169/5[/td][td]101.71[/td][td][/td][td][/td][td]98[/td][td]329[/td][/tr]",
            "[tr][td]121/25[/td][td]102.7[/td][td][/td][td][/td][td]99[/td][td]217.5[/td][/tr]",
            "[tr][td]43/1[/td][td]102.72[/td][td][/td][td][/td][td]100[/td][td]58[/td][/tr]",
            "[tr][td]161/1[/td][td]102.86[/td][td][/td][td][/td][td]101[/td][td]604.5[/td][/tr]",
            "[tr][td]221/1[/td][td]104.36[/td][td][/td][td][/td][td]102[/td][td]252.5[/td][/tr]",
            "[tr][td]1375/1[/td][td]105.03[/td][td][/td][td][/td][td]103[/td][td]-[/td][/tr]",
            "[tr][td]4375/1[/td][td]106.34[/td][td]:`::'::/|:[/td][td]4[/td][td]104[/td][td]147[/td][/tr]",
            "[tr][td]23/11[/td][td]107.76[/td][td]:`::.::~|(: :,::.::(|(:[/td][td]4, 4[/td][td]105[/td][td]63[/td][/tr]",
            "[tr][td]29/7[/td][td]109.02[/td][td][/td][td][/td][td]106[/td][td]83[/td][/tr]",
            "[tr][td]209/1[/td][td]110.31[/td][td][/td][td][/td][td]107[/td][td]604.5[/td][/tr]",
            "[tr][td]19/17[/td][td]113.65[/td][td][/td][td][/td][td]108[/td][td]72[/td][/tr]",
            "[tr][td]637/1[/td][td]115.01[/td][td][/td][td][/td][td]109[/td][td]604.5[/td][/tr]",
            "[tr][td]2401/1[/td][td]116.72[/td][td][/td][td][/td][td]110[/td][td]79.5[/td][/tr]",
            "[tr][td]145/1[/td][td]116.81[/td][td][/td][td][/td][td]111[/td][td]-[/td][/tr]",
            "[tr][td]35/19[/td][td]116.99[/td][td][/td][td][/td][td]113[/td][td]164[/td][/tr]",
            "[tr][td]95/7[/td][td]116.99[/td][td][/td][td][/td][td]113[/td][td]604.5[/td][/tr]",
            "[tr][td]133/5[/td][td]116.99[/td][td][/td][td][/td][td]113[/td][td]604.5[/td][/tr]",
            "[tr][td]77/13[/td][td]120.49[/td][td][/td][td][/td][td]116[/td][td]134.5[/td][/tr]",
            "[tr][td]91/11[/td][td]120.49[/td][td]:`::|\\: :`::'::/|\\: :,::.::(|):[/td][td]4, 4, 4[/td][td]116[/td][td]217.5[/td][/tr]",
            "[tr][td]143/7[/td][td]120.49[/td][td]:`::~|(:[/td][td]4[/td][td]116[/td][td]123.5[/td][/tr]",
            "[tr][td]25/23[/td][td]122.45[/td][td][/td][td][/td][td]118[/td][td]164[/td][/tr]",
            "[tr][td]47/1[/td][td]122.72[/td][td][/td][td][/td][td]119[/td][td]51[/td][/tr]",
            "[tr][td]31/7[/td][td]124.57[/td][td][/td][td][/td][td]120[/td][td]113[/td][/tr]",
            "[tr][td]475/1[/td][td]125.35[/td][td][/td][td][/td][td]121[/td][td]94.5[/td][/tr]",
            "[tr][td]37/5[/td][td]126.76[/td][td][/td][td][/td][td]122[/td][td]70[/td][/tr]",
            "[tr][td]23/13[/td][td]127.35[/td][td][/td][td][/td][td]123[/td][td]63[/td][/tr]",
            "[tr][td]65/49[/td][td]127.79[/td][td][/td][td][/td][td]124[/td][td]329[/td][/tr]",
            "[tr][td]715/1[/td][td]129.1[/td][td][/td][td][/td][td]125[/td][td]186.5[/td][/tr]",
            "[tr][td]847/1[/td][td]129.4[/td][td][/td][td][/td][td]126[/td][td]113[/td][/tr]",
            "[tr][td]29/25[/td][td]129.78[/td][td][/td][td][/td][td]127[/td][td]113[/td][/tr]",
            "[tr][td]247/1[/td][td]130.36[/td][td][/td][td][/td][td]128[/td][td]604.5[/td][/tr]",
            "[tr][td]49/17[/td][td]131.12[/td][td]:,::'::/ /|:[/td][td]4[/td][td]129[/td][td]329[/td][/tr]",
            "[tr][td]155/1[/td][td]133.47[/td][td][/td][td][/td][td]130[/td][td]604.5[/td][/tr]",
            "[tr][td]15625/1[/td][td]135.63[/td][td][/td][td][/td][td]131[/td][td]63[/td][/tr]",
            "[/table]",
        ])
    })

    it("works for a different maximum N2D3P9", () => {
        onlyRunInCi()

        const command = "npm run popular-ratios -- -m 10"

        const result = runCommandAndGetConsoleOutput(command)

        expect(result).toEqual([
            "count of results with N2D3P9 <= 10: 10",
            "[table]",
            "[tr][th]ratio[/th][th]N2D3P9[/th][th]symbol[/th][th]symbol sets[/th][th]estimated rank[/th][th]actual rank[/th][/tr]",
            "[tr][td]1/1[/td][td]1[/td][td]:|:[/td][td]0[/td][td]1[/td][td]1[/td][/tr]",
            "[tr][td]5/1[/td][td]1.39[/td][td]:'::|: :/|:[/td][td]3, 0[/td][td]2[/td][td]2[/td][/tr]",
            "[tr][td]7/1[/td][td]2.72[/td][td]:|): :'::/|): :.::(|\\:[/td][td]0, 3, 3[/td][td]3[/td][td]3[/td][/tr]",
            "[tr][td]25/1[/td][td]3.47[/td][td]:.::/|: :/ /|:[/td][td]3, 0[/td][td]4[/td][td]4[/td][/tr]",
            "[tr][td]7/5[/td][td]4.54[/td][td]:|(: :'::|):[/td][td]0, 3[/td][td]5[/td][td]5[/td][/tr]",
            "[tr][td]11/1[/td][td]6.72[/td][td]:.::(|(: :/|\\: :(|):[/td][td]3, 0, 0[/td][td]6[/td][td]6[/td][/tr]",
            "[tr][td]35/1[/td][td]6.81[/td][td]:.::|): :`::.::/ /|: :/|): :(|\\:[/td][td]3, 4, 0, 0[/td][td]7[/td][td]7[/td][/tr]",
            "[tr][td]125/1[/td][td]8.68[/td][td]:.::/ /|: :`::/|): :,::(|\\:[/td][td]3, 4, 4[/td][td]8[/td][td]8[/td][/tr]",
            "[tr][td]13/1[/td][td]9.39[/td][td]:,::.::|): :,::/|): :`::(|\\:[/td][td]4, 4, 4[/td][td]9[/td][td]10[/td][/tr]",
            "[tr][td]49/1[/td][td]9.53[/td][td]:~|): :(/|: :|\\):[/td][td]2, 2, 2[/td][td]10[/td][td]9[/td][/tr]",
            "[/table]",
        ])
    })
})