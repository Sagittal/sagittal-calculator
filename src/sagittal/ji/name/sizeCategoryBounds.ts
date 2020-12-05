import {
    APOTOME,
    computeRationalScamonGeometricMean,
    EMPTY_MONZO,
    HALF_SCALER,
    halveScamon,
    Monzo,
    Name,
    PYTHAGOREAN_COMMA,
    PYTHAGOREAN_LARGE_DIESIS,
    PYTHAGOREAN_LIMMA,
    PYTHAGOREAN_SCHISMA,
    PYTHAGOREAN_WHOLE_TONE,
    Scamon,
    SUPERCOMPLEX_PYTHAGOREAN_KLEISMA,
    THIRTYONE_THREE_COMMA,
} from "@sagittal/general"
import {SizeCategoryBound} from "./types"

const u_n_SIZE_CATEGORY_BOUND = {
    name: "u|n" as Name<SizeCategoryBound>,
    pitch: {monzo: EMPTY_MONZO} as Scamon<{rational: false}>,
}
const n_s_SIZE_CATEGORY_BOUND = {
    name: "n|s" as Name<SizeCategoryBound>,
    pitch: halveScamon(PYTHAGOREAN_SCHISMA),
}
const s_k_SIZE_CATEGORY_BOUND = {
    name: "s|k" as Name<SizeCategoryBound>,
    pitch: halveScamon(SUPERCOMPLEX_PYTHAGOREAN_KLEISMA),
}
const k_C_SIZE_CATEGORY_BOUND = {
    name: "k|C" as Name<SizeCategoryBound>,
    pitch: halveScamon(PYTHAGOREAN_COMMA),
}
const C_S_SIZE_CATEGORY_BOUND = {
    name: "C|S" as Name<SizeCategoryBound>,
    pitch: halveScamon(PYTHAGOREAN_LARGE_DIESIS),
}
const S_M_SIZE_CATEGORY_BOUND = {
    name: "S|M" as Name<SizeCategoryBound>,
    pitch: halveScamon(PYTHAGOREAN_LIMMA),
}
const M_L_SIZE_CATEGORY_BOUND = {
    name: "M|L" as Name<SizeCategoryBound>,
    pitch: halveScamon(APOTOME),
}
const L_SS_SIZE_CATEGORY_BOUND = {
    name: "L|SS" as Name<SizeCategoryBound>,
    pitch: computeRationalScamonGeometricMean(APOTOME, PYTHAGOREAN_COMMA),
}
const SS_MS_SIZE_CATEGORY_BOUND = {
    name: "SS|MS" as Name<SizeCategoryBound>,
    pitch: halveScamon(THIRTYONE_THREE_COMMA),
}
const MS_LS_SIZE_CATEGORY_BOUND = {
    name: "MS|LS" as Name<SizeCategoryBound>,
    pitch: halveScamon(PYTHAGOREAN_WHOLE_TONE),
}
const LS_A_SIZE_CATEGORY_BOUND = {
    name: "LS|A" as Name<SizeCategoryBound>,
    pitch: {
        monzo: [62, -39] as Monzo<{rational: true}>,
        scaler: HALF_SCALER,
    } as Scamon<{rational: false}>,
}
const SIZE_CATEGORY_BOUNDS: SizeCategoryBound[] = [
    u_n_SIZE_CATEGORY_BOUND,
    n_s_SIZE_CATEGORY_BOUND,
    s_k_SIZE_CATEGORY_BOUND,
    k_C_SIZE_CATEGORY_BOUND,
    C_S_SIZE_CATEGORY_BOUND,
    S_M_SIZE_CATEGORY_BOUND,
    M_L_SIZE_CATEGORY_BOUND,
    L_SS_SIZE_CATEGORY_BOUND,
    SS_MS_SIZE_CATEGORY_BOUND,
    MS_LS_SIZE_CATEGORY_BOUND,
    LS_A_SIZE_CATEGORY_BOUND,
    {
        name: "A|s+A" as Name<SizeCategoryBound>,                           // Apotome + 1.8075229327¢
        pitch: {
            monzo: [-106, 67] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "s+A|k+A" as Name<SizeCategoryBound>,                         // Apotome + 4.4999134612584¢
        pitch: {
            monzo: [295, -186] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "k+A|C+A" as Name<SizeCategoryBound>,                         // Apotome + 11.7300051923244¢
        pitch: {
            monzo: [-41, 26] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "C+A|S+A" as Name<SizeCategoryBound>,                         // Apotome + 33.382492644207¢
        pitch: {
            monzo: [5, -3] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "S+A|M+A" as Name<SizeCategoryBound>,                         // Apotome + 45.112497836531¢
        pitch: {
            monzo: [-14, 9] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "M+A|L+A" as Name<SizeCategoryBound>,                         // Apotome + 56.842503028856¢
        pitch: {
            monzo: [-33, 21] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "L+A|SS+A" as Name<SizeCategoryBound>,                        // Apotome + 68.572508221180¢
        pitch: {
            monzo: [-52, 33] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "SS+A|MS+A" as Name<SizeCategoryBound>,                       // Apotome + 80.302513413505¢
        pitch: {
            monzo: [-71, 45] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "MS+A|LS+A" as Name<SizeCategoryBound>,                       // Apotome + 101.95500086539¢
        pitch: {
            monzo: [-25, 16] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "LS+A|A+A" as Name<SizeCategoryBound>,                        // Apotome + 111.87748312495¢
        pitch: {
            monzo: [40, -25] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
    {
        name: "A+A|" as Name<SizeCategoryBound>,                            // Apotome + apotome
        pitch: {
            monzo: [-44, 28] as Monzo<{rational: true}>,
            scaler: HALF_SCALER,
        } as Scamon<{rational: false}>,
    },
]

export {
    SIZE_CATEGORY_BOUNDS,
    u_n_SIZE_CATEGORY_BOUND,
    n_s_SIZE_CATEGORY_BOUND,
    s_k_SIZE_CATEGORY_BOUND,
    k_C_SIZE_CATEGORY_BOUND,
    C_S_SIZE_CATEGORY_BOUND,
    S_M_SIZE_CATEGORY_BOUND,
    M_L_SIZE_CATEGORY_BOUND,
    L_SS_SIZE_CATEGORY_BOUND,
    SS_MS_SIZE_CATEGORY_BOUND,
    MS_LS_SIZE_CATEGORY_BOUND,
    LS_A_SIZE_CATEGORY_BOUND,
}
