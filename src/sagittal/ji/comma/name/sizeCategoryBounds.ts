import { Monzo, Name } from "../../../../general"
import { SizeCategoryBound } from "./types"

const SIZE_CATEGORY_BOUNDS: SizeCategoryBound[] = [
    {
        name: "u|n" as Name<SizeCategoryBound>,
        monzo: [] as unknown[] as Monzo,
    },
    {
        name: "n|s" as Name<SizeCategoryBound>,                             // Half Pythagorean schisma
        monzo: [-42, 26.5] as Monzo,
    },
    {
        name: "s|k" as Name<SizeCategoryBound>,                             // Half complex Pythagorean kleisma
        monzo: [158.5, -100] as Monzo,
    },
    {
        name: "k|C" as Name<SizeCategoryBound>,                             // Half Pythagorean comma
        monzo: [-9.5, 6] as Monzo,
    },
    {
        name: "C|S" as Name<SizeCategoryBound>,                             // Half Pythagorean large diesis
        monzo: [13.5, -8.5] as Monzo,
    },
    {
        name: "S|M" as Name<SizeCategoryBound>,                             // Half limma
        monzo: [4, -2.5] as Monzo,
    },
    {
        name: "M|L" as Name<SizeCategoryBound>,                             // Half apotome
        monzo: [-5.5, 3.5] as Monzo,
    },
    {
        name: "L|SS" as Name<SizeCategoryBound>,                            // Half (apotome + Pythagorean comma)
        monzo: [-15, 9.5] as Monzo,
    },
    {
        name: "SS|MS" as Name<SizeCategoryBound>,                           // Half 31-3-comma
        monzo: [-24.5, 15.5] as Monzo,
    },
    {
        name: "MS|LS" as Name<SizeCategoryBound>,                           // Half Pythagorean whole tone
        monzo: [-1.5, 1] as Monzo,
    },
    {
        name: "LS|A" as Name<SizeCategoryBound>,
        monzo: [31, -19.5] as Monzo,
    },
    {
        name: "A|s+A" as Name<SizeCategoryBound>,                           // Apotome + 1.8075229327¢
        monzo: [-53, 33.5] as Monzo,
    },
    {
        name: "s+A|k+A" as Name<SizeCategoryBound>,                         // Apotome + 4.4999134612584¢
        monzo: [147.5, -93] as Monzo,
    },
    {
        name: "k+A|C+A" as Name<SizeCategoryBound>,                         // Apotome + 11.7300051923244¢
        monzo: [-20.5, 13] as Monzo,
    },
    {
        name: "C+A|S+A" as Name<SizeCategoryBound>,                         // Apotome + 33.382492644207¢
        monzo: [2.5, -1.5] as Monzo,
    },
    {
        name: "S+A|M+A" as Name<SizeCategoryBound>,                         // Apotome + 45.112497836531¢
        monzo: [-7, 4.5] as Monzo,
    },
    {
        name: "M+A|L+A" as Name<SizeCategoryBound>,                         // Apotome + 56.842503028856¢
        monzo: [-16.5, 10.5] as Monzo,
    },
    {
        name: "L+A|SS+A" as Name<SizeCategoryBound>,                        // Apotome + 68.572508221180¢
        monzo: [-26, 16.5] as Monzo,
    },
    {
        name: "SS+A|MS+A" as Name<SizeCategoryBound>,                       // Apotome + 80.302513413505¢
        monzo: [-35.5, 22.5] as Monzo,
    },
    {
        name: "MS+A|LS+A" as Name<SizeCategoryBound>,                       // Apotome + 101.95500086539¢
        monzo: [-12.5, 8] as Monzo,
    },
    {
        name: "LS+A|A+A" as Name<SizeCategoryBound>,                        // Apotome + 111.87748312495¢
        monzo: [20, -12.5] as Monzo,
    },
    {
        name: "A+A|" as Name<SizeCategoryBound>,                            // Apotome + apotome
        monzo: [-22, 14] as Monzo,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
