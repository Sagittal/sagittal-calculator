import { computeAntivotes } from "../antivotes/antivotes"
import { presentRatio } from "../../../utilities/comma/present/ratio"
import { Parameter, SubmetricType } from "../types"
import { Ratio } from "../../../utilities/types"

const submetrics =
    [
        {
            [ Parameter.K ]: 0,
            [ Parameter.A ]: 1.994,
            [ Parameter.A_IS_BASE ]: true,
            [ Parameter.Y ]: 0.455,
            [ Parameter.W ]: -2.08,
        },
        {
            [ Parameter.SUBMETRIC_TYPE ]: SubmetricType.COAPFAR,
            [ Parameter.WEIGHT ]: 0.577,
        },
    ]
const fiveRoughRatio: Ratio = [11, 7] as Ratio

const antivotes = computeAntivotes(fiveRoughRatio, submetrics, { logSubmetricAntivotes: true })

console.log(`${presentRatio(fiveRoughRatio)}\n${JSON.stringify(submetrics)}\n${antivotes}`)
