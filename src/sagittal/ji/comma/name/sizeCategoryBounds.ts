import { EMPTY_MONZO, Monzo, Name, Scamon, SQRT_SCALER } from "../../../../general"
import { APOTOME } from "../../../constants"
import { SizeCategoryBound } from "./types"

const SIZE_CATEGORY_BOUNDS: SizeCategoryBound[] = [
    {
        name: "u|n" as Name<SizeCategoryBound>,
        pitch: {
            monzo: EMPTY_MONZO as Monzo<{ rational: true }>,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "n|s" as Name<SizeCategoryBound>,                             // Half Pythagorean schisma
        pitch: {
            monzo: [-84, 53] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "s|k" as Name<SizeCategoryBound>,                             // Half complex Pythagorean kleisma
        pitch: {
            monzo: [317, -200] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "k|C" as Name<SizeCategoryBound>,                             // Half Pythagorean comma
        pitch: {
            monzo: [-19, 12] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "C|S" as Name<SizeCategoryBound>,                             // Half Pythagorean large diesis
        pitch: {
            monzo: [27, -17] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "S|M" as Name<SizeCategoryBound>,                             // Half limma
        pitch: {
            monzo: [8, -5] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "M|L" as Name<SizeCategoryBound>,                             // Half apotome
        pitch: {
            monzo: APOTOME.monzo as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "L|SS" as Name<SizeCategoryBound>,                            // Half (apotome + Pythagorean comma)
        pitch: {
            monzo: [-30, 19] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "SS|MS" as Name<SizeCategoryBound>,                           // Half 31-3-comma
        pitch: {
            monzo: [-49, 31] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "MS|LS" as Name<SizeCategoryBound>,                           // Half Pythagorean whole tone
        pitch: {
            monzo: [-3, 2] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "LS|A" as Name<SizeCategoryBound>,
        pitch: {
            monzo: [62, -39] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "A|s+A" as Name<SizeCategoryBound>,                           // Apotome + 1.8075229327¢
        pitch: {
            monzo: [-106, 67] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "s+A|k+A" as Name<SizeCategoryBound>,                         // Apotome + 4.4999134612584¢
        pitch: {
            monzo: [295, -186] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "k+A|C+A" as Name<SizeCategoryBound>,                         // Apotome + 11.7300051923244¢
        pitch: {
            monzo: [-41, 26] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "C+A|S+A" as Name<SizeCategoryBound>,                         // Apotome + 33.382492644207¢
        pitch: {
            monzo: [5, -3] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "S+A|M+A" as Name<SizeCategoryBound>,                         // Apotome + 45.112497836531¢
        pitch: {
            monzo: [-14, 9] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "M+A|L+A" as Name<SizeCategoryBound>,                         // Apotome + 56.842503028856¢
        pitch: {
            monzo: [-33, 21] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "L+A|SS+A" as Name<SizeCategoryBound>,                        // Apotome + 68.572508221180¢
        pitch: {
            monzo: [-52, 33] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "SS+A|MS+A" as Name<SizeCategoryBound>,                       // Apotome + 80.302513413505¢
        pitch: {
            monzo: [-71, 45] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "MS+A|LS+A" as Name<SizeCategoryBound>,                       // Apotome + 101.95500086539¢
        pitch: {
            monzo: [-25, 16] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "LS+A|A+A" as Name<SizeCategoryBound>,                        // Apotome + 111.87748312495¢
        pitch: {
            monzo: [40, -25] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
    {
        name: "A+A|" as Name<SizeCategoryBound>,                            // Apotome + apotome
        pitch: {
            monzo: [-44, 28] as Monzo<{ rational: true }>,
            scaler: SQRT_SCALER,
        } as Scamon<{ rational: false }>,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
