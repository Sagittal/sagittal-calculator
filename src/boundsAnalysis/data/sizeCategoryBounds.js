const SIZE_CATEGORY_BOUNDS = [
    {
        name: "n|s",                    // half Pythagorean schisma
        position: 1.80752293276652,
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
]

const computeSizeCategoryBounds = () => SIZE_CATEGORY_BOUNDS

module.exports = {
    computeSizeCategoryBounds,
    SIZE_CATEGORY_BOUNDS,
}
