import { Cents, Monzo, Name } from "../../../../general"
import { APOTOME_CENTS } from "../../../constants"
import { SizeCategoryBound } from "./types"

const SIZE_CATEGORY_BOUNDS: SizeCategoryBound[] = [
    {
        name: "u|n" as Name<SizeCategoryBound>,
        cents: 0 as Cents,
        monzo: [] as unknown[] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "n|s" as Name<SizeCategoryBound>,
        cents: 1.80752293276652 as Cents,     // Half Pythagorean schisma
        monzo: [-42, 26.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "s|k" as Name<SizeCategoryBound>,
        cents: 4.49991346125848 as Cents,     // Half complex Pythagorean kleisma
        monzo: [158.5, -100] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "k|C" as Name<SizeCategoryBound>,
        cents: 11.7300051923244 as Cents,    // Half Pythagorean comma
        monzo: [-9.5, 6] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "C|S" as Name<SizeCategoryBound>,
        cents: 33.3824926442071 as Cents,    // Half Pythagorean large diesis
        monzo: [13.5, -8.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "S|M" as Name<SizeCategoryBound>,
        cents: 45.1124978365313 as Cents,    // Half limma
        monzo: [4, -2.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "M|L" as Name<SizeCategoryBound>,
        cents: 56.8425030288559 as Cents,    // Half apotome
        monzo: [-5.5, 3.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "L|SS" as Name<SizeCategoryBound>,
        cents: 68.5725082211804 as Cents,    // Half (apotome + Pythagorean comma)
        monzo: [-15, 9.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "SS|MS" as Name<SizeCategoryBound>,
        cents: 80.3025134135051 as Cents,    // Half 31-3-comma
        monzo: [-24.5, 15.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "MS|LS" as Name<SizeCategoryBound>,
        cents: 101.955000865387 as Cents,    // Half Pythagorean whole tone
        monzo: [-1.5, 1] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "LS|A" as Name<SizeCategoryBound>,
        cents: 111.877483124945 as Cents,
        monzo: [31, -19.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "A|s+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 1.80752293276652 as Cents, // 115.492528990478
        monzo: [-53, 33.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "s+A|k+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 4.49991346125848 as Cents, // 118.184919519
        monzo: [147.5, -93] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "k+A|C+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 11.7300051923244 as Cents, // 125.41501125
        monzo: [-20.5, 13] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "C+A|S+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 33.3824926442071 as Cents, // 147.067498702
        monzo: [2.5, -1.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "S+A|M+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 45.1124978365313 as Cents, // 158.797503894
        monzo: [-7, 4.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "M+A|L+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 56.8425030288559 as Cents, // 170.527509087
        monzo: [-16.5, 10.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "L+A|SS+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 68.5725082211804 as Cents, // 182.257514279
        monzo: [-26, 16.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "SS+A|MS+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 80.3025134135051 as Cents, // 193.987519471
        monzo: [-35.5, 22.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "MS+A|LS+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 101.955000865387 as Cents, // 215.640006923
        monzo: [-12.5, 8] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "LS+A|A+A" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + 111.877483124945 as Cents, // 225.562489183
        monzo: [20, -12.5] as Monzo<{ potentiallyIrrational: true }>,
    },
    {
        name: "A+A|" as Name<SizeCategoryBound>,
        cents: APOTOME_CENTS + APOTOME_CENTS as Cents,    // 227.370012115
        monzo: [-22, 14] as Monzo<{ potentiallyIrrational: true }>,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
