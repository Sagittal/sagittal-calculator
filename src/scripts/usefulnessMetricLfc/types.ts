import {Abs, Decimal, Exponent, Prime} from "../../general"
import {ApotomeSlope, N2D3P9} from "../../sagittal"
import {Parameter} from "../types"

type UsefulnessParameterSet = Partial<Record<UsefulnessParameterId, Parameter>>

type UsefulnessScore = number & {_UsefulnessScoreBrand: boolean}

type SquaredUsefulnessScoreDistanceFromBestUsefulnessScore =
    number & {_SquaredUsefulnessScoreDistanceFromBestUsefulnessScoreBrand: boolean}

type UsefulnessMetric = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    usefulnessParameterSet: UsefulnessParameterSet,
) => UsefulnessScore

enum UsefulnessMetricId {
    LEE = "lee",
    REE = "ree",
    LPE = "lpe",
    RPE = "rpe",
    LEP = "lep",
    REP = "rep",
    LPP = "lpp",
    RPP = "rpp",
}

enum UsefulnessParameterId {
    A = "a",
    B = "b",
    C = "c",
    SE = "sE",
    TE = "tE",
    SP = "sP",
    TP = "tP",
}

interface UsefulnessMetricLfcScriptGroupSettings {
    extremeCaptureZones: boolean,
}

export {
    UsefulnessMetric,
    UsefulnessScore,
    UsefulnessParameterSet,
    UsefulnessMetricId,
    UsefulnessParameterId,
    SquaredUsefulnessScoreDistanceFromBestUsefulnessScore,
    UsefulnessMetricLfcScriptGroupSettings,
}
