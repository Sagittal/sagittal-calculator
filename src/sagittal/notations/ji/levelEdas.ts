import {Apotome, Ed} from "@sagittal/general"

const MEDIUM_EDA = 21 as Ed<{of: Apotome}>
const HIGH_EDA = 47 as Ed<{of: Apotome}>
const ULTRA_EDA = 58 as Ed<{of: Apotome}>
const EXTREME_EDA = 233 as Ed<{of: Apotome}>
const INSANE_EDA = 809 as Ed<{of: Apotome}>

const JI_NOTATION_LEVEL_EDAS: Array<Ed<{of: Apotome}>> = [MEDIUM_EDA, HIGH_EDA, ULTRA_EDA, EXTREME_EDA, INSANE_EDA]

export {
    JI_NOTATION_LEVEL_EDAS,
    MEDIUM_EDA,
    HIGH_EDA,
    ULTRA_EDA,
    EXTREME_EDA,
    INSANE_EDA,
}
