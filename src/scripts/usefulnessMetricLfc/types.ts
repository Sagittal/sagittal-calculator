import {Abs, Decimal, Exponent, Prime} from "../../general"
import {ApotomeSlope, N2D3P9} from "../../sagittal"
import {Parameter} from "../types"

type UsefulnessParameterSet = Partial<Record<UsefulnessParameterId, Parameter>>

type Usefulness = number & { _UsefulnessBrand: boolean }

type UsefulnessMetric = (
    n2d3p9: N2D3P9,
    aas: Abs<ApotomeSlope>,
    ate: Abs<Decimal<{integer: true}> & Exponent<3 & Prime>>,
    usefulnessParameterSet: UsefulnessParameterSet,
) => Usefulness

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

export {
    UsefulnessMetric,
    Usefulness,
    UsefulnessParameterSet,
    UsefulnessMetricId,
    UsefulnessParameterId,
}
