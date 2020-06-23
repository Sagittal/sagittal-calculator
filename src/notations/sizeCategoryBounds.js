const {APOTOME} = require("./intervals")

const SIZE_CATEGORY_BOUNDS = [
    {
        name: "n|s",
        position: 1.80752293276652,     // half Pythagorean schisma
        monzo: [-42, 26.5],
    },
    {
        name: "s|k",
        position: 4.49991346125848,     // half complex Pythagorean kleisma
        monzo: [158.5, -100],
    },
    {
        name: "k|C",
        position: 11.73000519232440,    // half Pythagorean comma
        monzo: [-9.5, 6],
    },
    {
        name: "C|S",
        position: 33.38249264420710,    // half Pythagorean large diesis
        monzo: [13.5, -8.5],
    },
    {
        name: "S|M",
        position: 45.11249783653130,    // half limma
        monzo: [4, -2.5],
    },
    {
        name: "M|L",
        position: 56.84250302885590,    // half apotome
        monzo: [-5.5, 3.5],
    },
    {
        name: "L|SS",
        position: 68.57250822118040,    // half (apotome + Pythagorean comma)
        monzo: [-15, 9.5],
    },
    {
        name: "SS|MS",
        position: 80.302513413505100,   // half 31-3-comma
        monzo: [-24.5, 15.5],
    },
    {
        name: "MS|LS",
        position: 101.955000865387000,  // half Pythagorean whole tone
        monzo: [-1.5, 1],
    },
    {
        name: "LS|A",
        position: 111.877483124945000,
        monzo: [31, -19.5],
    },
    {
        name: "A|s+A",
        position: 115.492528990478000,
        monzo: [-53, 33.5],
    },
    {
        name: "s+A|k+A",
        position: APOTOME + 4.49991346125848,
        monzo: [147.5, -93],
    },
    {
        name: "k+A|C+A",
        position: APOTOME + 11.73000519232440,
        monzo: [-20.5, 13],
    },
    {
        name: "C+A|S+A",
        position: APOTOME + 33.38249264420710,
        monzo: [2.5, -1.5],
    },
    {
        name: "S+A|M+A",
        position: APOTOME + 45.11249783653130,
        monzo: [-7, -4.5],
    },
    {
        name: "M+A|L+A",
        position: APOTOME + 56.84250302885590,
        monzo: [-16.5, 10.5],
    },
    {
        name: "L+A|SS+A",
        position: APOTOME + 68.57250822118040,
        monzo: [-26, 16.5],
    },
    {
        name: "SS+A|MS+A",
        position: APOTOME + 80.302513413505100,
        monzo: [-35.5, 22.5],
    },
    {
        name: "MS+A|LS+A",
        position: APOTOME + 101.955000865387000,
        monzo: [-12.5, 8],
    },
    {
        name: "LS+A|A+A",
        position: APOTOME + 111.877483124945000,
        monzo: [20, -12.5],
    },
]

module.exports = {
    SIZE_CATEGORY_BOUNDS,
}
