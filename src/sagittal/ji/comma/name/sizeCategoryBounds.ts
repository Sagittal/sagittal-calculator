import { Decimal, Monzo, Name } from "../../../../general"
import { SizeCategoryBound } from "./types"

// TODO: remove the decimals from these; only have them in a test, similar to the comma means one, which uses
//  Analyze Pitch (not analyze JI pitch)

const SIZE_CATEGORY_BOUNDS: SizeCategoryBound[] = [
    {
        name: "u|n" as Name<SizeCategoryBound>,                             // Half Pythagorean schisma
        decimal: 1.0000000000000000 as Decimal,                             // 0
        monzo: [] as unknown[] as Monzo,
    },
    {
        name: "n|s" as Name<SizeCategoryBound>,
        decimal: 1.0010446114140399 as Decimal,                             // 1.80752293276652¢
        monzo: [-42, 26.5] as Monzo,
    },
    {
        name: "s|k" as Name<SizeCategoryBound>,                             // Half complex Pythagorean kleisma
        decimal: 1.0026026329243958 as Decimal,                             // 4.49991346125848¢
        monzo: [158.5, -100] as Monzo,
    },
    {
        name: "k|C" as Name<SizeCategoryBound>,                             // Half Pythagorean comma
        decimal: 1.0067985224316272 as Decimal,                             // 11.7300051923244¢
        monzo: [-9.5, 6] as Monzo,
    },
    {
        name: "C|S" as Name<SizeCategoryBound>,                             // Half Pythagorean large diesis
        decimal: 1.019469591671991 as Decimal,                              // 33.3824926442071¢
        monzo: [13.5, -8.5] as Monzo,
    },
    {
        name: "S|M" as Name<SizeCategoryBound>,                             // Half limma
        decimal: 1.0264004785593346 as Decimal,                             // 45.1124978365313¢
        monzo: [4, -2.5] as Monzo,
    },
    {
        name: "M|L" as Name<SizeCategoryBound>,                             // Half apotome
        decimal: 1.0333784852366532 as Decimal,                             // 56.8425030288559¢
        monzo: [-5.5, 3.5] as Monzo,
    },
    {
        name: "L|SS" as Name<SizeCategoryBound>,                            // Half (apotome + Pythagorean comma)
        decimal: 1.0404039320488956 as Decimal,                             // 68.5725082211804¢
        monzo: [-15, 9.5] as Monzo,
    },
    {
        name: "SS|MS" as Name<SizeCategoryBound>,                           // Half 31-3-comma
        decimal: 1.0474771415188833 as Decimal,                             // 80.3025134135051¢
        monzo: [-24.5, 15.5] as Monzo,
    },
    {
        name: "MS|LS" as Name<SizeCategoryBound>,                           // Half Pythagorean whole tone
        decimal: 1.060660171779821 as Decimal,                              // 101.955000865387¢
        monzo: [-1.5, 1] as Monzo,
    },
    {
        name: "LS|A" as Name<SizeCategoryBound>,
        decimal: 1.0667567474755826 as Decimal,                             // 111.877483124945¢
        monzo: [31, -19.5] as Monzo,
    },
    {
        name: "A|s+A" as Name<SizeCategoryBound>,
        decimal: 1.0689866040832545 as Decimal,                             // Apotome + 1.8075229327¢ = 115.49252899047
        monzo: [-53, 33.5] as Monzo,
    },
    {
        name: "s+A|k+A" as Name<SizeCategoryBound>,
        decimal: 1.0706503702176042 as Decimal,                             // Apotome + 4.4999134612584¢ = 118.18491951
        monzo: [147.5, -93] as Monzo,
    },
    {
        name: "k+A|C+A" as Name<SizeCategoryBound>,
        decimal: 1.0751310393349456 as Decimal,                             // Apotome + 11.7300051923244¢ = 125.4150112
        monzo: [-20.5, 13] as Monzo,
    },
    {
        name: "C+A|S+A" as Name<SizeCategoryBound>,
        decimal: 1.0886621079036347 as Decimal,                             // Apotome + 33.382492644207¢ = 147.06749870
        monzo: [2.5, -1.5] as Monzo,
    },
    {
        name: "S+A|M+A" as Name<SizeCategoryBound>,
        decimal: 1.09606340166468 as Decimal,                               // Apotome + 45.112497836531¢ = 158.79750389
        monzo: [-7, 4.5] as Monzo,
    },
    {
        name: "M+A|L+A" as Name<SizeCategoryBound>,
        decimal: 1.103515013287383 as Decimal,                              // Apotome + 56.842503028856¢ = 170.52750908
        monzo: [-16.5, 10.5] as Monzo,
    },
    {
        name: "L+A|SS+A" as Name<SizeCategoryBound>,
        decimal: 1.1110172848588549 as Decimal,                             // Apotome + 68.572508221180¢ = 182.25751427
        monzo: [-26, 16.5] as Monzo,
    },
    {
        name: "SS+A|MS+A" as Name<SizeCategoryBound>,
        decimal: 1.1185705607918934 as Decimal,                             // Apotome + 80.302513413505¢ = 193.98751947
        monzo: [-35.5, 22.5] as Monzo,
    },
    {
        name: "MS+A|LS+A" as Name<SizeCategoryBound>,
        decimal: 1.1326483377355803 as Decimal,                             // Apotome + 101.95500086539¢ = 215.64000692
        monzo: [-12.5, 8] as Monzo,
    },
    {
        name: "LS+A|A+A" as Name<SizeCategoryBound>,
        decimal: 1.139158694691943 as Decimal,                              // Apotome + 111.87748312495¢ = 225.56248918
        monzo: [20, -12.5] as Monzo,
    },
    {
        name: "A+A|" as Name<SizeCategoryBound>,
        decimal: 1.1403486728668213 as Decimal,                             // Apotome + apotome = 227.37001211¢
        monzo: [-22, 14] as Monzo,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
}
